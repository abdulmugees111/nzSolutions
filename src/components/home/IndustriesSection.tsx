import Image from 'next/image';

import {Container} from '@/components/common/Container';
import {industries} from '@/constants/industries';

import Pos from '@/assets/images/pos.png';
import Ssip from '@/assets/images/ssip.png';
import ConstLine from '@/assets/images/constLine.jpg';

const industryImages = [
  {
    src: Pos,
    alt: 'PQS Health & Safety Approved',
    className: 'h-[120px] w-[250px] sm:h-[140px] sm:w-[290px]',
  },
  {
    src: Ssip,
    alt: 'SSIP Approved Member',
    className: 'h-[200px] w-[200px] sm:h-[270px] sm:w-[270px]',
  },
  {
    src: ConstLine,
    alt: 'Constructionline Silver Member',
    className: 'h-[90px] w-[250px] sm:h-[120px] sm:w-[300px]',
  },
];

export function IndustriesSection() {
  return (
    // <section className="bg-white">
      <Container className="section-padding">
        <div className="flex flex-wrap items-center justify-center gap-20 lg:gap-26">
          {industryImages.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className={`${image.className} object-contain`}
                priority
              />
            </div>
          ))}
        </div>
      </Container>
    // </section>
  );
}

        {/* <SectionHeader
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
        </div> */}