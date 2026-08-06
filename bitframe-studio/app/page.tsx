import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navigation } from './components/Navigation';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-500 selection:text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
