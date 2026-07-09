import {Users, Heart, TrendingUp, Shield, ArrowRight, Banknote, GraduationCap, Globe, Wrench} from 'lucide-react';
import Image from 'next/image';
import {Container} from '@/components/common/Container';
import {AccreditationsBanner} from '@/components/common/AccreditationsBanner';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/navigation';
import {ApplyButton} from '@/components/careers/ApplyButton';

export const metadata = {
  title: 'Careers',
  description:
    'Join NZ Solutions — we are recruiting talented, motivated people passionate about technology and telecoms. Send your CV to Careers@nzsolutions.co.uk.'
};

const values = [
  {icon: Users,     title: 'Our People First',  body: 'We regard our employees as our most valuable asset — investing in their careers and providing the tools to grow and succeed.'},
  {icon: TrendingUp,title: 'Real Growth',        body: 'Our growth as a company is determined by our ambition, which is why we offer excellent opportunities and rewards.'},
  {icon: Heart,     title: 'Inclusive Culture',  body: 'We work hard to create an inclusive and safe working environment to attract and retain exceptionally talented people.'},
  {icon: Shield,    title: 'Mission Driven',     body: 'We have a mission to revolutionise Telecommunication services and we need passionate people to help us deliver it.'},
];

const benefits = [
  {icon: Banknote,      label: 'Competitive Pay'},
  {icon: GraduationCap, label: 'Career Training'},
  {icon: Users,         label: 'Inclusive Culture'},
  {icon: Globe,         label: 'UK Infrastructure'},
];

export default function CareersPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-28 pb-8 sm:pb-12">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left */}
          <div>
            <p className="text-base font-bold uppercase tracking-widest text-secondary">
              Careers at NZ Solutions
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Build your career in telecoms with us.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:text-xl">
              NZ Solutions prides itself on attracting the very best staff to meet our customer needs.
              If you&apos;re motivated, persistent, and passionate about technology — we want to hear from you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ApplyButton />
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Right — photo card */}
          <div className="relative">
            <div className="rounded-[2rem] border bg-card p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="relative overflow-hidden rounded-[1.5rem]" style={{height: '380px'}}>
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Engineer working on telecoms infrastructure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-primary/90 px-5 py-4 backdrop-blur-sm">
                  <p className="text-sm font-bold text-white">Join a team that delivers.</p>
                  <p className="mt-1 text-xs text-primary-foreground/70">Critical UK telecoms infrastructure since 2012</p>
                </div>
              </div>
            </div>

          </div>

        </Container>
      </section>

      {/* ── WHY JOIN US ──────────────────────────────────────── */}
      <section className="pt-16 sm:pt-20 lg:pt-28 pb-8 sm:pb-12 bg-muted/30">
        <Container>

          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-base font-bold uppercase tracking-widest text-secondary">Why Join Us</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              A place where you can grow.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              We invest in our people, create an inclusive culture, and give you the tools to build a career on critical national infrastructure.
            </p>
          </div>

          {/* 4 value cards — full width */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl" style={{background: 'hsl(var(--primary) / 0.08)'}}>
                  <v.icon strokeWidth={1.75} className="size-5 text-secondary" />
                </div>
                <h3 className="text-base font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>

          {/* Apply CTA */}
          <div className="hidden mt-6 rounded-[2rem] border bg-card p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
            <div className="rounded-[1.5rem] bg-primary overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center">

                {/* Left: text + benefits + CTA */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:max-w-[420px]">
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary">We&apos;re Recruiting</p>
                  <h3 className="mt-2 text-2xl font-black text-white leading-tight">Ready to join the team?</h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/60">
                    Send your CV to <span className="text-white font-semibold">Careers@nzsolutions.co.uk</span>{' '}and we&apos;ll be in touch.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {benefits.map((b) => (
                      <div key={b.label} className="flex items-center gap-2 rounded-xl px-3 py-2" style={{background: 'rgba(255,255,255,0.08)'}}>
                        <b.icon size={14} className="text-secondary shrink-0" />
                        <span className="text-xs font-medium text-primary-foreground/80">{b.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <ApplyButton />
                  </div>
                </div>

                {/* Right: overlapping circles */}
                <div className="hidden lg:flex flex-1 items-center justify-center py-10">
                  <div className="flex items-center">
                    {[
                      {src: 'photo-1522071820081-009f0129c71c', size: 160, z: 1},
                      {src: 'photo-1531482615713-2afd69097998', size: 190, z: 3},
                      {src: 'photo-1559136555-9303baea8ebd', size: 160, z: 2},
                    ].map(({src, size, z}, i) => (
                      <div
                        key={src}
                        className="relative shrink-0 overflow-hidden rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 hover:z-10"
                        style={{
                          width: size, height: size,
                          marginLeft: i === 0 ? 0 : '-32px',
                          border: '3px solid rgba(255,255,255,0.25)',
                          zIndex: z,
                        }}
                      >
                        <Image
                          src={`https://images.unsplash.com/${src}?auto=format&fit=crop&w=400&q=80`}
                          alt="Team"
                          fill
                          className="object-cover"
                          sizes="200px"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </section>

      <AccreditationsBanner />
    </>
  );
}
