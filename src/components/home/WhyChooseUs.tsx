import {CheckCircle2} from 'lucide-react';
import {Container} from '@/components/common/Container';

const reasons = [
  'Telecom infrastructure experience',
  'Modern web and mobile engineering',
  'Responsive design for every device',
  'SEO-friendly architecture',
  'Scalable and maintainable codebase',
  'Post-launch support and maintenance'
];

export function WhyChooseUs() {
  return (
    <section className="bg-white">
      <Container className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Why choose us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built for companies that need reliable delivery.</h2>
            <p className="mt-5 text-muted-foreground">
              NZ Solutions combines infrastructure discipline with modern software development so your digital systems are practical, scalable, and business-ready.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-3 rounded-2xl border bg-background p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <p className="text-sm font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
