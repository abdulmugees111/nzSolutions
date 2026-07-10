export const siteConfig = {
  name: 'NZ Solutions',
  legalName: 'NZ Solutions LTD',
  url: 'https://www.nzsolutions.co.uk',
  tagline: 'Telecom Infrastructure & Digital Engineering Solutions',
  description:
    'NZ Solutions delivers telecom infrastructure, network services, data-centre support, web applications, mobile applications, custom software, and system integration services.',
  email: 'h.junaid@nzsolutions.co.uk',
  careersEmail: 'Careers@nzsolutions.co.uk',
  phone: '020 3441 2198',
  whatsapp: '07796 215 793',
  address: {
    line1: 'Suite 314, Stanmore Business and Innovation Centre',
    line2: 'Howard Road',
    city: 'Stanmore',
    postcode: 'HA7 1BT',
    country: 'United Kingdom'
  },
  founded: '2012',
  companySize: '11–50 employees',
  social: {
    linkedin: 'https://uk.linkedin.com/company/nz-solutions-ltd'
  }
};

export const contactCards = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`
  },
  {
    label: 'Landline',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`
  },
  {
    label: 'WhatsApp',
    value: siteConfig.whatsapp,
    href: `https://wa.me/44${siteConfig.whatsapp.replace(/\D/g, '').replace(/^0/, '')}`
  },
  {
    label: 'Careers',
    value: siteConfig.careersEmail,
    href: `mailto:${siteConfig.careersEmail}`
  }
];
