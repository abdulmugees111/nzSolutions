import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';
import {industries} from '@/constants/industries';

export const metadata = {
  title: 'Industries',
  description: 'Industries served by NZ Solutions, including telecom, data centres, SMEs, finance, and construction.'
};

export default function IndustriesPage() {
  return (
    <Container className="section-padding">
      <SectionHeader
        eyebrow="Industries"
        title="Solutions for infrastructure-heavy and digital-first businesses."
        description="Our services support companies that need reliable systems, secure connectivity, and modern customer-facing platforms."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <article key={industry.name} className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{industry.name}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{industry.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
