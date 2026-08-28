export type PortfolioCategory = 'Weddings' | 'Styleshoots' | 'Events';

export type PortfolioProject = {
  slug: string;
  title: string;
  photographer: string;
  category: PortfolioCategory;
  cover: string;
  images: string[];
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'weddings',
    title: 'Wedding Florals',
    photographer: '',
    category: 'Weddings' as const,
    cover: '/portfolio/weddings/01.jpg',
    images: [
      '/portfolio/weddings/01.jpg',
      '/portfolio/weddings/02.jpg',
      '/portfolio/weddings/03.jpg',
      '/portfolio/weddings/04.jpg',
      '/portfolio/weddings/05.jpg',
      '/portfolio/weddings/06.jpg',
      '/portfolio/weddings/07.jpg',
      '/portfolio/weddings/08.jpg',
      '/portfolio/weddings/09.jpg',
      '/portfolio/weddings/10.jpg'
    ],
  },
  {
    slug: 'events',
    title: 'Events & Celebrations',
    photographer: '',
    category: 'Events' as const,
    cover: '/portfolio/events/01.jpg',
    images: [
      '/portfolio/events/01.jpg',
      '/portfolio/events/02.jpg',
      '/portfolio/events/03.jpg',
      '/portfolio/events/04.jpg',
      '/portfolio/events/05.jpg',
      '/portfolio/events/06.jpg',
      '/portfolio/events/07.jpg',
      '/portfolio/events/08.jpg',
      '/portfolio/events/09.jpg',
      '/portfolio/events/10.jpg'
    ],
  },
  {
    slug: 'details',
    title: 'Floral Details',
    photographer: '',
    category: 'Styleshoots' as const,
    cover: '/portfolio/details/01.jpg',
    images: [
      '/portfolio/details/01.jpg',
      '/portfolio/details/02.jpg',
      '/portfolio/details/03.jpg',
      '/portfolio/details/04.jpg',
      '/portfolio/details/05.jpg',
      '/portfolio/details/06.jpg',
      '/portfolio/details/07.jpg',
      '/portfolio/details/08.jpg',
      '/portfolio/details/09.jpg',
      '/portfolio/details/10.jpg'
    ],
  },
  {
    slug: 'installations',
    title: 'Installations',
    photographer: '',
    category: 'Events' as const,
    cover: '/portfolio/installations/01.jpg',
    images: [
      '/portfolio/installations/01.jpg',
      '/portfolio/installations/02.jpg',
      '/portfolio/installations/03.jpg',
      '/portfolio/installations/04.jpg',
      '/portfolio/installations/05.jpg',
      '/portfolio/installations/06.jpg',
      '/portfolio/installations/07.jpg',
      '/portfolio/installations/08.jpg',
      '/portfolio/installations/09.jpg',
      '/portfolio/installations/10.jpg'
    ],
  },
];

export const PORTFOLIO_CATEGORIES: Array<'All' | PortfolioCategory> = [
  'All',
  'Events',
  'Styleshoots',
  'Weddings'
];

export const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.slice(0, 6);

export const HERO_IMAGES = [
  { src: '/portfolio/weddings/01.jpg', alt: 'BH Ranch — Wedding Florals' },
  { src: '/portfolio/events/01.jpg', alt: 'BH Ranch — Events & Celebrations' },
  { src: '/portfolio/details/01.jpg', alt: 'BH Ranch — Floral Details' },
  { src: '/portfolio/installations/01.jpg', alt: 'BH Ranch — Installations' },
] as const;

export function getProject(slug: string) {
  return PORTFOLIO_PROJECTS.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = PORTFOLIO_PROJECTS.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  const last = PORTFOLIO_PROJECTS.length - 1;
  return {
    prev: PORTFOLIO_PROJECTS[index === 0 ? last : index - 1],
    next: PORTFOLIO_PROJECTS[index === last ? 0 : index + 1],
  };
}
