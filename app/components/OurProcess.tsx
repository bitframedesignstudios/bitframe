const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding the business, not just the brief — who the customer is, what\u2019s working today, and where the current site is actually losing people.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Wireframes first, then full visual design, built around the specific brand rather than a template. Every screen gets reviewed against the goals set in discovery before it moves forward.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Design gets built into a fast, responsive site or store, tested across devices, with content, SEO, and any booking or commerce systems wired up from the start — not bolted on after.',
  },
  {
    number: '04',
    title: 'Launch & support',
    description:
      'We handle the launch itself, then stick around after — fixing anything that comes up and making small improvements as real usage data comes in.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-4xl px-6 py-24">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          How we work
        </h2>
        <p className="mt-4 text-lg leading-7 text-zinc-600">
          Same four stages on every project, whether it&apos;s a full rebuild or a new
          store from scratch.
        </p>
      </div>

      <div className="mt-16 divide-y divide-zinc-200 border-t border-zinc-200">
        {steps.map((step) => (
          <div
            key={step.number}
            className="grid gap-3 py-10 sm:grid-cols-[6rem_8rem_1fr] sm:gap-10"
          >
            <span className="font-mono text-sm text-blue-700/70">{step.number}</span>
            <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
              {step.title}
            </h3>
            <p className="max-w-md text-[15px] leading-7 text-zinc-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}