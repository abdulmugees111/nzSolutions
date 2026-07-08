'use client';

import {useState} from 'react';
import {ArrowRight, ArrowUp} from 'lucide-react';

import {Container} from '@/components/common/Container';
import {SectionHeader} from '@/components/common/SectionHeader';
import {ServiceCard} from '@/components/services/ServiceCard';
import {services} from '@/constants/services';
import {Button} from '@/components/ui/button';
import { homeContent } from '@/content/site';
import {Link} from '@/i18n/navigation';

export function ServicesOverview() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);
  const hasMoreThanSix = services.length > 6;

  return (
    <Container className="section-padding">
      <SectionHeader
        eyebrow="What we do"
        title="Building Reliable Telecom Infrastructure and Modern Digital Products."
        description="Use separate service pages for better SEO, but keep this homepage overview clean and easy to scan."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      {hasMoreThanSix && (
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
                        <Link href="/services">{homeContent.hero.primaryCta}<ArrowRight size={18} /></Link>
                      </Button>
        </div>
      )}
    </Container>
  );
}
      {/* <Button size="lg" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'See Less' : 'See More'}
            {showAll ? <ArrowUp size={18} /> : <ArrowRight size={18} />}
          </Button> */}

// import {Container} from '@/components/common/Container';
// import {SectionHeader} from '@/components/common/SectionHeader';
// import {ServiceCard} from '@/components/services/ServiceCard';
// import {services} from '@/constants/services';

// export function ServicesOverview() {
//   return (
//     <Container className="section-padding ">
//       <SectionHeader
//         eyebrow="What we do"
//         title="Building Reliable Telecom Infrastructure and Modern Digital Products."
//         // title="Telecom delivery and digital product development under one roof."
//         description="Use separate service pages for better SEO, but keep this homepage overview clean and easy to scan."
//       />
//       <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
//         {services.slice(0, 6).map((service) => (
//           <ServiceCard key={service.slug} service={service} />
//         ))}
//       </div>
//     </Container>
//   );
// }
