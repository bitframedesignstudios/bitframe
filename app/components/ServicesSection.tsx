import { CheckCircle, Layout, Palette, Smartphone, type LucideIcon } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
};

const services: Service[] = [
  {
    title: 'Website Design & Dev',
    description:
      'High-converting landing pages and comprehensive corporate websites built with cutting-edge tech. Fast, clean, and interactive.',
    icon: Layout,
  },
  {
    title: 'Brand Strategy & Identity',
    description:
      'Logos, visual systems, color architectures, and brand books that establish authority and trust from day one.',
    icon: Palette,
  },
  {
    title: 'Mobile UI/UX Design',
    description:
      'Intuitive app interfaces mapped through extensive user research, beautiful wireframes, and high-fidelity interactive prototypes.',
    icon: Smartphone,
  },
  {
    title: 'Business Launch Kit',
    description:
      'Designed for local businesses and growing brands needing a rapid, complete design rollout to attract more customers and present a stronger presence.',
    icon: CheckCircle,
    iconClassName: 'text-blue-600',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 border-t border-zinc-100 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="animate-fade-up">
            <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase block mb-3">Capabilities</span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What we do best.</h2>
            <p className="text-zinc-500 mt-4 max-w-sm font-light">
              We take care of your entire digital presence so you can focus entirely on scaling your core product.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white p-8 border border-zinc-100 shadow-sm hover:border-zinc-300 transition-all duration-300 hover:-translate-y-1 animate-fade-up" style={{ animationDelay: `${index * 120 + 120}ms` }}>
                  <div className={`w-12 h-12 ${service.iconClassName ? 'bg-blue-50' : 'bg-zinc-100'} flex items-center justify-center ${service.iconClassName ?? 'text-zinc-900'} mb-6 transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
