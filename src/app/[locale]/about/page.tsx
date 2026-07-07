import {CheckCircle2, Shield, Users, Zap, Layers, Network} from 'lucide-react';
import {Container} from '@/components/common/Container';

export const metadata = {
  title: 'About Us',
  description:
    'NZ Solutions — established 2012. Delivering turnkey fixed-line telecom infrastructure, FTTP, network design, and digital engineering across the United Kingdom.'
};

const stats = [
  {value: '2012', label: 'Year Founded'},
  {value: '12+',  label: 'Years Delivering'},
  {value: '20+',  label: 'Service Lines'},
  {value: '24/7', label: 'UK Operations'},
];

const pillars = [
  {
    icon: Zap,
    title: 'Right First Time',
    body: 'On-budget delivery backed by engineers with deep multi-vendor expertise across every technology we touch.'
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    body: 'Extensive history of quality end results and seamless end-to-end solutions going back to 2012.'
  },
  {
    icon: Users,
    title: 'Key Workers',
    body: 'Classed as critical national infrastructure workers operating and maintaining networks 24×7×365.'
  },
  {
    icon: Layers,
    title: 'Full Turnkey Partner',
    body: 'Survey, design, civils, installation, splicing, commissioning and audits — all under one roof.'
  },
];

const serviceGroups = [
  {
    title: 'Planning & Design',
    items: [
      'Project Management',
      'Survey, Design, and Planning',
      'Network Audits and Design',
      'Fibre Access HLD Services',
      'Fibre Access LLD Services',
    ]
  },
  {
    title: 'Civil & Cable',
    items: [
      'Civils',
      'Cable Installation',
      'Splicing and Termination',
      'FTTP – PONs Building',
      'FTTP – Spines Building',
    ]
  },
  {
    title: 'Commissioning',
    items: [
      'OTH Testing and Commissioning',
      'Headend (OTH) Installations',
      'ODF Installations and Commissioning',
      'OTH Data Mapping and Calibrations',
      'DSLAM / Night Migrations',
    ]
  },
  {
    title: 'Infrastructure',
    items: [
      'Data Centres Network Solutions',
      'DWDM Networks – Ciena, Nokia, ADWA, ADTRAN, Sky, Huawei',
      'De-Commissioning',
    ]
  },
  {
    title: 'Digital & IT',
    items: [
      'IT Solutions',
      'Software Development',
      'Integration',
    ]
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO — matches Home page light gradient ─────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-white to-muted">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* Left: headline */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                About NZ Solutions
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Network &amp; infrastructure partners since 2012.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                We deliver complete turnkey fixed-line telecom solutions — from survey and design
                through civils, installation, splicing, commissioning, and full FTTP builds across the UK.
              </p>
            </div>

            {/* Right: stats cards — same style as Home hero service cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((s) => (
                <div key={s.label} className="rounded-3xl border bg-card p-6 shadow-sm">
                  <span
                    className="block font-black leading-none tracking-tight tabular-nums"
                    style={{fontSize: '2.4rem', color: 'hsl(var(--primary))'}}
                  >
                    {s.value}
                  </span>
                  <span className="mt-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHO WE ARE ──────────────────────────────────────── */}
      <Container className="section-padding">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">

          {/* Left: text + 2×2 pillar grid */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A full-scope telecoms partner since day one.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
              <p>
                NZ Solutions was established in 2012 to serve the telecommunications industry, and
                has grown into a broad organisation offering a complete turnkey solution — or a part
                role — in any fixed-line telecom project.
              </p>
              <p>
                Since 2012 we have been vital network and infrastructure partners to fixed networks
                across the enterprise sector, rapidly expanding our footprint across the United Kingdom.
              </p>
              <p>
                We are focused on providing an efficient, cost-effective, innovative, and reliable
                added-value service backed by in-depth knowledge of the telecoms industry. NZS has a
                proven track record and an extensive history of delivering quality end results —
                seamlessly, end-to-end.
              </p>
            </div>

            {/* 2×2 pillar cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl border bg-card p-5 shadow-sm">
                  <div
                    className="mb-3 flex size-10 items-center justify-center rounded-xl"
                    style={{background: 'hsl(var(--primary) / 0.07)'}}
                  >
                    <p.icon strokeWidth={1.75} className="size-[18px] text-secondary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual panel — primary colour so it pops on white bg */}
          <div className="lg:sticky lg:top-24">
            <div
              className="relative overflow-hidden rounded-3xl bg-primary"
              style={{minHeight: '480px'}}
            >
              {/* Subtle dot grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              {/* Rings */}
              {[380, 250, 130].map((size) => (
                <div
                  key={size}
                  aria-hidden="true"
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    border: `1px solid rgba(255,255,255,${size === 130 ? 0.12 : 0.07})`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div
                  className="flex size-16 items-center justify-center rounded-2xl mb-5"
                  style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)'}}
                >
                  <Network strokeWidth={1.5} className="size-8 text-secondary" />
                </div>

                <span
                  className="font-black leading-none text-white"
                  style={{fontSize: '3rem', letterSpacing: '-0.03em'}}
                >
                  12+
                </span>
                <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/50">
                  Years of Excellence
                </span>

                <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-[220px]">
                  {[['24/7', 'Operations'], ['UK', 'Nationwide']].map(([val, lbl]) => (
                    <div
                      key={lbl}
                      className="rounded-xl py-3 px-2 text-center"
                      style={{background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)'}}
                    >
                      <div className="text-xl font-black leading-none text-white">{val}</div>
                      <div className="mt-1 text-[8px] font-bold uppercase tracking-widest text-primary-foreground/40">{lbl}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-[0.76rem] leading-5 max-w-[200px] text-primary-foreground/35">
                  Delivering critical national telecom infrastructure across the UK since 2012
                </p>
              </div>

              {/* Bottom secondary accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary" />
            </div>
          </div>
        </div>
      </Container>

      {/* ── SERVICES — bg-primary matches CTASection pattern ── */}
      <section className="bg-primary text-primary-foreground">
        <Container className="section-padding">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              What We Deliver
            </p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{maxWidth: '520px'}}>
                One-stop-shop for everything telecoms.
              </h2>
              <p className="text-sm leading-6 text-primary-foreground/60 sm:text-right sm:max-w-[280px]">
                Complete turnkey FTTP builds or a part role in any fixed-line project —
                right across the UK.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl p-6"
                style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] shrink-0 text-secondary">
                    {group.title}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        strokeWidth={2}
                        className="mt-[2px] size-3.5 shrink-0 text-secondary"
                      />
                      <span className="text-[0.8rem] leading-[1.5] text-primary-foreground/75">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── COVID-19 POLICY ─────────────────────────────────── */}
      <section className="border-t border-b bg-muted/40">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl border bg-card p-8 shadow-sm sm:p-10">
              <div className="flex items-start gap-5">
                <div
                  className="mt-0.5 shrink-0 flex size-12 items-center justify-center rounded-2xl"
                  style={{background: 'hsl(var(--primary) / 0.07)'}}
                >
                  <Shield strokeWidth={1.75} className="size-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-secondary">
                    Covid-19 Policy
                  </p>
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Responsibility at the heart of everything we do.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    We protect our staff, our environment, and the quality of our designs and
                    deliveries to the highest standard. NZS belongs to the key industries deemed
                    critical to national infrastructure. Our employees are classed as{' '}
                    <strong className="font-semibold text-foreground">Key Workers</strong>{' '}
                    who work diligently every day to operate, maintain, and upgrade the telecoms
                    network — managing the rising demand on the UK&apos;s infrastructure on a
                    24×7×365 basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── ACCREDITATIONS ──────────────────────────────────── */}
      <section className="bg-card">
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
                  <path id="ssip-arc-top" d="M 18,60 A 42,42 0 0,1 102,60" />
                  <path id="ssip-arc-bot" d="M 19,67 A 42,42 0 0,0 101,67" />
                </defs>
                <text fontSize="7.2" fontWeight="700" fill="#1c1c1c">
                  <textPath href="#ssip-arc-top" startOffset="6%">
                    Assessed by a SSIP member scheme
                  </textPath>
                </text>
                <text fontSize="6.4" fill="#333">
                  <textPath href="#ssip-arc-bot" startOffset="2%">
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
