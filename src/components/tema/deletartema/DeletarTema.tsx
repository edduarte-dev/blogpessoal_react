import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar, deletar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";

function DeletarTema() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [tema, setTema] = useState<Tema>({} as Tema);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  // Proteção de rota
  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  // Buscar tema por id
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

  // Deletar tema
  async function deletarTema() {
    setIsLoading(true);

    try {
      await deletar(`/temas/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Tema apagado com sucesso!");
      retornar();
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o tema.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function retornar() {
    navigate("/temas");
  }

  return (
    <div className="container w-1/3 mx-auto my-8">
      {isLoading ? (
        <div className="flex justify-center">
          <SyncLoader color="#312e81" size={24} />
        </div>
      ) : (
        <>
          <h1 className="text-4xl text-center my-4">Deletar Tema</h1>

          <p className="text-center font-semibold mb-4">
            Você tem certeza de que deseja apagar o tema a seguir?
          </p>

          <div className="border flex flex-col rounded-2xl overflow-hidden">
            <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
              Tema
            </header>

            <p className="p-8 text-3xl bg-slate-200">{tema.descricao}</p>

            <div className="flex">
              <button
                onClick={retornar}
                className="w-full text-slate-100 bg-red-400 hover:bg-red-600 py-2"
              >
                Não
              </button>

              <button
                className="w-full text-slate-100 bg-indigo-400 
             hover:bg-indigo-600 flex items-center justify-center py-2"
                onClick={deletarTema}
                disabled={isLoading}
              >
                {isLoading ? (
                  <SyncLoader color="#ffffff" size={8} />
                ) : (
                  <span>Sim</span>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DeletarTema;
