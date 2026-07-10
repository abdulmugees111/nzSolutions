const items = [
  'FTTP Builds', 'Network Design', 'Key Workers', 'Data Centres',
  'Civils & Cabling', 'Fibre Splicing', 'DSLAM Migrations', 'OTH Testing',
  'DWDM Networks', '12+ Years', '24/7 UK Operations', 'Survey & Planning',
  'Commissioning', 'Infrastructure', 'Software Development', 'Fixed-Line Telecom',
];

export function AboutMarquee() {
  const doubled = [...items, ...items];

  return (
    <div className="border-y bg-primary overflow-hidden py-4 select-none">
      <div className="flex w-max animate-marquee gap-10">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-semibold text-primary-foreground/80 whitespace-nowrap">
            <span className="size-1.5 rounded-full bg-secondary inline-block shrink-0" />
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
