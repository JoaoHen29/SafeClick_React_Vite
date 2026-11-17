import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import Icone from '../components/Icone.jsx'
import { CAMADAS, TECNOLOGIAS } from '../dados/site.js'

export default function Tecnologias() {
  return (
    <>
      <CabecalhoPagina rotulo="Tecnologias" titulo="Como o SafeClick foi construído">
        Uma aplicação Flask com páginas renderizadas no servidor, banco PostgreSQL e serviços externos chamados só pelo back-end.
      </CabecalhoPagina>

      <section className="secao">
        <div className="container grade-5">
          {TECNOLOGIAS.map((t) => (
            <article key={t.grupo} className="pilha">
              <span className="cartao-icone">
                <Icone nome={t.icone} />
              </span>
              <h3>{t.grupo}</h3>
              <ul>
                {t.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="secao secao-alternada">
        <div className="container">
          <p className="rotulo">Arquitetura</p>
          <h2>Organização em camadas</h2>
          <div className="arquitetura">
            <div className="camadas">
              {CAMADAS.map((c, i) => (
                <div key={c.nome} className={`camada camada-${i + 1}`}>
                  <h3>{c.nome}</h3>
                  <p>{c.texto}</p>
                </div>
              ))}
            </div>
            <div className="externos">
              <p className="externos-titulo">Serviços externos</p>
              <div className="externo">
                <h3>Twilio Verify</h3>
                <p>Segundo fator (TOTP) no login</p>
              </div>
              <div className="externo">
                <h3>Pwned Passwords</h3>
                <p>Desafio de senhas com k-anonymity</p>
              </div>
              <div className="externo">
                <h3>Gmail (SMTP)</h3>
                <p>Recuperação de senha e e-mails da conta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
