import {AccreditationsBanner} from '@/components/common/AccreditationsBanner';
import {AboutHero} from '@/components/about/AboutHero';
import {AboutWhoWeAre} from '@/components/about/AboutWhoWeAre';
import {AboutValues} from '@/components/about/AboutValues';
import {AboutServices} from '@/components/about/AboutServices';
import {AboutCovidPolicy} from '@/components/about/AboutCovidPolicy';
import {AboutCareersCta} from '@/components/about/AboutCareersCta';

export const metadata = {
  title: 'About Us',
  description:
    'NZ Solutions — established 2012. Delivering turnkey fixed-line telecom infrastructure, FTTP, network design, and digital engineering across the United Kingdom.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutValues />
      <AboutServices />
      <AboutCovidPolicy />
      <AboutCareersCta />
      <AccreditationsBanner />
    </>
  );
}
