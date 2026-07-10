export type ServiceCategory = 'telecom' | 'digital';

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  eyebrow: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  deliverables: string[];
  technologies?: string[];
  faq: {question: string; answer: string}[];
  seo: {
    title: string;
    description: string;
  };
};

export const allServices: Service[] = [
  {
    slug: 'surveying',
    title: 'Surveying',
    category: 'telecom',
    eyebrow: 'Telecom Infrastructure',
    shortDescription: 'Fixed-network surveys, UG/OH intrusive surveys, route packs, compliance checks, and fibre network documentation.',
    description:
      'NZ Solutions provides surveying for fixed networks including spine, PON builds, and town planning. We conduct full intrusive surveys of underground and overhead networks, capture accurate field data, and support route design, compliance, and delivery documentation. Our fibre surveyors capture technical information using platforms such as GIS, Orion, and Geo-hub and flag alternative routes when required.',
    image: '/images/services/surveying.svg',
    features: ['Fixed network surveys', 'Spine and PON build surveys', 'Town planning support', 'UG and OH intrusive surveys', 'Route packs and compliance documentation', 'Alternative route identification'],
    deliverables: ['Survey evidence pack', 'Route and obstruction notes', 'GIS-ready field information', 'Compliance-ready documentation'],
    technologies: ['GIS', 'Orion', 'Geo-hub', 'FTTP', 'UG/OH networks'],
    faq: [
      {question: 'Do you support both underground and overhead network surveys?', answer: 'Yes. The surveying service covers both underground and overhead network environments, including intrusive surveys and route validation.'},
      {question: 'Can you support fibre rollout planning?', answer: 'Yes. Surveying can support spine, PON, FTTP, town planning, and alternative route identification.'}
    ],
    seo: {title: 'Telecom Surveying Services UK', description: 'Fixed-network and fibre surveying for PON, spine, UG/OH routes, route packs, compliance, and design support.'}
  },
  {
    slug: 'civils',
    title: 'Civils',
    category: 'telecom',
    eyebrow: 'Telecom Infrastructure',
    shortDescription: 'Civil engineering support for network rollout, ducts, chambers, reinstatements, poles, and confined-space activities.',
    description:
      'NZ Solutions supports telecom civils activity across network rollout and maintenance projects. The service covers new tracks, duct blockages, ducts and subducts, cabinet structures, chamber construction, desilts, gully sucks, poles, reinstatements, and confined spaces. We focus on safe, practical, and coordinated civil works that support dependable network delivery.',
    image: '/images/services/civils.svg',
    features: ['New tracks', 'Duct blockages', 'Laying ducts and subducts', 'Cabinet structures', 'Chamber construction', 'Desilts and gully sucks', 'Poles', 'Reinstatements', 'Confined spaces'],
    deliverables: ['Civil works planning support', 'Field execution support', 'Reinstatement-ready workflow', 'Completion evidence'],
    technologies: ['Ducts', 'Subducts', 'Cabinet structures', 'Chambers', 'Confined-space procedures'],
    faq: [
      {question: 'What civils activities do you cover?', answer: 'The civils service covers new tracks, duct blockages, ducts, subducts, cabinet structures, chamber construction, desilts, gully sucks, poles, reinstatements, and confined-space activity.'},
      {question: 'Do you work on telecom network rollout projects?', answer: 'Yes. Civils is positioned to support telecom rollout, maintenance, and associated field delivery.'}
    ],
    seo: {title: 'Telecom Civils Services UK', description: 'Civil engineering support for network rollout, ducts, chambers, reinstatement, poles, and associated ground works.'}
  },
  {
    slug: 'cabling',
    title: 'Cabling',
    category: 'telecom',
    eyebrow: 'Telecom Infrastructure',
    shortDescription: 'Copper and fibre cabling across underground, overhead, conventional duct, direct-buried duct, and FTTP environments.',
    description:
      'NZ Solutions provides specialist cabling engineers for copper and fibre infrastructure. The team connects infrastructure through conventional duct, direct-buried duct, and FTTP environments to client specifications. We support planning, safe working practices, overhead and underground cabling, and PIA-capable delivery where required.',
    image: '/images/services/cabling.svg',
    features: ['Copper cabling', 'Fibre cabling', 'Conventional duct cabling', 'Direct-buried duct cabling', 'FTTP cabling', 'Overhead and underground cabling', 'Planning support', 'PIA-capable delivery'],
    deliverables: ['Cabling installation support', 'Field-ready planning notes', 'Quality and safety-aligned execution', 'Handover information'],
    technologies: ['Copper', 'Fibre', 'FTTP', 'PIA', 'OH/UG environments'],
    faq: [
      {question: 'Do you provide both copper and fibre cabling?', answer: 'Yes. NZ Solutions supports copper and fibre cabling across multiple telecom environments.'},
      {question: 'Can you support FTTP and PIA-related work?', answer: 'Yes. The cabling service includes FTTP environments and PIA-capable delivery where required.'}
    ],
    seo: {title: 'Network Cabling Services UK', description: 'Copper and fibre cabling across OH and UG environments, including planning support and PIA-capable delivery.'}
  },
  {
    slug: 'splicing-oth-testing',
    title: 'Splicing/OTH Testing',
    category: 'telecom',
    eyebrow: 'Telecom Infrastructure',
    shortDescription: 'Accredited fibre splicing, jointing, fault-finding, OTH testing, light-level checks, and network result documentation.',
    description:
      'NZ Solutions provides accredited splicers and OTH testers for core splicing activities including jointing and splicing cable chambers. The team supports fibre fault finding, uses specialist testing tools, records results through relevant systems, and helps resolve light-related network issues.',
    image: '/images/services/splicing.svg',
    features: ['Accredited splicers and testers', 'Jointing and splicing cable chambers', 'Fibre fault finding', 'Network section testing', 'Light-level issue support', 'ONSIM/ONSAMI-style result recording', 'Documentation and handover'],
    deliverables: ['Splicing completion evidence', 'Test result documentation', 'Fault notes', 'Network section handover'],
    technologies: ['OTDR', 'Light meters', 'Optical source tools', 'Fibre networks', 'OTH testing'],
    faq: [
      {question: 'Do you provide accredited splicing and testing?', answer: 'Yes. The splicing and OTH testing service is based on accredited field delivery and structured result recording.'},
      {question: 'Can you help with fibre fault finding?', answer: 'Yes. Fibre fault finding and light-level issue support are included in the service capability.'}
    ],
    seo: {title: 'Fibre Splicing and OTH Testing UK', description: 'Accredited fibre splicing, fault finding, OTH testing, documentation, and network light-level verification.'}
  },
  {
    slug: 'data-centres-circuit-patching',
    title: 'Data Centres Circuit Patching',
    category: 'telecom',
    eyebrow: 'Data Centre Services',
    shortDescription: 'Cross-connects, MMR, survey and audit, rack/stack, smart hands, structured cabling, and migration support.',
    description:
      'NZ Solutions supports data centres with circuit patching and operational services. Capabilities include cross-connects and Meet Me Room services, data centre design support, survey and audit, decommissioning, digitisation, electrical installation, equipment migrations, rack and stack, NOC support, containment systems, smart hands, and structured cabling installation and testing.',
    image: '/images/services/data-centre.svg',
    features: ['Cross-connects and MMR services', 'Data centre design support', 'Data centre survey and audit', 'Decommissioning', 'Digitisation', 'Electrical installation', 'Equipment migrations', 'Rack and stack', 'NOC support', 'Containment systems', 'Smart hands', 'Structured cabling installation and testing'],
    deliverables: ['Circuit patching support', 'Survey and audit output', 'Migration support notes', 'Structured cabling handover'],
    technologies: ['MMR', 'Structured cabling', 'NOC workflows', 'Rack and stack', 'Containment systems'],
    faq: [
      {question: 'Do you support data centre circuit patching?', answer: 'Yes. NZ Solutions supports cross-connects, MMR services, patching, cabling, and associated data-centre operations.'},
      {question: 'Can you help with migrations and decommissioning?', answer: 'Yes. Equipment migrations and decommissioning are part of the data-centre service capability.'}
    ],
    seo: {title: 'Data Centre Services UK', description: 'Data-centre design support, cross-connects, structured cabling, rack installation, migrations, and smart hands.'}
  },
  {
    slug: 'network-services',
    title: 'Network Services',
    category: 'telecom',
    eyebrow: 'Telecom Infrastructure',
    shortDescription: 'Active equipment I&C, circuit patching, migrations, monitoring, optimisation, O&M, and preventative maintenance.',
    description:
      'NZ Solutions provides network services for active equipment installation and commissioning, circuit patching, decommissioning, electrical installation services, equipment migrations, racking and stacking, fibre characterisation, logistics, monitoring, optimisation, operations and maintenance, preventative maintenance, and project/programme management.',
    image: '/images/services/network-services.svg',
    features: ['Active equipment I&C', 'Circuit patching', 'Decommissioning', 'Electrical installation services', 'Equipment migrations', 'Racking and stacking', 'Fibre characterisation', 'Logistics', 'Monitoring', 'Optimisation', 'Operations and maintenance', 'Preventative maintenance', 'Project and programme management'],
    deliverables: ['Network implementation support', 'Migration and decommissioning support', 'Maintenance workflow', 'Programme coordination'],
    technologies: ['Active network equipment', 'Fibre characterisation', 'Monitoring systems', 'Data centre infrastructure'],
    faq: [
      {question: 'Do you support active equipment installation and commissioning?', answer: 'Yes. Active equipment I&C is one of the core network services.'},
      {question: 'Can you provide ongoing operations and maintenance?', answer: 'Yes. The service covers monitoring, optimisation, operations and maintenance, and preventative maintenance.'}
    ],
    seo: {title: 'Network Services UK', description: 'Active equipment I&C, migrations, monitoring, fibre testing, patching, and network operations support.'}
  },
  {
    slug: 'web-development',
    title: 'Web Application Development',
    category: 'digital',
    eyebrow: 'Digital Engineering',
    shortDescription: 'Modern responsive websites, customer portals, admin dashboards, and web applications built for performance and growth.',
    description:
      'NZ Solutions designs and develops modern web applications for businesses that need more than a brochure website. We build responsive websites, customer portals, internal dashboards, data-entry systems, and operational tools with maintainable architecture, clean user flows, strong performance, SEO foundations, and integrations with the systems your business already uses.',
    image: '/images/services/web-development.svg',
    features: ['Business websites', 'Web applications', 'Customer portals', 'Admin dashboards', 'CMS integration', 'SEO-friendly architecture', 'Performance optimisation', 'Responsive UI'],
    deliverables: ['UX and page structure', 'Responsive frontend', 'Backend/API integration', 'SEO metadata', 'Launch support'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    faq: [
      {question: 'Will the website be fully responsive?', answer: 'Yes. The project is designed mobile-first and tested across phone, tablet, laptop, and desktop breakpoints.'},
      {question: 'Can you redesign an old company website?', answer: 'Yes. We can migrate old content, improve the structure, modernise UI, and add new service pages.'},
      {question: 'Do you provide SEO support?', answer: 'Yes. We include metadata, clean page structure, semantic headings, performance-minded builds, and service-specific content.'}
    ],
    seo: {title: 'Web Application Development UK', description: 'Modern, responsive web applications, portals, and business websites built for performance, maintainability, SEO, and growth.'}
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    category: 'digital',
    eyebrow: 'Digital Engineering',
    shortDescription: 'Cross-platform iOS and Android applications for customers, field teams, internal workflows, and operations.',
    description:
      'NZ Solutions builds mobile applications for iOS and Android that support customer engagement, field operations, internal workflows, and data access on the move. Whether you need a customer-facing app, a workforce tool, or a mobile layer for an existing platform, we deliver practical products with secure APIs, intuitive UX, and a roadmap for future scale.',
    image: '/images/services/mobile-app-development.svg',
    features: ['iOS and Android apps', 'React Native apps', 'Mobile UI/UX', 'Field-team workflows', 'Push notifications', 'Offline-first features', 'API integration', 'App maintenance'],
    deliverables: ['App UX flow', 'Cross-platform app', 'API connection', 'Testing support', 'Release guidance'],
    technologies: ['React Native', 'Expo', 'Firebase', 'REST APIs', 'GraphQL', 'Push notifications'],
    faq: [
      {question: 'Do you build for both iOS and Android?', answer: 'Yes. We can build cross-platform mobile apps for iOS and Android from one maintainable codebase.'},
      {question: 'Can the app connect to existing systems?', answer: 'Yes. We can connect mobile apps to existing APIs, databases, CRMs, and internal platforms.'},
      {question: 'Can we start with an MVP?', answer: 'Yes. We recommend starting with a clear MVP and then expanding features based on user feedback.'}
    ],
    seo: {title: 'Mobile Application Development UK', description: 'Cross-platform iOS and Android applications for customer experiences, field teams, and internal operations.'}
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    category: 'digital',
    eyebrow: 'Digital Engineering',
    shortDescription: 'Business portals, internal tools, SaaS products, reporting dashboards, CRM workflows, and automation platforms.',
    description:
      'NZ Solutions creates custom software systems that simplify operations, automate workflows, improve visibility, and connect different parts of your business. We help organisations replace spreadsheets and manual processes with maintainable systems such as portals, dashboards, workflow tools, SaaS products, CRM extensions, and operational platforms.',
    image: '/images/services/custom-software.svg',
    features: ['Business portals', 'Internal tools', 'SaaS platforms', 'Workflow automation', 'CRM workflows', 'Reporting dashboards', 'Role-based access', 'Data management'],
    deliverables: ['Requirements map', 'System architecture', 'User roles and flows', 'Frontend and backend', 'Testing and launch plan'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'REST APIs', 'Cloud platforms'],
    faq: [
      {question: 'What kind of custom software can you build?', answer: 'We can build business portals, dashboards, internal tools, workflow systems, SaaS platforms, CRM extensions, and reporting systems.'},
      {question: 'Can you automate manual business processes?', answer: 'Yes. We can analyse your workflow and build software that reduces repetitive manual work.'}
    ],
    seo: {title: 'Custom Software Development UK', description: 'Custom internal tools, customer portals, workflow systems, and SaaS platforms aligned to business operations.'}
  },
  {
    slug: 'api-integrations',
    title: 'API & System Integration',
    category: 'digital',
    eyebrow: 'Digital Engineering',
    shortDescription: 'Secure integrations between apps, CRMs, payment systems, internal tools, and third-party platforms.',
    description:
      'NZ Solutions helps businesses connect systems so teams can reduce manual work, sync data, automate workflows, and improve customer experiences. We design and implement APIs, webhooks, authentication flows, third-party integrations, payment integrations, CRM connections, and data sync workflows.',
    image: '/images/services/api-integrations.svg',
    features: ['REST API development', 'Third-party integrations', 'CRM integration', 'Payment integration', 'Webhook workflows', 'Data synchronisation', 'Authentication flows', 'Automation workflows'],
    deliverables: ['Integration plan', 'API specification', 'Secure implementation', 'Testing and error handling', 'Documentation'],
    technologies: ['REST', 'GraphQL', 'OAuth', 'Webhooks', 'Stripe', 'CRM APIs'],
    faq: [
      {question: 'Can you connect our website or app to a CRM?', answer: 'Yes. We can integrate websites and apps with CRMs, payment systems, databases, and third-party platforms.'},
      {question: 'Do you provide API documentation?', answer: 'Yes. Integration delivery includes documentation for maintainability and future development.'}
    ],
    seo: {title: 'API and Systems Integration UK', description: 'Secure integrations between apps, CRMs, internal systems, and third-party platforms to reduce manual work.'}
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    category: 'digital',
    eyebrow: 'Digital Engineering',
    shortDescription: 'Deployment, hosting, CI/CD, monitoring, maintenance, and cloud readiness for web and mobile products.',
    description:
      'NZ Solutions supports deployment and operational readiness for modern digital products. We help with hosting setup, CI/CD pipelines, environment configuration, monitoring, maintenance workflows, performance checks, backups, and release management so products remain reliable after launch.',
    image: '/images/services/cloud-devops.svg',
    features: ['Cloud deployment', 'CI/CD setup', 'Hosting configuration', 'Monitoring', 'Backups', 'Release management', 'Maintenance workflows', 'Performance checks'],
    deliverables: ['Deployment setup', 'Environment configuration', 'Monitoring checklist', 'Maintenance plan', 'Release documentation'],
    technologies: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Node.js', 'PostgreSQL'],
    faq: [
      {question: 'Can you deploy and maintain the application?', answer: 'Yes. We can support hosting, deployment, monitoring, and ongoing maintenance workflows.'},
      {question: 'Do you set up CI/CD?', answer: 'Yes. CI/CD setup can be included so updates are safer and easier to release.'}
    ],
    seo: {title: 'Cloud and DevOps Services UK', description: 'Deployment, hosting, CI/CD, monitoring, and maintenance for modern web and mobile products.'}
  },
  {
    slug: 'qa-testing-maintenance',
    title: 'QA Testing & Maintenance',
    category: 'digital',
    eyebrow: 'Digital Engineering',
    shortDescription: 'Quality assurance, bug fixing, responsive testing, performance checks, and post-launch support.',
    description:
      'NZ Solutions provides QA and maintenance support for websites, web apps, mobile apps, and internal systems. We help test responsiveness, validate forms and workflows, fix bugs, monitor performance, update dependencies, and keep products stable after launch.',
    image: '/images/services/qa-maintenance.svg',
    features: ['Responsive testing', 'Form and workflow testing', 'Bug fixing', 'Performance checks', 'Dependency updates', 'Security-minded maintenance', 'Content updates', 'Post-launch support'],
    deliverables: ['QA checklist', 'Bug report', 'Fix implementation', 'Maintenance schedule', 'Release notes'],
    technologies: ['Playwright-ready workflows', 'Lighthouse checks', 'Next.js', 'React', 'Mobile testing'],
    faq: [
      {question: 'Can you test across devices?', answer: 'Yes. Responsive testing can cover small mobiles, tablets, laptops, desktops, and common viewport sizes.'},
      {question: 'Do you provide long-term maintenance?', answer: 'Yes. Maintenance can include updates, bug fixes, performance checks, content changes, and technical support.'}
    ],
    seo: {title: 'QA Testing and Maintenance UK', description: 'Responsive testing, bug fixing, performance checks, dependency updates, and post-launch support for web and mobile products.'}
  }
];

export const telecomServices = allServices.filter((service) => service.category === 'telecom');
export const digitalServices = allServices.filter((service) => service.category === 'digital');

export function getServiceBySlug(slug: string) {
  return allServices.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory) {
  return allServices.filter((service) => service.category === category);
}
