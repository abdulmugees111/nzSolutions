import {Phone, Mail, MapPin, Clock} from 'lucide-react';
import {Container} from '@/components/common/Container';
import {ContactForm} from '@/components/forms/ContactForm';
import {siteConfig} from '@/constants/site';

const MAP_SRC =
  'https://maps.google.com/maps?q=NZ+Solutions+LTD,+Suite+314,+Stanmore+Business+Centre,+Howard+Road,+Stanmore,+HA7+1BT&t=&z=15&ie=UTF8&iwloc=&output=embed';

const INFO_CARDS = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: 'Office',
    value: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.postcode}`,
    href: `https://maps.google.com/maps?q=NZ+Solutions+LTD,+Suite+314,+Stanmore+Business+Centre,+Howard+Road,+Stanmore,+HA7+1BT`,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Fri: 9:00 AM – 6:00 PM',
    href: null,
  },
];

export function ContactFormMap() {
  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[7fr_5fr] lg:items-start">

          {/* Left — premium form */}
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <ContactForm />
          </div>

          {/* Right — info + map */}
          <div className="flex flex-col gap-6">

            {/* Contact info cards */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:[&>*:last-child]:col-span-2 xl:[&>*:nth-child(3)]:col-span-2">
              {INFO_CARDS.map(({icon: Icon, label, value, href}) => {
                const inner = (
                  <div className="flex items-start gap-4 rounded-2xl border bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary">{label}</p>
                      <p className="mt-0.5 break-words text-sm text-foreground">{value}</p>
                    </div>
                  </div>
                );

                return href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block no-underline">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>

            {/* Map card */}
            <div className="overflow-hidden rounded-[2rem] border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="px-5 pt-5 pb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">Find Us</p>
                <h3 className="mt-1 text-lg font-bold text-foreground">Visit our office</h3>
              </div>
              <div className="h-[220px]">
                <iframe
                  title="NZ Solutions LTD location"
                  width="100%"
                  height="100%"
                  style={{border: 0, display: 'block'}}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={MAP_SRC}
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
