import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center animate-fade-in">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-zinc-950 leading-[1.05] mb-8 animate-fade-up [animation-delay:120ms]">
          We design products that <span className="text-blue-600">launch</span> businesses.
        </h1>
        <p className="text-xl text-zinc-500 max-w-2xl font-light leading-relaxed mb-12 animate-fade-up [animation-delay:240ms]">
          Bitframe is a premium digital design studio. We partner with local businesses and growing companies to deliver elite website design, brand identity, and mobile UI/UX.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:360ms]">
          <a
            href="#contact"
            className="group bg-zinc-900 text-white font-medium px-8 py-4 flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all text-base"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/works"
            className="border border-zinc-200 text-zinc-900 font-medium px-8 py-4 flex items-center justify-center gap-2 hover:bg-zinc-50 transition-colors text-base"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
