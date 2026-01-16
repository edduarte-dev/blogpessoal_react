function Login() {
  return (
    <main className="flex-1 flex items-center justify-center text-white">
      <section
        className="
          container grid grid-cols-1 lg:grid-cols-2
          min-h-[calc(100vh-80px)]
          rounded-2xl overflow-hidden
        "
      >
        {/* Coluna da imagem */}
        <div
          className="
            hidden lg:block
            bg-[url('https://i.imgur.com/ZZFAmzo.jpg')]
            bg-cover bg-center bg-no-repeat
          "
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
              shadow-2xl
            "
          >
            <h2 className="text-3xl font-bold text-center">
              Entrar
            </h2>

            {/* Usuário */}
            <div className="flex flex-col gap-1">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuário"
                className="
                  border border-slate-400 rounded p-2
                  text-slate-900
                  focus:outline-none focus:ring-2 focus:ring-indigo-400
                "
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
                className="
                  border border-slate-400 rounded p-2
                  text-slate-900
                  focus:outline-none focus:ring-2 focus:ring-indigo-400
                "
              />
            </div>

            {/* Botões */}
            <div className="flex gap-4 mt-4">
              <button
                type="reset"
                className="
                  w-1/2 py-2 rounded
                  bg-red-500 hover:bg-red-600
                  transition-colors
                "
              >
                Limpar
              </button>

              <button
                type="submit"
                className="
                  w-1/2 py-2 rounded
                  bg-indigo-600 hover:bg-indigo-700
                  transition-colors
                "
              >
                Entrar
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 my-4">
              <span className="flex-1 h-px bg-white/20" />
              <span className="text-sm text-white/60">ou</span>
              <span className="flex-1 h-px bg-white/20" />
            </div>

            {/* Cadastro */}
            <p className="text-center text-sm text-white/70">
              Não tem uma conta?{" "}
              <a
                href="/cadastro"
                className="
                  text-indigo-300 font-medium
                  hover:text-indigo-200
                  transition-colors
                "
              >
                Cadastre-se
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
