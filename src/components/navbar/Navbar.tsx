function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-indigo-950/80">
      <div className="container mx-auto flex items-center justify-between px-8 py-4 text-white">

        {/* Logo / Título */}
        <span className="text-lg font-bold tracking-wide">
          Blog Pessoal
        </span>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Postagens", "Temas", "Cadastrar tema", "Perfil", "Sair"].map(
            (item) => (
              <span
                key={item}
                className="
                  relative px-1 cursor-pointer
                  transition-all duration-300
                  hover:text-indigo-400

                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-indigo-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </span>
            )
          )}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
