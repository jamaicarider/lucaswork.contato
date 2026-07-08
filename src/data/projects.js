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
    sections: [
      {
        name: 'NABŌ Campanha',
        media: [
          {
            type: 'video',
            src: '/images/nabo-campanha.mp4',
          },
        ],
      },
      {
        name: 'Basement Academia',
        role: 'Identidade visual',
        media: [
          { type: 'image', src: '/images/nabo-basement-01.jpg' },
          { type: 'image', src: '/images/nabo-basement-02.jpg' },
        ],
      },
      {
        name: 'Mela Gelateria',
        role: 'Campanha',
        media: [
          { type: 'image', src: '/images/nabo-mela-01.jpg' },
          { type: 'image', src: '/images/nabo-mela-02.jpg' },
        ],
      },
      {
        name: 'S.A.L Destilaria',
        role: 'Site, produto e campanha',
        media: [
          { type: 'image', src: '/images/nabo-sal-01.jpg' },
          { type: 'image', src: '/images/nabo-sal-02.jpg' },
          { type: 'image', src: '/images/nabo-sal-03.jpg' },
          { type: 'video', src: '/images/nabo-sal-video.mp4' },
        ],
      },
      {
        name: 'Em breve',
        role: 'Novos projetos em desenvolvimento',
        media: [
          { type: 'image', src: '', caption: 'Casa Kio', comingSoon: true },
          { type: 'image', src: '', caption: 'Céu Bar', comingSoon: true },
        ],
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
          { type: 'image', src: '/images/beatnik-02.jpg' },
          { type: 'image', src: '/images/beatnik-03.jpg' },
          { type: 'image', src: '/images/beatnik-04.gif' },
        ],
      },
      {
        name: 'WPN Agency',
        role: "Junior Art Director — Kibon, Ben & Jerry's, Zorba",
        year: '2022, SP - BRA',
        media: [
          { type: 'image', src: '/images/wpn-01.jpg' },
          { type: 'video', src: '/images/wpn-02.mp4' },
        ],
      },
      {
        name: 'Jovem Dionisio Disco',
        role: 'Designer / Art Direction — identidade visual do LP de estreia',
        year: '2024',
        media: [
          { type: 'image', src: '/images/dionisio-01.jpg' },
          { type: 'image', src: '/images/dionisio-02.jpg' },
          { type: 'image', src: '/images/dionisio-03.jpg' },
          { type: 'image', src: '/images/dionisio-04.jpg' },
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