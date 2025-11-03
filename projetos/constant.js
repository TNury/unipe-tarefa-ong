export const PROJECTS = [
  {
    id: 'alimentacao',
    title: 'Ajuda para a alimentação',
    description: 'Fornecemos alimentos para os sem-teto e aqueles que precisam.',
    image: '../assets/media/projects-food-media.jpg',
    imageAlt: 'Food',
    tags: [
      { label: 'Alimentação', type: 'tag-primary' }
    ],
    badges: [
      { label: 'Urgente', type: 'badge-danger' }
    ],
    progress: {
      percentage: 75,
      collected: 1500,
      goal: 2000
    }
  },
  {
    id: 'criancas',
    title: 'Crianças que cuidamos',
    description: 'Fornecemos moradia e cuidado para as crianças sem-teto.',
    image: '../assets/media/projects-children-media.jpg',
    imageAlt: 'Homeless Children',
    tags: [
      { label: 'Cuidados', type: 'tag-success' }
    ],
    badges: [
      { label: 'Urgente', type: 'badge-danger' },
      { label: 'Quase completo', type: 'badge-warning' }
    ],
    progress: {
      percentage: 85,
      collected: 8500,
      goal: 10000
    }
  },
  {
    id: 'educacao',
    title: 'Ajuda para a educação',
    description: 'Fornecemos educação e ferramentas para atingir a autossuficiência.',
    image: '../assets/media/projects-education-media.jpg',
    imageAlt: 'Education',
    tags: [
      { label: 'Educação', type: 'tag-info' }
    ],
    badges: [
      { label: 'Completo', type: 'badge-success' }
    ],
    progress: {
      percentage: 100,
      collected: 10000,
      goal: 10000
    }
  }
];

