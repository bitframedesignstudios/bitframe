import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    label: '01 — Starting point',
    heading: 'No website at all',
    body: `PJ Cosmetics had no site to start from — sales were happening through Instagram DMs and marketplace listings, with no way for customers to browse the full catalog, see products side by side, or check out directly. Every sale meant a manual back-and-forth instead of a straightforward purchase.`,
  },
  {
    label: '02 — Product storytelling',
    heading: 'Products that read as premium',
    body: `Each product needed its own page that did more than list specs — real photography, ingredient and usage detail, and copy that matched the brand's tone. The goal was a browsing experience that felt like a considered beauty brand, not a marketplace listing.`,
  },
  {
    label: '03 — Built to convert',
    heading: 'A checkout that doesn\u2019t lose people',
    body: `The whole flow — product page, cart, checkout — was designed around removing friction: clear pricing, fast-loading pages, and a streamlined cart with relevant upsells at the right moment, so browsing turns into a completed order instead of an abandoned tab.`,
  },
  {
    label: '04 — Shopify foundation',
    heading: 'A platform that scales with the brand',
    body: `We built the storefront on Shopify so PJ Cosmetics could manage inventory, payments, and fulfillment without needing a developer for every change, while still getting a fully custom look rather than an off-the-shelf theme.`,
  },
];

export function PjCosmeticsCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <Link href="/works" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900">
          ← Back to works
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">PJ Cosmetics</h1>
        <p className="mt-4 max-w-xl text-lg leading-7 text-zinc-600">
          A commerce site built from the ground up on Shopify, designed around product
          storytelling and turning browsers into buyers.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-y border-zinc-200 py-5 text-sm">
          <div>
            <div className="text-blue-700/70">Role</div>
            <div className="mt-1 text-zinc-900">Design & development</div>
          </div>
          <div>
            <div className="text-blue-700/70">Timeline</div>
            <div className="mt-1 text-zinc-900">4 weeks</div>
          </div>
          <div>
            <div className="text-blue-700/70">Stack</div>
            <div className="mt-1 text-zinc-900">Shopify, Liquid, Tailwind</div>
          </div>
          {/* <div>
            <div className="text-blue-700/70">Live site</div>
            <a href="#" className="mt-1 block text-zinc-900 underline underline-offset-2 hover:text-blue-700">
              pjcosmetics.com
            </a>
          </div> */}
        </div>

        <figure className="mt-14">
          <div className="overflow-hidden rounded-md border border-zinc-200">
            <Image
              src="/assets/pj-cosmetics-v2.png"
              alt="PJ Cosmetics homepage"
              width={1200}
              height={800}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <figcaption className="mt-3 text-sm text-zinc-400">Homepage — desktop</figcaption>
        </figure>

        <section className="mt-20 space-y-16">
          {sections.map((s) => (
            <div key={s.label} className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-10">
              <div className="text-sm font-medium text-blue-700/80">{s.label}</div>
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{s.heading}</h2>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-zinc-600">{s.body}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-20 border-t border-zinc-200 pt-10">
          <div className="text-sm font-medium text-blue-700/80">Outcome</div>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-zinc-600">
            Since launch, PJ Cosmetics has a real storefront that runs independently of
            social media, with a steady stream of direct orders and a foundation to add
            new product lines without rebuilding the site.
          </p>
        </section>
      </div>
    </main>
  );
}