import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormTema() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [tema, setTema] = useState<Tema>({} as Tema);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  //  Proteção da rota
  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token, navigate]);

  //  Buscar tema por ID (modo edição)
  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  // Atualizar estado conforme digitação
  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  // Voltar para a lista
  function retornar() {
    navigate("/temas");
  }

  // Criar ou atualizar tema
  async function gerarNovoTema(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      // Atualizar
      try {
        await atualizar("/temas", tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        alert("O Tema foi atualizado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          alert("Erro ao atualizar o tema.");
        }
      }
    } else {
      // Cadastrar
      try {
        await cadastrar("/temas", tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        alert("O Tema foi cadastrado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          alert("Erro ao cadastrar o tema.");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto bg-white my-8 p-8 rounded">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Editar Tema" : "Cadastrar Tema"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Tema</label>

          <input
            type="text"
            placeholder="Descreva aqui seu tema"
            name="descricao"
            value={tema.descricao || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="border-2 border-slate-700 rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded text-slate-100 bg-indigo-400 
                     hover:bg-indigo-800 w-1/2 py-2 mx-auto 
                     flex justify-center disabled:opacity-50"
        >
          {isLoading ? (
            <ClipLoader color="white" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormTema;
