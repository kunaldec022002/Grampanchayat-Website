import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Users, Leaf, BookOpen, Heart, Building, Droplets, Lightbulb } from 'lucide-react';
import villageImage from '@/assets/hero-village.jpg';

const features = [
  {
    icon: Leaf,
    title: 'शेती आणि पिके',
    description: 'सोयाबीन, कापूस, हरभरा आणि गहू ही मुख्य पिके. शेतीसाठी नळ पाणी, विहिरी तसेच बोरवेल्सचा वापर.',
  },
  {
    icon: BookOpen,
    title: 'शिक्षण',
    description: 'गावामध्ये प्राथमिक शाळा असून मुलांच्या उच्च शिक्षणासाठी अमरावती शहरात जातात.',
  },
  {
    icon: Building,
    title: 'पायाभूत सुविधा',
    description: 'स्वच्छता, रस्ते आणि पाण्याची व्यवस्था ग्रामपंचायतीद्वारे.',
  },
  {
    icon: Heart,
    title: 'सण-उत्सव',
    description: 'गणेशोत्सव आणि दिवाळी मोठ्या आनंदात आणि उत्साहात साजरे केले जातात.',
  },
  {
    icon: Droplets,
    title: 'जलसंधारण',
    description: 'पाणी साठवण आणि व्यवस्थापनासाठी विविध योजना राबवल्या जातात.',
  },
  {
    icon: Lightbulb,
    title: 'विकास योजना',
    description: 'गावाच्या सर्वांगीण विकासासाठी शासकीय योजनांचा लाभ.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={villageImage} alt="विचोऱी गाव" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6 animate-fade-in-down">
                <MapPin className="w-4 h-4" />
                <span className="font-marathi text-sm">तालुका मोर्शी, जिल्हा अमरावती</span>
              </span>
              <h1 className="font-marathi text-4xl md:text-5xl font-bold text-card mb-6 animate-fade-in-up">
                आमच्या गावाबद्दल
              </h1>
              <p className="font-marathi text-lg text-card/80 animate-fade-in-up stagger-2">
                विचोऱी हे एक प्रगत, शांत आणि संस्कारी गाव म्हणून ओळखले जाते
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="font-marathi text-3xl font-bold text-foreground">गावाचा इतिहास</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="font-marathi text-muted-foreground leading-relaxed text-lg">
                  विचोऱी हे गाव अमरावती जिल्ह्यातील एक छोटे आणि सुंदर गाव आहे. हे गाव मुख्यतः शेतीप्रधान आहे आणि येथील बहुतांश लोक शेतीवर आपला उदरनिर्वाह करतात. विचोऱी गावात सोयाबीन, कापूस, हरभरा आणि गहू ही मुख्य पिके घेतली जातात. गावात शेतीसाठी नळ पाणी, विहिरी तसेच बोरवेल्सचा वापर मोठ्या प्रमाणावर केला जातो.
                </p>
                <p className="font-marathi text-muted-foreground leading-relaxed text-lg mt-6">
                  गावामध्ये प्राथमिक शाळा असून मुलांच्या शिक्षणासाठी जवळच्या मोठ्या गावात किंवा अमरावती शहरात विद्यार्थी जातात. गावात ग्रामपंचायत आहे जी गावातील स्वच्छता, रस्ते आणि पाण्याची व्यवस्था यासाठी जबाबदार आहे.
                </p>
                <p className="font-marathi text-muted-foreground leading-relaxed text-lg mt-6">
                  विचोऱी परिसरात नैसर्गिक सौंदर्य भरपूर आहे; गावाच्या आजूबाजूला हिरवळ आणि शेतीमुळे येथील वातावरण मनमोहक वाटते. गावातील लोक साधे, मेहनती आणि एकमेकांना मदत करणारे आहेत. सण-उत्सव मोठ्या आनंदात साजरे केले जातात, विशेषतः गणेशोत्सव आणि दिवाळीला गावात उत्साहाचे वातावरण असते. गावात पारंपरिक संस्कृती आजही टिकून आहे. अमरावती शहराशी गाव रस्त्याने जोडलेले आहे, त्यामुळे येथून शहरात जाणे सोपे आहे.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-marathi text-3xl md:text-4xl font-bold text-foreground mb-4">
                गावाची वैशिष्ट्ये
              </h2>
              <p className="text-muted-foreground font-marathi max-w-2xl mx-auto">
                विचोऱी गावाची महत्वाची वैशिष्ट्ये
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-marathi text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-marathi text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
