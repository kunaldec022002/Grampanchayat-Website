import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import villageCommunity from '@/assets/village-community.jpg';
import villageTemple from '@/assets/village-temple.jpg';
import villageFarming from '@/assets/village-farming.jpg';

const galleryImages = [
  { src: villageCommunity, alt: 'गावातील समुदाय', title: 'समुदाय जीवन' },
  { src: villageTemple, alt: 'गावातील मंदिर', title: 'धार्मिक स्थळ' },
  { src: villageFarming, alt: 'शेती', title: 'कृषी क्षेत्र' },
];

export const GallerySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              गॅलरी
            </span>
            <h2 className="font-marathi text-3xl md:text-4xl font-bold text-foreground mb-4">
              आमच्या गावाचे दृश्य
            </h2>
            <p className="text-muted-foreground max-w-xl font-marathi">
              खोपडा गावातील सुंदर स्थळे आणि उत्सव
            </p>
          </div>
          <Button variant="hero" asChild>
            <Link to="/gallery" className="flex items-center gap-2">
              <span className="font-marathi">सर्व पहा</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-marathi text-xl font-semibold text-card">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
