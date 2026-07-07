import {Phone, Mail, MapPin, Clock} from 'lucide-react';
import {Container} from '@/components/common/Container';
import {ContactForm} from '@/components/forms/ContactForm';
import {siteConfig} from '@/constants/site';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with NZ Solutions. Contact our team for telecom infrastructure, web development, mobile apps, and digital engineering services.'
};

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Suite 314, Stanmore Business Centre, Howard Road, Stanmore, HA7 1BT',
    href: 'https://maps.google.com/?q=NZ+Solutions+LTD+Suite+314+Stanmore+Business+Centre+Stanmore',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri, 9:00am – 5:30pm',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-background via-white to-muted">
        <Container className="py-10 sm:py-14 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Get In Touch
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Whether you have a question about our services, want to discuss a project, or are ready
              to get started — our team is here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* ── MAIN ─────────────────────────────────────────────── */}
      <Container className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:items-start">

          {/* Left: contact info */}
          <div className="space-y-5">

            {/* Info cards */}
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-sm">
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                  style={{background: 'hsl(var(--primary) / 0.07)'}}
                >
                  <item.icon strokeWidth={1.75} className="size-[18px] text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-0.5 text-sm font-medium text-foreground hover:text-secondary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Navy callout */}
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)`,
                  backgroundSize: '22px 22px',
                }}
              />
              <div className="relative">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-sm font-black text-white ring-1 ring-white/20">
                  NZ
                </div>
                <h3 className="mt-4 text-lg font-bold">We&apos;d love to hear from you</h3>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/70">
                  Our team typically responds within one business day. For urgent matters please
                  call us directly.
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-5 inline-block rounded-xl bg-secondary px-5 py-2.5 text-xs font-bold text-secondary-foreground transition-opacity hover:opacity-90"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary" />
            </div>
          </div>

          {/* Right: form */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Send a Message
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Tell us about your project.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Fill in the form below and a member of our team will get back to you with the best
              solution for your telecom or digital engineering project.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

        </div>
      </Container>

      {/* ── MAP ──────────────────────────────────────────────── */}
      <section className="border-t bg-muted/40">
        <Container className="py-12 sm:py-16">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-secondary">
            Find Us
          </p>
          <div className="overflow-hidden rounded-3xl border shadow-sm">
            <iframe
              title="NZ Solutions LTD location"
              width="100%"
              height="420"
              style={{border: 0, display: 'block'}}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=NZ+Solutions+LTD,+Suite+314,+Stanmore+Business+Centre,+Howard+Road,+Stanmore,+HA7+1BT&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
