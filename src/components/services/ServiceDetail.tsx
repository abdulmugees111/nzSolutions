import {CheckCircle2} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import type {Service} from '@/constants/services';

export function ServiceDetail({service}: {service: Service}) {
  return (
    <article>
      <div className="max-w-3xl">
        <Badge>{service.category === 'digital' ? 'Digital Engineering' : 'Telecom Infrastructure'}</Badge>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{service.title}</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{service.description}</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <section className="rounded-3xl border bg-card p-6 shadow-sm">
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

        <section className="rounded-3xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Technologies / capabilities</h2>
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
