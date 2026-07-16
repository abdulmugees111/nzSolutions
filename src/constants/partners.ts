import Nrswa from '@/assets/images/partner/1.png'
import Afl from '@/assets/images/partner/2.png'
import Fujikura from '@/assets/images/partner/3.png'
import Circet from '@/assets/images/partner/4.png'
import Mills from '@/assets/images/partner/5.png'
import Ctts from '@/assets/images/partner/6.png'

export type Partner = {
  name: string;
  logo: any;
  alt: string;
  category: 'telecom' | 'technology' | 'infrastructure' | 'software';
};

export const accreditations = [
  'PQS Health & Safety Approved',
  'SSIP Supplier',
  'Constructionline Silver Member'
];

export const trustStats = [
  {value: '2012', label: 'Established'},
  {value: 'UK-wide', label: 'Telecom delivery'},
  {value: '2', label: 'Service families'},
  {value: '24/7', label: 'Project mindset'}
];


export const partners: Partner[] = [
  {
    name: 'Openreach',
    logo: Nrswa,
    alt: 'Openreach partner logo',
    category: 'telecom'
  },
  {
    name: 'CityFibre',
    logo: Afl,
    alt: 'CityFibre partner logo',
    category: 'infrastructure'
  },
  {
    name: 'Full Fibre',
    logo: Fujikura,
    alt: 'Full Fibre partner logo',
    category: 'telecom'
  },
  {
    name: 'Network Plus',
    logo: Circet,
    alt: 'Network Plus partner logo',
    category: 'infrastructure'
  },
  {
    name: 'Digital Build',
    logo: Mills,
    alt: 'Digital Build partner logo',
    category: 'software'
  },
  {
    name: 'CloudOps',
    logo: Ctts,
    alt: 'CloudOps partner logo',
    category: 'technology'
  }
];
