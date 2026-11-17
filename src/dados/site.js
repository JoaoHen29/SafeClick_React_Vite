// Todo o conteúdo do site fica aqui. As páginas só leem estes dados
// e montam a tela, então para mudar um texto basta editar este arquivo.

export const LINKS = {
  plataforma: 'https://safeclick-umc.vercel.app',
  repositorio: 'https://github.com/EduMafra10/SafeClick',
  politica: 'https://safeclick-umc.vercel.app/politica-de-privacidade',
  termos: 'https://safeclick-umc.vercel.app/termos-de-uso',
}

export const MENU = [
  { caminho: '/', rotulo: 'Início' },
  { caminho: '/projeto', rotulo: 'O projeto' },
  { caminho: '/funcionalidades', rotulo: 'Funcionalidades' },
  { caminho: '/tecnologias', rotulo: 'Tecnologias' },
  { caminho: '/seguranca', rotulo: 'Segurança e LGPD' },
  { caminho: '/equipe', rotulo: 'Equipe' },
]

export const NUMEROS = [
  { valor: '21', legenda: 'requisitos funcionais implementados' },
  { valor: '497', legenda: 'testes automatizados aprovados' },
  { valor: '2FA', legenda: 'login com segundo fator em todas as contas' },
  { valor: '16+', legenda: 'público: estudantes a partir de 16 anos' },
]

export const DESTAQUES = [
  {
    icone: 'alerta',
    titulo: 'Simulações de golpes',
    texto: 'Mensagens e páginas fictícias em que o usuário decide o que fazer e recebe a explicação, com os sinais de risco destacados.',
  },
  {
    icone: 'chave',
    titulo: 'Laboratório de senhas',
    texto: 'Análise da força da senha no próprio navegador, gerador de frases-senha e o desafio “Qual vazou mais?”.',
  },
  {
    icone: 'grafico',
    titulo: 'Progresso e conquistas',
    texto: 'Painel com gráficos, filtro por período, conquistas desbloqueadas e sugestões do que revisar.',
  },
]

export const ETAPAS = [
  { titulo: 'Ideia e ficha', texto: 'Definição do tema, do público-alvo e das funcionalidades na Ficha de Caracterização do Projeto.' },
  { titulo: 'Modelagem', texto: 'Requisitos, diagrama de arquitetura, diagrama de classes (UML) e modelo BPMN.' },
  { titulo: 'Protótipo', texto: 'Telas desenhadas no Figma antes da implementação.' },
  { titulo: 'Desenvolvimento', texto: 'Ciclos com Scrumban, código no GitHub e integração por pull request.' },
  { titulo: 'Testes e entrega', texto: 'Testes automatizados com Pytest, análise com Flake8 e publicação na Vercel.' },
]

// Funcionalidades, separadas por perfil para o filtro da página.
export const FUNCIONALIDADES = [
  { perfil: 'usuario', icone: 'livro', titulo: 'Conteúdos educativos', texto: 'Leituras sobre phishing, senhas, golpes e privacidade, com marcação de conclusão.' },
  { perfil: 'usuario', icone: 'quiz', titulo: 'Quizzes e oficinas', texto: 'Perguntas com pontuação e explicação de cada resposta.' },
  { perfil: 'usuario', icone: 'alerta', titulo: 'Simulações de golpes', texto: 'Escolhas seguras e de risco, com as pistas do golpe numeradas na própria mensagem.' },
  { perfil: 'usuario', icone: 'chave', titulo: 'Laboratório de senhas', texto: 'Força da senha calculada no navegador, gerador e desafio com a Pwned Passwords API.' },
  { perfil: 'usuario', icone: 'grafico', titulo: 'Painel de progresso', texto: 'Indicadores, gráficos, filtro por período e o bloco “Seu próximo passo”.' },
  { perfil: 'usuario', icone: 'estrela', titulo: 'Conquistas', texto: 'Medalhas concedidas automaticamente ao atingir marcos de aprendizagem.' },
  { perfil: 'usuario', icone: 'conversa', titulo: 'Avaliações', texto: 'Nota e comentário privados por padrão; a publicação é opcional, sem identificação e moderada.' },
  { perfil: 'usuario', icone: 'usuario', titulo: 'Minha conta', texto: 'Nome, ícone de perfil, troca de senha, sessões abertas e exclusão da conta.' },
  { perfil: 'admin', icone: 'painel', titulo: 'Visão geral', texto: 'Indicadores de uso, questões com mais erros, avaliações mais baixas e exportação para Excel.' },
  { perfil: 'admin', icone: 'livro', titulo: 'Editor de atividades', texto: 'Criação e edição de conteúdos, quizzes e simulações, com prévia igual à tela do usuário.' },
  { perfil: 'admin', icone: 'usuario', titulo: 'Gestão de contas', texto: 'Perfis, redefinição do autenticador, promoção e exclusão de administradores.' },
  { perfil: 'admin', icone: 'escudo', titulo: 'Auditoria e moderação', texto: 'Registros de acessos e ações, e aprovação dos comentários enviados para publicação.' },
]

export const TECNOLOGIAS = [
  { grupo: 'Front-end', icone: 'codigo', itens: ['HTML5, CSS3 e JavaScript', 'Jinja2 (páginas no servidor)', 'Chart.js (gráficos)', '@zxcvbn-ts (força da senha)'] },
  { grupo: 'Back-end', icone: 'escudo', itens: ['Python 3 e Flask', 'Flask-Login (sessões)', 'Flask-WTF (proteção CSRF)', 'Werkzeug (hash scrypt)'] },
  { grupo: 'Dados', icone: 'banco', itens: ['PostgreSQL no Neon', 'Psycopg 3', 'SQL parametrizado, sem ORM', 'openpyxl (exportação Excel)'] },
  { grupo: 'Integrações', icone: 'link', itens: ['Twilio Verify (2FA com TOTP)', 'Pwned Passwords API', 'Gmail SMTP (e-mails da conta)'] },
  { grupo: 'Infra e qualidade', icone: 'nuvem', itens: ['Vercel (HTTPS)', 'Git e GitHub', 'Pytest (497 testes)', 'Flake8'] },
]

export const CAMADAS = [
  { nome: 'Usuário', texto: 'Navegador do estudante ou do administrador, com acesso por HTTPS.' },
  { nome: 'Apresentação', texto: 'Páginas HTML montadas pelo Jinja2, CSS próprio e JavaScript.' },
  { nome: 'Aplicação', texto: 'Flask dividido em módulos: autenticação, atividades, conta e administração.' },
  { nome: 'Dados', texto: 'PostgreSQL no Neon, acessado com consultas parametrizadas.' },
]

// Perguntas da página de segurança (exibidas em acordeão).
export const SEGURANCA = [
  {
    pergunta: 'Como funciona o login?',
    resposta: 'O usuário informa a senha e um código de 6 dígitos gerado por um aplicativo autenticador. O código (TOTP) é validado pela Twilio Verify, que recebe apenas um identificador aleatório da conta, sem nome, e-mail ou senha.',
  },
  {
    pergunta: 'Como as senhas são guardadas?',
    resposta: 'Nunca em texto: o sistema guarda só o hash da senha, gerado com scrypt. As senhas têm de 15 a 128 caracteres e senhas triviais ou com o nome ou o e-mail do usuário são recusadas.',
  },
  {
    pergunta: 'O desafio de senhas envia minha senha para fora?',
    resposta: 'Não. O desafio usa senhas públicas e conhecidas, e a consulta à Pwned Passwords API segue o modelo k-anonymity: só os 5 primeiros caracteres do hash SHA-1 saem do servidor.',
  },
  {
    pergunta: 'Por quanto tempo a sessão fica aberta?',
    resposta: 'A sessão expira após 30 minutos sem uso ou 8 horas de duração, e o usuário pode encerrar as outras sessões em Minha conta.',
  },
  {
    pergunta: 'O que acontece quando excluo minha conta?',
    resposta: 'A conta é desativada e o autenticador é desvinculado. Por 30 dias, ela pode ser reativada por um link enviado ao e-mail. Depois disso, nome, e-mail e senha são apagados, e o e-mail fica guardado à parte por 6 meses.',
  },
  {
    pergunta: 'Quem vê minhas avaliações?',
    resposta: 'Por padrão, só a administração, sem identificar o autor. A nota e o comentário só ficam públicos se o usuário autorizar e declarar ter 18 anos ou mais, e o comentário passa por moderação.',
  },
]

export const EQUIPE = [
  { nome: 'Eduardo Mafra dos Santos', papel: 'Integrante', iniciais: 'EM', texto: 'Cadastro e login, área administrativa, Minha conta, publicação na Vercel e Flake8.' },
  { nome: 'Humberto Ribeiro Bezerra', papel: 'Integrante', iniciais: 'HR', texto: 'Avaliações, painel de progresso e revisão didática dos quizzes e conteúdos.' },
  { nome: 'João Henrique Alves de Souza', papel: 'Integrante', iniciais: 'JH', texto: 'LGPD (Política de Privacidade e Termos de Uso), conquistas e exclusão de conta.' },
]

export const ORIENTACAO = [
  { nome: 'Prof. Bruno Messias Aguiar', papel: 'Orientador' },
  { nome: 'Prof. Alessandro Horas', papel: 'Coorientador' },
]
