import { useEffect, useState, useRef } from 'react';
import { Users, Home, BookOpen, Map } from 'lucide-react';

const stats = [
  { icon: Users, value: 2531, label: 'लोकसंख्या', suffix: '' },
  { icon: Home, value: 3452, label: 'मालमत्ता', suffix: '' },
  { icon: BookOpen, value: 88.89, label: 'साक्षरता दर', suffix: '%' },
  { icon: Map, value: 1058.41, label: 'क्षेत्रफळ (हेक्टर)', suffix: '' },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * end);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/5 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-marathi text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            गावाची आकडेवारी
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto font-marathi">
            विचोऱी गावाची महत्वाची माहिती एका नजरेत
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix: string;
  delay: number;
  isVisible: boolean;
}

const StatCard = ({ icon: Icon, value, label, suffix, delay, isVisible }: StatCardProps) => {
  const count = useCountUp(value, 2000, isVisible);
  const displayValue = value % 1 === 0 ? Math.floor(count) : count.toFixed(2);

  return (
    <div
      className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-primary-foreground" />
      </div>
      <div className="text-4xl font-bold text-primary-foreground mb-2">
        {displayValue}{suffix}
      </div>
      <div className="font-marathi text-primary-foreground/80">{label}</div>
    </div>
  );
};
