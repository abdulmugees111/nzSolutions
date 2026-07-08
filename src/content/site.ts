import {siteConfig} from '@/constants/site';

export const homeContent = {
  hero: {
    eyebrow: 'Telecom Infrastructure + Digital Engineering',
    title: 'Build reliable networks, modern web platforms, mobile apps, and custom software.',
    description:
      'NZ Solutions combines established telecom delivery experience with digital engineering services for businesses that need dependable infrastructure, responsive websites, scalable applications, and integrated systems.',
    primaryCta: 'Explore Services',
    secondaryCta: 'Request Consultation'
  },
  intro: {
    title: 'Delivering economic and reliable solutions since 2012.',
    paragraphs: [
      'NZ Solutions was established in 2012 and provides a wide range of services to the telecommunications industry across the United Kingdom.',
      'Our team focuses on delivering projects right the first time, with quality, safety, responsibility, and clear communication at the centre of our work.',
      'We now bring the same delivery discipline into digital engineering, helping organisations build websites, mobile apps, internal tools, dashboards, APIs, and integrated business systems.'
    ]
  }
};

export const aboutContent = {
  eyebrow: 'About NZ Solutions',
  title: 'A UK technology partner for telecom infrastructure and digital delivery.',
  description:
    'NZ Solutions was established in 2012 with a mission to support the telecommunications industry through practical, reliable, and cost-effective delivery. The business has grown from telecom infrastructure services into a broader technology partner covering network delivery, data centres, IT solutions, software development, and integration.',
  story: [
    'We provide a wide range of services to the telecommunications industry across the United Kingdom and aim to be a one-stop partner for everything telecommunications.',
    'Our experience covers project management, survey, design and planning, civils, cabling, FTTP, network audits, OTH/ODF, data centre support, DSLAM and night migrations, DWDM commissioning, decommissioning, IT solutions, software development, and integration.',
    'We take responsibility for the quality of our delivery and work closely with clients to understand the requirement, plan the right approach, and complete work safely and effectively.',
    'During critical periods such as Covid-19, telecom teams and infrastructure providers were recognised as key workers because reliable connectivity is essential for businesses, public services, and communities.'
  ],
  capabilities: [
    {
      title: 'Telecom Delivery',
      items: ['Project Management', 'Survey, Design and Planning', 'Civils', 'Cabling', 'FTTP', 'Network Audits', 'OTH/ODF', 'DSLAM and night migrations']
    },
    {
      title: 'Data Centres & Networks',
      items: ['Data Centres', 'DWDM rack/subrack/card/SFP commissioning', 'Equipment migration', 'Decommissioning', 'Electrical installation support', 'Operations and maintenance']
    },
    {
      title: 'Digital Engineering',
      items: ['IT Solutions', 'Software Development', 'System Integration', 'Web Applications', 'Mobile Applications', 'APIs and business portals']
    }
  ]
};

export const careersContent = {
  eyebrow: 'Careers',
  title: 'Join a team delivering telecom and digital solutions.',
  description:
    'NZ Solutions prides itself on attracting strong people to meet customer needs and support our mission to improve telecommunications and technology delivery.',
  paragraphs: [
    'We believe our staff should have the tools, resources, and support they need to deliver high-quality work for clients.',
    'As the company grows, we continue to look for motivated people across telecom infrastructure, project delivery, engineering, development, and operations.',
    'We aim to provide an inclusive working environment where people can build their skills, take responsibility, and contribute to meaningful projects.'
  ],
  cta: `To apply or share your CV, email ${siteConfig.careersEmail}.`,
  benefits: ['Growth-focused environment', 'Telecom and digital projects', 'UK infrastructure exposure', 'Collaborative project teams', 'Practical delivery culture', 'Learning and skill development']
};

export const contactContent = {
  eyebrow: 'Contact NZ Solutions',
  title: 'Speak with us about your next telecom or digital project.',
  description:
    'Use the form below or contact us directly. You can enquire about telecom infrastructure, data-centre support, web development, mobile applications, custom software, API integration, or general business requirements.',
  address: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.postcode}, ${siteConfig.address.country}`
};

export const caseStudiesContent = [
  {
    title: 'Telecom delivery support',
    category: 'Infrastructure',
    description: 'Surveying, cabling, fibre support, testing, and migration workflows for telecom delivery teams.',
    outcomes: ['Improved field coordination', 'Clearer delivery documentation', 'Reliable handover process']
  },
  {
    title: 'Data centre operational support',
    category: 'Data Centres',
    description: 'Cross-connects, rack/stack, smart hands, structured cabling, and migration support for controlled data-centre environments.',
    outcomes: ['Controlled change activity', 'Reduced disruption risk', 'Better asset visibility']
  },
  {
    title: 'Digital business platform',
    category: 'Digital Engineering',
    description: 'A modern web application concept for clients that need customer portals, dashboards, APIs, and workflow automation.',
    outcomes: ['Responsive UX', 'Scalable architecture', 'Business process automation']
  }
];
