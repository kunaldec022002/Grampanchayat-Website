import { Volume2 } from 'lucide-react';

const announcements = [
  { date: '27-12-2025', text: 'सडक दुरुस्ती' },
  { date: '27-12-2025', text: 'स्वच्छता मोहिमेबाबत सूचना' },
  { date: '25-12-2025', text: 'ग्रामसभा बैठक - सर्व ग्रामस्थांना उपस्थित राहण्याची विनंती' },
  { date: '20-12-2025', text: 'पाणीपुरवठा योजना अपडेट' },
];

export const AnnouncementTicker = () => {
  return (
    <div className="gradient-hero py-3 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center gap-4">
        <div className="flex-shrink-0 flex items-center gap-2 text-primary-foreground">
          <Volume2 className="w-5 h-5 animate-pulse" />
          <span className="font-marathi font-semibold hidden sm:inline">घोषणा:</span>
        </div>
        
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap">
            {announcements.map((item, index) => (
              <span key={index} className="inline-flex items-center mx-8 text-primary-foreground">
                <span className="font-medium">{item.date}</span>
                <span className="mx-2">—</span>
                <span className="font-marathi">{item.text}</span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {announcements.map((item, index) => (
              <span key={`dup-${index}`} className="inline-flex items-center mx-8 text-primary-foreground">
                <span className="font-medium">{item.date}</span>
                <span className="mx-2">—</span>
                <span className="font-marathi">{item.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
