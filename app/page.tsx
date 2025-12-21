import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/contact/ContactModal';
import { HashScroll } from '@/components/HashScroll';

export default function Home() {
  return (
    <>
      <Navigation />
      <HashScroll />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
