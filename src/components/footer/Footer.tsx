import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="w-full text-white">
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
            aria-label="LinkedIn"
            className="hover:text-indigo-400 transition-colors"
          >
            <LinkedinLogoIcon size={28} weight="bold" />
          </a>

          <a
            href="https://github.com/edduarte-dev"
            target="_blank"
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

export default Footer;
