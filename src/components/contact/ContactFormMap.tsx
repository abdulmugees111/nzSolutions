import {Container} from '@/components/common/Container';
import {ContactForm} from '@/components/forms/ContactForm';
import {SectionHeader} from '@/components/common/SectionHeader';

const MAP_SRC =
  'https://maps.google.com/maps?q=NZ+Solutions+LTD,+Suite+314,+Stanmore+Business+Centre,+Howard+Road,+Stanmore,+HA7+1BT&t=&z=15&ie=UTF8&iwloc=&output=embed';

export function ContactFormMap() {
  return (
    <section className="border-t py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-8">
          <SectionHeader
            eyebrow="Send a Message"
            title="Tell us about your project."
            description="Fill in the form and a member of our team will get back to you with the best solution for your project."
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:items-start">
          <div>
            <ContactForm />
          </div>

          <div className="lg:sticky lg:top-24">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Find Us</p>
            <p className="mb-4 text-sm text-muted-foreground">
              Suite 314, Stanmore Business Centre, Howard Road, Stanmore, HA7 1BT
            </p>
            <div className="overflow-hidden rounded-3xl border shadow-sm">
              <iframe
                title="NZ Solutions LTD location"
                width="100%"
                height="360"
                style={{border: 0, display: 'block'}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={MAP_SRC}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
