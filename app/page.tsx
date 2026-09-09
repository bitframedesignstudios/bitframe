import { CalendlySection } from './components/CalendlySection';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import {ProcessSection} from './components/OurProcess';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-500 selection:text-white">
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <CalendlySection />
      <ContactSection />
    </div>
  );
}
