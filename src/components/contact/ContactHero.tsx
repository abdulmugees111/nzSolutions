import {ArrowRight} from 'lucide-react';
import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';
import {Button} from '@/components/ui/button';
import {siteConfig} from '@/constants/site';
import {ContactIllustration} from './ContactIllustration';

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f0fe] via-[#f0f6ff] to-[#dbeafe] py-10 sm:py-14 lg:py-16">
      {/* Subtle network pattern — matches home hero */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id="contact-net" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1.5" fill="hsl(214,82%,25%)" />
            <line x1="40" y1="40" x2="80" y2="0"  stroke="hsl(214,82%,25%)" strokeWidth="0.5" />
            <line x1="40" y1="40" x2="80" y2="80" stroke="hsl(214,82%,25%)" strokeWidth="0.5" />
            <line x1="40" y1="40" x2="0"  y2="80" stroke="hsl(214,82%,25%)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-net)" />
      </svg>
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeader
            as="h1"
            eyebrow="Get In Touch"
            title="Contact Us"
            description="Whether you have a question about our services, want to discuss a project, or are ready to get started — our team is here to help."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={`mailto:${siteConfig.email}`}>Email Us <ArrowRight size={18} /></a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${siteConfig.phone}`}>Call Us</a>
            </Button>
          </div>
        </div>

        <ContactIllustration />
      </Container>
    </section>
  );
}
