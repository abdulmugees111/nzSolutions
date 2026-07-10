import {notFound} from 'next/navigation';
import {Container} from '@/components/common/Container';
import {CTASection} from '@/components/home/CTASection';
import {ServiceDetail} from '@/components/services/ServiceDetail';
import {services} from '@/constants/services';

export function generateStaticParams() {
  return services.map((service) => ({slug: service.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service?.seoTitle,
    description: service?.seoDescription
  };
}

export default async function ServiceDetailPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Container className="section-padding">
        <ServiceDetail service={service} />
      </Container>
      <CTASection />
    </>
  );
}
