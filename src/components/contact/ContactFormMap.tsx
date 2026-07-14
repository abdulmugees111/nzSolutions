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
    valueClass: 'text-[12px] leading-normal',
    lineHeight: undefined,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    valueClass: 'text-[11px] leading-normal [overflow-wrap:anywhere]',
    lineHeight: undefined,
  },
  {
    icon: MapPin,
    label: 'Office',
    value: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.postcode}`,
    href: `https://maps.google.com/maps?q=NZ+Solutions+LTD,+Suite+314,+Stanmore+Business+Centre,+Howard+Road,+Stanmore,+HA7+1BT`,
    valueClass: 'text-[12px]',
    lineHeight: '1.5',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Fri: 9:00 AM – 6:00 PM',
    href: null,
    valueClass: 'text-[12px] leading-normal',
    lineHeight: undefined,
  },
];

export function ContactFormMap() {
  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="grid gap-8 lg:gap-8 lg:grid-cols-[3fr_2fr] lg:items-stretch">

          {/* Left — premium form */}
          <div>
            <ContactForm />
          </div>

          {/* Right — info + map */}
          <div className="flex h-full flex-col gap-3">

            {/* Contact info cards */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:items-stretch xl:grid-cols-2 xl:[&>*:last-child]:col-span-2 xl:[&>*:nth-child(3)]:col-span-2">
              {INFO_CARDS.map(({icon: Icon, label, value, href, valueClass, lineHeight}) => {
                const inner = (
                  <div className="flex h-full min-h-[72px] items-center gap-3 rounded-2xl border bg-card px-4 py-3.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <span className="flex h-9 w-9 shrink-0 self-center items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">{label}</p>
                      <p className={`mt-0.5 text-foreground ${valueClass}`} style={lineHeight ? {lineHeight} : undefined}>{value}</p>
                    </div>
                  </div>
                );

                return href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block h-full no-underline">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="h-full">{inner}</div>
                );
              })}
            </div>

            {/* Map card */}
            <div className="flex flex-1 flex-col overflow-hidden rounded-[2rem] border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="px-5 pt-4 pb-3">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">Find Us</p>
                <h3 className="mt-1 text-base font-bold text-foreground">Visit our office</h3>
              </div>
              <div className="mt-1 flex-1">
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
              <div className="h-5" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
