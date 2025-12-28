import { Link } from 'react-router-dom';
import { Leaf, Users, Building, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import villageImage from '@/assets/village-farming.jpg';

const features = [
  {
    icon: Leaf,
    title: 'शेतीप्रधान गाव',
    description: 'सोयाबीन, कापूस, हरभरा आणि गहू ही मुख्य पिके',
  },
  {
    icon: Users,
    title: 'एकोप्याचे गाव',
    description: 'साधे, मेहनती आणि एकमेकांना मदत करणारे लोक',
  },
  {
    icon: Building,
    title: 'उत्तम पायाभूत सुविधा',
    description: 'स्वच्छता, रस्ते आणि पाण्याची व्यवस्था',
  },
  {
    icon: Heart,
    title: 'समृद्ध संस्कृती',
    description: 'गणेशोत्सव आणि दिवाळी उत्साहात साजरे',
  },
];

export const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={villageImage}
                alt="विचोऱी गावातील शेती"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-card border border-border animate-float">
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">२,५३१</span>
                <span className="text-sm text-muted-foreground font-marathi">एकूण लोकसंख्या</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-fade-in-up stagger-2">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              आमच्याबद्दल
            </span>
            <h2 className="font-marathi text-3xl md:text-4xl font-bold text-foreground mb-6">
              ग्रामपंचायत विचोऱी, तालुका मोर्शी
            </h2>
            <p className="font-marathi text-muted-foreground leading-relaxed mb-8">
              विचोऱी हे गाव अमरावती जिल्ह्यातील एक छोटे आणि सुंदर गाव आहे. हे गाव मुख्यतः शेतीप्रधान आहे आणि येथील बहुतांश लोक शेतीवर आपला उदरनिर्वाह करतात. विचोऱी परिसरात नैसर्गिक सौंदर्य भरपूर आहे; गावाच्या आजूबाजूला हिरवळ आणि शेतीमुळे येथील वातावरण मनमोहक वाटते.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-marathi font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground font-marathi">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/about">
                <span className="font-marathi">अधिक जाणून घ्या</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
