export function ContactIllustration() {
  return (
    <div className="flex items-center justify-center">
      <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[400px]" aria-hidden="true">
        <ellipse cx="200" cy="185" rx="165" ry="150" fill="hsl(var(--primary) / 0.05)"/>

        <rect x="60" y="90" width="280" height="185" rx="18" fill="white" stroke="hsl(var(--primary) / 0.12)" strokeWidth="1.5" filter="url(#ci-shadow)"/>
        <defs>
          <filter id="ci-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="hsl(var(--primary))" floodOpacity="0.08"/>
          </filter>
        </defs>

        <path d="M60 108 L200 182 L340 108" fill="hsl(var(--primary) / 0.07)" stroke="hsl(var(--primary) / 0.15)" strokeWidth="1.5"/>
        <path d="M60 90 L200 170 L340 90 Z" fill="hsl(var(--primary) / 0.06)" stroke="hsl(var(--primary) / 0.12)" strokeWidth="1.5"/>

        <rect x="130" y="30" width="140" height="130" rx="8" fill="white" stroke="hsl(var(--primary) / 0.15)" strokeWidth="1.5"/>
        <rect x="148" y="52" width="104" height="7" rx="3.5" fill="hsl(var(--primary) / 0.18)"/>
        <rect x="148" y="68" width="88"  height="6" rx="3"   fill="hsl(var(--primary) / 0.1)"/>
        <rect x="148" y="82" width="96"  height="6" rx="3"   fill="hsl(var(--primary) / 0.1)"/>
        <rect x="148" y="96" width="72"  height="6" rx="3"   fill="hsl(var(--primary) / 0.1)"/>
        <rect x="228" y="112" width="30" height="24" rx="3" fill="hsl(var(--secondary) / 0.2)" stroke="hsl(var(--secondary) / 0.4)" strokeWidth="1"/>
        <rect x="232" y="116" width="22" height="16" rx="2" fill="hsl(var(--secondary) / 0.35)"/>

        <circle cx="200" cy="275" r="30" fill="hsl(var(--primary))"/>
        <text x="200" y="282" textAnchor="middle" fontSize="22" fontWeight="800" fill="white" fontFamily="system-ui">@</text>

        {/* Phone pill */}
        <rect x="28" y="48" width="108" height="40" rx="20" fill="hsl(var(--secondary))" opacity="0.92"/>
        <circle cx="52" cy="68" r="13" fill="white" opacity="0.25"/>
        <path d="M47 62c0-.4.3-.7.7-.7h1.4l1 2.4-1.2.8a6.3 6.3 0 003.3 3.3l.8-1.2 2.4 1v1.4c0 .4-.3.7-.7.7-4.3 0-7.7-3.4-7.7-7.7z" fill="white"/>
        <rect x="66" y="60" width="58" height="7" rx="3.5" fill="white" opacity="0.8"/>
        <rect x="66" y="71" width="40" height="6" rx="3"   fill="white" opacity="0.5"/>

        {/* Email pill */}
        <rect x="264" y="295" width="112" height="40" rx="20" fill="hsl(var(--primary))" opacity="0.9"/>
        <circle cx="288" cy="315" r="13" fill="white" opacity="0.2"/>
        <rect x="279" y="309" width="18" height="12" rx="2" fill="white" opacity="0.9"/>
        <path d="M279 311l9 5 9-5" stroke="hsl(var(--primary))" strokeWidth="1.4" fill="none"/>
        <rect x="303" y="308" width="62" height="7" rx="3.5" fill="white" opacity="0.7"/>
        <rect x="303" y="319" width="44" height="6" rx="3"   fill="white" opacity="0.45"/>

        {/* Chat bubble */}
        <rect x="298" y="44" width="80" height="58" rx="14" fill="hsl(var(--primary) / 0.08)" stroke="hsl(var(--primary) / 0.18)" strokeWidth="1.5"/>
        <rect x="312" y="60" width="52" height="6" rx="3" fill="hsl(var(--primary) / 0.3)"/>
        <rect x="312" y="72" width="38" height="6" rx="3" fill="hsl(var(--primary) / 0.2)"/>
        <rect x="312" y="84" width="44" height="6" rx="3" fill="hsl(var(--primary) / 0.15)"/>
        <path d="M310 102 L298 114 L322 102Z" fill="hsl(var(--primary) / 0.08)" stroke="hsl(var(--primary) / 0.18)" strokeWidth="1.5"/>

        <circle cx="50"  cy="200" r="5" fill="hsl(var(--secondary) / 0.3)"/>
        <circle cx="360" cy="170" r="4" fill="hsl(var(--primary) / 0.2)"/>
        <circle cx="44"  cy="310" r="6" fill="hsl(var(--primary) / 0.12)"/>
        <circle cx="370" cy="240" r="5" fill="hsl(var(--secondary) / 0.2)"/>
      </svg>
    </div>
  );
}
