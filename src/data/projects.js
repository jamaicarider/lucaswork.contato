// Edite este arquivo para adicionar/remover/alterar projetos e mídias.
// Tipos de item aceitos em "media": 'image' | 'video'
// Um item de media pode ter comingSoon: true para virar um placeholder "em breve"

export const projects = [
  {
    slug: 'nabo',
    number: '001',
    title: 'Nabō Agency',
    comingSoon: false,
    intro:
      'Lead Designer na NABŌ — soluções criativas para clientes premium nos setores de lifestyle, wellness, gastronomia e hospitalidade.',
    media: [
      {
        type: 'image',
        src: '/images/nabo-basement-01.jpg',
        caption: 'Basement Academia — identidade visual',
      },
      {
        type: 'image',
        src: '/images/nabo-mela-01.jpg',
        caption: 'Mela Gelateria — campanha',
      },
      {
        type: 'video',
        src: '/images/nabo-casakio-reel.mp4',
        caption: 'Casa Kio — reel institucional',
      },
      {
        type: 'image',
        src: '/images/nabo-sal-01.jpg',
        caption: 'S.A.L Destilaria — packaging',
      },
      {
        type: 'image',
        src: '',
        caption: 'Céu Bar',
        comingSoon: true,
      },
    ],
  },

  {
    slug: 'outros-projetos',
    number: '002',
    title: 'Outros Projetos',
    comingSoon: false,
    sections: [
      {
        name: 'TRAMA BR',
        role: 'Creative Director / Product',
        year: '2025',
        media: [
          { type: 'image', src: '/images/trama-01.jpg' },
          { type: 'image', src: '/images/trama-02.jpg' },
          { type: 'image', src: '/images/trama-03.jpg' },
        ],
      },
      {
        name: 'Beatnik Sons',
        role: 'Designer — Toro Raincoats (produto, institucional, marketing)',
        year: '2022 – 2023',
        media: [
          { type: 'image', src: '/images/beatnik-01.jpg' },
          { type: 'image', src: '/images/beatnik-02.jpg' },
          { type: 'image', src: '/images/beatnik-03.jpg' },
          { type: 'image', src: '/images/beatnik-04.jpg' },
        ],
      },
      {
        name: 'WPN Agency',
        role: "Junior Art Director — Kibon, Ben & Jerry's, Zorba",
        year: '2022, SP - BRA',
        media: [
          { type: 'image', src: '/images/wpn-01.jpg' },
          { type: 'image', src: '/images/wpn-02.jpg' },
          { type: 'image', src: '/images/wpn-03.jpg' },
        ],
      },
      {
        name: 'Jovem Dionisio Disco',
        role: 'Designer / Art Direction — identidade visual do LP de estreia',
        year: '2024',
        media: [
          { type: 'image', src: '/images/dionisio-01.jpg' },
          { type: 'image', src: '/images/dionisio-02.jpg' },
        ],
      },
    ],
  },

  {
    slug: 'artes-inspiracoes',
    number: '003',
    title: 'Artes & Inspirações',
    comingSoon: true,
  },
]