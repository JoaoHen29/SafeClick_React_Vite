import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import Cartao from '../components/Cartao.jsx'
import { ETAPAS } from '../dados/site.js'

export default function Projeto() {
  return (
    <>
      <CabecalhoPagina rotulo="O projeto" titulo="Por que o SafeClick existe">
        Golpes digitais exploram mais a falta de informação do usuário do que falhas técnicas. O SafeClick ensina a reconhecer
        esses riscos antes do clique.
      </CabecalhoPagina>

      <section className="secao">
        <div className="container grade-3">
          <Cartao etiqueta="Objetivo" titulo="Orientar e proteger">
            <p>
              Orientar estudantes na identificação de ameaças comuns, como phishing, links maliciosos e senhas fracas, e
              promover práticas mais seguras na internet.
            </p>
          </Cartao>
          <Cartao etiqueta="O quê" titulo="Uma plataforma web educativa">
            <p>
              Conteúdos, quizzes, simulações com feedback e laboratório de senhas, com acompanhamento do progresso individual.
            </p>
          </Cartao>
          <Cartao etiqueta="Por quê" titulo="O risco está na decisão">
            <p>
              Segundo o CERT.br, muitos incidentes com usuários domésticos vêm da falta de conhecimento básico, e não da
              sofisticação dos ataques.
            </p>
          </Cartao>
        </div>
      </section>

      <section className="secao secao-alternada">
        <div className="container duas-colunas">
          <div>
            <p className="rotulo">Público-alvo</p>
            <h2>Estudantes a partir de 16 anos</h2>
            <p>
              Alunos do ensino médio e universitários, com diferentes níveis de familiaridade com a tecnologia. A linguagem é
              direta e cada atividade explica o motivo de cada resposta.
            </p>
          </div>
          <div>
            <p className="rotulo">Metodologia</p>
            <h2>Scrumban e entregas por ciclo</h2>
            <p>
              As tarefas seguiram um fluxo contínuo no GitHub Projects, com revisões a cada entrega do cronograma acadêmico e
              integração do código por pull request.
            </p>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <p className="rotulo">Caminho do projeto</p>
          <h2>Da ideia à entrega</h2>
          <ol className="linha-tempo">
            {ETAPAS.map((etapa, i) => (
              <li key={etapa.titulo}>
                <span className="linha-tempo-numero">{i + 1}</span>
                <div>
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
