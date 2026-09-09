'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, LayoutGrid, Palette, Smartphone, Sparkles, type LucideIcon } from 'lucide-react';
import { works, type WorkItem } from '../lib/works';

type Category = 'website' | 'branding' | 'mobile' | 'ux.ui';

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

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <Link
      href={`/works/${item.slug}`}
      className="group block overflow-hidden rounded-lg border border-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            style={{
              objectFit: item.imageFit ?? 'cover',
              objectPosition: item.imagePosition ? 'right center' : 'center',
            }}
            className="transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : null}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950 underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-zinc-950">
            {item.title}
          </h3>
          <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 -translate-y-1 text-zinc-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </div>
        <p className="mt-2 text-sm leading-6 text-zinc-500">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-x-3 text-xs text-zinc-400">
          <span>{item.year}</span>
          {(item.categories || []).map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | Category>('all');

  const filteredWorks =
    activeFilter === 'all'
      ? works
      : works.filter((work) => (work.categories || []).includes(activeFilter));

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_28%),linear-gradient(to_bottom,#fafafa,#ffffff_32%,#f8fafc)] text-zinc-900">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:pt-32">
        {/* <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link> */}

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
            <div key={work.slug} className="animate-fade-up" style={{ animationDelay: `${index * 90}ms` }}>
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
    </main>
  );
}