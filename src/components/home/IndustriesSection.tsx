import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';
import {industries} from '@/constants/industries';

export function IndustriesSection() {
  return (
    <section className="bg-white">
      <Container className="section-padding">
        <SectionHeader
          eyebrow="Industries"
          title="Designed for infrastructure-heavy and digital-first teams."
          description="Show the business areas where NZ Solutions can deliver both telecom and software value."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map((industry) => (
            <article key={industry.name} className="rounded-2xl border bg-background p-6">
              <h3 className="text-lg font-semibold">{industry.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{industry.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
