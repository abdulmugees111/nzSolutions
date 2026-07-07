import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';

export const metadata = {
  title: 'Case Studies',
  description: 'Project examples and case studies from NZ Solutions.'
};

export default function CaseStudiesPage() {
  return (
    <Container className="section-padding">
      <SectionHeader
        eyebrow="Case Studies"
        title="Project stories coming soon."
        description="Use this page to show telecom rollouts, web platforms, mobile apps, dashboards, integrations, and maintenance projects."
      />
    </Container>
  );
}
