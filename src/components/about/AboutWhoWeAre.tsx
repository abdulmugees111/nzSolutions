import Image from 'next/image';
import telecomeWorkflow from '@/assets/images/about/telecom-workflow.png';
import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';

const milestones = [
  {
    year: '2015',
    title: 'FTTP & Fibre Expansion',
    body: 'Scaled into full FTTP builds — PONs, spines, and headend installations across the UK.',
    accentClass: 'bg-[#2d7a3a] text-white',
    borderClass: 'border-[#2d7a3a]/25',
    dotClass: 'bg-[#2d7a3a]',
  },
  {
    year: '2018',
    title: 'Data Centre Networks',
    body: 'Added DWDM and data centre network solutions across Ciena, Nokia, Huawei, and ADTRAN platforms.',
    accentClass: 'bg-primary text-white',
    borderClass: 'border-primary/20',
    dotClass: 'bg-primary',
  },
  {
    year: '2020',
    title: 'Key Worker Status',
    body: 'Recognised as critical national infrastructure workers — maintaining 24×7 operations throughout the pandemic.',
    accentClass: 'bg-[#b91c1c] text-white',
    borderClass: 'border-[#b91c1c]/20',
    dotClass: 'bg-[#b91c1c]',
  },
];


export function AboutWhoWeAre() {
  return (
    <section className="pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12">
      <Container>
        {/* Header full-width — keeps both grid columns starting at the same edge */}
        <div className="mb-6 max-w-2xl">
          <SectionHeader
            eyebrow="Who We Are"
            title="A full-scope telecoms partner since day one."
            description="From a specialist installer to a complete turnkey partner — NZ Solutions has grown steadily across the UK."
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_500px] lg:items-start">

          {/* Left — timeline */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-[#2d7a3a]/30" />
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex gap-4">
                  <div className="relative flex-none flex flex-col items-center" style={{width: 44}}>
                    <div className={`relative z-10 mt-3.5 size-[11px] rounded-full ${m.dotClass} ring-2 ring-white ring-offset-1 shadow`} />
                    {i < milestones.length - 1 && (
                      <div className="flex-1 flex flex-col items-center pt-1 pb-1 gap-0.5">
                        <div className="w-px flex-1 border-l border-dashed border-foreground/10" />
                        <svg width="10" height="7" viewBox="0 0 10 7" className="opacity-30">
                          <polygon points="5,7 0,0 10,0" fill="currentColor" className="text-foreground" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className={`mb-3 flex-1 rounded-2xl border bg-card px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${m.borderClass}`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black tracking-wide ${m.accentClass}`}>
                        {m.year}
                      </span>
                      <h3 className="text-sm font-black text-foreground">{m.title}</h3>
                    </div>
                    <p className="text-xs leading-5 text-muted-foreground">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration aligned to heading+timeline height */}
          <div className="order-1 lg:order-2 group relative self-stretch -mt-48 p-3 sm:p-4">
            {/* Top-left decorative corner */}
            <div aria-hidden="true" className="absolute left-0 top-0 h-28 w-28 rounded-[1.75rem] bg-cyan-500 transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1" />
            {/* Bottom-right decorative corner */}
            <div aria-hidden="true" className="absolute bottom-0 right-0 h-28 w-28 rounded-[1.75rem] bg-primary transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1" />
            <div className="relative z-10 overflow-hidden rounded-3xl border border-border shadow-sm bg-white h-full transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-xl">
              <Image
                src={telecomeWorkflow}
                alt="End-to-end telecom workflow illustration"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
