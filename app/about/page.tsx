import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { AboutHero } from '@/components/about/AboutHero';
import { OurStory } from '@/components/about/OurStory';
import { MeetTheFounder } from '@/components/about/MeetTheFounder';
import { CoreValues } from '@/components/about/CoreValues';
import { WhyChooseUs } from '@/components/about/WhyChooseUs';
import { AboutStats } from '@/components/about/AboutStats';
import { AboutCTA } from '@/components/about/AboutCTA';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/contact/ContactModal';

export const metadata: Metadata = {
  title: 'About Us | ZennithDevelopments - Your Web Development Partner in Jamaica',
  description:
    'Learn about ZennithDevelopments, a Jamaican web development agency dedicated to helping local businesses succeed online with modern, conversion-optimized websites.',
  keywords: [
    'about zennithdevelopments',
    'jamaican web developer',
    'web development jamaica',
    'about us',
    'our story',
    'web design company jamaica',
  ],
  openGraph: {
    title: 'About ZennithDevelopments | Web Development Jamaica',
    description:
      'Helping Jamaican businesses grow online with fast, professional web solutions.',
    url: 'https://zennithdevelopments.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <AboutHero />
        <OurStory />
        <MeetTheFounder />
        <CoreValues />
        <WhyChooseUs />
        <AboutStats />
        <AboutCTA />
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
