import {Phone, Mail, MapPin, Clock, ArrowRight} from 'lucide-react';
import {Container} from '@/components/common/Container';
import {ContactForm} from '@/components/forms/ContactForm';
import {siteConfig} from '@/constants/site';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/navigation';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with NZ Solutions. Contact our team for telecom infrastructure, web development, mobile apps, and digital engineering services.'
};

const contactDetails = [
  {icon: Phone, label: 'Phone',        value: siteConfig.phone,                                                      href: `tel:${siteConfig.phone}`},
  {icon: Mail,  label: 'Email',        value: siteConfig.email,                                                      href: `mailto:${siteConfig.email}`},
  {icon: MapPin,label: 'Address',      value: 'Suite 314, Stanmore Business Centre, Howard Road, Stanmore, HA7 1BT', href: 'https://maps.google.com/?q=NZ+Solutions+LTD+Suite+314+Stanmore+Business+Centre+Stanmore'},
  {icon: Clock, label: 'Office Hours', value: 'Mon – Fri, 9:00am – 5:30pm',                                          href: null},
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-28 pb-8 sm:pb-12">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left */}
          <div>
            <p className="text-base font-bold uppercase tracking-widest text-secondary">
              Get In Touch
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:text-xl">
              Whether you have a question about our services, want to discuss a project, or are ready
              to get started — our team is here to help.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={`mailto:${siteConfig.email}`}>Email Us <ArrowRight size={18} /></a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${siteConfig.phone}`}>Call Us</a>
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-[2rem] border bg-card p-4 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="rounded-[1.5rem] bg-primary p-5 text-primary-foreground sm:p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-primary-foreground/70">Response time</p>
                    <p className="mt-2 text-3xl font-black">24h</p>
                    <p className="mt-1 text-sm text-primary-foreground/70">Typical reply</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-primary-foreground/70">Office hours</p>
                    <p className="mt-2 text-3xl font-black">9–5</p>
                    <p className="mt-1 text-sm text-primary-foreground/70">Mon – Fri</p>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl bg-white p-5 text-foreground">
                  <p className="text-sm font-bold text-primary">How to reach us</p>
                  <div className="mt-4 space-y-3">
                    {contactDetails.map((item, index) => (
                      <div key={item.label} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-xs font-bold text-primary">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium truncate">{item.label}: {item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[['12+', 'Years'], ['24h', 'Response'], ['20+', 'Services'], ['UK', 'Nationwide']].map((stat) => (
                <div
                  key={stat[1]}
                  className="rounded-2xl border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <p className="text-lg font-black text-primary">{stat[0]}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat[1]}</p>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </section>

      {/* ── FORM + CONTACT DETAILS ────────────────────────────── */}
      <section className="pt-16 sm:pt-20 lg:pt-28 pb-8 sm:pb-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:items-start">

            {/* Left: contact detail cards */}
            <div className="space-y-4">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl" style={{background: 'hsl(var(--primary) / 0.07)'}}>
                      <item.icon strokeWidth={1.75} className="size-[18px] text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-0.5 text-sm font-medium text-foreground hover:text-secondary transition-colors">{item.value}</a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-[2rem] border bg-card p-4 shadow-2xl">
                <div className="rounded-[1.5rem] bg-primary p-5 text-primary-foreground sm:p-6">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-sm font-black text-white ring-1 ring-white/20">NZ</div>
                  <h3 className="mt-4 text-lg font-bold">We&apos;d love to hear from you</h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/70">
                    Our team typically responds within one business day. For urgent matters please call us directly.
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-5 inline-block rounded-2xl bg-secondary px-5 py-2.5 text-xs font-bold text-secondary-foreground transition-opacity hover:opacity-90"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <p className="text-base font-bold uppercase tracking-widest text-secondary">Send a Message</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">Tell us about your project.</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Fill in the form below and a member of our team will get back to you with the best
                solution for your telecom or digital engineering project.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── MAP ──────────────────────────────────────────────── */}
      <section className="border-t bg-muted/40 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <Container>
          <p className="mb-6 text-base font-bold uppercase tracking-widest text-secondary">Find Us</p>
          <div className="overflow-hidden rounded-[2rem] border shadow-sm">
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
