import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';

const serviceGroups = [
  {
    title: 'Planning & Design',
    items: ['Project Management', 'Survey, Design & Planning', 'Network Audits & Design', 'Fibre Access HLD Services', 'Fibre Access LLD Services'],
  },
  {
    title: 'Civil Works',
    items: ['Civils', 'Cable Installation', 'Splicing & Termination'],
  },
  {
    title: 'FTTP Builds',
    items: ['FTTP – PONs Building', 'FTTP – Spines Building', 'ODF Installations'],
  },
  {
    title: 'Commissioning',
    items: ['OTH Testing & Commissioning', 'Headend (OTH) Installations', 'OTH Data Mapping', 'DSLAM / Night Migrations'],
  },
  {
    title: 'Infrastructure',
    items: ['Data Centres Network Solutions', 'DWDM Networks – Ciena, Nokia, ADTRAN, Huawei', 'De-Commissioning'],
  },
  {
    title: 'Digital & IT',
    items: ['IT Solutions', 'Software Development', 'Integration'],
  },
];

function DotPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      aria-hidden="true"
    >
      <defs>
        <pattern id="svc-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#svc-dots)" />
    </svg>
  );
}

export function AboutServices() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-14 sm:py-20 lg:py-24">
      {/* Subtle dot-grid background */}
      <DotPattern />

      {/* Decorative blurred orbs */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full opacity-10"
        style={{background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)'}}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full opacity-10"
        style={{background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)'}}
      />

      <Container className="relative">
        {/* Header */}
        <div className="mb-8">
          <SectionHeader
            eyebrow="What We Deliver"
            title="One-stop-shop for everything telecoms."
            description="Complete turnkey FTTP builds or a part role in any fixed-line project — right across the UK."
            inverted
          />
        </div>

        {/* Bento grid */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">

          {/* All 5 uniform cards */}
          {serviceGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-xl bg-white/95 p-3.5 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg outline-none focus:outline-none select-none"
            tabIndex={-1}
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-black text-primary">{group.title}</p>
                <span className="rounded-md bg-primary/6 px-1.5 py-0.5 text-[9px] font-semibold text-primary/50">
                  {group.items.length}
                </span>
              </div>
              <div className="space-y-1">
                {group.items.map((item, index) => (
                  <div key={item} className="flex items-center gap-2 py-1">
                    <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-[7px] font-bold text-primary">
                      {index + 1}
                    </span>
                    <span className="text-[11px] font-medium text-foreground leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}
