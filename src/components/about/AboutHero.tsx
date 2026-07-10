import {Container} from '@/components/common/Container';

function AboutIllustration() {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <svg viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[440px]" aria-hidden="true">
        <defs>
          <filter id="ab-card-shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="hsl(var(--primary))" floodOpacity="0.09"/>
          </filter>
          <filter id="ab-sm-shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="hsl(var(--primary))" floodOpacity="0.1"/>
          </filter>
        </defs>

        {/* ── Main company profile card ─────────────────── */}
        <rect x="80" y="30" width="260" height="200" rx="20" fill="white" filter="url(#ab-card-shadow)" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>

        {/* Card header band */}
        <rect x="80" y="30" width="260" height="56" rx="20" fill="hsl(var(--primary))"/>
        <rect x="80" y="62" width="260" height="24" fill="hsl(var(--primary))"/>

        {/* Avatar circle */}
        <circle cx="210" cy="86" r="28" fill="white" stroke="white" strokeWidth="3"/>
        <circle cx="210" cy="86" r="22" fill="hsl(var(--primary) / 0.12)"/>
        {/* Building icon */}
        <rect x="200" y="74" width="20" height="24" rx="2" fill="hsl(var(--primary))"/>
        <rect x="204" y="78" width="4" height="5" rx="1" fill="white" opacity="0.8"/>
        <rect x="212" y="78" width="4" height="5" rx="1" fill="white" opacity="0.8"/>
        <rect x="204" y="86" width="4" height="5" rx="1" fill="white" opacity="0.8"/>
        <rect x="212" y="86" width="4" height="5" rx="1" fill="white" opacity="0.8"/>
        <rect x="207" y="91" width="6" height="7" rx="1" fill="white" opacity="0.9"/>

        {/* Company name area */}
        <rect x="140" y="120" width="140" height="9" rx="4.5" fill="hsl(var(--primary) / 0.18)"/>
        <rect x="162" y="134" width="96" height="7" rx="3.5" fill="hsl(var(--primary) / 0.1)"/>

        {/* Divider */}
        <line x1="104" y1="152" x2="316" y2="152" stroke="hsl(var(--primary) / 0.08)" strokeWidth="1"/>

        {/* Stat row */}
        <text x="131" y="175" textAnchor="middle" fontSize="18" fontWeight="900" fill="hsl(var(--primary))" fontFamily="sans-serif">13+</text>
        <text x="131" y="187" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="hsl(var(--primary) / 0.5)" fontFamily="sans-serif">YEARS</text>

        <line x1="173" y1="162" x2="173" y2="192" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>

        <text x="210" y="175" textAnchor="middle" fontSize="18" fontWeight="900" fill="#2d7a3a" fontFamily="sans-serif">UK</text>
        <text x="210" y="187" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#2d7a3a88" fontFamily="sans-serif">COVERAGE</text>

        <line x1="247" y1="162" x2="247" y2="192" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>

        <text x="289" y="175" textAnchor="middle" fontSize="18" fontWeight="900" fill="#b91c1c" fontFamily="sans-serif">24/7</text>
        <text x="289" y="187" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#b91c1c88" fontFamily="sans-serif">OPS</text>


        {/* ── Founded badge — top left ───────────────────── */}
        <rect x="18" y="68" width="92" height="64" rx="16" fill="white" filter="url(#ab-sm-shadow)" stroke="hsl(var(--primary) / 0.08)" strokeWidth="1"/>
        <text x="64" y="96" textAnchor="middle" fontSize="22" fontWeight="900" fill="hsl(var(--primary))" fontFamily="sans-serif">2012</text>
        <text x="64" y="110" textAnchor="middle" fontSize="8" fontWeight="700" fill="hsl(var(--primary) / 0.45)" fontFamily="sans-serif" letterSpacing="0.8">FOUNDED</text>
        <rect x="32" y="118" width="64" height="6" rx="3" fill="hsl(var(--primary) / 0.07)"/>

        {/* ── Accreditation badge — top right ───────────── */}
        <rect x="310" y="68" width="92" height="64" rx="16" fill="white" filter="url(#ab-sm-shadow)" stroke="#2d7a3a22" strokeWidth="1"/>
        <circle cx="356" cy="93" r="16" fill="#2d7a3a10" stroke="#2d7a3a33" strokeWidth="1.5"/>
        {/* Checkmark */}
        <path d="M348 93 L354 99 L365 87" stroke="#2d7a3a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="356" y="117" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2d7a3a88" fontFamily="sans-serif" letterSpacing="0.5">ACCREDITED</text>

        {/* ── Growth bar chart — bottom right ───────────── */}
        <rect x="310" y="200" width="92" height="90" rx="16" fill="white" filter="url(#ab-sm-shadow)" stroke="hsl(var(--primary) / 0.08)" strokeWidth="1"/>
        <text x="356" y="220" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="hsl(var(--primary) / 0.45)" fontFamily="sans-serif" letterSpacing="0.5">GROWTH</text>
        {/* Bars */}
        {[
          {x: 326, h: 22, fill: 'hsl(var(--primary) / 0.25)'},
          {x: 341, h: 30, fill: 'hsl(var(--primary) / 0.45)'},
          {x: 356, h: 38, fill: 'hsl(var(--primary) / 0.7)'},
          {x: 371, h: 48, fill: 'hsl(var(--primary))'},
        ].map((b, i) => (
          <rect key={i} x={b.x} y={272 - b.h} width="10" height={b.h} rx="3" fill={b.fill}/>
        ))}
        <line x1="320" y1="272" x2="388" y2="272" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>

        {/* ── Floating dots ─────────────────────────────── */}
        <circle cx="52"  cy="196" r="5" fill="hsl(var(--secondary) / 0.25)"/>
        <circle cx="36"  cy="300" r="4" fill="hsl(var(--primary) / 0.15)"/>
        <circle cx="380" cy="156" r="5" fill="hsl(var(--secondary) / 0.2)"/>
        <circle cx="392" cy="326" r="4" fill="#2d7a3a22"/>
      </svg>
    </div>
  );
}

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f0fe] via-[#f0f6ff] to-[#dbeafe] pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12">
      {/* Subtle network pattern */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id="hero-net" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1.5" fill="hsl(214,82%,25%)" />
            <line x1="40" y1="40" x2="80" y2="0"  stroke="hsl(214,82%,25%)" strokeWidth="0.5" />
            <line x1="40" y1="40" x2="80" y2="80" stroke="hsl(214,82%,25%)" strokeWidth="0.5" />
            <line x1="40" y1="40" x2="0"  y2="80" stroke="hsl(214,82%,25%)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-net)" />
      </svg>

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Network &amp; Infrastructure
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            About Us
          </h1>
          <p className="mt-4 text-base leading-7 sm:text-lg text-muted-foreground">
            We deliver complete turnkey fixed-line telecom solutions — from survey and design through civils, installation, splicing, commissioning, and full FTTP builds across the UK.
          </p>
        </div>
        <AboutIllustration />
      </Container>
    </section>
  );
}
