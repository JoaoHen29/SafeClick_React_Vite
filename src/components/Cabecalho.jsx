import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LINKS, MENU } from '../dados/site.js'

// Cabeçalho com o menu. No celular, o menu abre e fecha pelo botão.
export default function Cabecalho() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="cabecalho">
      <div className="container cabecalho-linha">
        <Link to="/" className="marca" onClick={() => setAberto(false)}>
          <img src="/escudo.svg" alt="" width="32" height="32" />
          <span>
            Safe<strong>Click</strong>
          </span>
        </Link>

        <button
          type="button"
          className="menu-botao"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? 'Fechar' : 'Menu'}
        </button>

        <nav id="menu-principal" className={aberto ? 'menu aberto' : 'menu'} aria-label="Menu principal">
          {MENU.map((item) => (
            <NavLink
              key={item.caminho}
              to={item.caminho}
              end={item.caminho === '/'}
              className={({ isActive }) => (isActive ? 'menu-link ativo' : 'menu-link')}
              onClick={() => setAberto(false)}
            >
              {item.rotulo}
            </NavLink>
          ))}
          <a className="botao botao-pequeno" href={LINKS.plataforma} target="_blank" rel="noreferrer">
            Acessar a plataforma
          </a>
        </nav>
      </div>
    </header>
  )
}
