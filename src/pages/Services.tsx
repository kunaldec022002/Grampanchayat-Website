import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText, Users, Bell, Gift, ClipboardList, FileCheck, Download, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'माहिती अधिकार (RTI)',
    description: 'माहिती अधिकार कायद्याअंतर्गत माहिती मिळवण्यासाठी अर्ज करा. RTI फॉर्म डाउनलोड करा.',
    features: ['ऑनलाइन अर्ज', 'फॉर्म डाउनलोड', 'स्थिती तपासा'],
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Users,
    title: 'नागरिक सेवा',
    description: 'विविध प्रमाणपत्रे आणि दाखले मिळवण्यासाठी अर्ज करा. जन्म, मृत्यू, रहिवासी दाखला.',
    features: ['जन्म दाखला', 'मृत्यू दाखला', 'रहिवासी दाखला'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Bell,
    title: 'सूचना आणि निविदा',
    description: 'ग्रामपंचायतीकडून जारी होणाऱ्या सूचना, निविदा आणि जाहिराती पहा.',
    features: ['नवीनतम सूचना', 'निविदा', 'जाहिराती'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Gift,
    title: 'शासकीय योजना',
    description: 'ग्रामपंचायत स्तरावर राबवल्या जाणाऱ्या विविध शासकीय योजनांची माहिती.',
    features: ['पंतप्रधान योजना', 'राज्य योजना', 'लाभार्थी यादी'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: ClipboardList,
    title: 'मालमत्ता कर',
    description: 'मालमत्ता कर भरणा आणि थकबाकी तपासणी. ऑनलाइन भरणा सुविधा.',
    features: ['कर भरणा', 'थकबाकी', 'पावती'],
    color: 'from-rose-500 to-rose-600',
  },
  {
    icon: FileCheck,
    title: 'ना-हरकत प्रमाणपत्र',
    description: 'विविध कामांसाठी ना-हरकत प्रमाणपत्र (NOC) मिळवण्यासाठी अर्ज करा.',
    features: ['बांधकाम NOC', 'व्यवसाय NOC', 'इतर NOC'],
    color: 'from-cyan-500 to-cyan-600',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-marathi text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              ग्रामपंचायत सेवा
            </h1>
            <p className="font-marathi text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up stagger-2">
              नागरिकांसाठी विविध शासकीय सेवा आणि योजनांची माहिती एकाच ठिकाणी
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-card" />
                  </div>
                  <h3 className="font-marathi text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="font-marathi text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`} />
                        <span className="font-marathi text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <span className="font-marathi">अधिक माहिती</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full gradient-saffron flex items-center justify-center mx-auto mb-8">
                <Download className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h2 className="font-marathi text-3xl md:text-4xl font-bold text-foreground mb-6">
                फॉर्म डाउनलोड करा
              </h2>
              <p className="font-marathi text-muted-foreground mb-8 max-w-2xl mx-auto">
                विविध सेवांसाठी आवश्यक अर्ज आणि फॉर्म येथून डाउनलोड करा
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  <span className="font-marathi">RTI अर्ज</span>
                </Button>
                <Button variant="saffron" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  <span className="font-marathi">जन्म दाखला अर्ज</span>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  <span className="font-marathi">इतर फॉर्म</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
