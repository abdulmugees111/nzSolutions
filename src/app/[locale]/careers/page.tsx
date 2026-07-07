import {Users, Heart, TrendingUp, Shield} from 'lucide-react';
import {Container} from '@/components/common/Container';

export const metadata = {
  title: 'Careers',
  description:
    'Join NZ Solutions — we are recruiting talented, motivated people passionate about technology and telecoms. Send your CV to Careers@nzsolutions.co.uk.'
};

const values = [
  {
    icon: Users,
    title: 'Our People First',
    body: 'We regard our employees as our most valuable asset — investing in their careers and providing the tools to grow and succeed.'
  },
  {
    icon: TrendingUp,
    title: 'Real Growth',
    body: 'Our growth as a company is determined by our ambition, which is why we offer excellent opportunities and rewards.'
  },
  {
    icon: Heart,
    title: 'Inclusive Culture',
    body: 'We work hard to create an inclusive and safe working environment to attract and retain exceptionally talented people.'
  },
  {
    icon: Shield,
    title: 'Mission Driven',
    body: 'We have a mission to revolutionise Telecommunication services and we need passionate people to help us deliver it.'
  },
];

export default function CareersPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-white to-muted">
        <Container className="py-10 sm:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* Left: headline */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                Careers at NZ Solutions
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                Build your career in telecoms with us.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                NZ Solutions prides itself on attracting the very best staff to meet our customer needs.
                If you&apos;re motivated, persistent, and passionate about technology — we want to hear from you.
              </p>
            </div>

            {/* Right: company brand panel */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground shadow-sm">
                {/* Dot grid background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    backgroundImage: `radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)`,
                    backgroundSize: '22px 22px',
                  }}
                />
                <div className="relative flex flex-col items-center text-center">
                  {/* Large NZ mark */}
                  <div className="flex size-24 items-center justify-center rounded-2xl bg-white/10 text-3xl font-black tracking-tight text-white ring-1 ring-white/20">
                    NZ
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-white">NZ Solutions</h2>
                  <p className="mt-1 text-sm text-primary-foreground/60">
                    Established 2012 · United Kingdom
                  </p>
                  <div className="mt-6 w-full border-t border-white/10 pt-6 grid grid-cols-2 gap-4 text-center">
                    {[['12+', 'Years'], ['24/7', 'Operations'], ['20+', 'Services'], ['UK', 'Nationwide']].map(([val, lbl]) => (
                      <div key={lbl} className="rounded-xl bg-white/07 py-3" style={{background: 'rgba(255,255,255,0.07)'}}>
                        <div className="text-xl font-black text-white">{val}</div>
                        <div className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-primary-foreground/40">{lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl bg-secondary" />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <Container className="section-padding">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-start">

          {/* Left: copy */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Why Join Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our people are our greatest asset.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
              <p>
                NZ Solutions prides itself on attracting the very best staff to meet our customer
                needs and as a company, we have a mission to revolutionise Telecommunication
                services. We regard our employees as our most valuable asset.
              </p>
              <p>
                We invest in their careers and provide them with the tools and resources to grow and
                succeed. If you&apos;re motivated, persistent, and passionate about technology — call
                NZ Solutions today to find out more about our job opportunities.
              </p>
              <p>
                NZS is proud of its people and with good reason. Our growth as a company is
                determined by our ambition and that is why we work hard to make sure we offer
                excellent opportunities and rewards whilst creating an inclusive and safe working
                environment to attract and retain exceptionally talented people.
              </p>
            </div>

            {/* 2×2 value cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border bg-card p-5 shadow-sm">
                  <div
                    className="mb-3 flex size-10 items-center justify-center rounded-xl"
                    style={{background: 'hsl(var(--primary) / 0.07)'}}
                  >
                    <v.icon strokeWidth={1.75} className="size-[18px] text-secondary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{v.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: apply card */}
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl bg-primary text-primary-foreground">
              {/* Dot grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  We&apos;re Recruiting
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  Ready to join the team?
                </h3>
                <p className="mt-4 text-sm leading-7 text-primary-foreground/70">
                  For further information on NZ Solutions or to send a copy of your current CV,
                  please email us at:
                </p>
                <a
                  href="mailto:Careers@nzsolutions.co.uk"
                  className="mt-5 inline-block rounded-2xl bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-90"
                >
                  Careers@nzsolutions.co.uk
                </a>
                <div className="mt-8 space-y-3 border-t border-white/10 pt-8 text-sm text-primary-foreground/60">
                  <p>✓ &nbsp;Competitive salary &amp; rewards</p>
                  <p>✓ &nbsp;Career development &amp; training</p>
                  <p>✓ &nbsp;Inclusive working environment</p>
                  <p>✓ &nbsp;Work on critical national infrastructure</p>
                </div>
              </div>
              <div className="h-[3px] bg-secondary" />
            </div>
          </div>
        </div>
      </Container>

      {/* ── ACCREDITATIONS ──────────────────────────────────── */}
      <section className="border-t bg-card">
        <Container className="py-16 sm:py-20">
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Accreditations &amp; Memberships
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">

            {/* PQS + SSIP */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="flex items-center gap-5 rounded-2xl bg-white px-8 py-6 shadow-sm"
                style={{border: '2.5px solid #6ac12b'}}
              >
                <div>
                  <div className="flex items-baseline leading-none">
                    <span className="text-[2rem] font-black tracking-tight text-gray-900">PQ</span>
                    <span className="text-[2rem] font-black tracking-tight" style={{color: '#6ac12b'}}>S</span>
                  </div>
                  <div className="mt-1 text-[8px] font-bold uppercase tracking-widest text-gray-400">
                    Pre·Qualification·Scheme
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-[1.15rem] font-black leading-tight tracking-tight text-gray-900">
                    SS<span style={{color: '#0098d4'}}>I</span>P
                  </div>
                  <div className="mt-1 text-[8px] font-medium text-gray-400">Registered Member</div>
                </div>
              </div>
              <div
                className="rounded-xl px-7 py-2 text-[13px] font-bold text-white"
                style={{background: '#6ac12b'}}
              >
                Health &amp; Safety Approved
              </div>
            </div>

            {/* SSIP stamp */}
            <div
              className="relative flex size-[148px] items-center justify-center rounded-full bg-white shadow-sm"
              style={{border: '3px dashed #1c1c1c'}}
            >
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <path id="careers-arc-top" d="M 18,60 A 42,42 0 0,1 102,60" />
                  <path id="careers-arc-bot" d="M 19,67 A 42,42 0 0,0 101,67" />
                </defs>
                <text fontSize="7.2" fontWeight="700" fill="#1c1c1c">
                  <textPath href="#careers-arc-top" startOffset="6%">
                    Assessed by a SSIP member scheme
                  </textPath>
                </text>
                <text fontSize="6.4" fill="#333">
                  <textPath href="#careers-arc-bot" startOffset="2%">
                    For validation please see www.ssipportal.org.uk
                  </textPath>
                </text>
              </svg>
              <div className="relative z-10 text-center">
                <span className="text-[1.6rem] font-black tracking-tight text-gray-900">
                  SS
                  <span
                    className="inline-block border-b-4 leading-none px-px"
                    style={{color: '#0098d4', borderColor: '#0098d4'}}
                  >
                    I
                  </span>
                  P
                </span>
              </div>
            </div>

            {/* Constructionline */}
            <div
              className="flex flex-col items-center gap-4 rounded-2xl border bg-white px-10 py-7 shadow-sm"
            >
              <div
                className="flex size-[56px] items-center justify-center rounded-full"
                style={{background: '#d1d5db'}}
              >
                <svg viewBox="0 0 40 40" className="size-[34px]" fill="#6b7280" aria-hidden="true">
                  <rect x="4"    y="33"  width="32" height="3"   rx="1" />
                  <rect x="4"    y="4"   width="32" height="3.5" rx="1" />
                  <rect x="7"    y="9"   width="5"  height="23"  rx="1.5" />
                  <rect x="17.5" y="9"   width="5"  height="23"  rx="1.5" />
                  <rect x="28"   y="9"   width="5"  height="23"  rx="1.5" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-[1.05rem] font-bold tracking-tight text-gray-700">
                  Constructionline
                </div>
                <div className="mt-0.5 text-[11px] font-medium text-gray-400">Silver Member</div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
