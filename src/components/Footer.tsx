import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'मुख्य पृष्ठ', href: '/' },
  { name: 'आमच्याबद्दल', href: '/about' },
  { name: 'सेवा', href: '/services' },
  { name: 'गॅलरी', href: '/gallery' },
  { name: 'संपर्क', href: '/contact' },
];

const services = [
  { name: 'माहिती अधिकार', href: '/services' },
  { name: 'नागरिकसेवा', href: '/services' },
  { name: 'प्रमाणपत्रे', href: '/services' },
  { name: 'योजना', href: '/services' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-saffron flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">ग्रा</span>
              </div>
              <div>
                <h3 className="font-marathi text-lg font-bold">ग्रामपंचायत खोपडा</h3>
                <p className="text-sm text-background/60">तालुका मोर्शी</p>
              </div>
            </div>
            <p className="font-marathi text-background/70 text-sm leading-relaxed mb-6">
              खोपडा हे एक प्रगत, शांत आणि संस्कारी गाव आहे. ग्रामपंचायत नागरिकांच्या सेवेसाठी सदैव तत्पर आहे.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-marathi text-lg font-semibold mb-6">जलद दुवे</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-marathi text-background/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-marathi text-lg font-semibold mb-6">सेवा</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="font-marathi text-background/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-marathi text-lg font-semibold mb-6">संपर्क माहिती</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="font-marathi text-background/70 text-sm">
                  ग्रामपंचायत खोपडा, तालुका मोर्शी, जिल्हा अमरावती, महाराष्ट्र - ४४४९०५
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/70 text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/70 text-sm">gpvichori@gov.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-marathi text-background/70 text-sm">सोम - शुक्र: ९:०० - ५:०० वा.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p className="font-marathi">© २०२५ ग्रामपंचायत खोपडा. सर्व हक्क राखीव.</p>
            <p className="font-marathi">महाराष्ट्र शासन द्वारे संचालित</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
