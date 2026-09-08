export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none animate-drift" />

      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
        <span className="text-xs font-bold tracking-widest text-blue-500 uppercase block mb-4">Let&apos;s Build</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Ready to bring your business to market?
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Drop us a message with your core ideas, and we&apos;ll reply with an actionable design proposal within 24 hours.
        </p>
        <a
          href="mailto:contact@bitframedesignstudio.com"
          className="inline-block bg-blue-600 text-white font-medium px-10 py-5 hover:bg-blue-500 transition-colors text-base"
        >
          contact@bitframedesignstudio.com
        </a>
      </div>
    </section>
  );
}
