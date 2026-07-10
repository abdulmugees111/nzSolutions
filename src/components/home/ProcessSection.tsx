import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';
import {processSteps} from '@/constants/process';

export function ProcessSection() {
  return (
        <section className="bg-white">
    <Container className="section-padding">
      <SectionHeader
        eyebrow="Process"
        title="A simple process from discovery to support."
        description="This keeps your client journey clear and makes the company look organized and professional."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border bg-card p-6 shadow-sm">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span>
            <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
          </article>
        ))}
      </div>
    </Container>
    </section>
  );
}
