import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      navigate("/login");
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert("Usuário cadastrado com sucesso!");
      } catch (error: any) {
        console.error("Erro completo:", error);
        console.error("Resposta da API:", error?.response?.data);
        alert("Erro ao cadastrar o usuário! Veja o console.");
      }

      setIsLoading(false);
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmarSenha("");
    }
  }

  function retornar() {
    navigate("/login");
  }

  return (
    <main className="flex-1 flex items-center justify-center text-white">
      <section className="container grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Coluna da imagem */}
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
            onSubmit={cadastrarNovoUsuario}
            className="
              flex flex-col w-full max-w-md gap-4
              bg-white/10 backdrop-blur-lg
              border border-white/20
              text-white
              p-8 rounded-xl
              shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-center">Cadastrar</h2>

            {/* Nome */}
            <div className="flex flex-col gap-1">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                value={usuario.nome}
                onChange={atualizarEstado}
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
                value={usuario.usuario}
                onChange={atualizarEstado}
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
                value={usuario.foto}
                onChange={atualizarEstado}
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
                value={usuario.senha}
                onChange={atualizarEstado}
                className="border border-slate-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Confirmar Senha */}
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                value={confirmarSenha}
                onChange={handleConfirmarSenha}
                className="border border-slate-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Botões */}
            <div className="flex justify-between gap-4 mt-4">
              <button
                type="button"
                onClick={retornar}
                className="w-1/2 py-2 rounded bg-red-500 hover:bg-red-600"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={
                  isLoading ||
                  !usuario.nome ||
                  !usuario.usuario ||
                  usuario.senha.length < 8 ||
                  confirmarSenha !== usuario.senha
                }
                className="
                  w-1/2 py-2 rounded
                  bg-indigo-600 hover:bg-indigo-700
                  flex items-center justify-center
                "
              >
                {isLoading ? (
                  <ClipLoader color="#ffffff" size={24} />
                ) : (
                  <span>Cadastrar</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Cadastro;
