import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { X } from 'lucide-react';
import villageCommunity from '@/assets/village-community.jpg';
import villageTemple from '@/assets/village-temple.jpg';
import villageFarming from '@/assets/village-farming.jpg';
import heroVillage from '@/assets/hero-village.jpg';

const galleryImages = [
  { src: heroVillage, alt: 'विचोऱी गाव दृश्य', category: 'गाव' },
  { src: villageCommunity, alt: 'समुदाय जीवन', category: 'समुदाय' },
  { src: villageTemple, alt: 'गावातील मंदिर', category: 'धार्मिक' },
  { src: villageFarming, alt: 'शेती', category: 'शेती' },
  { src: heroVillage, alt: 'निसर्ग सौंदर्य', category: 'निसर्ग' },
  { src: villageCommunity, alt: 'सण उत्सव', category: 'उत्सव' },
  { src: villageTemple, alt: 'पारंपरिक वास्तू', category: 'वास्तू' },
  { src: villageFarming, alt: 'कृषी क्षेत्र', category: 'शेती' },
];

const categories = ['सर्व', 'गाव', 'समुदाय', 'धार्मिक', 'शेती', 'निसर्ग', 'उत्सव', 'वास्तू'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('सर्व');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'सर्व'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-marathi text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              फोटो गॅलरी
            </h1>
            <p className="font-marathi text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up stagger-2">
              विचोऱी गावातील सुंदर दृश्ये, सण-उत्सव आणि दैनंदिन जीवनाचे क्षण
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-card border-b border-border sticky top-16 md:top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-marathi text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'gradient-hero text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground text-xs font-medium mb-2">
                      {image.category}
                    </span>
                    <h3 className="font-marathi text-lg font-semibold text-card">{image.alt}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in-up"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/10 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
