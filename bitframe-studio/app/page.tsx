import React from 'react';
import { ArrowUpRight, Layout, Palette, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Minimalist BF / Bitframe Logo Representation */}
            <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center relative">
              <span className="text-white text-xs font-bold tracking-tighter">BF</span>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-600" />
            </div>
            <span className="font-bold tracking-tight text-xl text-zinc-900">BITFRAME</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
            <a href="#work" className="hover:text-zinc-900 transition-colors">Our Work</a>
            <a href="#process" className="hover:text-zinc-900 transition-colors">Process</a>
          </div>

          <a 
            href="#contact" 
            className="bg-zinc-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-zinc-800 transition-colors rounded-none"
          >
            Launch Your Project
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-800 text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
            Now Booking for Q3
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-zinc-950 leading-[1.05] mb-8">
            We design products that <span className="text-blue-600">launch</span> businesses.
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl font-light leading-relaxed mb-12">
            Bitframe is a premium digital design studio. We partner with ambitious startups and companies to deliver elite website design, brand identity, and mobile UI/UX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group bg-zinc-900 text-white font-medium px-8 py-4 flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all text-base"
            >
              Get Started 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#work" 
              className="border border-zinc-200 text-zinc-900 font-medium px-8 py-4 flex items-center justify-center gap-2 hover:bg-zinc-50 transition-colors text-base"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities / Services */}
      <section id="services" className="py-24 border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase block mb-3">Capabilities</span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What we do best.</h2>
              <p className="text-zinc-500 mt-4 max-w-sm font-light">
                We take care of your entire digital presence so you can focus entirely on scaling your core product.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 border border-zinc-100 shadow-sm hover:border-zinc-300 transition-colors">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Website Design & Dev</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  High-converting landing pages and comprehensive corporate websites built with cutting-edge tech. Fast, clean, and interactive.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 border border-zinc-100 shadow-sm hover:border-zinc-300 transition-colors">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Brand Strategy & Identity</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  Logos, visual systems, color architectures, and brand books that establish authority and trust from day one.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 border border-zinc-100 shadow-sm hover:border-zinc-300 transition-colors">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile UI/UX Design</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  Intuitive app interfaces mapped through extensive user research, beautiful wireframes, and high-fidelity interactive prototypes.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-8 border border-zinc-100 shadow-sm hover:border-zinc-300 transition-colors">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Launch Kit Bundle</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  Designed specifically for early-stage startups needing a rapid, complete design foundations rollout to secure funding or customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Specimen Section */}
      <section id="work" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase block mb-3">Selected Projects</span>
            <h2 className="text-4xl font-bold tracking-tight">Recent Case Studies</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work item 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-4/3 w-full bg-zinc-900 relative overflow-hidden mb-6 flex items-center justify-center p-12">
              {/* Simulated Abstract UI Viewport */}
              <div className="w-full h-full border border-zinc-700/50 bg-zinc-950/60 rounded p-4 flex flex-col justify-between transform group-hover:scale-[1.02] transition-transform duration-500">
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
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">Aether AI Platform</h3>
                <p className="text-sm text-zinc-500 mt-1 font-light">Web App Interface & Marketing Site</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* Work item 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-4/3 w-full bg-zinc-100 relative overflow-hidden mb-6 flex items-center justify-center p-12">
              {/* Simulated Abstract Mobile UI Viewport */}
              <div className="w-48 h-full border-4 border-zinc-300 bg-white rounded-2xl p-4 flex flex-col justify-between shadow-md transform group-hover:scale-[1.04] transition-transform duration-500">
                <div className="w-12 h-3 bg-zinc-200 rounded-full mx-auto mb-4" />
                <div className="w-full h-24 bg-blue-50 border border-blue-100 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-sm" />
                </div>
                <div className="space-y-1.5 mt-auto">
                  <div className="w-full h-2.5 bg-zinc-200 rounded" />
                  <div className="w-5/6 h-2 bg-zinc-100 rounded" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">Apex Neo-Bank</h3>
                <p className="text-sm text-zinc-500 mt-1 font-light">iOS Mobile UI/UX & Brand Identity</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* Action / Contact Section */}
      <section id="contact" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase block mb-4">Let&apos;s Build</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to bring your business to market?
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Drop us a message with your core ideas, and we&apos;ll reply with an actionable design proposal within 24 hours.
          </p>
          <a 
            href="mailto:hello@bitframe.studio" 
            className="inline-block bg-blue-600 text-white font-medium px-10 py-5 hover:bg-blue-500 transition-colors text-base"
          >
            hello@bitframe.studio
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-600 text-xs border-t border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new  Date().getFullYear()} Bitframe Design Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-zinc-400 cursor-pointer">Twitter</span>
            <span className="hover:text-zinc-400 cursor-pointer">Dribbble</span>
            <span className="hover:text-zinc-400 cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </footer>

    </div>
  );
}