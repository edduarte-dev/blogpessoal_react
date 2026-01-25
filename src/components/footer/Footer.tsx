import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const anoAtual = new Date().getFullYear();
  const { usuario } = useContext(AuthContext);

  let component: ReactNode = null;

  if (usuario.token !== "") {
    component = (
      <footer className="w-full text-white bg-indigo-900">
        <div className="container mx-auto flex flex-col items-center gap-4 py-6">
          
          <p className="text-sm text-indigo-200">
            Blog Pessoal © {anoAtual}
          </p>

          <p className="text-xs text-indigo-300">
            Acesse nossas redes sociais
          </p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/edduarte-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-indigo-400 transition-colors"
            >
              <LinkedinLogoIcon size={28} weight="bold" />
            </a>

            <a
              href="https://github.com/edduarte-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-indigo-400 transition-colors"
            >
              <GithubLogoIcon size={28} weight="bold" />
            </a>
          </div>

        </div>
      </footer>
    );
  }

  return <>{component}</>;
}

export default Footer;
