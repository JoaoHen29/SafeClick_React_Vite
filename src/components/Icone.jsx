// Ícones simples em SVG, desenhados com traço (sem biblioteca externa).
const CAMINHOS = {
  escudo: 'M12 3l8 3v6c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V6z M8.5 12l2.5 2.5 4.5-5',
  livro: 'M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z M4 19V5 M8 7h7',
  quiz: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6 M12 17h.01',
  alerta: 'M12 3l10 18H2z M12 10v4 M12 17.5h.01',
  chave: 'M14 10a4 4 0 1 0-1.2 2.8L20 20 M17 17l2-2 M15 15l1.5-1.5',
  grafico: 'M4 20V10 M10 20V4 M16 20v-7 M22 20H2',
  estrela: 'M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z',
  conversa: 'M4 5h16v11H9l-5 4z',
  usuario: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0',
  painel: 'M3 4h18v16H3z M3 9h18 M9 9v11',
  cadeado: 'M6 10h12v11H6z M8 10V7a4 4 0 0 1 8 0v3 M12 14v3',
  nuvem: 'M7 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z',
  codigo: 'M8 7l-5 5 5 5 M16 7l5 5-5 5 M14 4l-4 16',
  banco: 'M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3z M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  check: 'M5 12l4 4L19 6',
  lixeira: 'M4 7h16 M9 7V4h6v3 M6 7l1 14h10l1-14',
}

export default function Icone({ nome, tamanho = 24 }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={CAMINHOS[nome] ?? CAMINHOS.escudo} />
    </svg>
  )
}
