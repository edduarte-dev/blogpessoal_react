import {
  type ChangeEvent,
  type FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import type Tema from "../../../models/Tema";
import { buscar, cadastrar, atualizar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";

function FormPostagem() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [isLoading, setIsLoading] = useState(false);
  const [temas, setTemas] = useState<Tema[]>([]);
  const [tema, setTema] = useState<Tema>({ id: 0, descricao: "" });
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

  /* ======================================================
     Função centralizada para tratar erro 401
  ====================================================== */
  function tratarErro(error: any) {
    if (error?.toString().includes("401")) {
      handleLogout();
    }
  }

  /* ======================================================
     Buscar dados
  ====================================================== */
  async function buscarPostagemPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
        headers: { Authorization: token },
      });
    } catch (error) {
      tratarErro(error);
    }
  }

  async function buscarTemaPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: { Authorization: token },
      });
    } catch (error) {
      tratarErro(error);
    }
  }

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, {
        headers: { Authorization: token },
      });
    } catch (error) {
      tratarErro(error);
    }
  }

  /* ======================================================
     Effects
  ====================================================== */
  useEffect(() => {
    if (!token) {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    buscarTemas();

    if (id) {
      buscarPostagemPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setPostagem((prev) => ({
      ...prev,
      tema: tema,
      usuario: usuario,
    }));
  }, [tema]);

  /* ======================================================
     Handlers
  ====================================================== */
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/postagens");
  }

  async function gerarNovaPostagem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id) {
        await atualizar("/postagens", postagem, setPostagem, {
          headers: { Authorization: token },
        });
        alert("Postagem atualizada com sucesso");
      } else {
        await cadastrar("/postagens", postagem, setPostagem, {
          headers: { Authorization: token },
        });
        alert("Postagem cadastrada com sucesso");
      }

      retornar();
    } catch (error) {
      tratarErro(error);
      alert("Erro ao salvar a postagem");
    } finally {
      setIsLoading(false);
    }
  }

  const carregandoTema = tema.descricao === "";

  /* ======================================================
     JSX
  ====================================================== */
  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id ? "Editar Postagem" : "Cadastrar Postagem"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaPostagem}>
        {/* Título */}
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Título da Postagem</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Título"
            value={postagem.titulo || ""}
            onChange={atualizarEstado}
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-2">
          <label htmlFor="texto">Texto da Postagem</label>
          <input
            type="text"
            id="texto"
            name="texto"
            placeholder="Texto"
            value={postagem.texto || ""}
            onChange={atualizarEstado}
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        {/* Tema */}
        <div className="flex flex-col gap-2">
          <label htmlFor="tema">Tema da Postagem</label>
          <select
            id="tema"
            value={tema.id}
            onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
            className="border p-2 border-slate-800 rounded"
            required
          >
            <option value="" disabled>
              Selecione um Tema
            </option>

            {temas.map((tema) => (
              <option key={tema.id} value={tema.id}>
                {tema.descricao}
              </option>
            ))}
          </select>
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={carregandoTema || isLoading}
          className="rounded bg-indigo-400 hover:bg-indigo-800 disabled:bg-slate-300 text-white font-bold w-1/2 mx-auto py-2 flex justify-center items-center"
        >
          {isLoading ? (
            <SyncLoader size={8} color="#ffffff" />
          ) : id ? (
            "Atualizar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;
