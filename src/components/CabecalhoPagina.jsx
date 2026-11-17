// Faixa de título usada no topo das páginas internas.
export default function CabecalhoPagina({ rotulo, titulo, children }) {
  return (
    <section className="cabecalho-pagina">
      <div className="container">
        <p className="rotulo">{rotulo}</p>
        <h1>{titulo}</h1>
        {children && <p className="cabecalho-pagina-texto">{children}</p>}
      </div>
    </section>
  )
}
