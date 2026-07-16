import {getTranslations} from 'next-intl/server';

import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';
import {ServiceCard} from '@/components/services/ServiceCard';
import {NeuralHoverBackground} from '@/components/common/NeuralHoverBackground';
import {
  serviceCategories,
  type ServiceCategory
} from '@/constants/services';
import {services} from '@/constants/services';
import {Link} from '@/i18n/navigation';

type ServicesPageProps = {
  searchParams: Promise<{
    category?: string | string[];
  }>;
};

const categoryContent: Record<
  ServiceCategory,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  telecom: {
    eyebrow: 'Telecom Infrastructure',
    title: 'Telecom Services',
    description:
      'Explore our surveying, civils, cabling, fibre testing, data-centre and network infrastructure services.'
  },
  digital: {
    eyebrow: 'Digital Solutions',
    title: 'Digital Services',
    description:
      'Explore our web development, mobile application, digital workplace and project-management services.'
  },
  transportation: {
    eyebrow: 'Transport & Logistics',
    title: 'Heavy Transportation',
    description:
      'Explore our heavy transportation and logistics services using lorries and heavy trucks.'
  }
};

export async function generateMetadata() {
  const t = await getTranslations('Seo.services');

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function ServicesPage({
  searchParams
}: ServicesPageProps) {
  const t = await getTranslations('ServicesPage');

  // const selectedCategory: ServiceCategory | undefined =
  //   rawCategory === 'telecom' || rawCategory === 'digital' || rawCategory === 'transportation'
  //     ? rawCategory
  //     : undefined;

  const resolvedSearchParams = await searchParams;

const rawCategory = Array.isArray(resolvedSearchParams.category)
  ? resolvedSearchParams.category[0]
  : resolvedSearchParams.category;

const selectedCategory = serviceCategories.some(
  (category) => category.key === rawCategory
)
  ? (rawCategory as ServiceCategory)
  : undefined;

const visibleServices = selectedCategory
  ? services.filter((service) => service.category === selectedCategory)
  : services;


  const headingContent = selectedCategory
    ? categoryContent[selectedCategory]
    : {
        eyebrow: t('eyebrow'),
        title: t('title'),
        description: t('description')
      };

  return (
    <main className="relative overflow-hidden bg-background">
      <NeuralHoverBackground />

      <Container className="relative z-10 section-padding">
        <SectionHeader
          eyebrow={headingContent.eyebrow}
          title={headingContent.title}
          description={headingContent.description}
        />

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/services"
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
              !selectedCategory
                ? 'border-primary bg-primary text-primary-foreground'
                : 'bg-background text-muted-foreground hover:border-primary hover:text-primary'
            }`}
          >
            All Services
          </Link>

          {serviceCategories.map((category) => {
            const isSelected = selectedCategory === category.key;

            return (
              <Link
                key={category.key}
                href={category.href}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isSelected
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'bg-background text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {category.label}
              </Link>
            );
          })}
        </div>

        {/* Filtered services */}
        {visibleServices.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border bg-card p-8 text-center">
            <h2 className="text-xl font-semibold">No services found</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              No services are currently available in this category.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
}
// import {getTranslations} from 'next-intl/server';
// import {Container} from '@/components/common/Container';
// import {SectionHeader} from '@/components/common/SectionHeader';
// import {ServiceCard} from '@/components/services/ServiceCard';
// import {services} from '@/constants/services';

// export async function generateMetadata() {
//   const t = await getTranslations('Seo.services');
//   return {
//     title: t('title'),
//     description: t('description')
//   };
// }

// export default async function ServicesPage() {
//   const t = await getTranslations('ServicesPage');

//   return (
//     <Container className="section-padding">
//       <SectionHeader
//         eyebrow={t('eyebrow')}
//         title={t('title')}
//         description={t('description')}
//       />
//       <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((service) => (
//           <ServiceCard key={service.slug} service={service} />
//         ))}
//       </div>
//     </Container>
//   );
// }
