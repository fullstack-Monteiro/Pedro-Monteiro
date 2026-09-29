export type Language = 'pt' | 'en' | 'fr';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    services: string;
    skills: string;
    contact: string;
    resume: string;
    contactBtn: string;
  };
  hero: {
    availability: string;
    title: string;
    subtitle: string;
    heroStatement: string;
    viewProjects: string;
    getInTouch: string;
    factProfileLabel: string;
    factProfileValue: string;
    factStackLabel: string;
    factStackValue: string;
    factGoalLabel: string;
    factGoalValue: string;
  };
  about: {
    title: string;
    lead: string;
    paragraph: string;
    pillars: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  projects: {
    title: string;
    viewCaseStudy: string;
    codeOnGithub: string;
    liveDemo: string;
    roleLabel: string;
    stackLabel: string;
    overviewLabel: string;
    problemLabel: string;
    solutionLabel: string;
    featuresLabel: string;
    archLabel: string;
    impactLabel: string;
    discussSimilar: string;
    close: string;
    items: {
      id: string;
      title: string;
      category: string;
      tagline: string;
      summary: string;
      role: string;
      overview: string;
      problem: string;
      solution: string;
      features: string[];
      architectureDetails: string[];
      metricsOrImpact: string;
    }[];
  };
  services: {
    title: string;
    deliverablesLabel: string;
    idealForLabel: string;
    requestService: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      deliverables: string[];
      idealFor: string;
    }[];
  };
  skills: {
    title: string;
    groups: {
      category: string;
      description: string;
      skills: { name: string; level: string; note: string }[];
    }[];
  };
  contact: {
    title: string;
    emailLabel: string;
    emailCopied: string;
    copyEmail: string;
    directChannels: string;
    whatsappLabel: string;
    openChat: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    whatsappDirectBtn: string;
    successMessage: string;
    sendAnother: string;
  };
  resume: {
    title: string;
    printPdf: string;
    location: string;
    summaryTitle: string;
    summaryContent: string;
    educationTitle: string;
    degree: string;
    institution: string;
    period: string;
    educationDesc: string;
    experienceTitle: string;
    exp1Role: string;
    exp1Period: string;
    exp1Desc: string;
    exp2Role: string;
    exp2Period: string;
    exp2Desc: string;
    competenciesTitle: string;
    languagesTitle: string;
    languagesList: string;
  };
  footer: {
    rights: string;
    terms: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projectos',
      services: 'Serviços',
      skills: 'Competências',
      contact: 'Contacto',
      resume: 'Ver CV',
      contactBtn: 'Falar comigo',
    },
    hero: {
      availability: 'Disponível para projectos, consultoria e oportunidades profissionais',
      title: 'Engenheiro de Software',
      subtitle: 'Engenharia de Software, Sistemas Escaláveis & Soluções Digitais',
      heroStatement: 'Desenvolvo software robusto, sistemas eficientes e soluções digitais completas para transformar ideias e desafios complexos em produtos de alto valor.',
      viewProjects: 'Ver projetos',
      getInTouch: 'Entrar em contacto',
      factProfileLabel: 'Perfil Profissional',
      factProfileValue: 'Engenheiro de Software com foco em sistemas escaláveis e produtos digitais',
      factStackLabel: 'Stack Principal',
      factStackValue: 'React · Django · Python · PostgreSQL · APIs & Arquitetura',
      factGoalLabel: 'Disponibilidade',
      factGoalValue: 'Oportunidades de engenharia de software e projectos de alto impacto',
    },
    about: {
      title: 'Sobre mim',
      lead: 'Engenheiro de Software e Full-Stack Developer.',
      paragraph: 'Sou estudante do 3º ano de Licenciatura em Engenharia Informática, com experiência prática no desenvolvimento de sistemas web completos. Domino React e TypeScript no frontend e Django, Python e PostgreSQL no backend, construindo APIs REST robustas e interfaces modernas. O meu foco é criar software fiável, escalável e orientado a resolver problemas reais.',
      pillars: [
        {
          num: '01',
          title: 'Engenharia',
          desc: 'Código limpo, arquitetura escalável e rigor metodológico.',
        },
        {
          num: '02',
          title: 'Full-Stack',
          desc: 'Domínio de ponta a ponta: backend, APIs REST, bases de dados e frontend.',
        },
        {
          num: '03',
          title: 'Soluções',
          desc: 'Foco em gerar valor real e resolver gargalos operacionais.',
        },
      ],
    },
    projects: {
      title: 'Projectos',
      viewCaseStudy: 'Ver estudo de caso',
      codeOnGithub: 'Código no GitHub',
      liveDemo: 'Demonstração Online',
      roleLabel: 'Função & Responsabilidades',
      stackLabel: 'Tecnologias Utilizadas',
      overviewLabel: 'Visão Geral',
      problemLabel: 'O Problema',
      solutionLabel: 'A Solução Implementada',
      featuresLabel: 'Funcionalidades Principais',
      archLabel: 'Destaques de Arquitetura & Engenharia',
      impactLabel: 'Impacto & Métricas',
      discussSimilar: 'Falar sobre um projeto semelhante',
      close: 'Fechar',
      items: [
        {
          id: 'acadlink',
          title: 'Acadlink',
          category: 'Rede Social Académica',
          tagline: 'Rede Social Académica para Ensino Superior',
          summary: 'Plataforma desenvolvida para conectar estudantes e docentes de diferentes instituições de ensino superior.',
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
        },
        {
          id: 'sigtm',
          title: 'SIGTM',
          category: 'Gestão Tributária Municipal',
          tagline: 'Sistema de Gestão Tributária Municipal',
          summary: 'Sistema para arrecadação e controlo tributário municipal, cadastro de contribuintes e emissão de taxas.',
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
        },
        {
          id: 'agromudas',
          title: 'AgroMudas',
          category: 'Plataforma Agrícola & Viveiro',
          tagline: 'Gestão e Catálogo de Viveiros e Mudas Agrícolas',
          summary: 'Plataforma para gestão de viveiros, controlo de lotes de mudas, encomendas agrícolas e acompanhamento de produção.',
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
        },
      ],
    },
    services: {
      title: 'Serviços',
      deliverablesLabel: 'O que está incluído',
      idealForLabel: 'Ideal para',
      requestService: 'Pedir Orçamento',
      items: [
        {
          id: 'websites-institucionais',
          title: 'Websites Institucionais',
          subtitle: 'Presença digital corporativa e autoridade',
          description: 'Apresente sua empresa com profissionalismo. Sites multipáginas que contam sua história e vendem sua marca.',
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
          deliverables: [
            'Identidade visual e logotipos profissionais com manual de marca',
            'Cardápios digitais interativos para restauração e comércio',
            'Cartazes, flyers e materiais promocionais digitais ou para impressão',
            'Convites e criativos personalizados para redes sociais',
          ],
          idealFor: 'Marcas e estabelecimentos que querem destacar-se visualmente da concorrência.',
        },
      ],
    },
    skills: {
      title: 'Competências',
      groups: [
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
      ],
    },
    contact: {
      title: 'Contacto',
      emailLabel: 'E-mail',
      emailCopied: 'Copiado!',
      copyEmail: 'Copiar e-mail',
      directChannels: 'Redes e canais diretos',
      whatsappLabel: 'WhatsApp Directo',
      openChat: 'Abrir conversa',
      formTitle: 'Enviar Mensagem',
      nameLabel: 'Nome',
      namePlaceholder: 'O seu nome ou empresa',
      emailInputLabel: 'E-mail',
      emailPlaceholder: 'seu.email@exemplo.com',
      serviceLabel: 'Serviço de interesse',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Descreva brevemente o projeto, ideia ou oportunidade...',
      submitBtn: 'Enviar Mensagem',
      whatsappDirectBtn: 'Enviar via WhatsApp',
      successMessage: 'Mensagem pronta para envio! Pode confirmar pelo cliente de e-mail ou via WhatsApp.',
      sendAnother: 'Enviar outra mensagem',
    },
    resume: {
      title: 'Curriculum Vitae Sintético · Pedro Monteiro',
      printPdf: 'Imprimir / PDF',
      location: 'Moçambique',
      summaryTitle: 'Perfil Profissional',
      summaryContent: 'Engenheiro de Software e Full-Stack Developer com sólida fundamentação técnica e experiência prática na concepção, arquitetura e implementação de produtos digitais, sistemas complexos e aplicações escaláveis em React, Django, Python e PostgreSQL.',
      educationTitle: 'Formação Académica',
      degree: 'Licenciatura em Engenharia Informática',
      institution: 'Ensino Superior',
      period: 'Engenharia Informática',
      educationDesc: 'Engenharia de Software, Algoritmos e Estruturas de Dados, Modelação de Bases de Dados Relacionais, Redes e Sistemas Distribuídos.',
      experienceTitle: 'Experiência & Projetos Principais',
      exp1Role: 'Software Engineer & Full-Stack Developer',
      exp1Period: 'Projetos em Produção',
      exp1Desc: 'Desenvolvimento integral do Acadlink (Rede Social Académica), SIGTM (Sistema de Gestão Tributária Municipal) e AgroMudas (Plataforma Agrícola).',
      exp2Role: 'Engenheiro de Software & Consultor Freelancer',
      exp2Period: 'Contínuo',
      exp2Desc: 'Construção de sistemas web, landing pages de alta conversão, plataformas digitais e identidade visual corporativa.',
      competenciesTitle: 'Competências Chave',
      languagesTitle: 'Idiomas',
      languagesList: 'Português (Nativo) · Inglês (Técnico e Profissional) · Francês (Intermédio)',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      terms: 'Termos e Condições',
    },
  },

  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      skills: 'Skills',
      contact: 'Contact',
      resume: 'View CV',
      contactBtn: 'Get in touch',
    },
    hero: {
      availability: 'Available for software projects, consulting, and professional opportunities',
      title: 'Software Engineer',
      subtitle: 'Software Engineering, Scalable Systems & Digital Solutions',
      heroStatement: 'I engineer robust software, high-performance systems, and complete digital solutions that turn complex challenges into impactful products.',
      viewProjects: 'View projects',
      getInTouch: 'Get in touch',
      factProfileLabel: 'Professional Profile',
      factProfileValue: 'Software Engineer focused on scalable architectures & digital products',
      factStackLabel: 'Core Stack',
      factStackValue: 'React · Django · Python · PostgreSQL · APIs & Architecture',
      factGoalLabel: 'Availability',
      factGoalValue: 'Open to software engineering roles, consulting, and high-impact projects',
    },
    about: {
      title: 'About me',
      lead: 'Software Engineer and Full-Stack Developer.',
      paragraph: 'I am a 3rd-year Bachelor\'s student in Computer Engineering with hands-on experience building complete web systems. I work with React and TypeScript on the frontend and Django, Python and PostgreSQL on the backend, delivering robust REST APIs and modern interfaces. My focus is on reliable, scalable software that solves real-world problems.',
      pillars: [
        {
          num: '01',
          title: 'Engineering',
          desc: 'Clean code, resilient architecture, and software best practices.',
        },
        {
          num: '02',
          title: 'Full-Stack',
          desc: 'End-to-end delivery: backend services, REST APIs, databases, and UI.',
        },
        {
          num: '03',
          title: 'Solutions',
          desc: 'Dedicated to solving genuine real-world client bottlenecks.',
        },
      ],
    },
    projects: {
      title: 'Projects',
      viewCaseStudy: 'View case study',
      codeOnGithub: 'Source on GitHub',
      liveDemo: 'Live Demo',
      roleLabel: 'Role & Responsibilities',
      stackLabel: 'Technologies Used',
      overviewLabel: 'Overview',
      problemLabel: 'The Problem',
      solutionLabel: 'The Solution',
      featuresLabel: 'Key Features',
      archLabel: 'Architecture & Engineering Highlights',
      impactLabel: 'Impact & Metrics',
      discussSimilar: 'Discuss a similar project',
      close: 'Close',
      items: [
        {
          id: 'acadlink',
          title: 'Acadlink',
          category: 'Academic Social Platform',
          tagline: 'Academic Social Network for Higher Education',
          summary: 'Platform built to connect students and educators across diverse university institutions.',
          role: 'Full-Stack Developer (Conception, Backend, Database & Frontend)',
          overview: 'Acadlink was created to break university student silos and centralize academic knowledge sharing between campuses.',
          problem: 'Study materials were scattered across disorganized chats and private cloud drives, leading to lost knowledge and low collaboration.',
          solution: 'Academic social network with feeds organized by university and coursework, study groups, and a peer-reviewed repository of lecture notes.',
          features: [
            'Student & faculty authentication with verified course profiles',
            'Course-specific thematic feeds with real-time updates',
            'Categorized documents and lecture notes repository with fast search',
            'Dedicated study groups with collaborative discussion boards',
            'Community interactions with upvotes, comments, and notifications',
          ],
          architectureDetails: [
            'Django REST Framework backend with role-based user permissions',
            'PostgreSQL relational schema optimized for academic queries',
            'Modular React frontend delivering sub-second response times',
          ],
          metricsOrImpact: 'Engineered for high concurrent load with API response latencies consistently under 85ms.',
        },
        {
          id: 'sigtm',
          title: 'SIGTM',
          category: 'Municipal Tax Management',
          tagline: 'Municipal Tax & Revenue Management System',
          summary: 'Platform for municipal revenue collection, taxpayer registry, and automated fee invoicing.',
          role: 'Full-Stack Developer & Fiscal Modeling',
          overview: 'SIGTM is a public-sector municipal software that centralizes tax assessments, municipal fees, certificate issuance, and citizen property records.',
          problem: 'Municipalities face revenue leaks, long queues, human calculation errors in property tax computation, and missing centralized audit logs.',
          solution: 'A secure, modular web platform that automates municipal tax assessment, provides real-time payment reconciliation, and issues verifiable fiscal receipts.',
          features: [
            'Unified taxpayer records (individuals and corporations) and cadastral property registry',
            'Automated calculations of municipal licenses, fines, and property taxes with configurable rules',
            'Instant generation of payment slips and clearance certificates',
            'Real-time municipal revenue dashboard with fiscal reporting',
            'Comprehensive audit trail logging all tax modifications and transactions',
          ],
          architectureDetails: [
            'Strict ACID transactional integrity in PostgreSQL preventing financial discrepancies',
            'Granular Role-Based Access Control (RBAC) via Django REST Framework',
            'High-speed React interface with paginated tables and instantaneous taxpayer search',
          ],
          metricsOrImpact: 'Automated municipal tax calculation, minimized citizen wait times, and guaranteed complete fiscal traceability.',
        },
        {
          id: 'agromudas',
          title: 'AgroMudas',
          category: 'AgriTech Nursery Platform',
          tagline: 'Seedling Nursery & Agricultural Inventory System',
          summary: 'Management system for plant nurseries, seedling batch tracking, farm orders, and production monitoring.',
          role: 'Full-Stack Developer & Agricultural Inventory Modeling',
          overview: 'AgroMudas is a specialized web system for nursery owners and commercial farmers, linking internal seedling growth tracking with a digital order catalog.',
          problem: 'Agricultural nursery operations often suffer from unmonitored greenhouse batches, lost seedlings from harvest delays, and manual paper records.',
          solution: 'Dedicated agricultural web application that tracks seedling batches from sowing to dispatch, managing reserved inventory and delivery schedules.',
          features: [
            'Batch growth lifecycle tracking (sowing, germination, hardening, and dispatch)',
            'Digital crop catalog with botanical requirements and planting timelines',
            'Farmer order reservations with estimated seedling readiness dates',
            'Real-time greenhouse stock counts with alerts for ready-to-plant lots',
            'Producer history and automated generation of delivery manifests',
          ],
          architectureDetails: [
            'Relational PostgreSQL schema tracking growth states and agricultural harvest deadlines',
            'Lightweight Django REST endpoints built for field mobile connectivity',
            'Clean React UI with responsive tables and instant inventory overview',
          ],
          metricsOrImpact: 'Streamlined seedling distribution cycles and eradicated inventory spoilage caused by dispatch delays.',
        },
      ],
    },
    services: {
      title: 'Services',
      deliverablesLabel: 'What is included',
      idealForLabel: 'Best for',
      requestService: 'Request a Quote',
      items: [
        {
          id: 'websites-institucionais',
          title: 'Corporate & Institutional Websites',
          subtitle: 'Digital presence, brand authority, and trustworthiness',
          description: 'Showcase your company with professional polish. Multi-page websites that tell your story and convert visitors.',
          deliverables: [
            'Elegant, high-performance, and mobile-responsive websites',
            'Thoughtful structure highlighting company values and core services',
            'Performance tuning, ultra-fast loading, and search engine SEO',
            'Direct WhatsApp integration and contact lead forms',
          ],
          idealFor: 'Businesses aiming to build client trust and project a credible digital image.',
        },
        {
          id: 'landing-pages',
          title: 'High-Converting Landing Pages',
          subtitle: 'Strategic one-page sites optimized for conversion',
          description: 'Engineered for conversion. Perfect for marketing campaigns, product launches, or specific service promotions.',
          deliverables: [
            'Direct layout with persuasive copywriting and clear CTAs',
            'Ultra-fast load times optimized for paid ads and Google Ads traffic',
            'Social proof, benefit breakdowns, and objection-handling FAQs',
            'Instant lead notification via email or direct WhatsApp alerts',
          ],
          idealFor: 'Product launches, marketing campaigns, and rapid lead generation.',
        },
        {
          id: 'portfolios-profissionais',
          title: 'Professional Portfolios',
          subtitle: 'Digital showcase for talents, creatives, and experts',
          description: 'Present your craft to the world. A curated project gallery designed for freelancers, creatives, and developers.',
          deliverables: [
            'Flawless visual presentation of projects and in-depth case studies',
            'Tailored structure built to impress recruiters and premium clients',
            'Interactive resume with print-ready PDF export',
            'Custom visual design and smooth, intuitive navigation',
          ],
          idealFor: 'Freelancers, photographers, designers, engineers, and independent consultants.',
        },
        {
          id: 'manutencao-suporte',
          title: 'Maintenance & Technical Support',
          subtitle: 'Reliable, continuous technical care for your web assets',
          description: 'Never worry about technical hiccups. We provide regular updates, backups, bug fixes, and performance audits.',
          deliverables: [
            'Routine security updates, package patches, and content updates',
            'Prompt debugging, issue diagnostics, and resolution',
            'Scheduled backups and uptime monitoring',
            'Ongoing layout adjustments and speed optimization',
          ],
          idealFor: 'Companies with existing websites needing an ongoing, reliable technical partner.',
        },
        {
          id: 'designer-grafico',
          title: 'Graphic & Brand Design',
          subtitle: 'Memorable visual communication that stands out',
          description: 'Elevate your brand with professional graphics. Logos, digital menus, posters, and invitations that leave a lasting impression.',
          deliverables: [
            'Brand identities, logo design, and visual brand style guides',
            'Interactive digital restaurant menus and product brochures',
            'Posters, flyers, and marketing collateral for print and screen',
            'Social media assets, promotional banners, and custom invitations',
          ],
          idealFor: 'Brands and venues wanting to visually distinguish themselves from competitors.',
        },
      ],
    },
    skills: {
      title: 'Skills',
      groups: [
        {
          category: 'Frontend',
          description: 'Building fast, accessible, and responsive user interfaces.',
          skills: [
            { name: 'React', level: 'Advanced', note: 'Hooks, Modular Components, State Management' },
            { name: 'JavaScript (ES6+)', level: 'Solid', note: 'Async/Await, DOM Manipulation, Functional Patterns' },
            { name: 'TypeScript', level: 'Intermediate', note: 'Static Typing, Interfaces, Safe Refactoring' },
            { name: 'HTML5 & CSS3', level: 'Advanced', note: 'Web Semantics, WCAG Accessibility, Flexbox/Grid' },
            { name: 'Tailwind CSS', level: 'Advanced', note: 'Agile Design Systems, Responsive Design, Clean CSS' },
          ],
        },
        {
          category: 'Backend',
          description: 'Server architecture, business logic, and secure APIs.',
          skills: [
            { name: 'Python', level: 'Advanced', note: 'Object-Oriented Programming, Automation, Logic' },
            { name: 'Django', level: 'Advanced', note: 'MVT Architecture, Auth, ORM, and Security' },
            { name: 'Django REST Framework', level: 'Advanced', note: 'RESTful APIs, Serializers, JWT, RBAC' },
            { name: 'REST APIs', level: 'Advanced', note: 'Endpoint Design, Status Codes, Validation' },
          ],
        },
        {
          category: 'Databases',
          description: 'Relational modeling, transactional integrity, and efficient queries.',
          skills: [
            { name: 'PostgreSQL', level: 'Solid', note: 'Relations, Indexes, Transactions & Integrity' },
            { name: 'SQLite', level: 'Advanced', note: 'Local Development, Fast Testing & Prototyping' },
            { name: 'Django ORM', level: 'Advanced', note: 'Migrations, Query Optimization, Aggregations' },
          ],
        },
        {
          category: 'Design & UI',
          description: 'Visual creation, prototyping, and marketing materials.',
          skills: [
            { name: 'Figma', level: 'Advanced', note: 'Wireframing, Design Systems, Interactive Prototypes' },
            { name: 'Visual Identity', level: 'Solid', note: 'Logos, Color Palettes, Brand Typography' },
            { name: 'Graphic Design', level: 'Advanced', note: 'Posters, Digital Menus, Invitations, Banners' },
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      emailLabel: 'Email',
      emailCopied: 'Copied!',
      copyEmail: 'Copy email',
      directChannels: 'Social & Direct Channels',
      whatsappLabel: 'WhatsApp Direct',
      openChat: 'Open chat',
      formTitle: 'Send a Message',
      nameLabel: 'Name',
      namePlaceholder: 'Your name or organization',
      emailInputLabel: 'Email',
      emailPlaceholder: 'your.email@example.com',
      serviceLabel: 'Service of interest',
      messageLabel: 'Message',
      messagePlaceholder: 'Briefly describe your project, idea, or opportunity...',
      submitBtn: 'Send Message',
      whatsappDirectBtn: 'Send via WhatsApp',
      successMessage: 'Message ready to send! Confirm via email client or WhatsApp.',
      sendAnother: 'Send another message',
    },
    resume: {
      title: 'Curriculum Vitae · Pedro Monteiro',
      printPdf: 'Print / Save as PDF',
      location: 'Mozambique',
      summaryTitle: 'Professional Profile',
      summaryContent: 'Software Engineer and Full-Stack Developer with strong technical foundations and hands-on experience designing, architecting, and deploying scalable software systems, APIs, and modern digital products using React, Django, Python, and PostgreSQL.',
      educationTitle: 'Education',
      degree: 'B.Sc. in Computer Engineering',
      institution: 'Higher Education',
      period: 'Computer Engineering',
      educationDesc: 'Software Engineering, Data Structures, Relational Databases, Networks, and Distributed Systems.',
      experienceTitle: 'Experience & Featured Projects',
      exp1Role: 'Software Engineer & Full-Stack Developer',
      exp1Period: 'Production Systems',
      exp1Desc: 'End-to-end development of Acadlink (Academic Social Network), SIGTM (Municipal Tax Management System), and AgroMudas (Agricultural Nursery Platform).',
      exp2Role: 'Software Engineer & Freelance Consultant',
      exp2Period: 'Ongoing',
      exp2Desc: 'Designing and building custom software systems, scalable web platforms, high-converting pages, and corporate brand designs.',
      competenciesTitle: 'Key Technical Skills',
      languagesTitle: 'Languages',
      languagesList: 'Portuguese (Native) · English (Technical & Professional) · French (Intermediate)',
    },
    footer: {
      rights: 'All rights reserved.',
      terms: 'Terms & Conditions',
    },
  },

  fr: {
    nav: {
      about: 'À propos',
      projects: 'Projets',
      services: 'Services',
      skills: 'Compétences',
      contact: 'Contact',
      resume: 'Voir CV',
      contactBtn: 'Me contacter',
    },
    hero: {
      availability: 'Disponible pour projets logiciels, conseil et opportunités professionnelles',
      title: 'Ingénieur Logiciel',
      subtitle: 'Génie Logiciel, Systèmes Scalables & Solutions Numériques',
      heroStatement: 'Je conçois des logiciels performants, des systèmes fiables et des solutions numériques complètes pour transformer des défis complexes en produits à fort impact.',
      viewProjects: 'Voir les projets',
      getInTouch: 'Me contacter',
      factProfileLabel: 'Profil Professionnel',
      factProfileValue: 'Ingénieur Logiciel axé sur les architectures résilientes et produits numériques',
      factStackLabel: 'Stack Principale',
      factStackValue: 'React · Django · Python · PostgreSQL · APIs & Architecture',
      factGoalLabel: 'Disponibilité',
      factGoalValue: 'Opportunités en ingénierie logicielle, conseil et projets à fort impact',
    },
    about: {
      title: 'À propos de moi',
      lead: 'Ingénieur Logiciel et Développeur Full-Stack.',
      paragraph: 'Spécialisé dans la conception de solutions logicielles de bout en bout. J’allie des architectures backend robustes (Django, Python, PostgreSQL, APIs REST) à des interfaces utilisateur modernes et fluides (React, TypeScript), en accordant une attention particulière au design graphique et à l’expérience utilisateur. Mon engagement est de concevoir des systèmes sûrs, scalables et créateurs de valeur.',
      pillars: [
        {
          num: '01',
          title: 'Ingénierie',
          desc: 'Code propre, architecture logicielle éprouvée et rigueur méthodologique.',
        },
        {
          num: '02',
          title: 'Full-Stack',
          desc: 'Maîtrise complète : services backend, APIs REST, bases de données et interface.',
        },
        {
          num: '03',
          title: 'Solutions',
          desc: 'Création de valeur concrète et résolution de défis réels.',
        },
      ],
    },
    projects: {
      title: 'Projets',
      viewCaseStudy: 'Voir l’étude de cas',
      codeOnGithub: 'Code sur GitHub',
      liveDemo: 'Démonstration en ligne',
      roleLabel: 'Rôle & Responsabilités',
      stackLabel: 'Technologies Utilisées',
      overviewLabel: 'Vue d’ensemble',
      problemLabel: 'Le Problème',
      solutionLabel: 'La Solution Mise en Place',
      featuresLabel: 'Fonctionnalités Principales',
      archLabel: 'Architecture & Choix Techniques',
      impactLabel: 'Impact & Métriques',
      discussSimilar: 'Discuter d’un projet similaire',
      close: 'Fermer',
      items: [
        {
          id: 'acadlink',
          title: 'Acadlink',
          category: 'Réseau Social Académique',
          tagline: 'Réseau Social Académique pour l’Enseignement Supérieur',
          summary: 'Plateforme conçue pour connecter étudiants et enseignants à travers divers établissements universitaires.',
          role: 'Développeur Full-Stack (Conception, Backend, Base de données & Frontend)',
          overview: 'Acadlink a été conçu pour briser l’isolement des étudiants et centraliser le partage de connaissances académiques entre facultés.',
          problem: 'Le partage de cours s’effectuait de manière désordonnée sur des messageries informelles, provoquant perte de documents et manque de collaboration.',
          solution: 'Réseau social universitaire avec fils d’actualité par filière, groupes de travail et référentiel centralisé de notes validées par la communauté.',
          features: [
            'Authentification avec profils académiques et vérification universitaire',
            'Fils thématiques segmentés par établissement et matière',
            'Référentiel organisé de documents et synthèses avec recherche rapide',
            'Création de groupes d’étude avec espaces de discussion dédiés',
            'Interactions avec votes positifs, commentaires et notifications',
          ],
          architectureDetails: [
            'Backend Django REST Framework avec gestion granulaire des rôles',
            'Base de données PostgreSQL optimisée pour les requêtes académiques',
            'Frontend React modulaire garantissant fluidité et réactivité',
          ],
          metricsOrImpact: 'Conçu pour une forte affluence avec des temps de réponse API inférieurs à 85ms.',
        },
        {
          id: 'sigtm',
          title: 'SIGTM',
          category: 'Gestion Fiscale Municipale',
          tagline: 'Système de Gestion Fiscale Municipale',
          summary: 'Plateforme pour le recouvrement fiscal communal, le registre des contribuables et l’émission de taxes.',
          role: 'Développeur Full-Stack & Modélisation Fiscale',
          overview: 'Le SIGTM est un système gouvernemental municipal centralisant le calcul des taxes locales, l’émission d’attestations et le registre cadastral.',
          problem: 'Les municipalités subissent des pertes de recettes, des files d’attente physiques, des calculs manuels sujets aux erreurs et un manque de traçabilité.',
          solution: 'Système web modulaire et sécurisé automatisant la liquidation des taxes, la vérification des paiements en temps réel et l’historique des quittances.',
          features: [
            'Registre unifié des contribuables (particuliers et entreprises) et biens immobiliers',
            'Calcul automatisé des taxes et redevances municipales selon barèmes paramétrables',
            'Émission d’avis de paiement et de certificats de régularité fiscale',
            'Tableau de bord de recouvrement financier en temps réel avec rapports fiscaux',
            'Piste d’audit intégrale enregistrant toutes les transactions et modifications',
          ],
          architectureDetails: [
            'Intégrité transactionnelle stricte sous PostgreSQL pour une comptabilité sans failles',
            'Contrôle d’accès basé sur les rôles (RBAC) via Django REST Framework',
            'Interface React rapide avec pagination et filtres instantanés',
          ],
          metricsOrImpact: 'Automatisation complète des calculs fiscaux, réduction des temps d’attente et traçabilité certifiée.',
        },
        {
          id: 'agromudas',
          title: 'AgroMudas',
          category: 'Plateforme Horticole & Pépinière',
          tagline: 'Gestion et Catalogue de Pépinières Agricoles',
          summary: 'Système de gestion de pépinières, suivi des lots de plants, commandes agricoles et contrôle de production.',
          role: 'Développeur Full-Stack & Modélisation de Stocks Agricoles',
          overview: 'AgroMudas est un outil dédié aux pépiniéristes et producteurs agricoles, combinant la gestion du cycle de vie des plants avec un catalogue en ligne pour les acheteurs.',
          problem: 'La production horticole souffre du manque de suivi des lots en serre, de pertes dues à une mauvaise planification des récoltes et de registres papier.',
          solution: 'Logiciel web spécialisé qui suit chaque lot depuis le semis jusqu’à l’expédition, gérant réservations, stocks disponibles et prévisions agricoles.',
          features: [
            'Suivi du cycle de culture par lot (semis, germination, enracinement et livraison)',
            'Catalogue numérique d’espèces et variétés avec fiches techniques de plantation',
            'Gestion des réservations avec estimation automatique de la date de maturité du plant',
            'Contrôle des stocks en temps réel par serre et parcelle avec alertes de récolte',
            'Historique d’achats des producteurs et génération de bons d’expédition',
          ],
          architectureDetails: [
            'Modélisation relationnelle PostgreSQL pour le suivi précis des états et calendriers de culture',
            'Points de terminaison REST Django optimisés pour l’utilisation mobile sur le terrain',
            'Interface React claire avec vision instantanée des stocks et mode consultation rapide',
          ],
          metricsOrImpact: 'Optimisation du calendrier de livraison et élimination des pertes liées aux retards de distribution.',
        },
      ],
    },
    services: {
      title: 'Services',
      deliverablesLabel: 'Ce qui est inclus',
      idealForLabel: 'Idéal pour',
      requestService: 'Demander un devis',
      items: [
        {
          id: 'websites-institucionais',
          title: 'Sites Vitrines & Institutionnels',
          subtitle: 'Présence digitale professionnelle et crédibilité de marque',
          description: 'Valorisez votre entreprise avec élégance. Des sites multipages modernes qui racontent votre histoire et convainquent vos prospects.',
          deliverables: [
            'Sites multipages haut de gamme, fluides et parfaitement adaptés au mobile',
            'Structure optimisée pour mettre en valeur vos services et vos valeurs',
            'Optimisation de la vitesse de chargement et référencement naturel SEO',
            'Intégration directe de WhatsApp et de formulaires de contact rapides',
          ],
          idealFor: 'Entreprises et professionnels souhaitant inspirer confiance et crédibilité auprès de leurs clients.',
        },
        {
          id: 'landing-pages',
          title: 'Landing Pages Haute Conversion',
          subtitle: 'Pages stratégiques axées sur l’acquisition et la conversion',
          description: 'Conçues pour convertir. Idéales pour le lancement de nouveaux produits, des offres promotionnelles ou des campagnes publicitaires.',
          deliverables: [
            'Mise en page percutante avec rédaction persuasive et boutons d’action visibles',
            'Chargement ultra-rapide optimisé pour les campagnes publicitaires payantes',
            'Sections de preuve sociale, bénéfices clés et réponses aux objections',
            'Collecte de leads synchronisée par e-mail ou notifications WhatsApp',
          ],
          idealFor: 'Lancements de produits, campagnes publicitaires et acquisition rapide de prospects.',
        },
        {
          id: 'portfolios-profissionais',
          title: 'Portfolios Professionnels',
          subtitle: 'Vitrine numérique pour talents, créatifs et indépendants',
          description: 'Montrez votre travail au monde entier. Galerie de projets valorisante spécialement pensée pour les freelances et experts.',
          deliverables: [
            'Présentation soignée de vos réalisations et études de cas détaillées',
            'Architecture pensée pour séduire les recruteurs et clients premium',
            'Curriculum vitae intégré avec consultation et export PDF facile',
            'Identité visuelle personnalisée et navigation agréable',
          ],
          idealFor: 'Freelances, développeurs, photographes, designers et consultants indépendants.',
        },
        {
          id: 'manutencao-suporte',
          title: 'Maintenance & Support Technique',
          subtitle: 'Sérénité technique continue pour vos projets en ligne',
          description: 'Ne laissez plus les pépins techniques freiner votre activité. Support réactif, mises à jour et sécurité garanties.',
          deliverables: [
            'Mises à jour régulières de sécurité, de composants et de contenus',
            'Diagnostic rapide et résolution efficace des bugs éventuels',
            'Sauvegardes périodiques et surveillance de la disponibilité',
            'Optimisations continues de vitesse et ajustements d’affichage',
          ],
          idealFor: 'Entreprises disposant déjà d’un site web et recherchant un partenaire technique fiable au quotidien.',
        },
        {
          id: 'designer-grafico',
          title: 'Design Graphique & Identité',
          subtitle: 'Communication visuelle mémorable et supports percutants',
          description: 'Faites briller votre marque avec des visuels professionnels. Logos, menus digitaux, affiches et supports qui captivent l’attention.',
          deliverables: [
            'Identité de marque, logos distinctifs et guide d’utilisation graphique',
            'Menus interactifs sur mesure pour la restauration et les commerces',
            'Affiches, dépliants et supports de communication print et digitaux',
            'Créations personnalisées pour les réseaux sociaux et invitations',
          ],
          idealFor: 'Marques et établissements désirant se démarquer visuellement de la concurrence.',
        },
      ],
    },
    skills: {
      title: 'Compétences',
      groups: [
        {
          category: 'Frontend',
          description: 'Création d’interfaces web interactives, accessibles et réactives.',
          skills: [
            { name: 'React', level: 'Avancé', note: 'Hooks, Composants Modulaires, Gestion d’État' },
            { name: 'JavaScript (ES6+)', level: 'Solide', note: 'Asynchrone, Manipulation DOM, Paradigme Fonctionnel' },
            { name: 'TypeScript', level: 'Intermédiaire', note: 'Typage Statique, Interfaces, Refactoring Sécurisé' },
            { name: 'HTML5 & CSS3', level: 'Avancé', note: 'Sémantique Web, Accessibilité WCAG, Flexbox/Grid' },
            { name: 'Tailwind CSS', level: 'Avancé', note: 'Design Systems Agiles, Responsive, CSS Épuré' },
          ],
        },
        {
          category: 'Backend',
          description: 'Architecture serveur, logique métier et APIs sécurisées.',
          skills: [
            { name: 'Python', level: 'Avancé', note: 'Programmation Orientée Objet, Scripts et Logique' },
            { name: 'Django', level: 'Avancé', note: 'Architecture MVT, Authentification, ORM et Sécurité' },
            { name: 'Django REST Framework', level: 'Avancé', note: 'APIs RESTful, Sérialiseurs, JWT, Permissions' },
            { name: 'REST APIs', level: 'Avancé', note: 'Conception d’Endpoints, Codes d’État, Validation' },
          ],
        },
        {
          category: 'Bases de Données',
          description: 'Modélisation relationnelle, intégrité des données et requêtes efficaces.',
          skills: [
            { name: 'PostgreSQL', level: 'Solide', note: 'Relations, Index, Transactions et Intégrité' },
            { name: 'SQLite', level: 'Avancé', note: 'Développement Local, Tests Rapides et Prototypage' },
            { name: 'Django ORM', level: 'Avancé', note: 'Migrations, Requêtes Optimisées, Agrégations' },
          ],
        },
        {
          category: 'Design & UI',
          description: 'Conception graphique, prototypage et supports visuels.',
          skills: [
            { name: 'Figma', level: 'Avancé', note: 'Wireframes, Design Systems, Prototypes Interactifs' },
            { name: 'Identité Visuelle', level: 'Solide', note: 'Logotypes, Palettes de Couleurs, Typographies' },
            { name: 'Design Graphique', level: 'Avancé', note: 'Affiches, Menus Numériques, Invitations et Bannières' },
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      emailLabel: 'E-mail',
      emailCopied: 'Copié !',
      copyEmail: 'Copier l’adresse e-mail',
      directChannels: 'Réseaux & Canaux Directs',
      whatsappLabel: 'WhatsApp Direct',
      openChat: 'Démarrer la discussion',
      formTitle: 'Envoyer un Message',
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom ou entreprise',
      emailInputLabel: 'E-mail',
      emailPlaceholder: 'votre.email@exemple.com',
      serviceLabel: 'Service souhaité',
      messageLabel: 'Message',
      messagePlaceholder: 'Décrivez brièvement votre projet, idée ou opportunité...',
      submitBtn: 'Envoyer le Message',
      whatsappDirectBtn: 'Envoyer par WhatsApp',
      successMessage: 'Message prêt ! Confirmez l’envoi par e-mail ou sur WhatsApp.',
      sendAnother: 'Envoyer un autre message',
    },
    resume: {
      title: 'Curriculum Vitae Synthétique · Pedro Monteiro',
      printPdf: 'Imprimer / PDF',
      location: 'Mozambique',
      summaryTitle: 'Profil Professionnel',
      summaryContent: 'Ingénieur Logiciel et Développeur Full-Stack disposant de bases solides et d’une expérience pratique reconnue dans la conception, l’architecture et le déploiement de systèmes logiciels évolutifs, d’APIs et de produits digitaux avec React, Django, Python et PostgreSQL.',
      educationTitle: 'Formation Académique',
      degree: 'Licence en Génie Informatique',
      institution: 'Enseignement Supérieur',
      period: 'Génie Informatique',
      educationDesc: 'Génie Logiciel, Algorithmes et Structures de Données, Modélisation de Données Relationnelles, Réseaux et Systèmes Distribués.',
      experienceTitle: 'Expérience & Projets Clés',
      exp1Role: 'Software Engineer & Développeur Full-Stack',
      exp1Period: 'Projets en Production',
      exp1Desc: 'Conception et développement complet d’Acadlink (Réseau Social Universitaire), SIGTM (Gestion Fiscale Municipale) et AgroMudas (Plateforme Horticole).',
      exp2Role: 'Ingénieur Logiciel & Consultant Indépendant',
      exp2Period: 'Continu',
      exp2Desc: 'Réalisation de systèmes logiciels sur mesure, plateformes scalables, pages haute conversion et identité visuelle de marque.',
      competenciesTitle: 'Compétences Clés',
      languagesTitle: 'Langues',
      languagesList: 'Portugais (Langue maternelle) · Anglais (Technique et Professionnel) · Français (Intermédiaire)',
    },
    footer: {
      rights: 'Tous droits réservés.',
      terms: 'Termes & Conditions',
    },
  },
};
