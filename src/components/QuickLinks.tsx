import { Link } from 'react-router-dom';
import { FileText, Users, Bell, Gift, ArrowRight } from 'lucide-react';

const quickLinks = [
  {
    icon: FileText,
    title: 'माहिती अधिकार',
    description: 'आरटी आय दाखल करा आणि फॉर्म डाउनलोड करा',
    href: '/services',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Users,
    title: 'नागरिकसेवा',
    description: 'प्रमाणपत्रे आणि योजनासाठी अर्ज करा',
    href: '/services',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Bell,
    title: 'सूचना आणि निविदा',
    description: 'ग्राम प्रशासनाकडून नवीनतम अपडेट सूचना',
    href: '/services',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Gift,
    title: 'योजना आणि लाभार्थी',
    description: 'ग्राम पंचायतस्तरावर असणाऱ्या शासकीय योजना',
    href: '/services',
    color: 'from-purple-500 to-purple-600',
  },
];

export const QuickLinks = () => {
  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            जलद दुवे
          </span>
          <h2 className="font-marathi text-3xl md:text-4xl font-bold text-foreground mb-4">
            महत्वाचे जलद दुवे
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-marathi">
            ग्रामपंचायतच्या विविध सेवा आणि माहितीसाठी खालील लिंक्स वापरा
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-7 h-7 text-card" />
                </div>
                <h3 className="font-marathi text-lg font-semibold text-foreground group-hover:text-card mb-2 transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-card/80 font-marathi mb-4 transition-colors duration-300">
                  {link.description}
                </p>
                <div className="flex items-center gap-2 text-primary group-hover:text-card font-medium transition-colors duration-300">
                  <span className="text-sm">पहा</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
