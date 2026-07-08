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
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl border bg-card p-6 shadow-sm lg:block transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            // className="object-contain p-6"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
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
