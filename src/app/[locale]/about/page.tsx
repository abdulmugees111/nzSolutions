import React from 'react';
import {CheckCircle2, Shield, Users, Zap, Layers, Banknote, GraduationCap, Globe} from 'lucide-react';
import {ApplyButton} from '@/components/careers/ApplyButton';
import Image from 'next/image';
import {Container} from '@/components/common/Container';
import {AccreditationsBanner} from '@/components/common/AccreditationsBanner';

export const metadata = {
  title: 'About Us',
  description:
    'NZ Solutions — established 2012. Delivering turnkey fixed-line telecom infrastructure, FTTP, network design, and digital engineering across the United Kingdom.'
};

const pillars = [
  {
    icon: Zap,
    title: 'Right First Time',
    body: 'On-budget delivery backed by engineers with deep multi-vendor expertise.'
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    body: 'Extensive history of quality end results going back to 2012.'
  },
  {
    icon: Users,
    title: 'Key Workers',
    body: 'Critical national infrastructure workers operating networks 24×7×365.'
  },
  {
    icon: Layers,
    title: 'Full Turnkey Partner',
    body: 'Survey, design, civils, installation, splicing, commissioning — all under one roof.'
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

const statCards = [
  {value: '2012', label: 'Year Founded'},
  {value: '12+',  label: 'Years Delivering'},
  {value: '20+',  label: 'Service Lines'},
  {value: '24/7', label: 'UK Operations'},
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left */}
          <div>
            <p className="text-base font-bold uppercase tracking-widest text-secondary">
              About NZ Solutions
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Network &amp; infrastructure partners since 2012.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:text-xl">
              We deliver complete turnkey fixed-line telecom solutions — from survey and design
              through civils, installation, splicing, commissioning, and full FTTP builds across the UK.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Telecom infrastructure', 'FTTP & fibre builds', 'Data centre networks', 'Digital & IT services'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle2 size={18} className="text-secondary" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — matches Hero card style exactly */}
          <div className="relative">
            <div className="rounded-[2rem] border bg-card p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="rounded-[1.5rem] bg-primary p-5 text-primary-foreground sm:p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-primary-foreground/70">Founded</p>
                    <p className="mt-2 text-3xl font-black">2012</p>
                    <p className="mt-1 text-sm text-primary-foreground/70">United Kingdom</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-primary-foreground/70">Experience</p>
                    <p className="mt-2 text-3xl font-black">12+</p>
                    <p className="mt-1 text-sm text-primary-foreground/70">Years delivering</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-white p-5 text-foreground">
                  <p className="text-sm font-bold text-primary">What we deliver</p>
                  <div className="mt-4 space-y-3">
                    {[
                      'Survey, design & planning',
                      'Civils, cabling & splicing',
                      'FTTP & network commissioning',
                      'Digital & software services',
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3">
                        <span className="flex size-7 items-center justify-center rounded-full bg-secondary/15 text-xs font-bold text-primary">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {statCards.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <p className="text-lg font-black text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </section>

      {/* ── WHO WE ARE ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">

            {/* Left: text + 2×2 pillar grid */}
            <div>
              <p className="text-base font-bold uppercase tracking-widest text-secondary">
                Who We Are
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
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
                  added-value service backed by in-depth knowledge of the telecoms industry.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {pillars.map((p) => (
                  <div key={p.title} className="rounded-2xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
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

            {/* Right: photo card */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-[2rem] border bg-card p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                <div className="relative overflow-hidden rounded-[1.5rem]" style={{height: '400px'}}>
                  <Image
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                    alt="Network engineer in data centre"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(10,25,60,0.85) 0%, transparent 55%)'}} />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">Est. 2012</p>
                    <p className="mt-1 text-lg font-bold text-white">Delivering critical UK telecoms infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16 lg:py-20">
        <Container>
          {/* Header row — text left, pentagon photos right */}
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_400px] lg:items-center">
            <div>
              <p className="text-base font-bold uppercase tracking-widest text-secondary">What We Deliver</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                One-stop-shop for everything telecoms.
              </h2>
              <p className="mt-4 text-base leading-7 text-primary-foreground/60 max-w-[500px]">
                Complete turnkey FTTP builds or a part role in any fixed-line project — right across the UK.
              </p>
            </div>

            {/* Pentagon image composition */}
            <div className="relative hidden lg:block" style={{height: '340px'}}>
              {/* Dashed pentagon outline */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 340" fill="none" aria-hidden="true">
                <polygon
                  points="200,18 372,132 306,318 94,318 28,132"
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                />
              </svg>

              {/* 5 images at pentagon corners */}
              {([
                {src:'photo-1558618666-fcd25c85cd64', label:'Fibre',    x:'50%',  y:'18px',   w:110, h:110, rot:'-3deg', z:3},
                {src:'photo-1573164713988-8665fc963095', label:'Networks', x:'372px', y:'132px',  w:100, h:100, rot:'4deg',  z:2},
                {src:'photo-1544197150-b99a580bb7a8', label:'Data',     x:'306px', y:'318px',  w:108, h:108, rot:'-2deg', z:3},
                {src:'photo-1581091226825-a6a2a5aee158', label:'Field',    x:'94px',  y:'318px',  w:100, h:100, rot:'3deg',  z:2},
                {src:'photo-1551434678-e076c223a692', label:'Teams',    x:'28px',  y:'132px',  w:106, h:106, rot:'-4deg', z:3},
              ] as {src:string;label:string;x:string;y:string;w:number;h:number;rot:string;z:number}[]).map(({src, label, x, y, w, h, rot, z}) => (
                <div
                  key={src}
                  className="absolute overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:z-10"
                  style={{
                    width: w, height: h,
                    left: x, top: y,
                    transform: `translate(-50%, -50%) rotate(${rot})`,
                    border: '3px solid rgba(255,255,255,0.18)',
                    zIndex: z,
                  }}
                >
                  <Image
                    src={`https://images.unsplash.com/${src}?auto=format&fit=crop&w=300&q=80`}
                    alt={label}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
              ))}

              {/* Centre label */}
              <div
                className="absolute flex flex-col items-center justify-center rounded-full text-center"
                style={{
                  width: 88, height: 88,
                  left: '50%', top: '50%',
                  transform: 'translate(-50%,-50%)',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)',
                  zIndex: 4,
                }}
              >
                <p className="text-xl font-black text-white">20+</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-primary-foreground/50">Services</p>
              </div>
            </div>
          </div>

          {/* Service cards grid — 5 cards + 1 photo card */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map((group, i) => (
              <React.Fragment key={group.title}>
                <div
                  className="group rounded-2xl bg-white p-5 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-bold text-primary">{group.title}</p>
                    <span className="rounded-lg bg-primary/8 px-2 py-0.5 text-[10px] font-bold text-primary/60">{group.items.length} services</span>
                  </div>
                  <div className="space-y-2">
                    {group.items.map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl bg-muted px-3 py-2.5 transition-colors group-hover:bg-primary/5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-[9px] font-bold text-primary">
                          {index + 1}
                        </span>
                        <span className="text-xs font-medium text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* ── COVID-19 POLICY ─────────────────────────────────── */}
      <section className="border-t border-b bg-muted/40 py-12 sm:py-16 lg:py-20">
        <Container>
          <div>
            <div className="rounded-[2rem] border bg-card p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="rounded-[1.5rem] bg-white p-5 sm:p-7">
                <div className="flex items-start gap-5">
                  <div className="mt-0.5 shrink-0 flex size-12 items-center justify-center rounded-2xl" style={{background: 'hsl(var(--primary) / 0.07)'}}>
                    <Shield strokeWidth={1.75} className="size-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-secondary">Covid-19 Policy</p>
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
          </div>
        </Container>
      </section>

      {/* ── CAREERS CTA ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="rounded-[2rem] border bg-card p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)] cursor-pointer">
            <div className="rounded-[1.5rem] bg-primary p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                {/* Left: text + highlights */}
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary">We&apos;re Recruiting</p>
                  <h2 className="mt-2 text-2xl font-black text-white leading-tight">Ready to join the team?</h2>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/60">
                    Send your CV to{' '}
                    <span className="font-semibold text-white">Careers@nzsolutions.co.uk</span>{' '}
                    and we&apos;ll be in touch.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      {icon: Banknote,      label: 'Competitive Pay'},
                      {icon: GraduationCap, label: 'Career Training'},
                      {icon: Users,         label: 'Inclusive Culture'},
                      {icon: Globe,         label: 'UK Infrastructure'},
                    ].map(({icon: Icon, label}) => (
                      <div
                        key={label}
                        className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium text-primary-foreground/80"
                        style={{background: 'rgba(255,255,255,0.08)'}}
                      >
                        <Icon size={13} className="text-secondary shrink-0" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: CTA button */}
                <div className="shrink-0">
                  <ApplyButton />
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
