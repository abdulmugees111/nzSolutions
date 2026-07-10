import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Service } from '@/constants/services';

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <article>
      {/* Top section: text left, image right */}
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left content */}
        <div className="max-w-3xl">
          <Badge>
            {service.category === 'digital'
              ? 'Digital Engineering'
              : 'Telecom Infrastructure'}
          </Badge>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            {service.title}
          </h1>

          <div className="mt-6 space-y-6">
            {service.description.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="leading-7 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right image */}
        {/* <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl border bg-card p-6 shadow-sm lg:block transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            // className="object-contain p-6"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div> */}
        {/* Right image with decorative diagonal corners */}
<div className="group relative hidden aspect-[4/3] lg:block">
  {/* Green top-left corner */}
  <div
    aria-hidden="true"
    className="
      absolute left-0 top-0
      h-36 w-36
      rounded-[1.75rem]
      bg-secondary
      transition-transform duration-500 ease-out
      group-hover:-translate-x-1
      group-hover:-translate-y-1
    "
  />

  {/* Blue bottom-right corner */}
  <div
    aria-hidden="true"
    className="
      absolute bottom-0 right-0
      h-36 w-36
      rounded-[1.75rem]
      bg-primary
      transition-transform duration-500 ease-out
      group-hover:translate-x-1
      group-hover:translate-y-1
    "
  />

  {/* Main image container */}
  <div
    className="
      absolute inset-4 z-10
      overflow-hidden rounded-3xl
      border border-border
      bg-card shadow-sm
      transition-all duration-500 ease-out
      group-hover:-translate-y-1
      group-hover:border-primary/40
      group-hover:shadow-xl
    "
  >
    <Image
      src={service.image}
      alt={service.title}
      fill
      sizes="(max-width: 1024px) 100vw, 40vw"
      className="
        object-cover
        transition-transform duration-700 ease-out
        group-hover:scale-105
      "
      priority
    />

    <div
      className="
        pointer-events-none absolute inset-0
        bg-gradient-to-t
        from-primary/10 via-transparent to-transparent
        opacity-0
        transition-opacity duration-500
        group-hover:opacity-100
      "
    />
  </div>
</div>
      </div>

      {/* Bottom cards */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <section className="rounded-3xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
          <h2 className="text-2xl font-semibold">What is included</h2>

          <ul className="mt-6 space-y-4">
            {service.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
          <h2 className="text-2xl font-semibold">
            Technologies / capabilities
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {service.technologies?.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
// import {CheckCircle2} from 'lucide-react';
// import {Badge} from '@/components/ui/badge';
// import type {Service} from '@/constants/services';

// export function ServiceDetail({service}: {service: Service}) {
//   return (
//     <article>
//       <div className="max-w-3xl">
//         <Badge>{service.category === 'digital' ? 'Digital Engineering' : 'Telecom Infrastructure'}</Badge>
//         <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{service.title}</h1>
//        {service.description.split('\n\n').map((paragraph) => (
//         <p className="mt-6 leading-7 text-muted-foreground">{paragraph}</p>
//   ))}
//       </div>

//       <div className="mt-12 grid gap-8 lg:grid-cols-2">
//         <section className="rounded-3xl border bg-card p-6 shadow-sm">
//           <h2 className="text-2xl font-semibold">What is included</h2>
//           <ul className="mt-6 space-y-4">
//             {service.features.map((feature) => (
//               <li key={feature} className="flex gap-3 text-sm">
//                 <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <section className="rounded-3xl border bg-card p-6 shadow-sm">
//           <h2 className="text-2xl font-semibold">Technologies / capabilities</h2>
//           <div className="mt-6 flex flex-wrap gap-2">
//             {service.technologies?.map((tech) => (
//               <Badge key={tech}>{tech}</Badge>
//             ))}
//           </div>
//         </section>
//       </div>
//     </article>
//   );
// }
