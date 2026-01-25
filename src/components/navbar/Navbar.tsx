import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O usuário foi desconectado com sucesso!");
    navigate("/");
  }

  // 🚫 NÃO renderiza o Navbar se não estiver autenticado
  if (usuario.token === "") {
    return null;
  }

  return (
    <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
      <div className="container flex justify-between items-center text-lg mx-8">
        
        <Link to="/home" className="text-2xl font-bold">
          Blog Pessoal
        </Link>

        <div className="flex gap-6">
          <Link to="/postagens" className="hover:underline">
            Postagens
          </Link>

          <Link to="/temas" className="hover:underline">
            Temas
          </Link>

          <Link to="/cadastrar-tema" className="hover:underline">
            Cadastrar Tema
          </Link>

          <Link to="/perfil" className="hover:underline">
            Perfil
          </Link>

          <button
            onClick={logout}
            className="hover:underline"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
