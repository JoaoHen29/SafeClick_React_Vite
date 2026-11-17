import { Link } from 'react-router-dom'
import { LINKS, MENU } from '../dados/site.js'

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="container rodape-grade">
        <div>
          <p className="rodape-marca">
            Safe<strong>Click</strong>
          </p>
          <p className="rodape-texto">
            Projeto Final de Curso — Bacharelado em Sistemas de Informação, Universidade de Mogi das Cruzes, 2026.
          </p>
        </div>

        <nav aria-label="Páginas do site" className="rodape-links">
          {MENU.map((item) => (
            <Link key={item.caminho} to={item.caminho}>
              {item.rotulo}
            </Link>
          ))}
        </nav>

        <div className="rodape-links">
          <a href={LINKS.plataforma} target="_blank" rel="noreferrer">Plataforma SafeClick</a>
          <a href={LINKS.repositorio} target="_blank" rel="noreferrer">Repositório no GitHub</a>
          <a href={LINKS.politica} target="_blank" rel="noreferrer">Política de Privacidade</a>
          <a href={LINKS.termos} target="_blank" rel="noreferrer">Termos de Uso</a>
        </div>
      </div>
    </footer>
  )
}
