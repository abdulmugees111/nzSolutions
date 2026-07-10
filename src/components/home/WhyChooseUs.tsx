import {
  RadioTower,
  Smartphone,
  MonitorSmartphone,
  Search,
  Code2,
  Headphones,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/common/Container";

type Reason = {
  title: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    title: "Telecom infrastructure experience",
    icon: RadioTower,
  },
  {
    title: "Modern web and mobile engineering",
    icon: Smartphone,
  },
  {
    title: "Responsive design for every device",
    icon: MonitorSmartphone,
  },
  {
    title: "SEO-friendly architecture",
    icon: Search,
  },
  {
    title: "Scalable and maintainable codebase",
    icon: Code2,
  },
  {
    title: "Post-launch support & maintenance",
    icon: Headphones,
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute -right-20 top-10 size-72 rounded-full bg-secondary/5 blur-3xl" />

      <Container className="section-padding relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Why choose us
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for companies that need reliable delivery.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              NZ Solutions combines infrastructure discipline with modern
              software development so your digital systems are practical,
              scalable, and business-ready.
            </p>
          </div>

          {/* Reasons cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="group flex min-h-20 items-center gap-4 rounded-2xl border bg-background p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:bg-white hover:shadow-lg"
              >
                {/* Icon */}
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                  <Icon size={22} strokeWidth={2} />
                </span>

                {/* Title */}
                <p className="text-sm font-semibold leading-5 text-foreground sm:text-base">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
// import {CheckCircle2} from 'lucide-react';
// import {Container} from '@/components/common/Container';

// const reasons = [
//   'Telecom infrastructure experience',
//   'Modern web and mobile engineering',
//   'Responsive design for every device',
//   'SEO-friendly architecture',
//   'Scalable and maintainable codebase',
//   'Post-launch support & maintenance'
// ];

// export function WhyChooseUs() {
//   return (
//     <section className="bg-white">
//       <Container className="section-padding">
//         <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Why choose us</p>
//             <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built for companies that need reliable delivery.</h2>
//             <p className="mt-5 text-muted-foreground">
//               NZ Solutions combines infrastructure discipline with modern software development so your digital systems are practical, scalable, and business-ready.
//             </p>
//           </div>
//           <div className="grid gap-4 sm:grid-cols-2">
//             {reasons.map((reason) => (
//               <div key={reason} className="flex gap-3 rounded-2xl border bg-background p-4">
//                 <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
//                 <p className="text-sm font-medium">{reason}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
