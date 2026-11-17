import { useState } from 'react'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import Cartao from '../components/Cartao.jsx'
import { FUNCIONALIDADES } from '../dados/site.js'

const FILTROS = [
  { valor: 'todos', rotulo: 'Todas' },
  { valor: 'usuario', rotulo: 'Para o estudante' },
  { valor: 'admin', rotulo: 'Para o administrador' },
]

export default function Funcionalidades() {
  // O filtro escolhido fica no estado; ao mudar, o React redesenha a lista.
  const [filtro, setFiltro] = useState('todos')

  const lista = filtro === 'todos' ? FUNCIONALIDADES : FUNCIONALIDADES.filter((f) => f.perfil === filtro)

  return (
    <>
      <CabecalhoPagina rotulo="Funcionalidades" titulo="O que dá para fazer no SafeClick">
        Todas as funcionalidades abaixo estão implementadas e publicadas na versão atual da plataforma.
      </CabecalhoPagina>

      <section className="secao">
        <div className="container">
          <div className="filtros" role="group" aria-label="Filtrar funcionalidades">
            {FILTROS.map((f) => (
              <button
                key={f.valor}
                type="button"
                className={filtro === f.valor ? 'filtro ativo' : 'filtro'}
                aria-pressed={filtro === f.valor}
                onClick={() => setFiltro(f.valor)}
              >
                {f.rotulo}
              </button>
            ))}
          </div>
          <p className="contador">{lista.length} funcionalidades</p>

          <div className="grade-4">
            {lista.map((f) => (
              <Cartao
                key={f.titulo}
                icone={f.icone}
                etiqueta={f.perfil === 'admin' ? 'Administrador' : 'Estudante'}
                titulo={f.titulo}
              >
                <p>{f.texto}</p>
              </Cartao>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
