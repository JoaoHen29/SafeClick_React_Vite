import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import Projeto from './pages/Projeto.jsx'
import Funcionalidades from './pages/Funcionalidades.jsx'
import Tecnologias from './pages/Tecnologias.jsx'
import Seguranca from './pages/Seguranca.jsx'
import Equipe from './pages/Equipe.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

// Rotas do site. O Layout envolve todas as páginas (cabeçalho e rodapé).
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/projeto" element={<Projeto />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  )
}
