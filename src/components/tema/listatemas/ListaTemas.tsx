import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

import CardTema from "../cardtema/CardTema";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";

function ListaTemas() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temas, setTemas] = useState<Tema[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  // Proteção da rota
  useEffect(() => {
    if (token === "") {
      alert("Sua sessão expirou, faça login novamente.");
      navigate("/");
    }
  }, [token, navigate]);

  // Buscar temas
  useEffect(() => {
    buscarTemas();
    
  }, []);

  async function buscarTemas() {
    try {
      setIsLoading(true);

      await buscar("/temas", setTemas, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (
        error.toString().includes("401") ||
        error.toString().includes("403")
      ) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#312e81" size={32} />
        </div>
      )}

      {/* Conteúdo */}
      {!isLoading && (
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            {/* 📭 Estado vazio */}
            {temas.length === 0 && (
              <span className="text-3xl text-center my-8">
                Nenhum tema foi encontrado
              </span>
            )}

            {/* Grid de cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {temas.map((tema) => (
                <CardTema key={tema.id} tema={tema} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaTemas;
