import {
  Search,
  ClipboardList,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { processSteps } from "@/constants/process";

const processIcons: LucideIcon[] = [
  Search,
  ClipboardList,
  Code2,
  Rocket,
];

export function ProcessSection() {
  return (
    <section className="bg-white">
      <Container className="section-padding">
        <SectionHeader
          eyebrow="Process"
          title="A simple process from discovery to support."
          // description="This keeps your client journey clear and makes the company look organized and professional."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = processIcons[index] ?? Search;

            return (
              <article
                key={step.title}
                className="group relative rounded-2xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  {/* Icon on top-left */}
                  <span className="flex size-15 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                    <Icon size={40} strokeWidth={2} />
                  </span>

                  {/* Small count on top-right */}
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}// import {Container} from '@/components/common/Container';
// import {SectionHeader} from '@/components/common/SectionHeader';
// import {processSteps} from '@/constants/process';

// export function ProcessSection() {
//   return (
//         <section className="bg-white">
//     <Container className="section-padding">
//       <SectionHeader
//         eyebrow="Process"
//         title="A simple process from discovery to support."
//         description="This keeps your client journey clear and makes the company look organized and professional."
//       />
//       <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {processSteps.map((step, index) => (
//           <article key={step.title} className="rounded-2xl border bg-card p-6 shadow-sm">
//             <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span>
//             <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
//             <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
//           </article>
//         ))}
//       </div>
//     </Container>
//     </section>
//   );
// }
