import { Link } from 'react-router-dom'
import Cartao from '../components/Cartao.jsx'
import { DESTAQUES, LINKS, NUMEROS } from '../dados/site.js'

export default function Inicio() {
  return (
    <>
      <section className="heroi">
        <div className="container heroi-grade">
          <div>
            <p className="rotulo rotulo-claro">Projeto Final de Curso · Sistemas de Informação · UMC</p>
            <h1>
              Aprenda antes de <span className="destaque">clicar.</span>
            </h1>
            <p className="heroi-texto">
              O SafeClick é uma plataforma web de educação em segurança digital. Com conteúdos, quizzes, simulações de
              golpes e um laboratório de senhas, o estudante pratica o reconhecimento de riscos em um ambiente seguro.
            </p>
            <div className="acoes">
              <a className="botao" href={LINKS.plataforma} target="_blank" rel="noreferrer">
                Acessar a plataforma
              </a>
              <Link className="botao botao-contorno" to="/projeto">
                Conhecer o projeto
              </Link>
            </div>
          </div>
          <img className="heroi-imagem" src="/escudo.svg" alt="Escudo com sinal de verificado, símbolo do SafeClick" />
        </div>
      </section>

      <section className="secao">
        <div className="container numeros">
          {NUMEROS.map((n) => (
            <div key={n.legenda} className="numero">
              <p className="numero-valor">{n.valor}</p>
              <p className="numero-legenda">{n.legenda}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="secao secao-alternada">
        <div className="container">
          <p className="rotulo">Destaques</p>
          <h2>Aprender praticando, não só lendo</h2>
          <div className="grade-3">
            {DESTAQUES.map((d) => (
              <Cartao key={d.titulo} icone={d.icone} titulo={d.titulo}>
                <p>{d.texto}</p>
              </Cartao>
            ))}
          </div>
          <Link className="link-seta" to="/funcionalidades">
            Ver todas as funcionalidades →
          </Link>
        </div>
      </section>

      <section className="secao">
        <div className="container chamada">
          <div>
            <h2>Segurança e privacidade desde o projeto</h2>
            <p>
              Login com segundo fator, senhas guardadas como hash, coleta apenas dos dados necessários e exclusão da conta
              com prazo para arrependimento, de acordo com a LGPD.
            </p>
          </div>
          <Link className="botao" to="/seguranca">
            Como protegemos os dados
          </Link>
        </div>
      </section>
    </>
  )
}
