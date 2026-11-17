# Uso da IA no desenvolvimento

Fluxo seguido: **ideia → protótipo → código → ajustes → entrega**.

## 1. Estrutura do prompt

Um bom pedido para a IA tem cinco partes:

1. **Contexto:** quem sou e qual é o projeto.
2. **Objetivo:** o que deve ser entregue.
3. **Requisitos:** páginas, tecnologia e conteúdo.
4. **Restrições:** o que não pode ter ou o que deve ser seguido.
5. **Formato da resposta:** como quero receber o resultado.

## 2. Prompt principal

> **Contexto:** sou aluno de Sistemas de Informação da UMC. Meu Projeto Final de Curso é o SafeClick, uma plataforma web de educação em segurança digital (Flask, PostgreSQL no Neon, publicada na Vercel) com conteúdos, quizzes, simulações de golpes, laboratório de senhas, painel de progresso, conquistas, avaliações e área administrativa.
>
> **Objetivo:** criar a página inicial do projeto em React com Vite, moderna e bem estruturada, com no mínimo 5 páginas, para publicar no GitHub e na Vercel.
>
> **Requisitos:**
> - páginas Início, O projeto, Funcionalidades, Tecnologias, Segurança e LGPD, Equipe e uma página 404;
> - navegação com React Router e menu que funcione no celular;
> - usar as mesmas cores da plataforma (azul-petróleo #153849, verde #286b53 e verde-menta #8dd3ba);
> - textos fiéis ao que o sistema realmente faz.
>
> **Restrições:**
> - sem biblioteca de interface, só CSS próprio;
> - nenhum dado inventado, como números, depoimentos ou nomes;
> - componentes reutilizáveis e textos separados em um arquivo de dados.
>
> **Formato da resposta:** projeto completo, com a explicação de cada arquivo e o passo a passo para publicar no GitHub e na Vercel.

## 3. Ajustes pedidos depois da primeira versão

- Interatividade de verdade em React: filtro de funcionalidades por perfil e perguntas em acordeão, as duas com `useState`.
- Voltar ao topo ao trocar de página (`useEffect` no `Layout`).
- `vercel.json` para as rotas não darem erro 404 ao recarregar a página na Vercel.
- Conferência das telas no computador e no celular, sem rolagem lateral.

## 4. Revisão do código gerado

| Arquivo | O que conferi |
|---|---|
| `main.jsx` | O `BrowserRouter` envolve o `App`, por isso os `Link` e `NavLink` funcionam. |
| `App.jsx` | Rota com `element={<Layout />}` e rotas filhas; o `<Outlet />` do Layout mostra a página da rota atual. |
| `Cabecalho.jsx` | `useState(aberto)` abre e fecha o menu no celular; `NavLink` recebe `isActive` para destacar a página atual; `end` na rota `/` evita que "Início" fique sempre ativo. |
| `Funcionalidades.jsx` | O filtro fica no estado e a lista é recalculada com `filter`; cada item do `map` tem uma `key` única. |
| `Seguranca.jsx` | O estado guarda o índice da pergunta aberta (`null` = todas fechadas); `aria-expanded` informa ao leitor de tela. |
| `dados/site.js` | Textos conferidos com o sistema publicado e a monografia (21 RFs, 497 testes, 2FA, exclusão com 30 dias). |
| `index.css` | Variáveis de cor no `:root` e media queries em 1000px e 720px para tablet e celular. |
