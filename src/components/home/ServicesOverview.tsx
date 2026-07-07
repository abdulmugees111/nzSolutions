import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';
import {ServiceCard} from '@/components/services/ServiceCard';
import {services} from '@/constants/services';

export function ServicesOverview() {
  return (
    <Container className="section-padding">
      <SectionHeader
        eyebrow="What we do"
        title="Telecom delivery and digital product development under one roof."
        description="Use separate service pages for better SEO, but keep this homepage overview clean and easy to scan."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Container>
  );
}
