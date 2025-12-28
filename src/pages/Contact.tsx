import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'पत्ता',
    details: ['ग्रामपंचायत कार्यालय, विचोऱी', 'तालुका मोर्शी, जिल्हा अमरावती', 'महाराष्ट्र - ४४४९०५'],
  },
  {
    icon: Phone,
    title: 'फोन',
    details: ['+91 XXXXX XXXXX', '+91 XXXXX XXXXX'],
  },
  {
    icon: Mail,
    title: 'ईमेल',
    details: ['gpvichori@gov.in', 'sarpanch.vichori@gov.in'],
  },
  {
    icon: Clock,
    title: 'कार्यालयीन वेळ',
    details: ['सोमवार - शुक्रवार: ९:०० - ५:०० वा.', 'शनिवार: ९:०० - १:०० वा.', 'रविवार: बंद'],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'संदेश पाठवला!',
      description: 'आपला संदेश यशस्वीपणे पाठवला गेला आहे. आम्ही लवकरच संपर्क साधू.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-marathi text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              आमच्याशी संपर्क साधा
            </h1>
            <p className="font-marathi text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up stagger-2">
              आपल्या प्रश्न, सूचना किंवा तक्रारींसाठी आमच्याशी संपर्क साधा
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in-up">
                <h2 className="font-marathi text-2xl font-bold text-foreground mb-6">
                  संदेश पाठवा
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-marathi text-sm font-medium text-foreground mb-2">
                        नाव *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="आपले नाव"
                        required
                        className="font-marathi"
                      />
                    </div>
                    <div>
                      <label className="block font-marathi text-sm font-medium text-foreground mb-2">
                        फोन *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="मोबाईल नंबर"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-marathi text-sm font-medium text-foreground mb-2">
                      ईमेल
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="आपला ईमेल"
                    />
                  </div>
                  <div>
                    <label className="block font-marathi text-sm font-medium text-foreground mb-2">
                      विषय *
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="संदेशाचा विषय"
                      required
                      className="font-marathi"
                    />
                  </div>
                  <div>
                    <label className="block font-marathi text-sm font-medium text-foreground mb-2">
                      संदेश *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="आपला संदेश लिहा..."
                      rows={5}
                      required
                      className="font-marathi resize-none"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    <span className="font-marathi">संदेश पाठवा</span>
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="animate-fade-in-up stagger-2">
                  <h2 className="font-marathi text-2xl font-bold text-foreground mb-6">
                    संपर्क माहिती
                  </h2>
                  <p className="font-marathi text-muted-foreground mb-8">
                    ग्रामपंचायत कार्यालयात भेट देण्यासाठी किंवा दूरध्वनीवर संपर्क साधण्यासाठी खालील माहिती वापरा.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                    >
                      <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-marathi text-lg font-semibold text-foreground mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, dIndex) => (
                          <p key={dIndex} className="font-marathi text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted rounded-2xl h-64 flex items-center justify-center animate-fade-in-up stagger-5">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="font-marathi text-muted-foreground">
                      विचोऱी, तालुका मोर्शी, जिल्हा अमरावती
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
