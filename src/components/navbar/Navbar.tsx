import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  if (!usuario.token) return null;

  function logout() {
    handleLogout();
    ToastAlerta("Logout realizado com sucesso!", "info");
    navigate("/");
  }

  return (
    <header className="w-full bg-indigo-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center text-lg px-8">
        <Link to="/home" className="text-2xl font-bold">
          Blog Pessoal
        </Link>

        <div className="flex gap-6">
          <Link to="/postagens">Postagens</Link>
          <Link to="/temas">Temas</Link>
          <Link to="/cadastrar-tema">Cadastrar Tema</Link>
          <Link to="/perfil">Perfil</Link>

          <button onClick={logout} className="hover:underline">
            Sair
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
