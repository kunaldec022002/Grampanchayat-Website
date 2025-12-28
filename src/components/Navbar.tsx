import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, BookOpen, Settings, Image, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const navItems = [
  { name: 'मुख्य पृष्ठ', nameEn: 'Home', href: '/', icon: Home },
  { name: 'आमच्याबद्दल', nameEn: 'About Us', href: '/about', icon: Info },
  { name: 'शिक्षण आणि पर्यावरण', nameEn: 'Education', href: '/education', icon: BookOpen },
  { name: 'सेवा', nameEn: 'Services', href: '/services', icon: Settings },
  { name: 'गॅलरी', nameEn: 'Gallery', href: '/gallery', icon: Image },
  // { name: 'संपर्क', nameEn: 'Contact', href: '/contact', icon: Phone },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="ग्रामपंचायत विचोऱी Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="font-marathi text-lg md:text-xl font-bold text-foreground">ग्रामपंचायत खोपडा</h1>
              <p className="text-xs text-muted-foreground">तालुका मोर्शी, जिल्हा अमरावती</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-foreground hover:bg-muted hover:text-primary"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-marathi">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-3",
                  "animate-slide-in-left",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-marathi">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
