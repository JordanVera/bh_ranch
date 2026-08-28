export type PackageTier = {
  guests: number;
  price: number;
  tables: number;
  chairs: number;
  includes: string[];
};

export type PackageCategory = {
  slug: 'wedding' | 'quinceanera' | 'family-reunion' | 'party';
  title: string;
  navLabel: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  heroImage: string;
  tiers: PackageTier[];
};

const BASE_INCLUDES = ['The venue', 'Without catering', 'Decorations'] as const;

const TIER_COUNTS = [
  { guests: 50, price: 4125, tables: 8, chairs: 50 },
  { guests: 100, price: 4950, tables: 13, chairs: 100 },
  { guests: 150, price: 6050, tables: 18, chairs: 150 },
  { guests: 200, price: 7150, tables: 23, chairs: 200 },
  { guests: 250, price: 8250, tables: 28, chairs: 250 },
  { guests: 300, price: 9350, tables: 33, chairs: 300 },
  { guests: 400, price: 11550, tables: 38, chairs: 400 },
  { guests: 500, price: 13475, tables: 52, chairs: 500 },
] as const;

function buildTiers(bartender: 'all' | '500-only'): PackageTier[] {
  return TIER_COUNTS.map((tier) => {
    const includes: string[] = [...BASE_INCLUDES];
    if (bartender === 'all' || tier.guests === 500) {
      includes.push('Bartender (optional)');
    }
    includes.push(`${tier.tables} tables`);
    includes.push(`${tier.chairs} chairs`);
    return { ...tier, includes };
  });
}

export const PACKAGE_CATEGORIES: PackageCategory[] = [
  {
    slug: 'wedding',
    title: 'Wedding Packages',
    navLabel: 'Wedding Packages',
    eyebrow: 'Special Packages',
    subtitle: 'Including Reception',
    description:
      'Venue packages for wedding ceremonies and receptions, sized for 50 to 500 guests. Each package includes the ranch, decorations, tables, and chairs. Catering is not included; a bartender is available as an option.',
    heroImage: '/gallery/wedding-reception-2/01-884651_orig.jpg',
    tiers: buildTiers('all'),
  },
  {
    slug: 'quinceanera',
    title: 'Quinceañera Packages',
    navLabel: 'Quinceañera Packages',
    eyebrow: 'Special Packages',
    subtitle: 'Celebrate her day',
    description:
      'Quinceañera packages for 50 to 500 guests, including the venue, decorations, tables, and chairs. Catering is not included. A bartender is optional on the 500-guest package.',
    heroImage: '/gallery/quinceanera/01-8755832_orig.jpg',
    tiers: buildTiers('500-only'),
  },
  {
    slug: 'family-reunion',
    title: 'Family Reunion Packages',
    navLabel: 'Family Reunion Packages',
    eyebrow: 'Special Packages',
    subtitle: 'Room for the whole family',
    description:
      'Family reunion packages for gatherings of 50 to 500 guests. Each includes the venue, decorations, tables, and chairs. Catering is not included. A bartender is optional on the 500-guest package.',
    heroImage: '/gallery/bh-ranch-gallery/01-SANY2888.jpg',
    tiers: buildTiers('500-only'),
  },
  {
    slug: 'party',
    title: 'Party Packages',
    navLabel: 'Party Packages',
    eyebrow: 'Special Packages',
    subtitle: 'Birthdays, showers & more',
    description:
      'Party packages for birthdays, showers, and celebrations of 50 to 500 guests. Each includes the venue, decorations, tables, and chairs. Catering is not included. A bartender is optional on the 500-guest package.',
    heroImage: '/gallery/birthday-party/01-7995972_orig.jpg',
    tiers: buildTiers('500-only'),
  },
];

export function getPackageCategory(slug: string) {
  return PACKAGE_CATEGORIES.find((category) => category.slug === slug);
}

export function formatPackagePrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}
