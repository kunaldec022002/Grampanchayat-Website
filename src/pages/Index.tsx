import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AnnouncementTicker } from '@/components/AnnouncementTicker';
import { AboutSection } from '@/components/AboutSection';
import { QuickLinks } from '@/components/QuickLinks';
import { StatsSection } from '@/components/StatsSection';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AnnouncementTicker />
        <AboutSection />
        <QuickLinks />
        <StatsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
