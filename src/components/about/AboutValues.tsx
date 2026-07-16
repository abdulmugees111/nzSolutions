import {Zap, Shield, Users, Layers} from 'lucide-react';
import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';

const values = [
  {
    icon: Zap,
    title: 'Right First Time',
    body: 'On-budget delivery backed by engineers with deep multi-vendor expertise across all major telecoms platforms.',
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    body: 'Over a decade of quality end results across FTTP, data centres, and fixed-line infrastructure projects.',
  },
  {
    icon: Users,
    title: 'Key Workers',
    body: 'Critical national infrastructure workers operating, maintaining, and upgrading the UK telecoms network 24×7×365.',
  },
  {
    icon: Layers,
    title: 'Full Turnkey Partner',
    body: 'Survey, design, civils, installation, splicing, and commissioning — every phase, all under one roof.',
  },
];

export function AboutValues() {
  return (
    <section className="border-t border-b bg-muted/30 pt-8 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <Container>
        <div className="mb-10">
          <SectionHeader eyebrow="Our Values" title="What sets us apart." />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, index) => (
            <article
              key={v.title}
              className="group relative rounded-2xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
            >
              {/* Top row — icon left, number right */}
              <div className="flex items-start justify-between">
                <span className="flex size-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                  <v.icon size={28} strokeWidth={1.75} />
                </span>
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{v.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
