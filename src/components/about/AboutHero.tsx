import Image from 'next/image';
import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f0fe] via-[#f0f6ff] to-[#dbeafe] pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12">
      {/* Subtle network pattern — matches home hero */}
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

      <Container className="relative grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <SectionHeader
            as="h1"
            eyebrow="About NZ Solutions"
            title="Network & infrastructure partners since 2012."
            description="We deliver complete turnkey fixed-line telecom solutions — from survey and design through civils, installation, splicing, commissioning, and full FTTP builds across the UK."
          />
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <Image
            src="/images/about-rafiki.svg"
            alt="About NZ Solutions illustration"
            width={480}
            height={420}
            className="w-full max-w-[480px] max-h-[420px] object-contain"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
