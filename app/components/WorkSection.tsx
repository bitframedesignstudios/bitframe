import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';


import { works } from '../lib/works';

type WorkItem = {
  slug: string;
  title: string;
  description: string;
  variant?: 'dark' | 'light' | 'image';
  imageSrc?: string;
};

function ProjectVisual({ item }: { item: WorkItem }) {
  return (
    <div className={`aspect-4/3 w-full ${item.variant === 'dark' ? 'bg-zinc-900' : item.variant === 'image' ? 'bg-zinc-100' : 'bg-zinc-100'} relative overflow-hidden mb-6 flex items-center justify-center p-12`}>
      <div className={`w-full h-full rounded-[1.5rem] border p-4 flex flex-col justify-between transform group-hover:scale-[1.03] transition-transform duration-500 ${item.variant === 'dark' ? 'border-zinc-700/50 bg-zinc-950/60' : item.variant === 'image' ? 'border-white/70 bg-white/90 shadow-2xl shadow-zinc-900/10' : 'border-zinc-300 bg-white shadow-md'}`}>
        {item.variant === 'image' && item.imageSrc ? (
          <div className="relative h-full w-full overflow-hidden rounded-[1rem]">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/25 via-transparent to-transparent" />
          </div>
        ) : item.variant === 'dark' ? (
          <>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-800" />
                <span className="w-2 h-2 rounded-full bg-zinc-800" />
                <span className="w-2 h-2 rounded-full bg-zinc-800" />
              </div>
              <div className="w-24 h-2 bg-zinc-800 rounded" />
            </div>
            <div className="space-y-2">
              <div className="w-2/3 h-4 bg-zinc-800 rounded" />
              <div className="w-1/2 h-3 bg-zinc-800/60 rounded" />
            </div>
          </>
        ) : (
          <>
            <div className="w-12 h-3 bg-zinc-200 rounded-full mx-auto mb-4" />
            <div className="w-full h-24 bg-blue-50 border border-blue-100 rounded flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded-sm" />
            </div>
            <div className="space-y-1.5 mt-auto">
              <div className="w-full h-2.5 bg-zinc-200 rounded" />
              <div className="w-5/6 h-2 bg-zinc-100 rounded" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
        <div className="animate-fade-up">
          <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase block mb-3">Selected Projects</span>
          <h2 className="text-4xl font-bold tracking-tight">Recent Case Studies</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {works.map((item, index) => (
          <div key={item.slug} className="group animate-fade-up" style={{ animationDelay: `${index * 140 + 120}ms` }}>
            <ProjectVisual item={item as WorkItem} />
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-sm text-zinc-500 mt-1 font-light">{item.description}</p>
              </div>
              <Link
                href={`/works/${item.slug}`}
                className="inline-flex shrink-0 items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-all hover:border-zinc-300 hover:text-zinc-900"
                aria-label={`View case study for ${item.title}`}
              >
                View case study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
        >
          View more work
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
