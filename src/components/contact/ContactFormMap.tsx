import {Container} from '@/components/common/Container';
import {ContactForm} from '@/components/forms/ContactForm';
import {SectionHeader} from '@/components/common/SectionHeader';

const MAP_SRC =
  'https://maps.google.com/maps?q=NZ+Solutions+LTD,+Suite+314,+Stanmore+Business+Centre,+Howard+Road,+Stanmore,+HA7+1BT&t=&z=15&ie=UTF8&iwloc=&output=embed';

export function ContactFormMap() {
  return (
    // <section className="border-t py-14 sm:py-20 lg:py-24">
    //   <Container>
    //     <div className="mb-8">
    //       <SectionHeader
    //         eyebrow="Send a Message"
    //         title="Tell us about your project."
    //         description="Fill in the form and a member of our team will get back to you with the best solution for your project."
    //       />
    //     </div>

    //     <div className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:items-start">
    //       <div>
    //         <ContactForm />
    //       </div>

    //       <div className="lg:sticky lg:top-24">
    //         <p className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Find Us</p>
    //         <p className="mb-4 text-sm text-muted-foreground">
    //           Suite 314, Stanmore Business Centre, Howard Road, Stanmore, HA7 1BT
    //         </p>
    //         <div className="overflow-hidden rounded-3xl border shadow-sm">
    //           <iframe
    //             title="NZ Solutions LTD location"
    //             width="100%"
    //             height="360"
    //             style={{border: 0, display: 'block'}}
    //             loading="lazy"
    //             referrerPolicy="no-referrer-when-downgrade"
    //             src={MAP_SRC}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </Container>
    // </section>
    <section className="pt-8 sm:pt-10 pb-12 sm:pb-16 lg:pb-20">
  <Container>
    {/* Section heading */}
    <div className="mb-8 max-w-2xl">
      <p className="text-base font-bold uppercase tracking-widest text-secondary">
        Send a Message
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
        Tell us about your project.
      </h2>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Fill in the form and a member of our team will get back to you with the best solution for
        your project.
      </p>
    </div>

    {/* Form + Map */}
    <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-stretch">
      {/* Left — wider form */}
<div className="h-full transition-transform duration-300 hover:-translate-y-1">
        <ContactForm />
      </div>

      {/* Right — map card */}
      <div className="h-full rounded-[2rem] border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary">
            Find Us
          </p>

          <h3 className="mt-2 text-xl font-bold text-foreground">
            Visit our office
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Suite 314, Stanmore Business Centre, Howard Road, Stanmore, HA7 1BT
          </p>
        </div>

        <div className="h-[390px] overflow-hidden rounded-[1.5rem] border lg:h-[calc(100%-120px)]">
          <iframe
            title="NZ Solutions LTD location"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=NZ+Solutions+LTD,+Suite+314,+Stanmore+Business+Centre,+Howard+Road,+Stanmore,+HA7+1BT&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </div>
  </Container>
</section>
  );
}



