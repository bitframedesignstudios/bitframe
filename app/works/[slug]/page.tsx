import Image from 'next/image';
import Link from 'next/link';
import { getWorkBySlug, works } from '../../lib/works';

type Params = { params: { slug: string } };

export default async function WorkDetailPage({ params }: Params) {
  const resolved = await params as any;
  const slug = Array.isArray(resolved.slug) ? resolved.slug[0] : resolved.slug;
  const work = getWorkBySlug(slug);

  if (!work) {
    return (
      <main className="min-h-screen flex items-center justify-center p-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Case study not found</h1>
          <p className="mt-4 text-zinc-600">We couldn't find that project.</p>
          <p className="mt-2 text-sm text-zinc-500">Requested slug: <strong>{slug}</strong></p>
          <pre className="mt-4 text-left max-w-xl mx-auto bg-white/50 p-4 rounded border text-xs">{JSON.stringify(works.map(w=>w.slug), null, 2)}</pre>
          <Link href="/works" className="mt-6 inline-block text-blue-600">Back to works</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <Link href="/works" className="text-sm text-zinc-500">← Back to works</Link>
        <h1 className="mt-6 text-4xl font-bold">{work.title}</h1>
        <p className="mt-4 text-lg text-zinc-600">{work.description}</p>

        {work.imageSrc ? (
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
            <Image src={work.imageSrc} alt={work.title} width={1200} height={800} style={{ objectFit: work.imageFit ?? 'cover' }} />
          </div>
        ) : null}

        <section className="mt-12 prose prose-zinc">
          <h2>Overview</h2>
          <p>This case study page is a placeholder — replace with real project details, challenges, outcomes, and visuals.</p>
        </section>
      </div>
    </main>
  );
}
