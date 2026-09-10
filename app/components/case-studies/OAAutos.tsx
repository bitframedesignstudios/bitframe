import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    label: '01 — Starting point',
    heading: 'No website at all',
    body: `OA Autos had no site to start from  - SEO performance was poor.`,
  },
  {
    label: '02 — Branding and presentation',
    heading: 'Premium look and feel',
    body: `Establishing a strong brand identity was crucial for OA Autos. We focused on creating a visual language that communicated the quality and reliability of the vehicles, using high-quality images and a consistent color scheme.`,
  },
  {
    label: '03 — Streamlined Fleet Discovery',
    heading: 'Organized and easy to navigate',
    body: `The whole flow - vehicle listing was to combine both Turo and Tripcity Fleet listing into one seamless experience. We designed a user-friendly interface that allowed customers to easily browse and filter vehicles based on their preferences, making the discovery process efficient and enjoyable.`,
  },
  {
    label: '04 — Optimized for search engines',
    heading: 'A platform that improves visibility',
    body: `We built this with SEO in mind, ensuring that the site structure, meta tags, and content were optimized for search engines. This helps OA Autos attract more organic traffic and reach potential customers effectively.`,
  },
];

export function OaAutosCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-24">

        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">OA Autos</h1>
        <p className="mt-4 max-w-xl text-lg leading-7 text-zinc-600">
          A local auto rental service website built from the ground up, designed around vehicle discovery and booking.
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
            <div className="mt-1 text-zinc-900">Next.js, TypeScript, Tailwind CSS</div>
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
              src="/assets/oa-hero.png"
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
            The new OA Autos website has significantly improved the user experience, making it easier for customers to discover and book vehicles. The streamlined design and optimized SEO have led to increased traffic and higher conversion rates, establishing OA Autos as a trusted and accessible auto rental service in the local market.
          </p>
        </section>

        {/* want to add a video section here with scroll of the video */}
        <section className="mt-20 border-t border-zinc-200 pt-10">
          <div className="text-sm font-medium text-blue-700/80">Video</div>
          <div className="mt-3 max-w-xl text-[15px] leading-7 text-zinc-600">
            <video
              src="/assets/oa-vid.mp4"
              controls
              className="w-full rounded-md border border-zinc-200"
            />
          </div>
        </section>
      </div>
    </main>
  );
}