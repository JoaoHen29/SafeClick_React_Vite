# SafeClick — site do projeto (React + Vite)

Página inicial do Projeto Final de Curso **SafeClick — Aprenda antes de clicar**, plataforma web de educação em segurança digital (Sistemas de Informação, UMC, 2026).

Atividade da disciplina **Programação para Internet** (Prof. Bruno Messias Aguiar): site em React + Vite feito com apoio de IA, publicado no GitHub e na Vercel.

- Plataforma SafeClick: https://safeclick-umc.vercel.app
- Repositório da plataforma: https://github.com/EduMafra10/SafeClick

## Páginas

| Rota | Página | Recurso de React usado |
|---|---|---|
| `/` | Início | componentes reutilizáveis (`Cartao`) e listas com `map` |
| `/projeto` | O projeto | lista ordenada gerada a partir de dados |
| `/funcionalidades` | Funcionalidades | filtro com `useState` |
| `/tecnologias` | Tecnologias e arquitetura | componente `Icone` com props |
| `/seguranca` | Segurança e LGPD | acordeão com `useState` |
| `/equipe` | Equipe | dados separados em `src/dados/site.js` |
| qualquer outra | Página não encontrada (404) | rota `*` |

## Estrutura

```
src/
  main.jsx            monta o App dentro do BrowserRouter
  App.jsx             define as rotas
  index.css           estilos e paleta de cores do SafeClick
  dados/site.js       todos os textos do site
  components/         Layout, Cabecalho, Rodape, CabecalhoPagina, Cartao, Icone
  pages/              uma página por arquivo
public/escudo.svg     logotipo (escudo)
vercel.json           faz as rotas funcionarem ao recarregar a página na Vercel
```

## Como rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão de produção em dist/
```

## Publicação

O projeto é importado na Vercel a partir do GitHub. A Vercel reconhece o Vite sozinha (comando `npm run build`, pasta `dist`).

O processo de uso da IA (prompts e revisão do código) está em [PROMPTS.md](PROMPTS.md).
