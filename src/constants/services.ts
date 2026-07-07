export type ServiceCategory = 'telecom' | 'digital';

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  description: string;
  features: string[];
  technologies?: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: 'network-services',
    title: 'Telecom & Network Services',
    category: 'telecom',
    shortDescription: 'Network installation, migration, patching, commissioning, and telecom infrastructure support.',
    description:
      'We support telecom operators, contractors, and infrastructure businesses with reliable network delivery services across planning, installation, testing, patching, commissioning, migration, and ongoing support.',
    features: ['Network installation', 'Circuit patching', 'Equipment migration', 'Decommissioning', 'Electrical installation support'],
    technologies: ['Fibre networks', 'FTTP', 'Data centres', 'Active network equipment'],
    seoTitle: 'Telecom & Network Services UK',
    seoDescription: 'NZ Solutions provides telecom and network infrastructure services including installation, patching, migration, and data centre support.'
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    category: 'digital',
    shortDescription: 'Responsive, SEO-friendly websites and web applications built with scalable technologies.',
    description:
      'We design and develop modern websites, customer portals, admin dashboards, landing pages, and web applications that are fast, accessible, secure, and easy to maintain.',
    features: ['Business websites', 'Web applications', 'Admin dashboards', 'Landing pages', 'Performance optimization'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    seoTitle: 'Web Development Services UK',
    seoDescription: 'Professional web development services for responsive business websites, web apps, dashboards, and digital platforms.'
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'digital',
    shortDescription: 'Cross-platform iOS and Android applications with clean UI and reliable performance.',
    description:
      'We build mobile applications for internal teams, customers, and field operations using modern cross-platform technologies and backend integrations.',
    features: ['iOS and Android apps', 'React Native apps', 'Mobile UI/UX', 'Push notifications', 'API integration'],
    technologies: ['React Native', 'Expo', 'Firebase', 'REST APIs', 'GraphQL'],
    seoTitle: 'Mobile App Development Services UK',
    seoDescription: 'NZ Solutions builds mobile apps for iOS and Android with secure APIs, clean UI, and scalable architecture.'
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    category: 'digital',
    shortDescription: 'Business portals, internal tools, SaaS products, CRM systems, and automation platforms.',
    description:
      'We create custom software systems that simplify operations, automate workflows, improve visibility, and connect different parts of your business.',
    features: ['Business portals', 'SaaS platforms', 'CRM workflows', 'Internal tools', 'Reporting dashboards'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Cloud platforms'],
    seoTitle: 'Custom Software Development UK',
    seoDescription: 'Custom software development for business portals, internal tools, SaaS products, dashboards, and workflow automation.'
  },
  {
    slug: 'api-integrations',
    title: 'API & System Integration',
    category: 'digital',
    shortDescription: 'Connect websites, apps, CRMs, payment systems, and third-party platforms through secure APIs.',
    description:
      'We integrate systems so teams can reduce manual work, sync data, automate workflows, and create a better customer experience.',
    features: ['REST API development', 'Third-party integrations', 'CRM integration', 'Payment integration', 'Automation workflows'],
    technologies: ['REST', 'GraphQL', 'Webhooks', 'OAuth', 'Stripe'],
    seoTitle: 'API Integration Services UK',
    seoDescription: 'API development and third-party integration services for websites, apps, CRMs, payment systems, and business tools.'
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    category: 'digital',
    shortDescription: 'Deployment, hosting, CI/CD, monitoring, and maintenance for modern web and mobile products.',
    description:
      'We help businesses deploy, monitor, secure, and maintain applications so digital products stay reliable after launch.',
    features: ['Cloud deployment', 'CI/CD pipelines', 'Monitoring', 'Maintenance', 'Security hardening'],
    technologies: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Cloudflare'],
    seoTitle: 'Cloud & DevOps Services UK',
    seoDescription: 'Cloud deployment, DevOps, CI/CD, monitoring, and maintenance services for modern digital platforms.'
  }
];
