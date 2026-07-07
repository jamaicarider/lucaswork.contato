# Untitled (Profile) — template de portfólio

Site em React (Vite) inspirado no layout minimalista de portfólio de
arquitetura/fotografia: navegação fixa nos quatro cantos da tela, foto grande
centralizada e legenda técnica abaixo, além de uma página de perfil estilo
currículo.

## Como rodar (VS Code)

1. Abra a pasta `portfolio` no VS Code.
2. Instale as dependências:

   ```bash
   yarn
   ```

   (ou `npm install`, se preferir)

3. Suba o servidor de desenvolvimento:

   ```bash
   yarn dev
   ```

4. Abra o endereço que aparecer no terminal (normalmente
   `http://localhost:5173`).

## Estrutura

```
portfolio/
├── index.html                  título da aba + fonte (JetBrains Mono)
├── public/images/               coloque suas fotos aqui
│   ├── profile.jpg
│   ├── project-001.jpg
│   ├── project-002.jpg
│   └── project-003.jpg
└── src/
    ├── data/projects.js         <- EDITE AQUI para add/remover projetos
    ├── components/
    │   └── CornerNav.jsx        navegação fixa nos 4 cantos
    ├── pages/
    │   ├── Profile.jsx          página "/" (bio, formação, projetos)
    │   └── Project.jsx          página "/:slug" (uma foto + legenda)
    ├── App.jsx                  rotas
    └── main.jsx                 ponto de entrada
```

## Personalizando

- **Trocar fotos**: substitua os arquivos em `public/images/` (mantenha os
  mesmos nomes, ou atualize os caminhos em `src/data/projects.js`).
- **Adicionar/remover projetos**: edite o array em `src/data/projects.js`.
  Cada objeto novo cria automaticamente uma nova rota (`/seu-slug`) — mas
  lembre que só os 3 primeiros aparecem nos cantos fixos (top-right,
  bottom-left, bottom-right). Se quiser mais projetos, dá pra trocar esse
  esquema por uma lista de navegação simples — me chama que ajusto.
- **Texto da página de perfil**: edite diretamente `src/pages/Profile.jsx`
  (bio, formação, listas de projetos individuais/coletivos).
- **Fonte**: importada via Google Fonts no `index.html`
  (`JetBrains Mono`). Troque o link e o `font-family` em `src/index.css` se
  quiser outra mono (ex.: `IBM Plex Mono`, `Space Mono`).
- **Cores**: definidas como variáveis CSS em `src/index.css`
  (`--color-bg`, `--color-ink`).

## Build para produção

```bash
yarn build
```

Gera a pasta `dist/`, pronta para publicar em qualquer host estático
(Vercel, Netlify, GitHub Pages, etc.).
