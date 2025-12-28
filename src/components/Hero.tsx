import { ArrowDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-village.jpg';
import villageTemple from '@/assets/village-temple.jpg';
import villageCommunity from '@/assets/village-community.jpg';
import villageFarming from '@/assets/village-farming.jpg';

const heroImages = [
  { src: heroImage, alt: 'खोपडा गाव - मुख्य दृश्य' },
  { src: villageTemple, alt: 'खोपडा गाव - मंदिर' },
  { src: villageCommunity, alt: 'खोपडा गाव - समुदाय' },
  { src: villageFarming, alt: 'खोपडा गाव - शेती' },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('about-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-secondary w-6'
                : 'bg-card/50 hover:bg-card/80'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary/30 blur-2xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent/20 blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-card/30 mb-6 animate-fade-in-down">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm text-card font-medium">तालुका मोर्शी, जिल्हा अमरावती</span>
          </div>

          {/* Main Title */}
          <h1 className="font-marathi text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-6 animate-fade-in-up">
            ग्रामपंचायत खोपडा
          </h1>

          {/* Subtitle */}
          <p className="font-marathi text-lg md:text-xl text-card/90 max-w-2xl mx-auto mb-8 animate-fade-in-up stagger-2">
            एक प्रगत, शांत आणि संस्कारी गाव - जेथे परंपरा आणि प्रगती एकत्र येतात
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <Button variant="saffron" size="xl" onClick={scrollToContent}>
              <span className="font-marathi">अधिक जाणून घ्या</span>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="/contact">
                <span className="font-marathi">संपर्क करा</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-card/80 hover:text-card transition-colors"
        >
          <span className="text-sm font-medium">खाली स्क्रोल करा</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
