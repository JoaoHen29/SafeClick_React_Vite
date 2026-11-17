import Icone from './Icone.jsx'

// Cartão reutilizável: ícone opcional, etiqueta, título e texto.
export default function Cartao({ icone, etiqueta, titulo, children }) {
  return (
    <article className="cartao">
      {icone && (
        <span className="cartao-icone">
          <Icone nome={icone} />
        </span>
      )}
      {etiqueta && <p className="cartao-etiqueta">{etiqueta}</p>}
      <h3>{titulo}</h3>
      <div className="cartao-texto">{children}</div>
    </article>
  )
}
