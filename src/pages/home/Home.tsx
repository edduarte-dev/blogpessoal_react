function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0b1020", // quase preto
          display: "flex",
          justifyContent: "center",
          padding: "3rem 1.5rem",
          fontFamily: "Inter, Segoe UI, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // evita amassar
            gap: "3rem",
            color: "#e5e7eb",
            width: "100%",
            maxWidth: "1280px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* TEXTO */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "280px",
              flex: "1",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em",
              }}
            >
              Seja Bem Vindo!
            </h2>

            <p
              style={{
                fontSize: "1.125rem",
                opacity: 0.85,
                maxWidth: "420px",
              }}
            >
              Expresse aqui seus pensamentos e opiniões
            </p>

            <button
              style={{
                marginTop: "0.75rem",
                borderRadius: "999px",
                color: "#e5e7eb",
                backgroundColor: "transparent",
                border: "1px solid #6366f1",
                padding: "0.6rem 1.6rem",
                cursor: "pointer",
                fontSize: "0.95rem",
              }}
            >
              Nova Postagem
            </button>
          </div>

          {/* IMAGEM */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              minWidth: "280px",
              flex: "1",
            }}
          >
            <div
              style={{
                background:
                  "radial-gradient(circle at top, #1e293b, #020617)",
                padding: "2rem",
                borderRadius: "2.5rem",
                boxShadow:
                  "0 30px 60px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              <img
                src="/blogpessoal_logo.png"
                alt="Imagem Página Home"
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  borderRadius: "1.75rem",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
