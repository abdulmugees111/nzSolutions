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

function NetworkIllustration() {
  return (
    <svg viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      {/* Background card */}
      <rect x="0" y="0" width="420" height="480" rx="24" fill="hsl(var(--card))" />

      {/* Subtle grid pattern */}
      <defs>
        <pattern id="wwa-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
        </pattern>
        <marker id="wwa-arrow" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="hsl(var(--primary) / 0.35)" />
        </marker>
        <filter id="wwa-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="0" y="0" width="420" height="480" rx="24" fill="url(#wwa-grid)" />

      {/* Connection lines */}
      {/* Hub to tower */}
      <line x1="210" y1="210" x2="120" y2="100" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#wwa-arrow)" />
      <line x1="210" y1="210" x2="300" y2="100" stroke="#2d7a3a55" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#wwa-arrow)" />
      <line x1="210" y1="210" x2="80"  y2="290" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#wwa-arrow)" />
      <line x1="210" y1="210" x2="340" y2="290" stroke="#b91c1c44" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#wwa-arrow)" />
      <line x1="210" y1="210" x2="210" y2="360" stroke="#2d7a3a55" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#wwa-arrow)" />

      {/* Secondary connections */}
      <line x1="120" y1="100" x2="300" y2="100" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="80"  y1="290" x2="210" y2="360" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="340" y1="290" x2="210" y2="360" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />

      {/* Central hub */}
      <circle cx="210" cy="210" r="38" fill="hsl(var(--primary))" filter="url(#wwa-glow)" />
      <circle cx="210" cy="210" r="30" fill="hsl(var(--primary))" />
      <circle cx="210" cy="210" r="22" fill="white" opacity="0.15" />
      {/* Hub icon — signal waves */}
      <path d="M196 210 Q210 196 224 210" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M188 218 Q210 188 232 218" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      <circle cx="210" cy="215" r="3.5" fill="white" />

      {/* Node — Tower (top-left, blue) */}
      <circle cx="120" cy="100" r="28" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
      <circle cx="120" cy="100" r="18" fill="hsl(var(--primary))" />
      {/* Tower icon */}
      <rect x="118" y="90" width="4" height="20" rx="2" fill="white" />
      <line x1="113" y1="94" x2="127" y2="94" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="115" y1="99" x2="125" y2="99" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* Node — Fibre (top-right, green) */}
      <circle cx="300" cy="100" r="28" fill="#2d7a3a18" stroke="#2d7a3a44" strokeWidth="1.5" />
      <circle cx="300" cy="100" r="18" fill="#2d7a3a" />
      {/* Fibre icon — curved lines */}
      <path d="M291 104 Q296 96 305 100 Q312 104 308 96" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M292 108 Q298 100 307 104" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />

      {/* Node — Data centre (bottom-left, blue) */}
      <circle cx="80"  cy="290" r="28" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
      <circle cx="80"  cy="290" r="18" fill="hsl(var(--primary))" />
      {/* Server rack icon */}
      <rect x="72" y="283" width="16" height="4" rx="1.5" fill="white" />
      <rect x="72" y="289" width="16" height="4" rx="1.5" fill="white" opacity="0.8" />
      <rect x="72" y="295" width="16" height="4" rx="1.5" fill="white" opacity="0.6" />
      <circle cx="85" cy="285" r="1" fill="hsl(var(--secondary))" />
      <circle cx="85" cy="291" r="1" fill="#2d7a3a" />

      {/* Node — Operations 24/7 (bottom-right, red) */}
      <circle cx="340" cy="290" r="28" fill="#b91c1c10" stroke="#b91c1c33" strokeWidth="1.5" />
      <circle cx="340" cy="290" r="18" fill="#b91c1c" />
      {/* Clock icon */}
      <circle cx="340" cy="290" r="8" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1="340" y1="286" x2="340" y2="290" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="340" y1="290" x2="343" y2="293" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* Node — Digital (bottom-centre, green) */}
      <circle cx="210" cy="360" r="28" fill="#2d7a3a18" stroke="#2d7a3a44" strokeWidth="1.5" />
      <circle cx="210" cy="360" r="18" fill="#2d7a3a" />
      {/* Code/digital icon */}
      <path d="M202 357 L206 360 L202 363" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M218 357 L214 360 L218 363" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="208" y1="365" x2="212" y2="355" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

      {/* Node labels */}
      <text x="120" y="140" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--foreground))" fontFamily="sans-serif">Telecoms</text>
      <text x="120" y="151" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--foreground))" fontFamily="sans-serif">Infrastructure</text>
      <text x="300" y="140" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--foreground))" fontFamily="sans-serif">Fibre &amp; FTTP</text>
      <text x="80"  y="330" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--foreground))" fontFamily="sans-serif">Data Centres</text>
      <text x="340" y="330" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--foreground))" fontFamily="sans-serif">24/7 Ops</text>
      <text x="210" y="400" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--foreground))" fontFamily="sans-serif">Digital &amp; IT</text>

      {/* UK label at bottom */}
      <rect x="145" y="440" width="130" height="26" rx="13" fill="hsl(var(--primary))" />
      <text x="210" y="456" textAnchor="middle" fontSize="10" fontWeight="800" fill="white" fontFamily="sans-serif" letterSpacing="1.5">NZ SOLUTIONS UK</text>

      {/* Pulse rings on hub */}
      <circle cx="210" cy="210" r="50" fill="none" stroke="hsl(var(--primary) / 0.12)" strokeWidth="1" />
      <circle cx="210" cy="210" r="65" fill="none" stroke="hsl(var(--primary) / 0.07)" strokeWidth="1" />
    </svg>
  );
}

export function AboutWhoWeAre() {
  return (
    <section className="pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">

          {/* Left — flowchart timeline */}
          <div>
            <SectionHeader
              eyebrow="Who We Are"
              title="A full-scope telecoms partner since day one."
              description="From a specialist installer to a complete turnkey partner — NZ Solutions has grown steadily across the UK."
            />

            {/* Flowchart */}
            <div className="mt-8 relative">
              {/* Vertical spine line */}
              <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-[#2d7a3a]/30" />

              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative flex gap-4">
                    {/* Dot on spine */}
                    <div className="relative flex-none flex flex-col items-center" style={{width: 44}}>
                      <div className={`relative z-10 mt-3.5 size-[11px] rounded-full ${m.dotClass} ring-2 ring-white ring-offset-1 shadow`} />
                      {/* Connector arrow between cards */}
                      {i < milestones.length - 1 && (
                        <div className="flex-1 flex flex-col items-center pt-1 pb-1 gap-0.5">
                          <div className="w-px flex-1 border-l border-dashed border-foreground/10" />
                          <svg width="10" height="7" viewBox="0 0 10 7" className="opacity-30">
                            <polygon points="5,7 0,0 10,0" fill="currentColor" className="text-foreground" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Card */}
                    <div
                      className={`mb-3 flex-1 rounded-2xl border bg-card px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${m.borderClass}`}
                    >
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
          </div>

          {/* Right — network illustration */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-3xl border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="overflow-hidden rounded-[1.5rem]" style={{height: '480px'}}>
                <NetworkIllustration />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
