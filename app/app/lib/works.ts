export type WorkItem = {
  slug: string;
  title: string;
  description: string;
  variant?: 'dark' | 'light' | 'image';
  categories?: string[];
  year?: string;
  accent?: string;
  imageSrc?: string;
  imageFit?: 'contain' | 'cover';
  imagePosition?: string;
};

export const works: WorkItem[] = [
  {
    slug: 'pj-salon',
    title: 'PJ Salon',
    description: 'Beauty brand site focused on bookings, service discovery, and premium presentation.',
    variant: 'image',
    categories: ['website', 'branding', 'ux.ui'],
    year: '2026',
    accent: 'from-zinc-950 via-zinc-900 to-blue-950',
    imageSrc: '/assets/pj-salon.png',
    imageFit: 'contain',
  },
  {
    slug: 'pj-cosmetics',
    title: 'PJ Cosmetics',
    description: 'Commerce landing page designed to showcase product storytelling and conversion.',
    variant: 'image',
    categories: ['website', 'branding', 'ux.ui'],
    year: '2026',
    accent: 'from-rose-950 via-zinc-900 to-zinc-800',
    imageSrc: '/assets/pj-cosmetics-v2.png',
    imageFit: 'contain',
    imagePosition: 'object-right',
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((w) => w.slug === slug) || null;
}
