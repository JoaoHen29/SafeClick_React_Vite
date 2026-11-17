import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Cabecalho from './Cabecalho.jsx'
import Rodape from './Rodape.jsx'

// Estrutura comum a todas as páginas. A cada troca de rota,
// volta a página para o topo (o React Router não faz isso sozinho).
export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="pagina">
      <Cabecalho />
      <main className="conteudo">
        <Outlet />
      </main>
      <Rodape />
    </div>
  )
}
