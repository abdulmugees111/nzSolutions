import {CTASection} from '@/components/home/CTASection';
import {Hero} from '@/components/home/Hero';
import {IndustriesSection} from '@/components/home/IndustriesSection';
import {ProcessSection} from '@/components/home/ProcessSection';
import {ServicesOverview} from '@/components/home/ServicesOverview';
import {WhyChooseUs} from '@/components/home/WhyChooseUs';
import {PartnersCarousel} from '@/components/home/PartnersCarousel';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <PartnersCarousel />
      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
