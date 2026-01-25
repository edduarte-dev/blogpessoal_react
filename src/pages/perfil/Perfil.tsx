import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Perfil() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="flex justify-center px-4">
      <div className="container max-w-4xl my-10 rounded-2xl overflow-hidden shadow-2xl bg-white">

        {/* Capa */}
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src="https://i.imgur.com/ZZFAmzo.jpg"
            alt="Capa do Perfil"
          />

          {/* Avatar */}
          <img
            className="absolute left-1/2 -bottom-20 transform -translate-x-1/2 
                       w-44 h-44 rounded-full border-8 border-white shadow-lg"
            src={usuario.foto}
            alt={`Foto de perfil de ${usuario.nome}`}
          />
        </div>

        {/* Conteúdo */}
        <div className="pt-28 pb-10 px-6 text-center 
                        bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900
                        text-white">
          <h1 className="text-3xl font-bold mb-2">
            {usuario.nome}
          </h1>

          <p className="text-indigo-200 mb-6">
            {usuario.usuario}
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <div className="bg-white/10 px-6 py-4 rounded-xl">
              <p className="text-sm text-indigo-200">Perfil</p>
              <p className="text-lg font-semibold">Ativo</p>
            </div>

            <div className="bg-white/10 px-6 py-4 rounded-xl">
              <p className="text-sm text-indigo-200">Acesso</p>
              <p className="text-lg font-semibold">Autenticado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
