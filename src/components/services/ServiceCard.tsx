import Image from 'next/image';
import {ArrowRight} from 'lucide-react';

import {Link} from '@/i18n/navigation';
import {cn} from '@/lib/utils';
import type {Service} from '@/constants/services';

export function ServiceCard({service}: {service: Service}) {
  const isDigital = service.category === 'digital';

  const categoryLabel = isDigital
    ? 'Digital Engineering'
    : 'Telecom Infrastructure';

  return (
    <article className="group relative h-full p-3 sm:p-4">
      {/* Top-left decorative corner */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute left-0 top-0 h-28 w-28 rounded-2xl',
          'transition-all duration-500 ease-out',

          'group-hover:translate-x-5',
          'group-hover:translate-y-5',
          'group-hover:scale-75',
          'group-hover:opacity-0',

          'group-focus-within:translate-x-5',
          'group-focus-within:translate-y-5',
          'group-focus-within:scale-75',
          'group-focus-within:opacity-0',

          isDigital ? 'bg-secondary' : 'bg-cyan-500'
        )}
      />

      {/* Bottom-right decorative corner */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute bottom-0 right-0 h-28 w-28 rounded-2xl bg-primary',
          'transition-all duration-500 ease-out',

          'group-hover:-translate-x-5',
          'group-hover:-translate-y-5',
          'group-hover:scale-75',
          'group-hover:opacity-0',

          'group-focus-within:-translate-x-5',
          'group-focus-within:-translate-y-5',
          'group-focus-within:scale-75',
          'group-focus-within:opacity-0'
        )}
      />

      <Link
        href={`/services/${service.slug}`}
        aria-label={`Learn more about ${service.title}`}
        className={cn(
          'relative z-10 block h-full overflow-hidden rounded-2xl',
          'border border-border/50 bg-card shadow-sm outline-none',
          'transition-all duration-500 ease-out',

          'group-hover:-translate-y-1',
          'group-hover:border-primary/20',
          'group-hover:shadow-2xl',

          'focus-visible:ring-2',
          'focus-visible:ring-primary',
          'focus-visible:ring-offset-2'
        )}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {/* <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={cn(
              'object-cover',
              'transition-transform duration-700 ease-out',
              'group-hover:scale-110',
              'group-focus-within:scale-110'
            )}
          /> */}
<Image
  src={service.image}
  alt={service.title}
  fill
  sizes="
    (max-width: 639px) calc(100vw - 2rem),
    (max-width: 1023px) calc(50vw - 2.5rem),
    (max-width: 1439px) calc(33.333vw - 2.5rem),
    410px
  "
  quality={70}
  placeholder="blur"
  className={cn(
    'object-cover',
    'transition-transform duration-700 ease-out',
    'group-hover:scale-110',
    'group-focus-within:scale-110'
  )}
/>
          {/* Very light neutral image shading */}
          <div
            aria-hidden="true"
            className={cn(
              'absolute inset-0 bg-black/5',
              'transition-opacity duration-500',
              'group-hover:opacity-0',
              'group-focus-within:opacity-0'
            )}
          />

          {/* Initial information panel */}
          {/* Small neutral gradient only behind the text */}
<div
  aria-hidden="true"
  className={cn(
    'absolute inset-x-0 bottom-0 h-[42%]',
    'bg-gradient-to-t from-black/75 via-black/30 to-transparent',
    'transition-opacity duration-500 ease-out',
    'group-hover:opacity-0',
    'group-focus-within:opacity-0'
  )}
/>

{/* Information visible before hover */}
<div
  className={cn(
    'absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6',
    'transition-all duration-500 ease-out',

    'group-hover:translate-y-5',
    'group-hover:opacity-0',

    'group-focus-within:translate-y-5',
    'group-focus-within:opacity-0'
  )}
>
  {/* Only the category has a small background */}
  <span
    className={cn(
      'inline-flex rounded-full',
      'border border-white/40',
      'bg-black/25 px-3 py-1',
      'backdrop-blur-sm',
      'text-[10px] font-bold uppercase',
      'tracking-[0.13em] text-white',
      'shadow-sm sm:text-xs'
    )}
  >
    {categoryLabel}
  </span>

  {/* No card background behind title */}
  <h3
    className={cn(
      'mt-3 text-xl font-bold leading-tight',
      'tracking-tight text-white sm:text-2xl',
      '[text-shadow:0_2px_8px_rgba(0,0,0,0.85)]'
    )}
  >
    {service.title}
  </h3>

  <div
    className={cn(
      'mt-3 inline-flex items-center gap-2',
      'text-sm font-semibold text-white',
      '[text-shadow:0_1px_5px_rgba(0,0,0,0.9)]'
    )}
  >
    View service

    <ArrowRight className="size-4" />
  </div>
</div>

          {/* Hover overlay */}
          <div
            aria-hidden="true"
            className={cn(
              'absolute inset-0',
              'bg-gradient-to-t',
              'from-primary via-primary/90 to-primary/50',
              'opacity-0',
              'transition-opacity duration-500 ease-out',

              'group-hover:opacity-100',
              'group-focus-within:opacity-100'
            )}
          />

          {/* Hover content */}
          <div
            className={cn(
              'absolute inset-0 z-20',
              'flex flex-col items-center justify-center',
              'px-6 text-center sm:px-8',

              'translate-y-8 opacity-0',
              'transition-all duration-500 ease-out',

              'group-hover:translate-y-0',
              'group-hover:opacity-100',

              'group-focus-within:translate-y-0',
              'group-focus-within:opacity-100'
            )}
          >
            <span
              className={cn(
                'rounded-full border border-white/25',
                'bg-white/10 px-4 py-1.5',
                'text-[10px] font-bold uppercase',
                'tracking-[0.14em] text-white',
                'backdrop-blur-sm sm:text-xs'
              )}
            >
              {categoryLabel}
            </span>

            <h3 className="mt-4 max-w-sm text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              {service.title}
            </h3>

            <p className="mt-4 line-clamp-2 max-w-sm text-sm leading-6 text-white/80">
              {service.shortDescription}
            </p>

            <span
              className={cn(
                'mt-6 inline-flex items-center gap-2 rounded-full',
                'bg-secondary px-5 py-2.5',
                'text-sm font-bold text-secondary-foreground',
                'shadow-lg',
                'transition-all duration-300',

                'group-hover:gap-3',
                'group-hover:bg-secondary/90'
              )}
            >
              Learn more

              <ArrowRight
                className={cn(
                  'size-4',
                  'transition-transform duration-300',
                  'group-hover:translate-x-1'
                )}
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
// import Image from 'next/image';
// import {ArrowRight} from 'lucide-react';

// import {Link} from '@/i18n/navigation';
// import {cn} from '@/lib/utils';
// import type {Service} from '@/constants/services';

// export function ServiceCard({service}: {service: Service}) {
//   const isDigital = service.category === 'digital';

//   const categoryLabel = isDigital
//     ? 'Digital Engineering'
//     : 'Telecom Infrastructure';

//   return (
//     <article className="group relative h-full p-3 sm:p-4">
//       {/* Top-left decorative corner */}
//       <div
//         aria-hidden="true"
//         className={cn(
//           'absolute left-0 top-0 h-28 w-28 rounded-2xl',
//           'transition-all duration-500 ease-out',

//           // Hide on hover
//           'group-hover:translate-x-5 group-hover:translate-y-5',
//           'group-hover:scale-75 group-hover:opacity-0',

//           // Hide on keyboard focus
//           'group-focus-within:translate-x-5',
//           'group-focus-within:translate-y-5',
//           'group-focus-within:scale-75',
//           'group-focus-within:opacity-0',

//           isDigital ? 'bg-secondary' : 'bg-cyan-500'
//         )}
//       />

//       {/* Bottom-right decorative corner */}
//       <div
//         aria-hidden="true"
//         className={cn(
//           'absolute bottom-0 right-0 h-28 w-28 rounded-2xl bg-primary',
//           'transition-all duration-500 ease-out',

//           // Hide on hover
//           'group-hover:-translate-x-5 group-hover:-translate-y-5',
//           'group-hover:scale-75 group-hover:opacity-0',

//           // Hide on keyboard focus
//           'group-focus-within:-translate-x-5',
//           'group-focus-within:-translate-y-5',
//           'group-focus-within:scale-75',
//           'group-focus-within:opacity-0'
//         )}
//       />

//       {/* Entire card is clickable */}
//       <Link
//         href={`/services/${service.slug}`}
//         aria-label={`Learn more about ${service.title}`}
//         className={cn(
//           'relative z-10 block h-full overflow-hidden rounded-2xl',
//           'border border-border/50 bg-card shadow-sm outline-none',
//           'transition-all duration-500 ease-out',

//           // Hover
//           'group-hover:-translate-y-1',
//           'group-hover:border-primary/20',
//           'group-hover:shadow-2xl',

//           // Keyboard accessibility
//           'focus-visible:ring-2',
//           'focus-visible:ring-primary',
//           'focus-visible:ring-offset-2'
//         )}
//       >
//         {/* Portrait image container */}
//         <div 
//         className="relative aspect-[4/5] w-full overflow-hidden"
//         >
//           <Image
//             src={service.image}
//             alt={service.title}
//             fill
//             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//             className={cn(
//               'object-cover',
//               'transition-transform duration-700 ease-out',
//               'group-hover:scale-110',
//               'group-focus-within:scale-110'
//             )}
//           />

//           {/* Permanent bottom gradient */}
//           <div
//             aria-hidden="true"
//             // className={cn(
//             //   'absolute inset-x-0 bottom-0 h-3/5',
//             //   'bg-gradient-to-t',
//             //   'from-primary/95 via-primary/55 to-transparent',
//             //   'transition-opacity duration-500 ease-out',

//             //   // Hide when hover content appears
//             //   'group-hover:opacity-0',
//             //   'group-focus-within:opacity-0'
//             // )}
//           />

//           {/* Information visible before hover */}
//           <div
//             className={cn(
//               'absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6',
//               'transition-all duration-500 ease-out',

//               // Hide on hover
//               'group-hover:translate-y-6',
//               'group-hover:opacity-0',

//               // Hide on keyboard focus
//               'group-focus-within:translate-y-6',
//               'group-focus-within:opacity-0'
//             )}
//           >
//             <span
//               className={cn(
//                 'inline-flex rounded-full',
//                 'border border-white/25 bg-white/15',
//                 'px-3 py-1 backdrop-blur-md',
//                 'text-[10px] font-bold uppercase',
//                 'tracking-[0.13em] text-white',
//                 'sm:text-xs'
//               )}
//             >
//               {categoryLabel}
//             </span>

//             <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
//               {service.title}
//             </h3>

//             <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
//               View service
//               <ArrowRight className="size-4" />
//             </div>
//           </div>

//           {/* Dark overlay shown on hover */}
//           <div
//             aria-hidden="true"
//             className={cn(
//               'absolute inset-0',
//               'bg-gradient-to-t',
//               'from-primary via-primary/90 to-primary/55',
//               'opacity-0',
//               'transition-opacity duration-500 ease-out',

//               'group-hover:opacity-100',
//               'group-focus-within:opacity-100'
//             )}
//           />

//           {/* Content shown on hover */}
//           <div
//             aria-hidden="true"
//             className={cn(
//               'absolute inset-0 z-20',
//               'flex flex-col items-center justify-center',
//               'px-6 text-center sm:px-8',

//               'translate-y-8 opacity-0',
//               'transition-all duration-500 ease-out',

//               'group-hover:translate-y-0',
//               'group-hover:opacity-100',

//               'group-focus-within:translate-y-0',
//               'group-focus-within:opacity-100'
//             )}
//           >
//             <span
//               className={cn(
//                 'rounded-full border border-white/25',
//                 'bg-white/10 px-4 py-1.5',
//                 'text-[10px] font-bold uppercase',
//                 'tracking-[0.14em] text-white',
//                 'backdrop-blur-sm sm:text-xs'
//               )}
//             >
//               {categoryLabel}
//             </span>

//             <h3 className="mt-4 max-w-sm text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
//               {service.title}
//             </h3>

//             <p className="mt-4 line-clamp-3 max-w-sm text-sm leading-6 text-white/80">
//               {service.shortDescription}
//             </p>

//             <span
//               className={cn(
//                 'mt-6 inline-flex items-center gap-2 rounded-full',
//                 'bg-secondary px-5 py-2.5',
//                 'text-sm font-bold text-secondary-foreground',
//                 'shadow-lg',
//                 'transition-all duration-300',

//                 'group-hover:gap-3',
//                 'group-hover:bg-secondary/90'
//               )}
//             >
//               Learn more

//               <ArrowRight
//                 className={cn(
//                   'size-4',
//                   'transition-transform duration-300',
//                   'group-hover:translate-x-1'
//                 )}
//               />
//             </span>
//           </div>
//         </div>
//       </Link>
//     </article>
//   );
// }
// // import Image from 'next/image';
// import {ArrowRight} from 'lucide-react';

// import {Link} from '@/i18n/navigation';
// import {cn} from '@/lib/utils';
// import type {Service} from '@/constants/services';

// export function ServiceCard({service}: {service: Service}) {
//   const isDigital = service.category === 'digital';

//   return (
//     <article className="group relative h-full p-3 sm:p-4">
//       {/* Top-left decorative corner */}
//       <div
//         aria-hidden="true"
//         className={cn(
//           'absolute left-0 top-0 h-28 w-28 rounded-2xl',
//           'transition-all duration-500 ease-out',
//           'group-hover:translate-x-5 group-hover:translate-y-5',
//           'group-hover:scale-75 group-hover:opacity-0',
//           isDigital ? 'bg-secondary' : 'bg-cyan-500'
//         )}
//       />

//       {/* Bottom-right decorative corner */}
//       <div
//         aria-hidden="true"
//         className={cn(
//           'absolute bottom-0 right-0 h-28 w-28 rounded-2xl',
//           'bg-primary',
//           'transition-all duration-500 ease-out',
//           'group-hover:-translate-x-5 group-hover:-translate-y-5',
//           'group-hover:scale-75 group-hover:opacity-0'
//         )}
//       />

//       <Link
//         href={`/services/${service.slug}`}
//         aria-label={`Learn more about ${service.title}`}
//         className={cn(
//           'relative z-10 block h-full overflow-hidden rounded-2xl',
//           'border border-border/50 bg-card',
//           'shadow-sm outline-none',
//           'transition-all duration-500 ease-out',
//           'group-hover:-translate-y-1 group-hover:border-primary/20',
//           'group-hover:shadow-2xl',
//           'focus-visible:ring-2 focus-visible:ring-primary',
//           'focus-visible:ring-offset-2'
//         )}
//       >
//         {/* Service image */}
//         <div className="relative aspect-[4/3] w-full overflow-hidden">
//           <Image
//             src={service.image}
//             alt={service.title}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             className={cn(
//               'object-cover',
//               'transition-transform duration-700 ease-out',
//               'group-hover:scale-110'
//             )}
//           />

//           {/* Dark hover overlay */}
//           <div
//             className={cn(
//               'absolute inset-0',
//               'bg-gradient-to-t from-primary/95 via-primary/70 to-primary/15',
//               'opacity-0 transition-opacity duration-500',
//               'group-hover:opacity-100'
//             )}
//           />

//           {/* Normal-state subtle gradient */}
//           <div
//             className={cn(
//               'absolute inset-x-0 bottom-0 h-1/3',
//               'bg-gradient-to-t from-black/20 to-transparent',
//               'transition-opacity duration-500',
//               'group-hover:opacity-0'
//             )}
//           />

//           {/* Hover content */}
//           <div
//             className={cn(
//               'absolute inset-0 flex flex-col items-center justify-center',
//               'px-6 text-center',
//               'opacity-0 transition-all duration-500',
//               'translate-y-8 group-hover:translate-y-0',
//               'group-hover:opacity-100'
//             )}
//           >
//             <span
//               className={cn(
//                 'mb-3 rounded-full border border-white/20',
//                 'bg-white/10 px-4 py-1.5',
//                 'text-xs font-bold uppercase tracking-[0.14em]',
//                 'text-white backdrop-blur-sm'
//               )}
//             >
//               {isDigital
//                 ? 'Digital Engineering'
//                 : 'Telecom Infrastructure'}
//             </span>

//             <h3 className="max-w-sm text-2xl font-bold tracking-tight text-white sm:text-3xl">
//               {service.title}
//             </h3>

//             <span
//               className={cn(
//                 'mt-6 inline-flex items-center gap-2 rounded-full',
//                 'bg-secondary px-5 py-2.5',
//                 'text-sm font-bold text-secondary-foreground',
//                 'shadow-lg transition-all duration-300',
//                 'group-hover:gap-3 group-hover:bg-secondary/90'
//               )}
//             >
//               Learn more
//               <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </span>
//           </div>
//         </div>
//       </Link>
//     </article>
//   );
// }