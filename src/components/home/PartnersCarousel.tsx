import Image from 'next/image';
import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';
import {partners} from '@/constants/partners';
import {cn} from '@/lib/utils';

const repeatedPartners = [...partners, ...partners];

export function PartnersCarousel() {
  return (
    // <section className="overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
      <Container className="section-padding ">
        <SectionHeader
          eyebrow="Trusted ecosystem"
          title="Partners and technology networks we work with"
          // description="A responsive logo carousel for telecom, infrastructure, and digital delivery partners. Replace the sample logos with your real partner images inside public/logos/partners."
        />

        <div className="relative mt-10 overflow-hidden rounded-3xl border bg-card py-6 shadow-sm sm:py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent sm:w-28" />

          <div className="partners-carousel-track flex w-max items-center gap-4 px-4 hover:[animation-play-state:paused] sm:gap-6 sm:px-6">
            {repeatedPartners.map((partner, index) => (
              <article
  key={`${partner.name}-${index}`}
  className={cn(
    'group flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border bg-background/70 px-0 transition-all duration-300 sm:h-28 sm:w-56 sm:px-0',
    'hover:-translate-y-1 hover:border-secondary/60 hover:bg-card hover:shadow-md'
  )}
  aria-label={partner.name}
>
  <div className="relative h-20 w-full sm:h-24">
    <Image
      src={partner.logo}
      alt={partner.alt}
      fill
      sizes="(max-width: 640px) 176px, 224px"
      className="object-contain transition duration-300 group-hover:opacity-100"
    />
  </div>
</article>
              // <article
              //   key={`${partner.name}-${index}`}
              //   className={cn(
              //     'group flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border bg-background/70 px-6 transition-all duration-300 sm:h-28 sm:w-56',
              //     'hover:-translate-y-1 hover:border-secondary/60 hover:bg-card hover:shadow-md'
              //   )}
              //   aria-label={partner.name}
              // >
              //   <div className="relative h-12 w-full sm:h-14">
              //     <Image
              //       src={partner.logo}
              //       alt={partner.alt}
              //       fill
              //       sizes="(max-width: 640px) 176px, 224px"
              //       className="object-contain transition duration-300 group-hover:opacity-100"
              //     />
              //   </div>
              // </article>
            ))}
          </div>
        </div>
      </Container>
    // </section>
  );
}
// const repeatedPartners = [...partners, ...partners];

// export function PartnersCarousel() {
//   return (
//     <section className="overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
//       <Container>
//         <SectionHeader
//           eyebrow="Trusted ecosystem"
//           title="Partners and technology networks we work with"
//           description="A responsive logo carousel for telecom, infrastructure, and digital delivery partners. Replace the sample logos with your real partner images inside public/logos/partners."
//         />

//         <div className="relative mt-10 overflow-hidden rounded-3xl border bg-card py-6 shadow-sm sm:py-8">
//           <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent sm:w-28" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent sm:w-28" />

//           <div className="partners-carousel-track flex w-max items-center gap-4 px-4 hover:[animation-play-state:paused] sm:gap-6 sm:px-6">
//             {repeatedPartners?.map((partner, index) => (
//               <article
//                 key={`${partner.name}-${index}`}
//                 className={cn(
//                   'group flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border bg-background/70 px-6 transition-all duration-300 sm:h-28 sm:w-56',
//                   'transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]'
//                 )}
//                 aria-label={partner.name}
//               >
//                 <div className="relative h-12 w-full sm:h-14">
//                   <Image
//                     src={partner.logo}
//                     alt={partner.alt}
//                     fill
//                     sizes="(max-width: 640px) 176px, 224px"
//                     className="object-contain transition duration-300 group-hover:opacity-100"
//                   />
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
