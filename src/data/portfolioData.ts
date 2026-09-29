import acadlinkShowcase from '../assets/images/acadlink_showcase.jpg';
import sigtmShowcase from '../assets/images/SIGTM_showcase.jpg';
import agromudasShowcase from '../assets/images/AgroMudas_showcase.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  image: string;
  technologies: string[];
  role: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architectureDetails: string[];
  metricsOrImpact: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconType: 'layout' | 'smartphone' | 'briefcase' | 'wrench' | 'palette';
  deliverables: string[];
  idealFor: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

export interface SkillCard {
  id: string;
  name: string;
  category: 'FRONTEND' | 'BACKEND' | 'LANGUAGES' | 'TOOLS';
  /** The brand logo + color are resolved from `id` in TechIcons.tsx. */
  level?: 'Avançado' | 'Sólido' | 'Intermédio';
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  actionPoints: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Pedro Monteiro',
    fullName: 'Pedro Francisco Cândido Monteiro',
    title: 'Software Engineer & Full-Stack Developer',
    subtitle: 'Engenharia de Software, Sistemas Escaláveis & Soluções Digitais',
    location: 'Moçambique',
    email: 'fullstack2331@gmail.com',
    whatsapp: '+258871314783',
    whatsappFormatted: '+258 87 131 4783',
    facebook: 'https://www.facebook.com/pedrofranciscocandido.monteiro.7/',
    instagram: 'https://www.instagram.com/piter_monteiro/',
    linkedin: 'https://www.linkedin.com/in/pedro-francisco-candido-monteiro-0b2178347/',
    github: 'https://github.com/fullstack-Monteiro',
    availability: 'Disponível para projectos, consultoria e oportunidades profissionais',
    heroStatement: 'Desenvolvo software robusto, sistemas eficientes e soluções digitais de alto impacto para transformar ideias e desafios complexos em produtos de excelência.',
    bio: 'Engenheiro de Software e Full-Stack Developer com forte domínio técnico em React, Django, Python e PostgreSQL, além de arquitetura de software e design de produtos digitais. Combino rigor de engenharia com foco prático na criação de software fiável, seguro, de elevado desempenho e bem estruturado.',
    pillars: [
      {
        title: 'Engenharia de Software',
        description: 'Fundamentação sólida em estruturas de dados, algoritmos, modelação relacional de dados e boas práticas de arquitetura e código limpo.',
      },
      {
        title: 'Foco em Soluções Reais',
        description: 'Não desenvolvo apenas interfaces bonitas; crio sistemas desenhados para resolver gargalos concretos de pessoas e empresas.',
      },
      {
        title: 'Visão Full-Stack de Ponta a Ponta',
        description: 'Autonomia para conduzir o ciclo completo: do planeamento da base de dados e APIs REST à interface de utilizador e deploy em produção.',
      },
    ],
  },

  projects: [
    {
      id: 'acadlink',
      title: 'Acadlink',
      category: 'Rede Social Académica',
      tagline: 'Rede Social Académica para Ensino Superior',
      summary: 'Plataforma desenvolvida para conectar estudantes e docentes de diferentes instituições de ensino superior.',
      image: acadlinkShowcase,
      technologies: ['React', 'Django', 'Python', 'PostgreSQL', 'REST API'],
      role: 'Full-Stack Developer (Concepção, Backend, Base de Dados & Frontend)',
      overview: 'O Acadlink foi concebido para quebrar o isolamento de estudantes universitários e centralizar a partilha de conhecimento académico entre faculdades.',
      problem: 'A partilha de materiais de estudo ocorria de forma caótica em chats informais e drives desorganizados, resultando em perda de conhecimento e falta de colaboração.',
      solution: 'Rede social académica com feeds segmentados por universidade e curso, grupos de estudo e repositório centralizado de apontamentos e recursos avaliados pela comunidade.',
      features: [
        'Autenticação com perfis académicos e verificação de curso/instituição',
        'Feeds temáticos segmentados por universidade e unidade curricular',
        'Repositório categorizado de documentos e apontamentos com busca rápida',
        'Criação de grupos de estudo com discussões dedicadas',
        'Interações com upvotes em conteúdos úteis, comentários e notificações',
      ],
      architectureDetails: [
        'Backend em Django REST Framework com permissões granulares por tipo de utilizador',
        'Base de dados PostgreSQL com índices otimizados para pesquisas académicas',
        'Frontend modular em React com interface responsiva e limpa',
      ],
      metricsOrImpact: 'Arquitetura testada para alta concorrência com tempos de resposta de API inferiores a 85ms.',
      githubUrl: 'https://github.com/fullstack-Monteiro/acadlink',
      demoUrl: 'https://acadlink.demo.app',
    },
    {
      id: 'sigtm',
      title: 'SIGTM',
      category: 'Gestão Tributária Municipal',
      tagline: 'Sistema de Gestão Tributária Municipal',
      summary: 'Sistema para arrecadação e controlo tributário municipal, cadastro de contribuintes e emissão de taxas.',
      image: sigtmShowcase,
      technologies: ['React', 'Django', 'Python', 'PostgreSQL', 'REST API'],
      role: 'Desenvolvimento Full-Stack & Modelação Tributária',
      overview: 'O SIGTM (Sistema de Gestão Tributária Municipal) é uma plataforma governamental que centraliza os processos de cobrança, cálculo de taxas municipais, emissão de certidões e gestão cadastral de munícipes e imóveis.',
      problem: 'Municípios enfrentam perdas de receita, filas de atendimento presenciais, cálculos manuais de impostos sujeitos a erro humano e ausência de histórico financeiro digital centralizado.',
      solution: 'Desenvolvimento de um sistema web modular e seguro para automatizar o lançamento tributário, validação de pagamentos em tempo real e emissão de guias com histórico rastreável.',
      features: [
        'Cadastro unificado de contribuintes (singulares e coletivos) e imóveis municipais',
        'Cálculo automatizado de taxas, licenças e impostos municipais com regras parametrizáveis',
        'Emissão de guias de liquidação e certidões de regularidade tributária',
        'Painel de controlo de arrecadação financeira em tempo real com relatórios fiscais',
        'Auditoria completa com registo de todas as alterações fiscais e transações',
      ],
      architectureDetails: [
        'Integridade transacional estrita no PostgreSQL para cálculo e histórico financeiro sem discrepâncias',
        'Controlo de acessos baseado em papéis (RBAC) com Django REST Framework',
        'Frontend veloz em React com tabelas paginadas e filtros rápidos por contribuinte e guia',
      ],
      metricsOrImpact: 'Automação dos cálculos tributários, redução de tempo no atendimento presencial e garantia de rastreabilidade fiscal.',
      githubUrl: 'https://github.com/fullstack-Monteiro/sigtm',
      demoUrl: 'https://sigtm.demo.app',
    },
    {
      id: 'agromudas',
      title: 'AgroMudas',
      category: 'Plataforma Agrícola & Viveiro',
      tagline: 'Gestão e Catálogo de Viveiros e Mudas Agrícolas',
      summary: 'Plataforma para gestão de viveiros, controlo de lotes de mudas, encomendas agrícolas e acompanhamento de produção.',
      image: agromudasShowcase,
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
      role: 'Full-Stack Developer & Modelação de Inventário Agrícola',
      overview: 'O AgroMudas é um sistema especializado para viveiristas e produtores agrícolas, unindo a gestão interna do ciclo de vida das mudas com um catálogo digital de encomendas para agricultores.',
      problem: 'A produção e venda de mudas agrícolas sofre com falta de controlo de lotes em estufa, perdas por planeamento inadequado de colheita/entrega e anotações manuais em cadernos de campo.',
      solution: 'Software web dedicado que acompanha cada lote de mudas desde a sementeira até à fase de entrega, gerindo reservas, stock disponível e relatórios de viabilidade agrícola.',
      features: [
        'Rastreio do ciclo de cultivo por lote (sementeira, germinação, enraizamento e expedição)',
        'Catálogo digital de espécies e variedades agrícolas com especificações técnicas de plantio',
        'Gestão de reservas e encomendas com cálculo de data prevista de prontidão da muda',
        'Controlo de stock em tempo real por estufa e talhão com alertas de lotes prontos',
        'Ficha de produtor e histórico de compras com exportação de guias de expedição',
      ],
      architectureDetails: [
        'Modelação relacional no PostgreSQL para rastrear estados de lotes e datas agrícolas',
        'Endpoints REST em Django para atualização rápida em dispositivos móveis no campo',
        'Interface limpa em React com suporte offline-friendly e visualização rápida de stocks',
      ],
      metricsOrImpact: 'Otimização do ciclo de distribuição de mudas e eliminação de perdas por atrasos na expedição.',
      githubUrl: 'https://github.com/fullstack-Monteiro/agromudas',
      demoUrl: 'https://agromudas.demo.app',
    },
  ] as Project[],

  services: [
    {
      id: 'websites-institucionais',
      title: 'Websites Institucionais',
      subtitle: 'Presença digital corporativa e autoridade',
      description: 'Apresente sua empresa com profissionalismo. Sites multipáginas que contam sua história e vendem sua marca.',
      iconType: 'layout',
      deliverables: [
        'Sites multipáginas elegantes e totalmente responsivos',
        'Arquitetura focada na história, valores e serviços da marca',
        'Otimização de velocidade, performance e SEO no Google',
        'Integração direta com WhatsApp e formulários de contacto',
      ],
      idealFor: 'Empresas e negócios que querem transmitir confiança e credibilidade aos clientes.',
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      subtitle: 'Páginas estratégicas focadas em conversão',
      description: 'Páginas focadas em conversão. Ideais para lançamentos, promoções ou produtos específicos.',
      iconType: 'smartphone',
      deliverables: [
        'Design direto com copywriting e chamadas à ação assertivas',
        'Carregamento ultra-rápido otimizado para tráfego pago e anúncios',
        'Secções de prova social, benefícios e respostas a objeções',
        'Captura de leads sincronizada com e-mail ou WhatsApp',
      ],
      idealFor: 'Lançamentos de produtos, campanhas de anúncios e captação rápida de clientes.',
    },
    {
      id: 'portfolios-profissionais',
      title: 'Portfólios Profissionais',
      subtitle: 'Vitrine digital para talentos e serviços',
      description: 'Mostre seu trabalho para o mundo. Galeria de projetos otimizada para freelancers e criativos.',
      iconType: 'briefcase',
      deliverables: [
        'Apresentação visual impecável de projetos e estudos de caso',
        'Estrutura pensada para atrair recrutadores e clientes premium',
        'Currículo integrado com resumo e download rápido',
        'Identidade visual personalizada e navegação intuitiva',
      ],
      idealFor: 'Freelancers, fotógrafos, designers, desenvolvedores e profissionais liberais.',
    },
    {
      id: 'manutencao-suporte',
      title: 'Manutenção e Suporte',
      subtitle: 'Tranquilidade técnica contínua para o seu negócio',
      description: 'Não se preocupe com problemas técnicos. Oferecemos suporte contínuo e atualizações.',
      iconType: 'wrench',
      deliverables: [
        'Atualização regular de segurança, plugins e conteúdos',
        'Resolução rápida de problemas e correção de bugs',
        'Backups periódicos e monitorização de estabilidade',
        'Ajustes de layout e melhorias contínuas de velocidade',
      ],
      idealFor: 'Empresas que já possuem website e precisam de um parceiro técnico fiável no dia a dia.',
    },
    {
      id: 'designer-grafico',
      title: 'Design Gráfico',
      subtitle: 'Comunicação visual e materiais que impressionam',
      description: 'Destaque sua marca com designs profissionais. Logotipos, cardápios digitais, cartazes e convites que impressionam.',
      iconType: 'palette',
      deliverables: [
        'Identidade visual e logotipos profissionais com manual de marca',
        'Cardápios digitais interativos para restauração e comércio',
        'Cartazes, flyers e materiais promocionais digitais ou para impressão',
        'Convites e criativos personalizados para redes sociais',
      ],
      idealFor: 'Marcas e estabelecimentos que querem destacar-se visualmente da concorrência.',
    },
  ] as Service[],

  skills: [
    {
      category: 'Frontend',
      description: 'Criação de interfaces web interativas, acessíveis e rápidas.',
      skills: [
        { name: 'React', level: 'Avançado', note: 'Hooks, Componentes Modulares, State Management' },
        { name: 'JavaScript (ES6+)', level: 'Sólido', note: 'Assíncrono, DOM, Eventos, Paradigma Funcional' },
        { name: 'TypeScript', level: 'Intermédio', note: 'Tipagem Estática, Interfaces, Refatoração Segura' },
        { name: 'HTML5 & CSS3', level: 'Avançado', note: 'Semântica Web, Acessibilidade WCAG, Flexbox/Grid' },
        { name: 'Tailwind CSS', level: 'Avançado', note: 'Design Systems Ágeis, Responsividade, Clean CSS' },
      ],
    },
    {
      category: 'Backend',
      description: 'Arquitetura de servidores, lógica de negócio e APIs seguras.',
      skills: [
        { name: 'Python', level: 'Avançado', note: 'Programação Orientada a Objetos, Scripts e Lógica' },
        { name: 'Django', level: 'Avançado', note: 'Arquitetura MVT, Autenticação, ORM e Segurança' },
        { name: 'Django REST Framework', level: 'Avançado', note: 'APIs RESTful, Serializers, JWT, Permissões' },
        { name: 'REST APIs', level: 'Avançado', note: 'Design de Endpoints, Códigos de Estado, Validação' },
      ],
    },
    {
      category: 'Bases de Dados',
      description: 'Modelação relacional, integridade de dados e queries eficientes.',
      skills: [
        { name: 'PostgreSQL', level: 'Sólido', note: 'Relacionamentos, Índices, Transações e Integridade' },
        { name: 'SQLite', level: 'Avançado', note: 'Desenvolvimento Local, Testes Rápidos e Prototipagem' },
        { name: 'Django ORM', level: 'Avançado', note: 'Migrações, Consultas Otimizadas, Agregações' },
      ],
    },
    {
      category: 'Design & UI',
      description: 'Criação visual, prototipagem e materiais promocionais.',
      skills: [
        { name: 'Figma', level: 'Avançado', note: 'Wireframes, Design Systems, Protótipos Interativos' },
        { name: 'Identidade Visual', level: 'Sólido', note: 'Logotipos, Paletas de Cores, Tipografia de Marca' },
        { name: 'Design Gráfico', level: 'Avançado', note: 'Cartazes, Cardápios Digitais, Convites e Banners' },
      ],
    },
    {
      category: 'Ferramentas & Workflow',
      description: 'Práticas de engenharia para desenvolvimento fiável e organizado.',
      skills: [
        { name: 'Git & GitHub', level: 'Avançado', note: 'Controlo de Versões, Branching, Pull Requests' },
        { name: 'VS Code & Cursor', level: 'Avançado', note: 'Desenvolvimento ágil e AI-assisted coding' },
        { name: 'Kiro', level: 'Avançado', note: 'Spec-driven development e agentes de engenharia' },
        { name: 'Linux & Terminal', level: 'Sólido', note: 'Ambiente de Desenvolvimento, Bash e Comandos' },
        { name: 'Postman', level: 'Avançado', note: 'Testes de Endpoints, Documentação e Validação de APIs' },
      ],
    },
  ] as SkillGroup[],

  skillCards: [
    { id: 'html5',      name: 'HTML5',        category: 'FRONTEND',  level: 'Avançado'   },
    { id: 'css3',       name: 'CSS3',         category: 'FRONTEND',  level: 'Avançado'   },
    { id: 'javascript', name: 'JavaScript',   category: 'LANGUAGES', level: 'Sólido'     },
    { id: 'react',      name: 'React',        category: 'FRONTEND',  level: 'Avançado'   },
    { id: 'typescript', name: 'TypeScript',   category: 'LANGUAGES', level: 'Intermédio' },
    { id: 'tailwind',   name: 'Tailwind CSS', category: 'FRONTEND',  level: 'Avançado'   },
    { id: 'bootstrap',  name: 'Bootstrap',    category: 'FRONTEND',  level: 'Sólido'     },
    { id: 'nodejs',     name: 'Node.js',      category: 'BACKEND',   level: 'Intermédio' },
    { id: 'python',     name: 'Python',       category: 'LANGUAGES', level: 'Avançado'   },
    { id: 'flask',      name: 'Flask',        category: 'BACKEND',   level: 'Sólido'     },
    { id: 'django',     name: 'Django',       category: 'BACKEND',   level: 'Avançado'   },
    { id: 'mysql',      name: 'MySQL',        category: 'BACKEND',   level: 'Sólido'     },
    { id: 'postgresql', name: 'PostgreSQL',   category: 'BACKEND',   level: 'Sólido'     },
    { id: 'java',       name: 'Java',         category: 'LANGUAGES', level: 'Intermédio' },
    { id: 'cpp',        name: 'C++',          category: 'LANGUAGES', level: 'Intermédio' },
    { id: 'git',        name: 'Git & GitHub', category: 'TOOLS',     level: 'Avançado'   },
    { id: 'vscode',     name: 'VS Code',      category: 'TOOLS',     level: 'Avançado'   },
    { id: 'cursor',     name: 'Cursor',       category: 'TOOLS',     level: 'Avançado'   },
    { id: 'kiro',       name: 'Kiro',         category: 'TOOLS',     level: 'Avançado'   },
    { id: 'figma',      name: 'Figma',        category: 'TOOLS',     level: 'Avançado'   },
  ] as SkillCard[],

  process: [
    {
      step: '01',
      title: 'Entender',
      subtitle: 'Conheço o problema e os objectivos',
      description: 'Antes de escrever qualquer linha de código, conversamos para mapear a dor real, quem vai usar o sistema e quais são os resultados esperados para o seu projeto ou empresa.',
      actionPoints: [
        'Mapeamento dos requisitos essenciais vs. secundários',
        'Compreensão do modelo de negócio ou fluxo operacional',
        'Definição do prazo e critérios de sucesso claros',
      ],
    },
    {
      step: '02',
      title: 'Planear',
      subtitle: 'Defino funcionalidades e estrutura',
      description: 'Desenho a arquitetura técnica da solução: a modelação das tabelas na base de dados, os fluxos de ecrãs e a escolha da melhor tecnologia para garantir longevidade.',
      actionPoints: [
        'Estruturação da base de dados e relações entre tabelas',
        'Planeamento dos endpoints da API e fluxos de utilizador',
        'Cronograma transparente de desenvolvimento em etapas',
      ],
    },
    {
      step: '03',
      title: 'Desenvolver',
      subtitle: 'Construo frontend, backend e integrações',
      description: 'Execução focada com código limpo, documentado e modular. Acompanha o progresso através de atualizações regulares e demonstrações funcionais.',
      actionPoints: [
        'Construção de frontend intuitivo e responsivo em React',
        'Desenvolvimento de lógica de servidor segura em Python/Django',
        'Integração contínua entre frontend, APIs e base de dados',
      ],
    },
    {
      step: '04',
      title: 'Testar',
      subtitle: 'Verifico funcionamento e experiência',
      description: 'Testes práticos de ponta a ponta: validação de formulários, verificação de tempos de resposta, testes em telemóveis e auditoria de casos de erro.',
      actionPoints: [
        'Validação rigorosa de regras de negócio e permissões',
        'Testes de responsividade em múltiplos tamanhos de ecrã',
        'Otimização de velocidade e remoção de pontos de atrito',
      ],
    },
    {
      step: '05',
      title: 'Entregar',
      subtitle: 'Publico a solução e faço os ajustes necessários',
      description: 'Coloco o website ou sistema online em ambiente de produção fiável, configuro domínio e dou formação simples para que possa utilizar a ferramenta com autonomia.',
      actionPoints: [
        'Deploy em servidores de produção com SSL de segurança',
        'Guia prático e orientação de utilização',
        'Acompanhamento pós-lançamento para ajustes finos',
      ],
    },
  ] as ProcessStep[],

  faqs: [
    {
      question: 'Estás disponível para contratação ou projectos de software?',
      answer: 'Sim! Estou ativamente disponível para novas oportunidades profissionais (posições de Software Engineer, Full-Stack, Backend ou Frontend) e projectos de consultoria/freelance, seja em regime remoto ou presencial.',
    },
    {
      question: 'Aceitas projectos freelance de websites ou sistemas para empresas?',
      answer: 'Sim. Trabalho com pequenas e médias empresas, profissionais liberais e empreendedores que precisam de um website moderno ou de um sistema web personalizado para automatizar o seu negócio.',
    },
    {
      question: 'Como funciona o processo de orçamento para um projeto?',
      answer: 'Começamos por uma breve conversa de 15 minutos (por mensagem, chamada ou WhatsApp) para eu entender o que precisa. Depois, apresento uma proposta transparente com o escopo fechado, prazo de entrega e investimento sem surpresas.',
    },
    {
      question: 'Que tecnologias utilizas nos teus projetos?',
      answer: 'Foco na stack que domino e entrega resultados sólidos: React, JavaScript/TypeScript e Tailwind CSS no frontend; Python, Django e Django REST Framework no backend; PostgreSQL em bases de dados relacionais.',
    },
  ],
};
