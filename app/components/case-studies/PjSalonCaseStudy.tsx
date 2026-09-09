import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    label: '01 — The problem',
    heading: 'Unresponsive, and hard to look at',
    body: `PJ Salon's old site wasn't built to work on mobile — layouts broke on smaller screens, and the overall look felt dated and cluttered rather than premium. On top of that, there was no way to see real availability, services were described in a paragraph instead of listed clearly, and the site wasn't showing up in local search at all — most new clients were coming from Instagram, not Google.`,
  },
  {
    label: '02 — Booking',
    heading: 'Three steps, live availability',
    body: `Booking needed to feel as easy as messaging a friend. We rebuilt the flow around three steps — pick a service, pick a stylist, pick a time — with live availability pulled from the salon's calendar, so nothing gets double-booked and clients get an instant confirmation instead of waiting on a callback.`,
  },
  {
    label: '03 — Discovery',
    heading: 'Services organized the way clients think',
    body: `Instead of one long list, services are grouped the way clients actually think about them — hair, skin, nails, bridal — each with its own page covering what's included, how long it takes, and starting price. A stylist finder lets clients filter by specialty so they can book with confidence instead of guessing.`,
  },
  {
    label: '04 — SEO',
    heading: 'Built to be found locally',
    body: `Every service and location page is structured for search — proper metadata, local business schema, and page speed fixes that cut load time significantly. Combined with a Google Business Profile clean-up, this is what moved PJ Salon onto the first page for local searches like "balayage near me."`,
  },
  {
    label: '05 — Courses',
    heading: 'A second business, on the same site',
    body: `PJ Salon also runs training courses for aspiring stylists, which the old site didn't mention at all. We gave courses their own section with a syllabus, dates, and the same booking flow used for appointments — turning a word-of-mouth side offering into a real revenue line with its own funnel.`,
  },
];

export function PjSalonCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-24">

        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">PJ Salon</h1>
        <p className="mt-4 max-w-xl text-lg leading-7 text-zinc-600">
          A full rebuild and redesign built around one goal: make booking effortless,
          and give every service and course a page worth finding.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-y border-zinc-200 py-5 text-sm">
          <div>
            <div className="text-blue-700/70">Role</div>
            <div className="mt-1 text-zinc-900">Design & development</div>
          </div>
          <div>
            <div className="text-blue-700/70">Timeline</div>
            <div className="mt-1 text-zinc-900">6 weeks</div>
          </div>
          <div>
            <div className="text-blue-700/70">Stack</div>
            <div className="mt-1 text-zinc-900">Wix</div>
          </div>
          {/* <div>
            <div className="text-blue-700/70">Live site</div>
            <a href="#" className="mt-1 block text-zinc-900 underline underline-offset-2 hover:text-blue-700">
              pjsalon.com
            </a>
          </div> */}
        </div>

        <figure className="mt-14">
          <div className="overflow-hidden rounded-md border border-zinc-200">
            <Image
              src="/assets/pj-salon.png"
              alt="PJ Salon homepage"
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
            Since launch, online bookings account for the majority of new appointments,
            up from effectively zero, and organic search now brings in a steady stream
            of new clients each month.
          </p>
        </section>
      </div>
    </main>
  );
}