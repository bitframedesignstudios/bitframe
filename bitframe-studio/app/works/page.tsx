'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, LayoutGrid, Palette, Smartphone, Sparkles, type LucideIcon } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

type Category = 'website' | 'branding' | 'mobile' | 'ux.ui';

type WorkItem = {
  title: string;
  description: string;
  categories: Category[];
  year: string;
  accent: string;
  imageSrc?: string;
  imageFit?: 'contain' | 'cover';
  imagePosition?: string;
};

type FilterOption = {
  label: string;
  value: 'all' | Category;
  icon: LucideIcon;
};

const filters: FilterOption[] = [
  { label: 'All', value: 'all', icon: LayoutGrid },
  { label: 'Website', value: 'website', icon: LayoutGrid },
  { label: 'Branding', value: 'branding', icon: Palette },
  { label: 'Mobile', value: 'mobile', icon: Smartphone },
  { label: 'UX/UI', value: 'ux.ui', icon: Sparkles },
];

const works: WorkItem[] = [
  {
    title: 'PJ Salon',
    description: 'Beauty brand site focused on bookings, service discovery, and premium presentation.',
    categories: ['website', 'branding', 'ux.ui'],
    year: '2026',
    accent: 'from-zinc-950 via-zinc-900 to-blue-950',
    imageSrc: '/assets/pj-salon.png',
    imageFit: 'contain',
  },
  {
    title: 'PJ Cosmetics',
    description: 'Commerce landing page designed to showcase product storytelling and conversion.',
    categories: ['website', 'branding', 'ux.ui'],
    year: '2026',
    accent: 'from-rose-950 via-zinc-900 to-zinc-800',
    imageSrc: '/assets/pj-cosmetics-v2.png',
    imageFit: 'contain',
    imagePosition: 'object-right',
  },
];

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <article className="group rounded-[2rem] border border-zinc-200/80 bg-white shadow-[0_24px_60px_-24px_rgba(9,9,11,0.18)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_-28px_rgba(9,9,11,0.28)]">
      <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${item.accent}`}>
        {item.imageSrc ? (
          <div className="absolute inset-0 p-4 sm:p-5">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/90 shadow-2xl shadow-black/10 backdrop-blur-sm">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                style={{ objectFit: item.imageFit ?? 'cover', objectPosition: item.imagePosition ? 'right center' : 'center' }}
                className="transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/10 via-transparent to-transparent" />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 p-4 sm:p-5">
            <div className="h-full w-full rounded-[1.5rem] border border-white/15 bg-white/8 p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between">
              <div className="flex items-center justify-between text-white/70 text-xs uppercase tracking-[0.3em]">
                <span>{item.year}</span>
                <span>{item.categories.join(' / ')}</span>
              </div>
              <div className="space-y-4">
                <div className="h-3 w-24 rounded-full bg-white/20" />
                <div className="h-3 w-3/4 rounded-full bg-white/15" />
                <div className="h-3 w-1/2 rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4 mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
          <span>{item.year}</span>
          <span>{item.categories.join(' · ')}</span>
        </div>
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-500">{item.description}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-950" />
        </div>
      </div>
    </article>
  );
}

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | Category>('all');

  const filteredWorks =
    activeFilter === 'all'
      ? works
      : works.filter((work) => work.categories.includes(activeFilter));

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_28%),linear-gradient(to_bottom,#fafafa,#ffffff_32%,#f8fafc)] text-zinc-900">
      <Navigation />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:pt-32">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <div className="mt-10 max-w-3xl animate-fade-up">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-soft-pulse" />
              Works Library
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl md:text-7xl">
              All works, organized by service type.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
              Browse the full set of projects and filter by website, branding, mobile, or UX/UI to quickly find the type of work you want to review.
            </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="sticky top-4 z-20 mb-10 rounded-[1.5rem] border border-zinc-200 bg-white/90 p-3 shadow-[0_20px_50px_-35px_rgba(9,9,11,0.25)] backdrop-blur-md">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive ? 'bg-zinc-950 text-white shadow-lg shadow-zinc-950/15' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-950'}`}
                >
                  <Icon className="h-4 w-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between text-sm text-zinc-500">
          <span>{filteredWorks.length} projects shown</span>
          <span className="hidden sm:block">Filter: {activeFilter === 'all' ? 'all' : activeFilter}</span>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {filteredWorks.map((work, index) => (
            <div key={work.title} className="animate-fade-up" style={{ animationDelay: `${index * 90}ms` }}>
              <WorkCard item={work} />
            </div>
          ))}
        </div>

        {filteredWorks.length === 0 ? (
          <div className="mt-16 rounded-[2rem] border border-dashed border-zinc-300 bg-white/70 p-12 text-center text-zinc-500">
            No projects match that filter.
          </div>
        ) : null}
      </section>

      <Footer />
    </main>
  );
}