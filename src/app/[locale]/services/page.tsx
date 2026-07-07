import {getTranslations} from 'next-intl/server';
import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';
import {ServiceCard} from '@/components/services/ServiceCard';
import {services} from '@/constants/services';

export async function generateMetadata() {
  const t = await getTranslations('Seo.services');
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function ServicesPage() {
  const t = await getTranslations('ServicesPage');

  return (
    <Container className="section-padding">
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Container>
  );
}
