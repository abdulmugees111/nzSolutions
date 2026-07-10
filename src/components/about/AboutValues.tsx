import {Zap, Shield, Users, Layers} from 'lucide-react';
import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';

const values = [
  {
    icon: Zap,
    title: 'Right First Time',
    body: 'On-budget delivery backed by engineers with deep multi-vendor expertise across all major telecoms platforms.',
    stat: '100%',
    statLabel: 'Delivery Focus',
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    body: 'Over a decade of quality end results across FTTP, data centres, and fixed-line infrastructure projects.',
    stat: '12+',
    statLabel: 'Years Delivering',
  },
  {
    icon: Users,
    title: 'Key Workers',
    body: 'Critical national infrastructure workers operating, maintaining, and upgrading the UK telecoms network 24×7×365.',
    stat: '24/7',
    statLabel: 'UK Operations',
  },
  {
    icon: Layers,
    title: 'Full Turnkey Partner',
    body: 'Survey, design, civils, installation, splicing, and commissioning — every phase, all under one roof.',
    stat: '20+',
    statLabel: 'Service Lines',
  },
];

function WaveCorner() {
  return (
    <svg
      viewBox="0 0 160 120"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0 w-36 h-28 pointer-events-none select-none"
      aria-hidden="true"
    >
      <path
        d="M160 120 Q100 90 60 110 Q20 130 0 100 L0 120 Z"
        fill="hsl(var(--accent) / 0.18)"
      />
      <path
        d="M160 120 Q110 80 75 105 Q40 125 10 108 L0 120 Z"
        fill="hsl(var(--accent) / 0.10)"
      />
      <path
        d="M160 120 Q125 95 95 112 Q65 128 35 115 L0 120 Z"
        fill="hsl(var(--accent) / 0.06)"
      />
    </svg>
  );
}

export function AboutValues() {
  return (
    <section className="border-t border-b bg-muted/30 pt-8 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <Container>
        <div className="mb-10">
          <SectionHeader eyebrow="Our Values" title="What sets us apart." />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Wave corner decoration */}
              <WaveCorner />

              {/* Icon */}
              <div
                className="relative z-10 mb-5 flex size-11 items-center justify-center rounded-xl"
                style={{background: 'hsl(var(--primary) / 0.07)'}}
              >
                <v.icon strokeWidth={1.75} className="size-5 text-primary" />
              </div>

              {/* Stat */}
              <p className="relative z-10 text-3xl font-black text-primary">{v.stat}</p>
              <p className="relative z-10 mt-0.5 text-[11px] font-bold uppercase tracking-widest text-secondary">
                {v.statLabel}
              </p>

              {/* Divider */}
              <div className="relative z-10 my-4 h-px bg-border" />

              {/* Title + body */}
              <h3 className="relative z-10 text-sm font-black text-foreground">{v.title}</h3>
              <p className="relative z-10 mt-2 text-xs leading-5 text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
