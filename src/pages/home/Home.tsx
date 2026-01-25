import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <main className="flex justify-center flex-1">
        <section
          className="container grid grid-cols-1 md:grid-cols-2
                   items-center gap-12 px-6 py-12 text-white
                   min-h-[calc(100vh-80px)]"
        >
          <article className="flex flex-col justify-center items-start gap-6 animate-fade-in">
            <h1 className="text-6xl font-bold">Seja bem-vindo!</h1>

            <p className="text-3xl text-indigo-200">
              Expresse aqui seus pensamentos e opiniões
            </p>

            <button
              className="bg-indigo-700 hover:bg-indigo-600
                       focus:outline-none focus:ring-2 focus:ring-indigo-400
                       font-semibold py-3 px-6 rounded-lg
                       transition-all duration-300
                       shadow-lg hover:shadow-indigo-800/40"
            >
              <ModalPostagem />
            </button>
          </article>

          <figure className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Ilustração"
              className="max-w-md w-full"
            />
          </figure>
        </section>
      </main>

      <ListaPostagens />
    </>
  );
}

export default Home;
