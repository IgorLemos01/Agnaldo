// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
] as const;

export const WHATSAPP_NUMBER = "5579999999999";
export const WHATSAPP_MESSAGE =
  "Olá, Agnaldo! Gostaria de agendar uma avaliação.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
export const INSTAGRAM_URL = "https://www.instagram.com/agnaldoneuropp";

// ─── Credentials ──────────────────────────────────────────────
export const CREDENTIALS = [
  {
    icon: "🎓",
    title: "Pedagogo",
    description: "Formação em Pedagogia com foco em desenvolvimento educacional",
  },
  {
    icon: "📚",
    title: "Psicopedagogo",
    description: "Registro ABPp/SE nº 730 — avaliação e intervenção psicopedagógica",
  },
  {
    icon: "🧩",
    title: "Especialista ABA",
    description: "Análise do Comportamento Aplicada — intervenção baseada em evidências",
  },
  {
    icon: "🧠",
    title: "Neuropsicopedagogo",
    description: "Integração de neurociência e educação para desenvolvimento cognitivo",
  },
] as const;

// ─── Specialties ───────────────────────────────────────────────
export const SPECIALTIES = [
  {
    id: "psicopedagogia",
    icon: "📖",
    title: "Psicopedagogia",
    description:
      "Avaliação e intervenção nas dificuldades de aprendizagem, identificando causas e desenvolvendo estratégias personalizadas para cada criança.",
    color: "primary",
  },
  {
    id: "aba",
    icon: "🔬",
    title: "Intervenção ABA",
    description:
      "Análise do Comportamento Aplicada (ABA) para desenvolvimento de habilidades sociais, comunicação e comportamentos adaptativos.",
    color: "secondary",
  },
  {
    id: "neuropsicoqpedagogia",
    icon: "🧠",
    title: "Neuropsicopedagogia",
    description:
      "Integração de neurociência e educação para compreender o funcionamento cerebral e potencializar o aprendizado.",
    color: "gold",
  },
  {
    id: "avaliacao",
    icon: "📊",
    title: "Avaliação de Aprendizagem",
    description:
      "Avaliação psicopedagógica completa para mapear o perfil de aprendizagem, identificar potencialidades e dificuldades.",
    color: "primary",
  },
  {
    id: "cognitivo",
    icon: "💡",
    title: "Desenvolvimento Cognitivo",
    description:
      "Estimulação e desenvolvimento das funções cognitivas: atenção, memória, raciocínio, linguagem e funções executivas.",
    color: "secondary",
  },
  {
    id: "suporte",
    icon: "🤝",
    title: "Suporte Educacional",
    description:
      "Orientação a pais e educadores, elaboração de estratégias de ensino e acompanhamento escolar individualizado.",
    color: "gold",
  },
] as const;

// ─── For Whom ──────────────────────────────────────────────────
export const FOR_WHOM_ITEMS = [
  { label: "Dificuldades de Aprendizagem", icon: "📚" },
  { label: "TDAH", icon: "⚡" },
  { label: "TEA (Autismo)", icon: "🧩" },
  { label: "Atrasos no Desenvolvimento", icon: "🌱" },
  { label: "Dificuldades Cognitivas", icon: "🧠" },
  { label: "Dificuldades Escolares", icon: "🏫" },
  { label: "Dificuldades de Atenção", icon: "🎯" },
  { label: "Dislexia e Discalculia", icon: "🔤" },
] as const;

// ─── Differentials ─────────────────────────────────────────────
export const DIFFERENTIALS = [
  {
    number: "01",
    title: "Atendimento Humanizado",
    description:
      "Cada família é acolhida com empatia e respeito. Aqui, você encontra escuta ativa e cuidado genuíno em cada etapa.",
  },
  {
    number: "02",
    title: "Abordagem Baseada em Ciência",
    description:
      "Metodologias validadas cientificamente, incluindo ABA e neuropsicopedagogia, garantindo intervenções eficazes e seguras.",
  },
  {
    number: "03",
    title: "Plano 100% Individualizado",
    description:
      "Não existe uma solução padrão. Cada criança recebe um plano de intervenção único, criado a partir de sua avaliação específica.",
  },
  {
    number: "04",
    title: "Foco em Evolução Real",
    description:
      "Acompanhamento contínuo dos resultados, com metas claras e mensuráveis para garantir o progresso efetivo.",
  },
  {
    number: "05",
    title: "Suporte às Famílias",
    description:
      "Orientação e capacitação para pais e cuidadores, garantindo que o desenvolvimento continue além das sessões.",
  },
] as const;

// ─── How It Works ──────────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Primeiro Contato",
    description:
      "Entre em contato pelo WhatsApp ou formulário. Conversa inicial para entender suas necessidades e agendar a avaliação.",
  },
  {
    step: "02",
    title: "Avaliação Completa",
    description:
      "Sessões estruturadas para mapear o perfil de aprendizagem, habilidades e desafios da criança. Relatório detalhado ao final.",
  },
  {
    step: "03",
    title: "Plano Personalizado",
    description:
      "Com base na avaliação, é elaborado um plano de intervenção individualizado com metas claras e estratégias específicas.",
  },
  {
    step: "04",
    title: "Intervenção Especializada",
    description:
      "Sessões de intervenção regulares usando as melhores práticas de psicopedagogia, ABA e neuropsicopedagogia.",
  },
  {
    step: "05",
    title: "Acompanhamento Contínuo",
    description:
      "Monitoramento constante do progresso, reuniões com a família e ajuste do plano conforme a evolução da criança.",
  },
] as const;

// ─── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria Fernanda S.",
    role: "Mãe de João, 8 anos",
    rating: 5,
    text: "O Agnaldo transformou a vida do meu filho. Em apenas 4 meses, a evolução foi incrível. Ele passou a gostar de ler e as notas na escola melhoraram muito. Profissional excepcional!",
    avatar: "MF",
  },
  {
    id: 2,
    name: "Carlos Eduardo R.",
    role: "Pai de Sophia, 10 anos",
    rating: 5,
    text: "Nossa filha tem TDAH e encontramos no Agnaldo um profissional que realmente entende e sabe como ajudar. O atendimento é humanizado, cuidadoso e muito competente.",
    avatar: "CE",
  },
  {
    id: 3,
    name: "Ana Paula M.",
    role: "Mãe de Lucas, 7 anos",
    rating: 5,
    text: "Levei meu filho com diagnóstico de TEA e a diferença no desenvolvimento dele depois das sessões com o Agnaldo é notável. Uma abordagem ABA aplicada com muito conhecimento e dedicação.",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Roberto T.",
    role: "Pai de Isabela, 9 anos",
    rating: 5,
    text: "Profissional altamente capacitado. A avaliação foi extremamente detalhada e o plano de intervenção personalizado. Minha filha evoluiu muito em concentração e aprendizado.",
    avatar: "RT",
  },
  {
    id: 5,
    name: "Juliana C.",
    role: "Mãe de Pedro, 6 anos",
    rating: 5,
    text: "Recebi orientações precisas sobre como ajudar meu filho em casa. O suporte às famílias é diferenciado. Agnaldo é um profissional de referência na área.",
    avatar: "JC",
  },
] as const;

// ─── FAQ ───────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    id: "q1",
    question: "Como funciona a avaliação psicopedagógica?",
    answer:
      "A avaliação é realizada em sessões estruturadas (geralmente de 3 a 5 encontros) usando instrumentos padronizados e observação clínica. Ao final, é elaborado um relatório completo com o perfil de aprendizagem da criança, identificando potencialidades e dificuldades, e contendo orientações para pais e escola.",
  },
  {
    id: "q2",
    question: "Agnaldo Oliveira atende online?",
    answer:
      "Sim! São realizados atendimentos tanto presenciais quanto online, com a mesma qualidade e comprometimento. O atendimento online é ideal para famílias de outras cidades ou com dificuldade de deslocamento.",
  },
  {
    id: "q3",
    question: "Quanto tempo dura o processo de intervenção?",
    answer:
      "O tempo varia conforme as necessidades de cada criança. Em média, os resultados começam a aparecer após 2 a 3 meses de intervenção regular. O acompanhamento é contínuo e o progresso é avaliado periodicamente.",
  },
  {
    id: "q4",
    question: "Para quais idades são realizados os atendimentos?",
    answer:
      "Os atendimentos são voltados principalmente para crianças e adolescentes de 3 a 18 anos com dificuldades de aprendizagem, TDAH, TEA, atrasos no desenvolvimento ou outras demandas cognitivas e educacionais.",
  },
  {
    id: "q5",
    question: "Como agendar uma consulta?",
    answer:
      "O agendamento é simples! Basta entrar em contato pelo WhatsApp ou Instagram para uma conversa inicial gratuita, onde será avaliado o caso e marcada a primeira sessão de avaliação.",
  },
  {
    id: "q6",
    question: "O atendimento é coberto por plano de saúde?",
    answer:
      "Alguns planos de saúde cobrem atendimentos de psicopedagogia e neuropsicopedagogia. É recomendado verificar com sua operadora. Também são emitidos recibos para reembolso.",
  },
] as const;
