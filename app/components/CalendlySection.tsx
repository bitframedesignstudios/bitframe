export function CalendlySection() {
  return (
    <section id="booking" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <span className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-700">
            Book a Call
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">
            Let&apos;s talk through your project.
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Share a few details about what you&apos;re building, and we&apos;ll find the best next step for your brand, website, or product.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_30px_80px_-40px_rgba(9,9,11,0.25)]">
          <iframe
            title="Schedule a call with Bitframe"
            src="https://calendly.com/contact-bitframedesignstudio/30min?hide_gdpr_banner=1"
            className="h-[700px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
