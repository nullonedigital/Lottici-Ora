export interface FloorPlan {
  id: string;
  name: string;
  tagline: string;
  bedrooms: number;
  area: string;
  totalArea?: string;
  units: string;
  badge?: string;
  features: string[];
  dimensions: { room: string; area: string }[];
  image: string;
  whatsappMessage: string;
}

export interface Amenity {
  id: string;
  name: string;
  category: "lazer" | "convivencia" | "conveniencia" | "bem-estar";
  categoryLabel: string;
  description: string;
  image?: string;
  badge?: string;
  highlights?: string[];
}

export const PROPERTY_DATA = {
  hero: {
    eyebrow: "RESIDENCIAL ORA · CANOAS/RS",
    title: "Seu novo jeito de viver começa aqui.",
    subtitle:
      "Conheça o Residencial ORA, um empreendimento da Lottici que reúne conforto, praticidade e espaços planejados para acompanhar todos os momentos da sua vida.",
    badges: [
      { label: "Tipologia", value: "2 ou 3 dormitórios" },
      { label: "Metragens", value: "48,94 m² a 60,86 m²" },
      { label: "Localização", value: "Região Igara / São José — Canoas/RS" },
    ],
  },

  indicators: [
    { label: "Dormitórios", value: "2 ou 3", description: "Opções planejadas para sua família" },
    { label: "Metragens Privativas", value: "Até 60,86 m²", description: "Entre as metragens oficiais divulgadas" },
    { label: "Todas as Unidades", value: "Com Sacada", description: "Mais luz natural e circulação de ar" },
    { label: "Churrasqueira", value: "Em Todos", description: "Momentos especiais no seu apartamento" },
  ],

  technicalSheet: {
    towers: 7,
    towersList: "Torres A, B, C, D, E, F e G",
    floors: 9,
    unitsPerFloor: 8,
    gardensPerTower: 4,
    totalUnits: 497,
    parking: "Box privativo para todas as unidades",
  },

  about: {
    title: "Mais espaço para viver o que realmente importa.",
    paragraphs: [
      "O Residencial ORA foi pensado para oferecer uma experiência de moradia que une ambientes funcionais, lazer e conveniência. Um projeto contemporâneo com apartamentos de 2 ou 3 dormitórios e uma infraestrutura condominial completa e preparada para todos os momentos da sua rotina.",
      "Com arquitetura moderna e paisagismo integrado, o condomínio conta com 7 torres de 9 andares, portaria inteligente com guarita e espaço delivery, além de um complexo de lazer central que proporciona segurança e bem-estar para toda a família.",
    ],
  },

  apartmentHighlights: [
    {
      title: "Sacada privativa",
      description: "Todas as unidades contam com sacada integrada, proporcionando iluminação natural e amplitude.",
      icon: "Sun",
    },
    {
      title: "Churrasqueira em todos os apartamentos",
      description: "Churrasqueira a carvão privativa para reunir quem você ama no conforto do lar.",
      icon: "Flame",
    },
    {
      title: "Rebaixo de gesso",
      description: "Acabamento sofisticado com rebaixo de gesso na cozinha e nos banheiros.",
      icon: "Layers",
    },
    {
      title: "Espera para água quente",
      description: "Tubulação preparada para aquecimento de água em todos os pontos do apartamento.",
      icon: "Droplets",
    },
    {
      title: "Gás natural encanado",
      description: "Comodidade e segurança com fornecimento contínuo de gás natural canalizado.",
      icon: "Gauge",
    },
    {
      title: "Vaga de estacionamento privativa",
      description: "Box individual garantido e demarcado para a sua comodidade e segurança.",
      icon: "Car",
    },
    {
      title: "Medidores individuais",
      description: "Controle total de consumo com medição individualizada de água, gás e energia elétrica.",
      icon: "Activity",
    },
    {
      title: "Elevadores nas torres",
      description: "Mobilidade e acessibilidade com elevadores modernos atendendo a todos os pavimentos.",
      icon: "ArrowUpDown",
    },
    {
      title: "Espera seca para split",
      description: "Infraestrutura seca para instalação de ar-condicionado na sala e nos dormitórios.",
      icon: "Wind",
    },
    {
      title: "Apartamentos Garden exclusivos",
      description: "Pátio privativo descoberto nas unidades térreas elegíveis (finais 02, 04, 06 e 08).",
      icon: "Trees",
    },
    {
      title: "Opção de Living Estendido",
      description: "Flexibilidade de planta para integrar e ampliar a área social da sua sala de estar.",
      icon: "Maximize2",
    },
  ],

  amenitiesCategories: [
    { id: "all", label: "Todos os espaços" },
    { id: "lazer", label: "Lazer e Diversão" },
    { id: "convivencia", label: "Convivência" },
    { id: "conveniencia", label: "Conveniência & Trabalho" },
    { id: "bem-estar", label: "Bem-estar" },
  ],

  amenities: [
    {
      id: "piscinas",
      name: "Piscinas Adulto e Infantil",
      category: "lazer",
      categoryLabel: "Lazer e Diversão",
      description:
        "Amplo deck molhado e solarium mobiliado com espreguiçadeiras e ombrelones, cercado por paisagismo e segurança para refrescar os dias de verão.",
      image: "/images/amenities/piscinas.jpg",
      badge: "Lazer aquático",
      highlights: ["Piscina adulto", "Piscina infantil", "Deck com espreguiçadeiras", "Área cercada segura"],
    },
    {
      id: "espaco-gourmet",
      name: "Espaço Gourmet Mobiliado",
      category: "convivencia",
      categoryLabel: "Convivência",
      description:
        "Espaço gastronômico entregue mobiliado e equipado com parrilla, forno elétrico, cooktop e refrigerador, perfeito para confraternizações sofisticadas.",
      image: "/images/amenities/espaco-gourmet.png",
      badge: "Entregue Mobiliado*",
      highlights: ["Parrilla integrada", "Forno elétrico & cooktop", "Mesa de jantar ampla", "Bancada americana"],
    },
    {
      id: "salao-de-festas",
      name: "Salão de Festas",
      category: "convivencia",
      categoryLabel: "Convivência",
      description:
        "Ambiente refinado para celebrar grandes datas, com mobiliário contemporâneo, bancada de apoio, copa completa e atmosfera acolhedora.",
      image: "/images/amenities/salao-de-festas.jpg",
      badge: "Comemorações",
      highlights: ["Mobiliário refinado", "Copa equipada", "Bancada de apoio", "Capacidade planejada"],
    },
    {
      id: "fitness",
      name: "Espaço Fitness Funcional",
      category: "bem-estar",
      categoryLabel: "Bem-estar",
      description:
        "Estrutura completa para exercícios funcionais e bem-estar físico diário, equipada com espaldar, kettlebells, halteres, colchonetes e steps.",
      image: "/images/amenities/espaco-fitness.png",
      badge: "Saúde & Treino",
      highlights: ["Piso emborrachado", "Equipamentos funcionais", "Espaldar sueco", "Iluminação natural"],
    },
    {
      id: "jogos-brinquedoteca",
      name: "Sala de Jogos & Brinquedoteca",
      category: "lazer",
      categoryLabel: "Lazer e Diversão",
      description:
        "Diversão para todas as idades com mesa de sinuca, pebolim, lousa de pontos e ambiente lúdico integrado para crianças e adultos.",
      image: "/images/amenities/jogos-e-brinquedoteca.png",
      badge: "Entretenimento",
      highlights: ["Mesa de sinuca", "Pebolim oficial", "Espaço lúdico", "Painel de jogos"],
    },
    {
      id: "quadra-esportiva",
      name: "Quadra Esportiva Infantil",
      category: "lazer",
      categoryLabel: "Lazer e Diversão",
      description:
        "Quadra cercada para prática de futebol e esportes ao ar livre, estimulando a convivência ativa e a brincadeira saudável.",
      image: "/images/amenities/quadra-esportiva.png",
      badge: "Esportes ao ar livre",
      highlights: ["Totalmente cercada", "Goleiras infantis", "Piso resistente", "Iluminação"],
    },
    {
      id: "playground",
      name: "Playground Externo",
      category: "lazer",
      categoryLabel: "Lazer e Diversão",
      description:
        "Área infantil com balanços de madeira tratada, escorregador e circuito de escalada em piso de areia higienizada, rodeado de árvores e sombra natural.",
      image: "/images/amenities/playground.jpg",
      badge: "Ar livre",
      highlights: ["Balanços de madeira", "Rampa de escalada", "Área de areia", "Cercado de verde"],
    },
    {
      id: "coworking",
      name: "Coworking & Salas de Apoio",
      category: "conveniencia",
      categoryLabel: "Conveniência & Trabalho",
      description:
        "Ambiente silencioso e climatizado projetado para home office produtivo, reuniões e estudos sem precisar sair do condomínio.",
      badge: "Produtividade",
      highlights: ["Estações de trabalho", "Pontos de energia e rede", "Salas de apoio", "Conforto acústico"],
    },
    {
      id: "quiosques",
      name: "Quiosques com Churrasqueira",
      category: "convivencia",
      categoryLabel: "Convivência",
      description:
        "Espaços charmosos ao ar livre equipados com churrasqueira para um almoço em família ou churrasco informal entre vizinhos e amigos.",
      badge: "Confraternização",
      highlights: ["Grelhas a carvão", "Bancada e pia", "Mesas ao ar livre", "Paisagismo circundante"],
    },
    {
      id: "marketplace",
      name: "Espaço para Marketplace Autônomo",
      category: "conveniencia",
      categoryLabel: "Conveniência & Trabalho",
      description:
        "Conveniência dentro do condomínio com espaço dedicado para minimercado 24 horas inteligente com autoatendimento (grab & go).",
      badge: "Praticidade 24h",
      highlights: ["Espaço dedicado", "Conveniência 24/7", "Autoatendimento", "Itens de primeira necessidade"],
    },
    {
      id: "portaria-delivery",
      name: "Guarita & Espaço Delivery",
      category: "conveniencia",
      categoryLabel: "Conveniência & Trabalho",
      description:
        "Controle de acesso inteligente com guarita de segurança e área isolada exclusiva para recebimento organizado de encomendas e delivery.",
      image: "/images/hero/portico-entrada.png",
      badge: "Segurança 24h",
      highlights: ["Acesso seguro de pedestres", "Cancelas automáticas", "Armazenamento de encomendas", "Controle de acesso"],
    },
    {
      id: "espaco-pet",
      name: "Espaço Pet",
      category: "bem-estar",
      categoryLabel: "Bem-estar",
      description:
        "Área gramada e delimitada para os animais de estimação brincarem, gastarem energia e socializarem com segurança ao ar livre.",
      badge: "Pet friendly",
      highlights: ["Área cercada", "Circuito de agilidade", "Piso gramado", "Bebedouro pet"],
    },
  ] as Amenity[],

  floorPlans: [
    {
      id: "48m2-padrao",
      name: "Planta 48,94 m²",
      tagline: "2 Dormitórios · Sacada com Churrasqueira",
      bedrooms: 2,
      area: "48,94 m²",
      units: "Finais 03, 04, 05 e 06",
      badge: "Mais Procurada",
      features: [
        "2 dormitórios bem distribuídos",
        "Sacada com churrasqueira a carvão",
        "Cozinha integrada à área de serviço",
        "Banheiro social ventilado",
        "1 vaga de garagem privativa",
      ],
      dimensions: [
        { room: "Dormitório 1 (Casal)", area: "9,27 m²" },
        { room: "Dormitório 2", area: "6,90 m²" },
        { room: "Living", area: "11,96 m²" },
        { room: "Cozinha", area: "4,00 m²" },
        { room: "Sacada com churrasqueira", area: "3,03 m²" },
        { room: "Banheiro", area: "2,49 m²" },
        { room: "Lavanderia", area: "1,79 m²" },
        { room: "Circulação", area: "1,31 m²" },
      ],
      image: "/images/floor-plans/planta-48m2.png",
      whatsappMessage:
        "Olá! Gostaria de consultar valores e disponibilidade da planta de 48,94 m² (2 dormitórios) do Residencial ORA.",
    },
    {
      id: "48m2-living-estendido",
      name: "Planta 48,94 m² — Living Estendido",
      tagline: "1 Suíte/Dormitório · Living Ampliado de 18,95 m²",
      bedrooms: 1,
      area: "48,94 m²",
      units: "Finais 03, 04, 05 e 06 (Opção Personalizável)",
      badge: "Living Estendido",
      features: [
        "Living ampliado de 18,95 m² integrado à cozinha",
        "Dormitório máster espaçoso de 9,27 m²",
        "Sacada com churrasqueira a carvão",
        "Ideal para casais jovens ou quem mora só",
        "1 vaga de garagem privativa",
      ],
      dimensions: [
        { room: "Dormitório Máster", area: "9,27 m²" },
        { room: "Living Estendido", area: "18,95 m²" },
        { room: "Cozinha", area: "4,00 m²" },
        { room: "Sacada com churrasqueira", area: "3,03 m²" },
        { room: "Banheiro", area: "2,49 m²" },
        { room: "Lavanderia", area: "1,79 m²" },
        { room: "Circulação", area: "1,31 m²" },
      ],
      image: "/images/floor-plans/planta-48m2-living-estendido.png",
      whatsappMessage:
        "Olá! Gostaria de consultar a planta de 48,94 m² com Living Estendido do Residencial ORA.",
    },
    {
      id: "49m2-padrao",
      name: "Planta 49,67 m²",
      tagline: "2 Dormitórios · Sacada com Churrasqueira",
      bedrooms: 2,
      area: "49,67 m²",
      units: "Finais 02 e 08",
      badge: "Excelente Circulação",
      features: [
        "2 dormitórios com ótima privacidade",
        "Living espaçoso de 13,18 m²",
        "Sacada com churrasqueira",
        "Cozinha linear com lavanderia integrada",
        "1 vaga de garagem privativa",
      ],
      dimensions: [
        { room: "Dormitório 1", area: "9,27 m²" },
        { room: "Dormitório 2", area: "6,91 m²" },
        { room: "Living", area: "13,18 m²" },
        { room: "Cozinha", area: "4,14 m²" },
        { room: "Sacada com churrasqueira", area: "3,03 m²" },
        { room: "Banheiro", area: "2,48 m²" },
        { room: "Lavanderia", area: "1,79 m²" },
        { room: "Circulação", area: "1,04 m²" },
      ],
      image: "/images/floor-plans/planta-49m2.png",
      whatsappMessage:
        "Olá! Gostaria de consultar valores e disponibilidade da planta de 49,67 m² (2 dormitórios) do Residencial ORA.",
    },
    {
      id: "60m2-padrao",
      name: "Planta 60,86 m²",
      tagline: "3 Dormitórios (ou 2 Dorms + Home Office) · Sacada com Churrasqueira",
      bedrooms: 3,
      area: "60,86 m²",
      units: "Finais 01 e 07",
      badge: "Maior Metragem",
      features: [
        "3 dormitórios planejados (opção de home office)",
        "Living espaçoso de 13,41 m²",
        "Sacada ampla com churrasqueira",
        "Cozinha integrada com lavanderia",
        "1 vaga de garagem privativa",
      ],
      dimensions: [
        { room: "Dormitório 1", area: "9,97 m²" },
        { room: "Dormitório 2 / Escritório", area: "6,91 m²" },
        { room: "Dormitório 3", area: "6,41 m²" },
        { room: "Living", area: "13,41 m²" },
        { room: "Cozinha", area: "4,14 m²" },
        { room: "Sacada com churrasqueira", area: "3,03 m²" },
        { room: "Banheiro", area: "2,61 m²" },
        { room: "Lavanderia", area: "1,79 m²" },
        { room: "Circulação", area: "3,24 m²" },
      ],
      image: "/images/floor-plans/planta-60m2.png",
      whatsappMessage:
        "Olá! Gostaria de consultar valores e disponibilidade da planta de 60,86 m² (3 dormitórios) do Residencial ORA.",
    },
    {
      id: "60m2-living-estendido",
      name: "Planta 60,86 m² — Living Estendido",
      tagline: "2 Dorms/Office · Super Living Integrado de 20,11 m²",
      bedrooms: 2,
      area: "60,86 m²",
      units: "Finais 01 e 07 (Opção Personalizável)",
      badge: "Exclusividade Living Estendido",
      features: [
        "Super living ampliado de 20,11 m² com iluminação privilegiada",
        "Dormitório máster de 9,97 m² + Escritório/Home Office",
        "Sacada generosa com churrasqueira a carvão",
        "Espaço gourmet de estar incomparável",
        "1 vaga de garagem privativa",
      ],
      dimensions: [
        { room: "Dormitório 1", area: "9,97 m²" },
        { room: "Escritório / Dormitório 2", area: "6,91 m²" },
        { room: "Living Estendido Integrado", area: "20,11 m²" },
        { room: "Cozinha", area: "4,14 m²" },
        { room: "Sacada com churrasqueira", area: "3,03 m²" },
        { room: "Banheiro", area: "2,61 m²" },
        { room: "Lavanderia", area: "1,79 m²" },
        { room: "Circulação", area: "3,24 m²" },
      ],
      image: "/images/floor-plans/planta-60m2-living-estendido.png",
      whatsappMessage:
        "Olá! Gostaria de consultar a planta de 60,86 m² com Living Estendido do Residencial ORA.",
    },
    {
      id: "garden-101m2",
      name: "Planta Garden 101,19 m²",
      tagline: "Apartamento 2 Dormitórios + Pátio Privativo de 40 m²",
      bedrooms: 2,
      area: "49,67 m² privativos internos",
      totalArea: "101,19 m² privativos totais (com pátio de 40 m²)",
      units: "Térreo · Finais 02 e 08",
      badge: "Unidade Garden",
      features: [
        "Pátio privativo descoberto de 40 m² para jardim ou lazer exclusivo",
        "2 dormitórios confortáveis",
        "Sacada com churrasqueira conectada ao pátio",
        "Espaço perfeito para pets e crianças",
        "1 vaga de garagem privativa",
      ],
      dimensions: [
        { room: "Pátio Privativo Garden", area: "40,00 m²" },
        { room: "Dormitório 1", area: "9,27 m²" },
        { room: "Dormitório 2", area: "6,91 m²" },
        { room: "Living", area: "13,18 m²" },
        { room: "Cozinha", area: "4,14 m²" },
        { room: "Sacada", area: "3,03 m²" },
        { room: "Banheiro", area: "2,48 m²" },
        { room: "Lavanderia", area: "1,79 m²" },
      ],
      image: "/images/floor-plans/planta-garden-101m2.png",
      whatsappMessage:
        "Olá! Gostaria de saber a disponibilidade e valores da unidade Garden de 101,19 m² do Residencial ORA.",
    },
    {
      id: "garden-105m2",
      name: "Planta Garden 105,46 m²",
      tagline: "Apartamento 2 Dormitórios + Pátio Privativo de 45 m²",
      bedrooms: 2,
      area: "48,94 m² privativos internos",
      totalArea: "105,46 m² privativos totais (com pátio de 45 m²)",
      units: "Térreo · Finais 04 e 06",
      badge: "Maior Garden",
      features: [
        "Pátio privativo descoberto de 45 m² — o maior pátio do empreendimento",
        "2 dormitórios com opção de living estendido",
        "Sacada com churrasqueira integrada",
        "Sensação de viver em uma casa com a segurança de condomínio fechado",
        "1 vaga de garagem privativa",
      ],
      dimensions: [
        { room: "Pátio Privativo Garden", area: "45,00 m²" },
        { room: "Dormitório 1", area: "9,27 m²" },
        { room: "Dormitório 2", area: "6,90 m²" },
        { room: "Living", area: "11,96 m²" },
        { room: "Cozinha", area: "4,00 m²" },
        { room: "Sacada", area: "3,03 m²" },
        { room: "Banheiro", area: "2,49 m²" },
        { room: "Lavanderia", area: "1,79 m²" },
      ],
      image: "/images/floor-plans/planta-garden-105m2.png",
      whatsappMessage:
        "Olá! Gostaria de saber a disponibilidade e valores da unidade Garden de 105,46 m² do Residencial ORA.",
    },
  ] as FloorPlan[],

  interiors: [
    {
      title: "Living & Sala de Estar Integrada",
      subtitle: "Conexão harmônica entre estar, jantar e cozinha",
      description:
        "Projetado para valorizar o convívio, o living traz iluminação natural generosa, piso vinílico acolhedor e integração visual perfeita com a sacada e a churrasqueira.",
      image: "/images/interiors/living-principal.jpg",
      tag: "Área Social",
    },
    {
      title: "Living Estendido Decorado",
      subtitle: "Amplitude exclusiva para o seu estilo de vida",
      description:
        "Uma configuração moderna que expande a sala de estar, integrando painéis ripados iluminados por fita de LED embutida, acabamento em cimento queimado e sofisticação contemporânea.",
      image: "/images/interiors/living-estendido.jpg",
      tag: "Conceito Aberto",
    },
    {
      title: "Dormitório Principal",
      subtitle: "Refúgio de conforto, silêncio e elegância",
      description:
        "Quarto de casal com espaço planejado para closet envidraçado com iluminação indireta em LED, cabeceira amadeirada curva e penteadeira iluminada com espelho orgânico.",
      image: "/images/interiors/dormitorio-master.jpg",
      tag: "Suíte / Casal",
    },
    {
      title: "Segundo Dormitório / Home Office",
      subtitle: "Versatilidade para viver, trabalhar e sonhar",
      description:
        "Ambiente reversível adaptável para home office produtivo, quarto infantil ou quarto de hóspedes, com bancada suspensa em marcenaria e armários superiores iluminados.",
      image: "/images/interiors/dormitorio-office.png",
      tag: "Home Office / Quarto 2",
    },
  ],

  realDecoradoPhotos: [
    {
      id: "real-living-jantar",
      title: "Living e Jantar com Conceito Aberto",
      subtitle: "Mesa redonda, pendente artesanal e integração com a sacada",
      description:
        "Ambiente social acolhedor com piso vinílico, painel amadeirado iluminado e integração total entre sala de estar, jantar e cozinha.",
      image: "/images/decorado-real/foto-real-living-jantar-amplo.jpg",
      tag: "Living & Jantar",
    },
    {
      id: "real-cozinha-integrada",
      title: "Cozinha Americana & Espaço Jantar",
      subtitle: "Marcenaria sofisticada e bancada gourmet com iluminação LED",
      description:
        "Cozinha planejada com armários modernos, iluminação LED linear embutida nas prateleiras e bancada com banquetas para refeições práticas.",
      image: "/images/decorado-real/foto-real-cozinha-integrada.jpg",
      tag: "Cozinha & Bar",
    },
    {
      id: "real-dormitorio-casal",
      title: "Dormitório do Casal com Cabeceira Iluminada",
      subtitle: "Design contemporâneo, cabeceira curva em halo de LED e penteadeira",
      description:
        "Quarto principal aconchegante com cabeceira curva em madeira com iluminação quente em halo de LED, penteadeira com espelho e armário com cabideiro iluminado.",
      image: "/images/decorado-real/foto-real-dormitorio-casal.jpg",
      tag: "Suíte Master",
    },
    {
      id: "real-home-office",
      title: "Dormitório 2 Decorado como Home Office",
      subtitle: "Bancada suspensa, iluminação em trilho de spots e parede verde sálvia",
      description:
        "Espaço versátil para trabalho remoto e estudos, com marcenaria sob medida, prateleiras suspensas iluminadas, sofá-cama e amplo espelho.",
      image: "/images/decorado-real/foto-real-dormitorio-home-office.jpg",
      tag: "Home Office",
    },
    {
      id: "real-cozinha-bancada",
      title: "Bancada Gourmet e Adega Integrada",
      subtitle: "Bancada em pedra, torneira monocomando preta e nichos para vinho",
      description:
        "Detalhe da área de preparo com torneira preta flexível de alto padrão, cuba em inox, marcenaria sob medida e nichos para garrafas.",
      image: "/images/decorado-real/foto-real-cozinha-bancada.jpg",
      tag: "Cozinha Planejada",
    },
    {
      id: "real-banheiro",
      title: "Banheiro Social Acabamento Premium",
      subtitle: "Bancada esculpida, metais pretos foscos e espelho com LED",
      description:
        "Banheiro entregue com revestimento em porcelanato, bancada branca esculpida, torneira preta fosca e box de vidro com perfis pretos até o teto.",
      image: "/images/decorado-real/foto-real-banheiro.jpg",
      tag: "Banheiro Social",
    },
    {
      id: "real-living-sofa",
      title: "Sala de Estar Aconchegante",
      subtitle: "Sofá em linho claro, almofadas e iluminação cênica embutida",
      description:
        "Conforto e sofisticação no estar com iluminação linear embutida no forro de gesso e conexão fluida com a circulação dos dormitórios.",
      image: "/images/decorado-real/foto-real-living-sofa.jpg",
      tag: "Sala de Estar",
    },
    {
      id: "real-jantar-pendente",
      title: "Espaço Jantar com Lustre Tramado",
      subtitle: "Toque artesanal nobre e atmosfera convidativa",
      description:
        "Lustre pendente de palha tramada sobre a mesa redonda, criando uma iluminação cênica intimista para momentos especiais em família.",
      image: "/images/decorado-real/foto-real-jantar-pendente.jpg",
      tag: "Sala de Jantar",
    },
    {
      id: "real-detalhe-living",
      title: "Detalhe do Estar e Iluminação Natural",
      subtitle: "Estante decorada e luz abundante da sacada",
      description:
        "Harmonia entre marcenaria amadeirada, iluminação indireta, vegetação interna e luz natural abundante proporcionada pela sacada.",
      image: "/images/decorado-real/foto-real-detalhe-living.jpg",
      tag: "Detalhes do Estar",
    },
    {
      id: "real-sala-perspectiva",
      title: "Perspectiva Integrada do Apartamento",
      subtitle: "Sensação de amplitude e circulação otimizada",
      description:
        "Visão a partir do sofá integrando estar, circulação dos quartos, copa e bancada da cozinha americana.",
      image: "/images/decorado-real/foto-real-sala-perspectiva.jpg",
      tag: "Conceito Aberto",
    },
  ],

  location: {
    title: "Uma localização para acompanhar seu ritmo.",
    subtitle: "O Residencial ORA está localizado na região Igara / São José, em Canoas/RS.",
    address: "Rua Pirapó, 1553",
    neighborhood: "Igara / São José",
    cityState: "Canoas - RS",
    cep: "92410-240",
    description:
      "Situado na valorizada região Igara/São José, um dos eixos residenciais mais desejados de Canoas, o Residencial ORA combina tranquilidade residencial com facilidade de deslocamento e acesso rápido às principais conveniências da cidade e da Região Metropolitana.",
    highlights: [
      {
        title: "Região Igara / São José",
        description: "Bairro nobre, consolidado e em constante valorização imobiliária em Canoas.",
      },
      {
        title: "Condomínio fechado",
        description: "Mais segurança, tranquilidade e privacidade para você e sua família.",
      },
      {
        title: "Infraestrutura ao redor",
        description: "Proximidade de comércios, serviços essenciais, escolas e vias de acesso.",
      },
      {
        title: "Mobilidade facilitada",
        description: "Acesso ágil para o centro de Canoas, BR-116 e Porto Alegre.",
      },
    ],
  },

  developer: {
    title: "A experiência de quem constrói histórias há décadas.",
    subtitle: "Mais de 44 anos de compromisso, credibilidade e solidez na construção civil.",
    name: "Lottici Construtora e Incorporadora",
    description:
      "A Lottici é uma construtora e incorporadora sediada em Canoas, com mais de 44 anos de experiência divulgados em seu site institucional. Sua sólida trajetória é marcada pelo desenvolvimento de empreendimentos residenciais de excelência e pelo compromisso inegociável com qualidade construtiva, funcionalidade, respeito aos clientes e pontualidade na entrega.",
    website: "https://lottici.com.br/",
    officialLink: "https://lottici.com.br/empreendimentos-ora/",
    stats: [
      { label: "Anos de Experiência", value: "+44" },
      { label: "Sede Própria", value: "Canoas/RS" },
      { label: "Compromisso", value: "100%" },
    ],
  },

  faq: [
    {
      question: "Onde fica o Residencial ORA?",
      answer:
        "O Residencial ORA está localizado na Rua Pirapó, 1553, na região Igara / São José, em Canoas/RS (CEP 92410-240). Uma região residencial valorizada, calma e com ótima infraestrutura.",
    },
    {
      question: "Quais são as opções de apartamentos?",
      answer:
        "O empreendimento oferece apartamentos de 2 e 3 dormitórios, com metragens privativas de 48,94 m², 49,67 m² e 60,86 m², além das opções exclusivas com Living Estendido e unidades térreas Garden de até 105,46 m² privativos totais.",
    },
    {
      question: "Os apartamentos possuem churrasqueira?",
      answer:
        "Sim! Todas as unidades contam com churrasqueira a carvão privativa na sacada, um diferencial informado e confirmado pela construtora para o seu lazer.",
    },
    {
      question: "Todas as unidades possuem sacada?",
      answer:
        "Sim, conforme a descrição e plantas oficiais do empreendimento, 100% dos apartamentos contam com sacada privativa integrada.",
    },
    {
      question: "O condomínio terá piscina?",
      answer:
        "Sim! O projeto contempla um complexo aquático com piscinas adulto e infantil, deck amplo e solarium mobiliado com espreguiçadeiras.",
    },
    {
      question: "Existem apartamentos garden?",
      answer:
        "Sim! As unidades garden possuem pátios privativos descobertos de 40 m² a 45 m² e estão disponíveis especificamente nas unidades térreas de finais 02, 04, 06 e 08 de cada torre.",
    },
    {
      question: "Como posso consultar valores e disponibilidade?",
      answer:
        "Basta entrar em contato diretamente com a equipe comercial da Lottici pelo botão do WhatsApp disponível nesta página ou pelo telefone comercial (51) 99204-9182. Nossa equipe fornecerá tabela atualizada e condições especiais.",
    },
  ],
};

