function Cadastro() {
  return (
    <main className="flex-1 flex items-center justify-center text-white">
      <section
        className="container grid grid-cols-1 lg:grid-cols-2
                   min-h-[calc(100vh-80px)]"
      >
        {/* Coluna da imagem (apenas desktop) */}
        <div
          className="hidden lg:block
             bg-[url('https://i.imgur.com/ZZFAmzo.jpg')]
             bg-cover bg-center bg-no-repeat
             rounded-l-3xl
             shadow-inner"
        />

        {/* Formulário */}
        <div className="flex items-center justify-center">
          <form
            className="
                flex flex-col w-full max-w-md gap-4
                bg-white/10 backdrop-blur-lg
                border border-white/20
                text-white
                p-8 rounded-xl
                shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-center text-shadow-white">
              Cadastrar
            </h2>

            {/* Nome */}
            <div className="flex flex-col gap-1">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border border-slate-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Usuário */}
            <div className="flex flex-col gap-1">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuário"
                className="border border-slate-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Foto */}
            <div className="flex flex-col gap-1">
              <label htmlFor="foto">Foto (URL)</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="border border-slate-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Senha */}
            <div className="flex flex-col gap-1">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border border-slate-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Confirmar senha */}
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="border border-slate-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Botões */}
            <div className="flex justify-between gap-4 mt-4">
              <button
                type="reset"
                className="w-1/2 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="w-1/2 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Cadastro;
