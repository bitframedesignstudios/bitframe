import Link from 'next/link';
import { PjCosmeticsCaseStudy } from '../../components/case-studies/PjCosmeticsCaseStudy';
import { PjSalonCaseStudy } from '../../components/case-studies/PjSalonCaseStudy';
import { getWorkBySlug, works } from '../../lib/works';

type Params = { params: Promise<{ slug: string }> };

export default async function WorkDetailPage({ params }: Params) {
  const resolved = await params;
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

  if (slug === 'pj-salon') {
    return <PjSalonCaseStudy />;
  }

  if (slug === 'pj-cosmetics') {
    return <PjCosmeticsCaseStudy />;
  }

  return <Link href="/works">Back to works</Link>;
}
