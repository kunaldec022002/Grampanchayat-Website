import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GraduationCap, Leaf, Trees, Sun, Droplets, Recycle } from 'lucide-react';

const educationItems = [
  {
    icon: GraduationCap,
    title: 'प्राथमिक शिक्षण',
    description: 'गावामध्ये जिल्हा परिषद प्राथमिक शाळा आहे जिथे इयत्ता १ ली ते ७ वी पर्यंत शिक्षण दिले जाते.',
  },
  {
    icon: GraduationCap,
    title: 'माध्यमिक शिक्षण',
    description: 'माध्यमिक आणि उच्च माध्यमिक शिक्षणासाठी विद्यार्थी जवळच्या मोठ्या गावात किंवा अमरावती शहरात जातात.',
  },
  {
    icon: GraduationCap,
    title: 'उच्च शिक्षण',
    description: 'महाविद्यालयीन शिक्षणासाठी अमरावती शहरातील विविध महाविद्यालये आणि विद्यापीठांचा पर्याय उपलब्ध आहे.',
  },
];

const environmentItems = [
  {
    icon: Trees,
    title: 'वृक्षारोपण',
    description: 'गावात नियमित वृक्षारोपण मोहीम राबवली जाते. पर्यावरण संवर्धनासाठी प्रत्येक कुटुंबाचा सहभाग.',
  },
  {
    icon: Sun,
    title: 'सौर ऊर्जा',
    description: 'अक्षय ऊर्जेच्या वापरास प्रोत्साहन. सौर पथदिवे आणि घरगुती सौर पॅनल्सचा वाढता वापर.',
  },
  {
    icon: Droplets,
    title: 'जलसंधारण',
    description: 'पावसाचे पाणी साठवण आणि भूजल पुनर्भरणासाठी विविध योजना राबवल्या जातात.',
  },
  {
    icon: Recycle,
    title: 'कचरा व्यवस्थापन',
    description: 'ओला आणि सुका कचरा वेगळा करण्याची पद्धत. पुनर्वापर आणि कंपोस्टिंगला प्रोत्साहन.',
  },
  {
    icon: Leaf,
    title: 'सेंद्रिय शेती',
    description: 'रासायनिक खतांचा कमी वापर आणि सेंद्रिय शेतीला प्रोत्साहन दिले जाते.',
  },
];

const Education = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-marathi text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              शिक्षण आणि पर्यावरण
            </h1>
            <p className="font-marathi text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up stagger-2">
              ज्ञान आणि निसर्गाचा समतोल राखत प्रगत गाव बनण्याचा प्रवास
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                शिक्षण
              </span>
              <h2 className="font-marathi text-3xl md:text-4xl font-bold text-foreground mb-4">
                शैक्षणिक सुविधा
              </h2>
              <p className="text-muted-foreground font-marathi max-w-2xl mx-auto">
                गावातील शैक्षणिक संस्था आणि सुविधांची माहिती
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {educationItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full gradient-saffron flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-marathi text-xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="font-marathi text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environment Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                पर्यावरण
              </span>
              <h2 className="font-marathi text-3xl md:text-4xl font-bold text-foreground mb-4">
                पर्यावरण संवर्धन उपक्रम
              </h2>
              <p className="text-muted-foreground font-marathi max-w-2xl mx-auto">
                निसर्ग संवर्धनासाठी गावाने राबवलेले विविध उपक्रम
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {environmentItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-marathi text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-marathi text-muted-foreground">
                    {item.description}
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

export default Education;
