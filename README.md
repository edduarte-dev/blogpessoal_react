# Blog Pessoal React

## Visão Geral

Aplicação web desenvolvida com **React** e **Tailwind CSS**, criada com o objetivo de praticar componentização, estilização moderna e responsividade no desenvolvimento front-end. O projeto apresenta a interface inicial de um blog pessoal, aplicando boas práticas de layout e organização de componentes.

---

## Objetivo do Projeto

Desenvolver a interface de um blog pessoal moderno e responsivo, aplicando conceitos fundamentais de React, componentização reutilizável e estilização utilitária com Tailwind CSS.

---

## Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Phosphor Icons**

---

## Estrutura de Componentes

### Navbar
Barra de navegação fixa com efeitos de hover, animações suaves e efeito glass (transparência).

### Home
Seção principal (hero) com layout responsivo e destaque visual, adaptável para diferentes tamanhos de tela.

### Footer
Rodapé minimalista com links para redes sociais e informações de contato.

---

## Características da Interface

### Design
- Gradiente aplicado como fundo global da aplicação
- Layout responsivo com abordagem mobile-first
- Componentes sem margens externas para evitar quebras visuais
- Estilização centralizada utilizando classes utilitárias do Tailwind CSS

### Interatividade
- Animações suaves em botões e links
- Efeitos de hover personalizados
- Transições fluidas entre estados

### Responsividade
O layout se adapta automaticamente para diferentes dispositivos:
- **Mobile**: layout em coluna com navegação otimizada
- **Desktop**: layout em duas colunas com navegação horizontal
- Breakpoints definidos seguindo as convenções do Tailwind CSS

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão 18 ou superior recomendada)
- npm ou yarn

### Passo a passo

1. **Clonar o repositório**

```bash
git clone https://github.com/seu-usuario/blogpessoal-react.git
```

2. **Acessar a pasta do projeto**

```bash
cd blogpessoal-react
```

3. **Instalar as dependências**

```bash
npm install
```

4. **Iniciar o servidor de desenvolvimento**

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

---

## Estrutura do Projeto

```text
blogpessoal-react/
├── src/
│   ├── components/
│   │   ├── navbar/
│   │   │   └── Navbar.tsx
│   │   ├── home/
│   │   │   └── Home.tsx
│   │   └── footer/
│   │       └── Footer.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── package.json
└── README.md
```

---

## Decisões Técnicas

### Componentização
Divisão da interface em componentes reutilizáveis e independentes, facilitando manutenção e escalabilidade do projeto.

### Tailwind CSS
Utilização de classes utilitárias para estilização, eliminando a necessidade de arquivos CSS tradicionais e proporcionando maior produtividade no desenvolvimento.

### TypeScript
Implementação de tipagem estática para maior segurança e previsibilidade do código, reduzindo erros em tempo de desenvolvimento.

### Vite
Escolha do Vite como bundler para desenvolvimento mais rápido e otimizado, com hot module replacement (HMR) instantâneo.

---

## Próximos Passos

Este projeto pode ser expandido com:

- Integração com API de blog (criação, edição e listagem de posts)
- Sistema de autenticação e gerenciamento de usuários
- Funcionalidade de comentários
- Sistema de categorias e tags
- Busca e filtros de conteúdo
- Modo escuro/claro
- Internacionalização (i18n)

---

## Autor

**[Eduardo Duarte Cunha]**

Projeto desenvolvido para fins acadêmicos e de aprendizado em desenvolvimento front-end.

---

## Licença

Este projeto foi desenvolvido para fins educacionais.
