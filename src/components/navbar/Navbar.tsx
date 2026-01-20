import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/");
  }

  return (
    <header className="w-full bg-indigo-950 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo / Home */}
        <Link
          to="/home"
          className="text-2xl font-bold hover:text-indigo-300 transition-colors"
        >
          Blog Pessoal
        </Link>

        {/* Navegação */}
        <nav className="flex gap-6 text-lg">
          <Link to="/home" className="hover:text-indigo-400 transition-colors">
            Postagens
          </Link>

          <Link to="/temas" className="hover:text-indigo-400 transition-colors">
            Temas
          </Link>

          <Link
            to="/cadastrar-tema"
            className="hover:text-indigo-400 transition-colors"
          >
            Cadastrar tema
          </Link>

          <Link
            to="/perfil"
            className="hover:text-indigo-400 transition-colors"
          >
            Perfil
          </Link>

          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
            className="hover:text-red-400 transition-colors"
          >
            Sair
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
