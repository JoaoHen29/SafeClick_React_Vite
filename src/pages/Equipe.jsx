import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { EQUIPE, LINKS, ORIENTACAO } from '../dados/site.js'

export default function Equipe() {
  return (
    <>
      <CabecalhoPagina rotulo="Equipe" titulo="Quem fez o SafeClick">
        Projeto Final de Curso do Bacharelado em Sistemas de Informação da Universidade de Mogi das Cruzes, turma de 2026.
      </CabecalhoPagina>

      <section className="secao">
        <div className="container grade-3">
          {EQUIPE.map((pessoa) => (
            <article key={pessoa.nome} className="pessoa">
              <span className="avatar" aria-hidden="true">
                {pessoa.iniciais}
              </span>
              <p className="cartao-etiqueta">{pessoa.papel}</p>
              <h3>{pessoa.nome}</h3>
              <p>{pessoa.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="secao secao-alternada">
        <div className="container duas-colunas">
          <div>
            <p className="rotulo">Orientação</p>
            <ul className="lista-orientacao">
              {ORIENTACAO.map((o) => (
                <li key={o.nome}>
                  <strong>{o.nome}</strong>
                  <span>{o.papel}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="rotulo">Links do projeto</p>
            <div className="acoes acoes-coluna">
              <a className="botao" href={LINKS.plataforma} target="_blank" rel="noreferrer">
                Plataforma publicada
              </a>
              <a className="botao botao-contorno-escuro" href={LINKS.repositorio} target="_blank" rel="noreferrer">
                Repositório no GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
