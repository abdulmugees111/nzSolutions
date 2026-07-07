import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';

export const metadata = {
  title: 'Careers',
  description: 'Career opportunities at NZ Solutions.'
};

export default function CareersPage() {
  return (
    <Container className="section-padding">
      <SectionHeader
        eyebrow="Careers"
        title="Build infrastructure and digital products with us."
        description="Add open roles here for developers, designers, project coordinators, telecom engineers, and field delivery teams."
      />
    </Container>
  );
}
