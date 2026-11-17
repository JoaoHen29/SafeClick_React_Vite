import { Link } from 'react-router-dom'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'

export default function NaoEncontrada() {
  return (
    <>
      <CabecalhoPagina rotulo="Erro 404" titulo="Página não encontrada">
        O endereço digitado não existe neste site.
      </CabecalhoPagina>
      <section className="secao">
        <div className="container">
          <Link className="botao" to="/">
            Voltar ao início
          </Link>
        </div>
      </section>
    </>
  )
}
