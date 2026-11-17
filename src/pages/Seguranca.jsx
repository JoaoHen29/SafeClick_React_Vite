import { useState } from 'react'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { LINKS, SEGURANCA } from '../dados/site.js'

export default function Seguranca() {
  // Guarda qual pergunta está aberta (null = todas fechadas).
  const [aberta, setAberta] = useState(0)

  return (
    <>
      <CabecalhoPagina rotulo="Segurança e LGPD" titulo="A plataforma aplica o que ensina">
        As mesmas boas práticas ensinadas nas atividades protegem as contas e os dados de quem usa o SafeClick.
      </CabecalhoPagina>

      <section className="secao">
        <div className="container acordeao">
          {SEGURANCA.map((item, i) => {
            const estaAberta = aberta === i
            return (
              <div key={item.pergunta} className={estaAberta ? 'acordeao-item aberto' : 'acordeao-item'}>
                <button
                  type="button"
                  className="acordeao-pergunta"
                  aria-expanded={estaAberta}
                  aria-controls={`resposta-${i}`}
                  onClick={() => setAberta(estaAberta ? null : i)}
                >
                  <span>{item.pergunta}</span>
                  <span className="acordeao-sinal" aria-hidden="true">
                    {estaAberta ? '−' : '+'}
                  </span>
                </button>
                {estaAberta && (
                  <p id={`resposta-${i}`} className="acordeao-resposta">
                    {item.resposta}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="secao secao-alternada">
        <div className="container chamada">
          <div>
            <h2>Documentos legais</h2>
            <p>A Política de Privacidade e os Termos de Uso podem ser consultados sem login, com a versão e a data de vigência.</p>
          </div>
          <div className="acoes">
            <a className="botao" href={LINKS.politica} target="_blank" rel="noreferrer">
              Política de Privacidade
            </a>
            <a className="botao botao-contorno-escuro" href={LINKS.termos} target="_blank" rel="noreferrer">
              Termos de Uso
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
