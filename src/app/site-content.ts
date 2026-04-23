export type ServiceItem = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  intro: string;
  highlights: string[];
  subservices: SubserviceItem[];
};

export type SubserviceItem = {
  title: string;
  description: string;
  image: string;
};

export type MenuItem = {
  label: string;
  fragment?: string;
  route?: string;
};

export const TOP_MENU: MenuItem[] = [
  { label: 'Inicio', fragment: 'inicio' },
  { label: 'Conócenos', fragment: 'conocenos' },
  { label: 'Servicios', route: '/servicios' },
  { label: 'Contacto', fragment: 'contacto' }
];

export const ABOUT_LINKS = [
  { label: 'Galería de imágenes', fragment: 'galeria' },
  { label: 'Galería de vídeos', fragment: 'videos' },
  { label: 'Saber Más', fragment: 'noticias' },
  { label: 'Noticias', fragment: 'noticias' },
  { label: 'Tour virtual', fragment: 'tour-virtual' }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Matrimonial y Familia',
    slug: 'matrimonial-y-familia',
    image: '/assets/site/galeria1.webp',
    summary: 'Separaciones, divorcios, custodia y mediación familiar.',
    intro:
      'Te acompañamos en procesos de familia con un trato cercano, claro y orientado a resolver lo importante con la menor fricción posible.',
    highlights: [
      '1.1.- Divorcios',
      '1.2.- Liquidación gananciales',
      '1.3.- Mediación familiar para acuerdos de custodia y medidas de divorcio',
      '1.4.- Modificación de medidas',
      '1.5.- Custodia de menores',
      '1.6.- Impago pensiones de alimentos',
      '1.7.- Parejas de hecho',
      '1.8.- Violencia de género',
      '1.9.- Apoyo a personas con discapacidad',
      '1.10.- Expedientes de adopción y cambio apellidos'
    ],
    subservices: [
      {
        title: 'Divorcios',
        description: 'Tramitamos divorcios de mutuo acuerdo o contenciosos con un enfoque claro y cercano.',
        image: '/assets/site/Divorcios/divorcio.jpg'
      },
      {
        title: 'Liquidación gananciales',
        description: 'Ordenamos y defendemos la liquidación del patrimonio común tras la separación.',
        image: '/assets/site/Divorcios/liquidacion.jpeg'
      },
      {
        title: 'Mediación familiar',
        description: 'Buscamos acuerdos de custodia y medidas de divorcio sin alargar el conflicto.',
        image: '/assets/site/Divorcios/mediacionFamiliar.webp'
      },
      {
        title: 'Modificación de medidas',
        description: 'Adaptamos medidas previas cuando cambian las circunstancias familiares.',
        image: '/assets/site/Divorcios/Modificación de medidas.jpg'
      },
      {
        title: 'Custodia de menores',
        description: 'Defendemos la custodia y el régimen de visitas con prioridad en el interés del menor.',
        image: '/assets/site/Divorcios/Custodia de menores.jpeg'
      },
      {
        title: 'Impago de alimentos',
        description: 'Reclamamos pensiones impagadas y protegemos el derecho de los menores.',
        image: '/assets/site/Divorcios/Impago de alimentos.jpeg'
      },
      {
        title: 'Parejas de hecho',
        description: 'Asesoramiento jurídico para parejas registradas o no registradas.',
        image: '/assets/site/Divorcios/Parejas de hecho.jpg'
      },
      {
        title: 'Violencia de género',
        description: 'Acompañamiento jurídico inmediato y con máxima sensibilidad en situaciones de riesgo.',
        image: '/assets/site/Divorcios/Violencia de género.jpeg'
      },
      {
        title: 'Discapacidad y apoyo',
        description: 'Gestionamos medidas de apoyo y protección para personas con discapacidad.',
        image: '/assets/site/Divorcios/Discapacidad y apoyo.jpeg'
      },
      {
        title: 'Adopción y apellidos',
        description: 'Tramitamos expedientes de adopción y cambio de apellidos.',
        image: '/assets/site/Divorcios/Adopciónyapellidos.jpeg'
      }
    ]
  },
  {
    title: 'Herencias',
    slug: 'herencias',
    image: '/assets/site/galeria2.webp',
    summary: 'Testamentos, partición de herencias y acuerdos entre herederos.',
    intro:
      'Gestionamos herencias con foco en la claridad documental, la defensa de tus derechos y la reducción de conflictos familiares.',
    highlights: [
      '2.1.- Testamentos',
      '2.2.- Partición de herencias',
      '2.3.- Acuerdos entre herederos',
      '2.4.- Demandas de partición hereditaria',
      '2.5.- Valoración de bienes de la herencia',
      '2.6.- Liquidación impuesto sucesiones'
    ],
    subservices: [
      {
        title: 'Testamentos',
        description: 'Redacción, revisión y planificación testamentaria para evitar conflictos futuros.',
        image: '/assets/Herencias/Testamentos.webp'
      },
      {
        title: 'Partición de herencias',
        description: 'Ordenamos la división de bienes y derechos entre herederos.',
        image: '/assets/Herencias/Partición de herencias.jpeg'
      },
      {
        title: 'Acuerdos entre herederos',
        description: 'Facilitamos acuerdos equilibrados para reducir la judicialización.',
        image: '/assets/Herencias/Acuerdos entre herederos.jpeg'
      },
      {
        title: 'Demanda de partición',
        description: 'Defensa en procedimientos judiciales de partición hereditaria.',
        image: '/assets/Herencias/Demanda de partición.png'
      },
      {
        title: 'Valoración de bienes',
        description: 'Determinamos el valor de los bienes que integran la herencia.',
        image: '/assets/Herencias/Valoración de bienes.jpeg'
      },
      {
        title: 'Impuesto de sucesiones',
        description: 'Liquidamos y gestionamos el impuesto de sucesiones con seguridad jurídica.',
        image: '/assets/Herencias/Impuesto de sucesiones.jpeg'
      }
    ]
  },
  {
    title: 'Arrendamientos y Propiedades',
    slug: 'arrendamientos',
    image: '/assets/site/servicio4.jpg',
    summary: 'Contratos de alquiler, desahucios y conflictos sobre inmuebles.',
    intro:
      'Trabajamos contratos y conflictos de arrendamiento con una visión práctica para proteger tu posición desde el inicio.',
    highlights: [
      '3.1.- Contratos de arrendamiento de viviendas, locales comerciales y naves',
      '3.2.- Desahucios',
      '3.3.- Reclamación de impagados',
      '3.4.- Comunidades de bienes',
      '3.5.- Demandas relacionadas con inmuebles'
    ],
    subservices: [
      {
        title: 'Contratos de arrendamiento',
        description: 'Redacción y revisión de contratos para viviendas, locales y naves.',
        image: '/assets/Arrendamiento/Contratos de arrendamiento.jpeg'
      },
      {
        title: 'Desahucios',
        description: 'Procedimientos de desahucio por impago, precario o vencimiento.',
        image: '/assets/Arrendamiento/Desahucios.jpeg'
      },
      {
        title: 'Reclamación de impagados',
        description: 'Recuperamos cantidades adeudadas vinculadas a alquileres o inmuebles.',
        image: '/assets/Arrendamiento/Reclamación de impagados.jpeg'
      },
      {
        title: 'Comunidades de bienes',
        description: 'Asesoramiento en la gestión y disolución de comunidades de bienes.',
        image: '/assets/Arrendamiento/Comunidades de bienes.jpeg'
      },
      {
        title: 'Demandas sobre inmuebles',
        description: 'Defensa en litigios relacionados con propiedades y derechos reales.',
        image: '/assets/Arrendamiento/Demandas sobre inmuebles.jpeg'
      }
    ]
  },
  {
    title: 'Accidentes',
    slug: 'accidentes',
    image: '/assets/site/hero.jpg',
    summary: 'Reclamación de indemnizaciones por accidentes de tráfico y daños personales.',
    intro:
      'Nos ocupamos de la reclamación para que puedas centrarte en tu recuperación mientras defendemos la indemnización que corresponde.',
    highlights: [
      '4.1.- Reclamación ante compañías de seguros',
      '4.2.- Mediación',
      '4.3.- Indemnización accidente de tráfico',
      '4.4.- Indemnización daños y lesiones causadas por animales',
      '4.5.- Indemnización por caídas'
    ],
    subservices: [
      {
        title: 'Reclamación a aseguradoras',
        description: 'Tramitamos la reclamación directa frente a compañías de seguros.',
        image: '/assets/Accidentes/Reclamación a aseguradoras.png'
      },
      {
        title: 'Mediación',
        description: 'Buscamos soluciones negociadas antes de ir a juicio.',
        image: '/assets/Accidentes/Mediación.jpg'
      },
      {
        title: 'Accidente de tráfico',
        description: 'Reclamación de indemnización por lesiones y daños materiales.',
        image: '/assets/Accidentes/Accidente de tráfico.jpeg'
      },
      {
        title: 'Daños por animales',
        description: 'Defensa en reclamaciones por lesiones causadas por animales.',
        image: '/assets/Accidentes/Daños por animales.jpeg'
      },
      {
        title: 'Caídas e indemnización',
        description: 'Evaluamos y reclamamos daños por caídas en espacios públicos o privados.',
        image: '/assets/Accidentes/Caídas e indemnización.jpeg'
      }
    ]
  }
];

export const GALLERY = [
  { title: 'Asesoramiento jurídico eficaz', img: '/assets/site/hero-main.jpg' },
  { title: 'Demandas de divorcio en Oviedo', img: '/assets/site/galeria1.webp' },
  { title: 'Abogada con alto nivel de cualificación y mucha experiencia', img: '/assets/site/galeria03.webp' },
  { title: 'Lydia García, abogada', img: '/assets/site/galeria04.webp' },
  { title: 'Abogados especialistas en arrendamientos en Oviedo', img: '/assets/site/servicio4.jpg' },
  { title: 'Abogados especialistas en accidentes de tráfico en Oviedo', img: '/assets/site/hero.jpg' },
  { title: 'Abogado concursal en Oviedo', img: '/assets/site/servicio7.jpg' },
  { title: 'Abogado especialista en divorcios en Oviedo', img: '/assets/site/servicio8.jpg' },
  { title: 'Nulidades matrimoniales en Oviedo', img: '/assets/site/servicio9.jpg' },
  { title: 'Abogado especialista en separaciones en Oviedo', img: '/assets/site/galeria05.webp' },
  { title: 'Reclamación de seguros en Oviedo', img: '/assets/site/galeria06.webp' }
];

export const NEWS = [
  { title: 'Póngase en contacto con nosotros', img: '/assets/site/galeria04.webp' },
  { title: 'Asesoramiento jurídico eficaz', img: '/assets/site/galeria05.webp' }
];

export const LEGAL_LINKS = [
  'Aviso legal',
  'Política de privacidad',
  'Política de cookies',
  'Declaración accesibilidad',
  'Política de envío y devoluciones'
];

export const SEO_LINKS = [
  'Abogados de herencias en Oviedo',
  'Abogados para accidentes de tráfico en Oviedo',
  'Abogado concursal Oviedo',
  'Reclamación seguros Oviedo',
  'Abogados de accidentes en Oviedo',
  'Abogados arrendamientos Oviedo',
  'Abogados de divorcios en Oviedo',
  'Abogados especialistas en alquileres Oviedo',
  'Abogados matrimonialistas Oviedo',
  'Abogados separaciones Oviedo',
  'Demandas de divorcio Oviedo',
  'Nulidades matrimoniales Oviedo'
];
