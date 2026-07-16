import type {StaticImageData} from 'next/image';

import Surveying from '@/assets/images/services/surveying.webp';
import Civil from '@/assets/images/services/civils.webp';
import Cable from '@/assets/images/services/cabling.webp';
import Splicing from '@/assets/images/services/splicing.webp';
import Data from '@/assets/images/services/dataCentres.webp';
import Network from '@/assets/images/services/networkServices.webp';
import Web from '@/assets/images/services/webDevelopment.webp';
import Mobile from '@/assets/images/services/mobile.webp';
import Management from '@/assets/images/services/digitalManagement.webp';
import AISolutions from '@/assets/images/services/aISolutions.webp';
import CloudServices from '@/assets/images/services/cloudServices.webp';
import ITConsulting from '@/assets/images/services/iTConsulting.webp';
import DigitalMarketing from '@/assets/images/services/digitalMarketing.webp';
import HeavyTransportation from '@/assets/images/services/heavy-transportation.webp';

export type ServiceCategory = 'telecom' | 'digital' | 'transportation';

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  eyebrow: string;
  shortDescription: string;
  description: string;
  image: StaticImageData;
  features: string[];
  deliverables: string[];
  technologies?: string[];
  faq: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "surveying",
    title: "Surveying",
    category: "telecom",
    eyebrow: "Telecom Infrastructure",
    shortDescription:
      "We do surveys of Fixed network including Spine, PON build, Town Planning. We conduct full intrusive surveys of UG and OH networks, to a standard which works cohesively with work pipelines.",
    description: `We do surveys of Fixed networks, including Spine, PON builds, Town Planning. We conduct full intrusive surveys of UG and OH networks to a standard that works cohesively with work pipelines, ensuring efficient design, producing clear UG & OH route packs for clients. Working in tandem with the operatives where blockages have been identified and if required, establish clear re-routes for efficient delivery.

Accurate Completion and submission of all documentation, including compliance with all Health, Safety, Quality Control, and Environmental policies.

Our Fibre surveyors provide accurate technical information critical to the success of the project. Our surveyors are trained to obtain and precisely record all existing site information and propose the most practical solution based on client specification and any known constraints.

Using the GIS/Orion/Geo-hub apps, the surveyors will capture the exact location of overhead poles and underground chambers and ducts. They will flag any obstacles/issues, highlighting alternative routes to optimise the final low-level design (LLD).`,
    image: Surveying,
    features: [
      "Fixed network surveys",
      "Spine and PON build surveys",
      "Town planning support",
      "UG and OH intrusive surveys",
      "Route packs and compliance documentation",
      "Alternative route identification",
    ],
    deliverables: [
      "Survey evidence pack",
      "Route and obstruction notes",
      "GIS-ready field information",
      "Compliance-ready documentation",
    ],
    technologies: ["GIS", "Orion", "Geo-hub", "FTTP", "UG/OH networks"],
    faq: [
      {
        question:
          "Do you support both underground and overhead network surveys?",
        answer:
          "Yes. The surveying service covers both underground and overhead network environments, including intrusive surveys and route validation.",
      },
      {
        question: "Can you support fibre rollout planning?",
        answer:
          "Yes. Surveying can support spine, PON, FTTP, town planning, and alternative route identification.",
      },
    ],
    seo: {
      title: "Telecom Surveying Services UK",
      description:
        "Fixed-network and fibre surveying for PON, spine, UG/OH routes, route packs, compliance, and design support.",
    },
  },
  {
    slug: "civils",
    title: "Civils",
    category: "telecom",
    eyebrow: "Telecom Infrastructure",
    shortDescription:
      "We have all the right experience, operatives, and machinery to clear the way for your network. Safety being foremost, we adhere and exceed all safety requirements, delivering high-quality solutions.",
    description: `We have all the right experience, operatives, and machinery to clear the way for your network. Safety being foremost, we adhere to and exceed all safety requirements, delivering high-quality solutions, on time, every time. We tailor methodologies as required, assuring completion on time. We work closely with our direct operatives and sub-contractors to maintain smooth working relationships.
We do all civils below activities including:`,
    image: Civil,
    features: [
      "New tracks",
      "Duct blockages",
      "Laying ducts and subducts",
      "Cabinet structures",
      "Chamber construction",
      "Desilts and gully sucks",
      "Poles",
      "Reinstatements",
      "Confined spaces",
    ],
    deliverables: [
      "Civil works planning support",
      "Field execution support",
      "Reinstatement-ready workflow",
      "Completion evidence",
    ],
    technologies: [
      "Ducts",
      "Subducts",
      "Cabinet structures",
      "Chambers",
      "Confined-space procedures",
    ],
    faq: [
      {
        question: "What civils activities do you cover?",
        answer:
          "The civils service covers new tracks, duct blockages, ducts, subducts, cabinet structures, chamber construction, desilts, gully sucks, poles, reinstatements, and confined-space activity.",
      },
      {
        question: "Do you work on telecom network rollout projects?",
        answer:
          "Yes. Civils is positioned to support telecom rollout, maintenance, and associated field delivery.",
      },
    ],
    seo: {
      title: "Telecom Civils Services UK",
      description:
        "Civil engineering support for network rollout, ducts, chambers, reinstatement, poles, and associated ground works.",
    },
  },
  {
    slug: "cabling",
    title: "Cabling",
    category: "telecom",
    eyebrow: "Telecom Infrastructure",
    shortDescription: `No matter whether it's copper or fibre, our team of specialist cabling engineers connect
infrastructure
through
conventional and direct buried duct or
FTTP to fit our clients' specifications.`,
    description:
      "No matter whether it's copper or fibre, our team of specialist cabling engineers connects infrastructure through a conventional and direct buried duct or FTTP to fit our clients' specifications. Our experienced back-office managers assist with planning and design, where necessary, to create cost-effective solutions to any issues that may arise. Our engineers are all trained to encourage safe practices and fully cable for OH and UG Cabling. They are also BT accredited, meaning that they are certificated for PIA (Passive Infrastructure Access) works, providing the opportunity for alternative hybrid network solutions, utilising both underground and overhead architecture.",
    image: Cable,
    features: [
      "Copper cabling",
      "Fibre cabling",
      "Conventional duct cabling",
      "Direct-buried duct cabling",
      "FTTP cabling",
      "Overhead and underground cabling",
      "Planning support",
      "PIA-capable delivery",
    ],
    deliverables: [
      "Cabling installation support",
      "Field-ready planning notes",
      "Quality and safety-aligned execution",
      "Handover information",
    ],
    technologies: ["Copper", "Fibre", "FTTP", "PIA", "OH/UG environments"],
    faq: [
      {
        question: "Do you provide both copper and fibre cabling?",
        answer:
          "Yes. NZ Solutions supports copper and fibre cabling across multiple telecom environments.",
      },
      {
        question: "Can you support FTTP and PIA-related work?",
        answer:
          "Yes. The cabling service includes FTTP environments and PIA-capable delivery where required.",
      },
    ],
    seo: {
      title: "Network Cabling Services UK",
      description:
        "Copper and fibre cabling across OH and UG environments, including planning support and PIA-capable delivery.",
    },
  },
  {
    slug: "splicing-oth-testing",
    title: "Splicing/OTH Testing",
    category: "telecom",
    eyebrow: "Telecom Infrastructure",
    shortDescription:
      "All our Splicers and OTH Testers are fully accredited and provide core services for all splicing activities including jointing and splicing cable chamber, spines, Splitter Nodes, CBTs and so on.",
    description: `All our Splicers and OTH Testers are fully accredited and provide core services for all splicing activities including jointing and splicing cable chamber, spines, Splitter Nodes, CBTs, and so on. They all are capable of fault findings and are fully equipped with the required tools and equipment's including Splice machines, Live Fibre Detectors, Red Light Pens, Fibre Scope, Attenuators, Power Meters, and OTDR's.

      We conduct Testing on each section of the network and ensure light test results are recorded in the ONSMI system and deal with any high peaks or any other light issues and get them resolved with Testing expertise.`,
    image: Splicing,
    features: [
      "Accredited splicers and testers",
      "Jointing and splicing cable chambers",
      "Fibre fault finding",
      "Network section testing",
      "Light-level issue support",
      "ONSIM/ONSAMI-style result recording",
      "Documentation and handover",
    ],
    deliverables: [
      "Splicing completion evidence",
      "Test result documentation",
      "Fault notes",
      "Network section handover",
    ],
    technologies: [
      "OTDR",
      "Light meters",
      "Optical source tools",
      "Fibre networks",
      "OTH testing",
    ],
    faq: [
      {
        question: "Do you provide accredited splicing and testing?",
        answer:
          "Yes. The splicing and OTH testing service is based on accredited field delivery and structured result recording.",
      },
      {
        question: "Can you help with fibre fault finding?",
        answer:
          "Yes. Fibre fault finding and light-level issue support are included in the service capability.",
      },
    ],
    seo: {
      title: "Fibre Splicing and OTH Testing UK",
      description:
        "Accredited fibre splicing, fault finding, OTH testing, documentation, and network light-level verification.",
    },
  },
  {
    slug: "data-centres-circuit-patching",
    title: "Data Centres Circuit Patching",
    category: "telecom",
    eyebrow: "Data Centre Services",
    shortDescription: `We at NZ Solutions offer Cross Connects and Meet Me Room (MMR) services, Data Centre Design Service, Data Centre Survey and Audit Services
Decommissioning,
Digitisation and
more.`,
    description: `NZ Solutions provides professional data centre circuit patching and cross-connect services for reliable, secure, and well-documented connectivity. We support data centre operators, telecom providers, and enterprise clients with accurate patching, MMR services, surveys, audits, migrations, and decommissioning work.

Our team handles fibre and copper patching, rack-to-rack connectivity, port mapping, labelling, testing, and documentation to ensure every circuit is delivered correctly and efficiently. Whether it is a new deployment, service upgrade, migration, or removal of legacy infrastructure, we follow controlled processes to reduce downtime and maintain network performance.

We also assist with data centre design support, site surveys, digitisation of records, audit reports, and handover documentation, giving clients clear visibility of their infrastructure and connectivity.`,
    image: Data,
    features: [
      "Cross-connects and MMR services",
      "Data centre design support",
      "Data centre survey and audit",
      "Decommissioning",
      "Digitisation",
      "Electrical installation",
      "Equipment migrations",
      "Rack and stack",
      "NOC support",
      "Containment systems",
      "Smart hands",
      "Structured cabling installation and testing",
    ],
    deliverables: [
      "Circuit patching support",
      "Survey and audit output",
      "Migration support notes",
      "Structured cabling handover",
    ],
    technologies: [
      "MMR",
      "Structured cabling",
      "NOC workflows",
      "Rack and stack",
      "Containment systems",
    ],
    faq: [
      {
        question: "Do you support data centre circuit patching?",
        answer:
          "Yes. NZ Solutions supports cross-connects, MMR services, patching, cabling, and associated data-centre operations.",
      },
      {
        question: "Can you help with migrations and decommissioning?",
        answer:
          "Yes. Equipment migrations and decommissioning are part of the data-centre service capability.",
      },
    ],
    seo: {
      title: "Data Centre Services UK",
      description:
        "Data-centre design support, cross-connects, structured cabling, rack installation, migrations, and smart hands.",
    },
  },
  {
    slug: "network-services",
    title: "Network Services",
    category: "telecom",
    eyebrow: "Telecom Infrastructure",
    shortDescription: `At NZ Solutions we provide Network Service tor Active equipment I&C, Circuit Patching, Decommissioning,
Electrical
Installation
Services,
Equipment Migrations and more.`,
    description: `NZ Solutions delivers end-to-end network services covering active equipment installation, commissioning, circuit patching, electrical installation support, equipment migrations, and decommissioning. Our services are designed to help businesses build, expand, maintain, and upgrade reliable network infrastructure.

We work across telecom sites, data centres, enterprise networks, and technical environments where accuracy, safety, and uptime are critical. Our team supports equipment installation, cable management, patching, connectivity testing, troubleshooting, and structured documentation to ensure every network task is completed to a high standard.

From planned network upgrades to urgent service changes, we provide practical technical support with a focus on clean installation, proper labelling, efficient delivery, and long-term maintainability.`,
    image: Network,
    features: [
      "Active equipment I&C",
      "Circuit patching",
      "Decommissioning",
      "Electrical installation services",
      "Equipment migrations",
      "Racking and stacking",
      "Fibre characterisation",
      "Logistics",
      "Monitoring",
      "Optimisation",
      "Operations and maintenance",
      "Preventative maintenance",
      "Project and programme management",
    ],
    deliverables: [
      "Network implementation support",
      "Migration and decommissioning support",
      "Maintenance workflow",
      "Programme coordination",
    ],
    technologies: [
      "Active network equipment",
      "Fibre characterisation",
      "Monitoring systems",
      "Data centre infrastructure",
    ],
    faq: [
      {
        question:
          "Do you support active equipment installation and commissioning?",
        answer:
          "Yes. Active equipment I&C is one of the core network services.",
      },
      {
        question: "Can you provide ongoing operations and maintenance?",
        answer:
          "Yes. The service covers monitoring, optimisation, operations and maintenance, and preventative maintenance.",
      },
    ],
    seo: {
      title: "Network Services UK",
      description:
        "Active equipment I&C, migrations, monitoring, fibre testing, patching, and network operations support.",
    },
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "digital",
    eyebrow: "Digital Product Development",
    shortDescription:
      "We design and develop modern, responsive, and performance-focused websites and web applications that help businesses build a strong digital presence and improve customer engagement.",
    description: `NZ Solutions provides professional web development services for businesses that need reliable, modern, and scalable digital platforms. We build responsive websites, company websites, landing pages, dashboards, portals, admin panels, and custom web applications tailored to business requirements.

Our approach focuses on clean UI, fast performance, accessibility, SEO-friendly structure, secure development, and long-term maintainability. Whether you need a new website, redesign, business portal, or a fully custom web application, we can support the complete delivery process from planning and design to development, testing, deployment, and ongoing improvements.

We work with modern technologies to create websites that are easy to manage, mobile-friendly, and optimized for real users across devices. Our team can also integrate third-party APIs, CMS platforms, forms, analytics, payment systems, authentication, and business workflows where required.`,
    image: Web,
    features: [
      "Business website development",
      "Custom web applications",
      "Landing pages and service pages",
      "Responsive UI development",
      "Admin panels and dashboards",
      "Frontend and backend development",
      "CMS-based websites",
      "API integration",
      "SEO-friendly structure",
      "Website speed and performance optimisation",
      "Website redesign and modernization",
      "Deployment and maintenance support",
    ],
    deliverables: [
      "Responsive website or web application",
      "UI/UX implementation",
      "Frontend and backend codebase",
      "CMS or admin panel setup",
      "SEO and performance-ready structure",
      "Testing and deployment support",
      "Post-launch maintenance support",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "CMS",
      "REST APIs",
      "SEO",
      "Analytics",
    ],
    faq: [
      {
        question: "Do you build both websites and custom web applications?",
        answer:
          "Yes. NZ Solutions can build business websites, landing pages, dashboards, portals, admin panels, and fully custom web applications based on client requirements.",
      },
      {
        question: "Can you redesign or improve an existing website?",
        answer:
          "Yes. We can modernize existing websites by improving design, responsiveness, performance, SEO structure, accessibility, and overall user experience.",
      },
      {
        question: "Do you provide website maintenance after launch?",
        answer:
          "Yes. We can support ongoing updates, bug fixes, feature improvements, security updates, and performance optimization after launch.",
      },
    ],
    seo: {
      title: "Web Development Services UK",
      description:
        "Professional web development services including business websites, custom web applications, dashboards, CMS websites, SEO-friendly development, and maintenance support.",
    },
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "digital",
    eyebrow: "Digital Product Development",
    shortDescription:
      "We build user-friendly, scalable, and secure mobile applications for iOS and Android, helping businesses deliver smooth digital experiences on mobile devices.",
    description: `NZ Solutions provides mobile app development services for businesses that want to launch reliable, user-friendly, and scalable mobile products. We design and develop mobile applications for iOS and Android, including business apps, customer portals, booking apps, service apps, internal workflow apps, and mobile-first digital platforms.

Our mobile development process focuses on clear user experience, smooth performance, secure data handling, responsive layouts, API integration, testing, and maintainable architecture. From idea validation and UI planning to development, deployment, and support, we help clients turn business requirements into practical mobile solutions.

We can build mobile apps using cross-platform technologies where a single codebase can support both iOS and Android, or we can work with platform-specific requirements depending on the project scope. Our team can also integrate login systems, notifications, maps, payments, dashboards, chat, media upload, analytics, and backend systems.`,
    image: Mobile,
    features: [
      "iOS and Android app development",
      "Cross-platform mobile applications",
      "Mobile UI/UX design",
      "Business and customer-facing apps",
      "Internal workflow applications",
      "API and backend integration",
      "Authentication and user management",
      "Push notifications",
      "Payment gateway integration",
      "Maps and location-based features",
      "App testing and quality assurance",
      "App deployment support",
      "Ongoing maintenance and feature updates",
    ],
    deliverables: [
      "iOS and Android mobile application",
      "Mobile UI/UX implementation",
      "API-connected app workflow",
      "Authentication and user flows",
      "Testing and bug-fix support",
      "App store deployment support",
      "Maintenance and update support",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "iOS",
      "Android",
      "Firebase",
      "REST APIs",
      "Push Notifications",
      "Payment Integrations",
      "Analytics",
    ],
    faq: [
      {
        question: "Do you build apps for both iOS and Android?",
        answer:
          "Yes. NZ Solutions can develop mobile applications for both iOS and Android, including cross-platform apps where one codebase can support both platforms.",
      },
      {
        question:
          "Can you connect the mobile app with an existing backend or website?",
        answer:
          "Yes. We can integrate mobile apps with existing APIs, backend systems, admin panels, databases, authentication systems, and third-party services.",
      },
      {
        question: "Do you help with app deployment?",
        answer:
          "Yes. We can support testing, build preparation, and deployment guidance for app stores based on the project requirements.",
      },
    ],
    seo: {
      title: "Mobile App Development Services UK",
      description:
        "iOS and Android mobile app development services including cross-platform apps, UI/UX design, API integration, testing, deployment, and maintenance support.",
    },
  },
//   {
//     slug: "digital-workplace-project-management",
//     title: "Digital Workplace & Project Management",
//     category: "digital",
//     eyebrow: "Business Technology & Management",
//     shortDescription:
//       "We help businesses manage projects, teams, workflows, documentation, and digital workplace platforms using solutions such as Jira, Microsoft 365, Teams, SharePoint, and other modern management tools.",

//     description: `NZ Solutions provides digital workplace, project management, and business process management services to help organisations improve collaboration, visibility, productivity, and operational control.

// We support businesses with the setup, configuration, administration, and optimisation of project management and collaboration platforms such as Jira, Microsoft 365, Microsoft Teams, SharePoint, Microsoft Planner, Microsoft Project, and Confluence.

// Our team can help establish structured project workflows, task management processes, approval systems, reporting dashboards, document management environments, team collaboration spaces, and service management processes tailored to your organisation.

// Whether you need to introduce a new project management platform, improve an existing workspace, migrate business documents, automate repetitive processes, or establish consistent project governance, we can provide practical support from initial planning through implementation, user onboarding, and ongoing administration.

// We also support project and programme delivery by helping teams define project plans, milestones, responsibilities, risks, dependencies, reporting procedures, and communication processes. Our goal is to provide businesses with clear systems that make work easier to manage, monitor, and deliver.`,

//     image: Management,

//     features: [
//       "Jira setup, configuration, and administration",
//       "Microsoft 365 setup and management",
//       "Microsoft Teams workspace configuration",
//       "SharePoint document management",
//       "Microsoft Planner and task management",
//       "Microsoft Project planning support",
//       "Confluence knowledge-base setup",
//       "Project and programme management",
//       "Agile and Scrum workflow configuration",
//       "Service desk and ticket management",
//       "Business process mapping",
//       "Workflow and approval automation",
//       "Project dashboards and reporting",
//       "Document and knowledge management",
//       "Risk, issue, and dependency tracking",
//       "User onboarding and platform training",
//       "Ongoing administration and support",
//     ],

//     deliverables: [
//       "Configured project management platform",
//       "Microsoft 365 digital workplace setup",
//       "Project plans and delivery roadmaps",
//       "Task and workflow management processes",
//       "Project dashboards and status reports",
//       "SharePoint document libraries",
//       "Knowledge-base and documentation structure",
//       "Risk and issue management framework",
//       "Workflow automation and approval processes",
//       "User guidance and onboarding documentation",
//       "Ongoing platform administration support",
//     ],

//     technologies: [
//       "Jira",
//       "Jira Service Management",
//       "Microsoft 365",
//       "Microsoft Teams",
//       "SharePoint",
//       "Microsoft Planner",
//       "Microsoft Project",
//       "Power Automate",
//       "Confluence",
//       "Agile",
//       "Scrum",
//       "Kanban",
//     ],

//     faq: [
//       {
//         question: "Can you set up and manage Jira for our organisation?",
//         answer:
//           "Yes. We can configure Jira projects, issue types, workflows, permissions, boards, dashboards, automation rules, reports, and user access based on your organisation's requirements.",
//       },
//       {
//         question: "Do you provide Microsoft 365 and SharePoint support?",
//         answer:
//           "Yes. We can help configure Microsoft 365, Teams, SharePoint sites, document libraries, permissions, collaboration spaces, and business workflows.",
//       },
//       {
//         question:
//           "Can you manage complete projects as well as the management tools?",
//         answer:
//           "Yes. In addition to platform setup and administration, we can support project planning, scheduling, task coordination, risk management, progress reporting, stakeholder communication, and delivery governance.",
//       },
//       {
//         question: "Can you improve an existing project management process?",
//         answer:
//           "Yes. We can review your current tools and processes, identify gaps, simplify workflows, improve reporting, introduce automation, and establish more consistent project management practices.",
//       },
//       {
//         question: "Do you provide training and ongoing support?",
//         answer:
//           "Yes. We can provide user onboarding, platform guidance, process documentation, administration support, workflow improvements, and ongoing maintenance.",
//       },
//     ],

//     seo: {
//       title: "Digital Workplace and Project Management Services UK",
//       description:
//         "Professional Jira, Microsoft 365, Teams, SharePoint, workflow automation, digital workplace, and project management services for businesses across the UK.",
//     },
//   },
    {
    slug: "ai-solutions",
    title: "AI Solutions",
    category: "digital",
    eyebrow: "Artificial Intelligence & Automation",
    shortDescription:
      "We deliver practical AI solutions that automate business processes, improve decision-making, and create intelligent digital experiences tailored to your organisation.",
    description: `NZ Solutions provides practical artificial intelligence solutions that help businesses automate repetitive work, improve customer experiences, analyse information, and make better operational decisions.

We design and develop AI-powered applications, intelligent assistants, chatbots, recommendation systems, document-processing workflows, predictive solutions, and custom automation based on your business requirements. Our approach focuses on solving clear business problems rather than introducing technology without a measurable purpose.

We can integrate AI capabilities into existing websites, mobile applications, internal systems, customer portals, and business workflows. Our team also supports data preparation, model integration, API development, testing, deployment, monitoring, and continuous improvement to ensure the solution remains reliable, secure, and useful.`,
    image: AISolutions,
    features: [
      "AI strategy and solution planning",
      "Custom AI-powered applications",
      "Chatbots and virtual assistants",
      "Workflow and process automation",
      "Document and data processing",
      "Recommendation systems",
      "Predictive analytics",
      "Natural language processing",
      "AI API integration",
      "Existing system integration",
      "AI testing and optimisation",
      "Ongoing monitoring and support",
    ],
    deliverables: [
      "AI solution architecture",
      "Configured or custom AI application",
      "Automated business workflow",
      "API and system integrations",
      "Testing and validation documentation",
      "Deployment and monitoring support",
      "User guidance and technical documentation",
    ],
    technologies: [
      "OpenAI",
      "Azure AI",
      "Python",
      "Machine Learning",
      "Natural Language Processing",
      "Vector Databases",
      "REST APIs",
      "Automation",
      "Data Analytics",
    ],
    faq: [
      {
        question: "Can you add AI features to our existing website or app?",
        answer:
          "Yes. We can integrate AI assistants, search, recommendations, automation, document processing, and other intelligent features into existing websites, mobile apps, and business systems.",
      },
      {
        question: "Do you build custom AI solutions for specific business needs?",
        answer:
          "Yes. We can design a solution around your workflows, data, users, security requirements, and operational goals instead of relying only on a generic off-the-shelf tool.",
      },
      {
        question: "Can you automate repetitive business processes?",
        answer:
          "Yes. We can identify suitable processes and build AI-assisted or rule-based automation to reduce manual work, improve consistency, and speed up delivery.",
      },
    ],
    seo: {
      title: "AI Solutions and Automation Services UK",
      description:
        "Custom AI solutions, intelligent automation, chatbots, predictive analytics, document processing, API integration, and ongoing AI support for businesses.",
    },
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    category: "digital",
    eyebrow: "Cloud Infrastructure & Operations",
    shortDescription:
      "We help businesses design, migrate, secure, and manage reliable cloud environments that support scalable applications, data, collaboration, and day-to-day operations.",
    description: `NZ Solutions provides cloud services that help businesses modernise infrastructure, improve reliability, support remote operations, and scale digital products more efficiently.

We assist with cloud architecture, application deployment, server and database setup, cloud migrations, backup and disaster recovery, monitoring, security configuration, performance optimisation, and ongoing infrastructure management. Our solutions can support websites, mobile applications, internal systems, APIs, business platforms, and data workloads.

Whether you are moving from on-premise infrastructure, improving an existing cloud environment, or preparing a new product for launch, we provide structured planning and implementation support. Our focus is on security, availability, cost control, maintainability, and clear technical documentation.`,
    image: CloudServices,
    features: [
      "Cloud strategy and architecture",
      "Cloud migration planning",
      "Application and API deployment",
      "Server and database configuration",
      "Backup and disaster recovery",
      "Cloud security configuration",
      "Infrastructure monitoring",
      "Performance optimisation",
      "Cost optimisation",
      "DevOps and CI/CD support",
      "Containerised deployments",
      "Ongoing cloud management",
    ],
    deliverables: [
      "Cloud architecture and migration plan",
      "Configured cloud infrastructure",
      "Application deployment environment",
      "Backup and recovery configuration",
      "Monitoring and alerting setup",
      "Security and access configuration",
      "Technical documentation and handover",
    ],
    technologies: [
      "Microsoft Azure",
      "Amazon Web Services",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Cloud Databases",
      "Linux",
      "Monitoring",
      "Infrastructure as Code",
    ],
    faq: [
      {
        question: "Can you migrate our existing systems to the cloud?",
        answer:
          "Yes. We can assess your existing applications and infrastructure, create a migration plan, move workloads, validate performance, and support the transition with minimal disruption.",
      },
      {
        question: "Do you provide ongoing cloud monitoring and support?",
        answer:
          "Yes. We can support monitoring, alerting, backups, security updates, performance improvements, cost reviews, and general cloud administration.",
      },
      {
        question: "Can you deploy our web or mobile application backend?",
        answer:
          "Yes. We can configure and deploy websites, APIs, databases, authentication services, storage, and supporting infrastructure for web and mobile products.",
      },
    ],
    seo: {
      title: "Cloud Services and Cloud Migration UK",
      description:
        "Cloud architecture, migration, deployment, security, backup, monitoring, DevOps, optimisation, and managed cloud support for businesses.",
    },
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    category: "digital",
    eyebrow: "Technology Strategy & Advisory",
    shortDescription:
      "We provide practical IT consulting to help organisations choose the right technology, improve existing systems, reduce risk, and plan successful digital initiatives.",
    description: `NZ Solutions provides IT consulting services to help businesses make informed technology decisions, improve existing systems, and deliver digital change with greater clarity and control.

We assess business requirements, current platforms, workflows, infrastructure, security considerations, technical risks, and future growth plans. Based on this assessment, we provide practical recommendations, solution options, implementation roadmaps, and delivery support aligned with your priorities and budget.

Our consultants can support digital transformation, software selection, system architecture, cloud adoption, process improvement, vendor evaluation, technical audits, project planning, and technology governance. We work collaboratively with business and technical stakeholders to turn complex requirements into clear, actionable plans.`,
    image: ITConsulting,
    features: [
      "IT strategy and roadmap development",
      "Digital transformation consulting",
      "Technology and system assessment",
      "Solution architecture",
      "Software and platform selection",
      "Technical audits",
      "Cloud adoption planning",
      "Business process improvement",
      "Vendor and solution evaluation",
      "Project planning and governance",
      "Risk and dependency assessment",
      "Implementation advisory and support",
    ],
    deliverables: [
      "Current-state technology assessment",
      "IT strategy and transformation roadmap",
      "Solution architecture recommendations",
      "Technology selection report",
      "Risk and dependency register",
      "Implementation plan",
      "Governance and technical documentation",
    ],
    technologies: [
      "Enterprise Architecture",
      "Cloud Platforms",
      "Microsoft 365",
      "Jira",
      "Agile",
      "DevOps",
      "Cybersecurity",
      "Business Analysis",
      "Process Automation",
      "Data and Analytics",
    ],
    faq: [
      {
        question: "Can you review our current IT systems and processes?",
        answer:
          "Yes. We can assess your applications, infrastructure, workflows, integrations, risks, and operational challenges, then provide prioritised recommendations.",
      },
      {
        question: "Can you help us choose the right software or platform?",
        answer:
          "Yes. We can document requirements, compare suitable options, assess technical and operational fit, and support selection and implementation planning.",
      },
      {
        question: "Do you support digital transformation projects?",
        answer:
          "Yes. We can help define the strategy, roadmap, architecture, governance, delivery plan, and technology decisions required for a successful transformation programme.",
      },
    ],
    seo: {
      title: "IT Consulting and Technology Advisory UK",
      description:
        "IT strategy, digital transformation, solution architecture, technical audits, software selection, cloud planning, and technology advisory services.",
    },
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "digital",
    eyebrow: "Digital Growth & Marketing",
    shortDescription:
      "We help businesses increase online visibility, reach the right audience, and generate measurable growth through coordinated digital marketing campaigns and content.",
    description: `NZ Solutions provides digital marketing services that help businesses improve visibility, attract relevant audiences, and convert online interest into measurable enquiries, leads, and sales.

We support search engine optimisation, paid advertising, social media marketing, content planning, email campaigns, website analytics, conversion optimisation, and campaign reporting. Each strategy is shaped around your business goals, target audience, market position, and available budget.

Our approach connects marketing activity with your website, landing pages, content, tracking, and customer journey. We focus on clear objectives, consistent messaging, accurate measurement, and continuous improvement so that marketing decisions are based on useful performance data.`,
    image: DigitalMarketing,
    features: [
      "Digital marketing strategy",
      "Search engine optimisation",
      "Pay-per-click advertising",
      "Social media marketing",
      "Content planning and creation",
      "Email marketing campaigns",
      "Landing page optimisation",
      "Conversion rate optimisation",
      "Analytics and tracking setup",
      "Audience and keyword research",
      "Campaign management",
      "Performance reporting and optimisation",
    ],
    deliverables: [
      "Digital marketing strategy",
      "Campaign and content plan",
      "SEO recommendations and implementation",
      "Paid advertising campaigns",
      "Social media campaign setup",
      "Analytics and conversion tracking",
      "Performance reports and improvement plan",
    ],
    technologies: [
      "Google Ads",
      "Google Analytics",
      "Google Search Console",
      "Meta Ads",
      "LinkedIn Ads",
      "SEO",
      "Email Marketing",
      "Content Marketing",
      "Conversion Tracking",
      "Marketing Automation",
    ],
    faq: [
      {
        question: "Do you provide SEO and paid advertising services?",
        answer:
          "Yes. We can support technical and on-page SEO, keyword research, Google Ads, social advertising, tracking, reporting, and ongoing campaign optimisation.",
      },
      {
        question: "Can you manage social media marketing?",
        answer:
          "Yes. We can help with channel planning, content calendars, campaign setup, audience targeting, paid promotion, and performance reporting.",
      },
      {
        question: "How do you measure marketing performance?",
        answer:
          "We configure suitable analytics and conversion tracking, then report against agreed goals such as traffic, enquiries, leads, sales, cost per result, and conversion rate.",
      },
    ],
    seo: {
      title: "Digital Marketing Services UK",
      description:
        "SEO, paid advertising, social media marketing, content, email campaigns, analytics, conversion optimisation, and digital growth services.",
    },
  },
  {
  slug: 'heavy-transportation',
  title: 'Heavy Transportation',
  category: 'transportation',
  eyebrow: 'Transport & Logistics',
  shortDescription:
    'We provide reliable heavy transportation services using lorries and heavy trucks for the safe and efficient movement of equipment, machinery, materials, and oversized loads.',
  description: `NZ Solutions provides dependable heavy transportation and logistics services using lorries and heavy trucks. We support businesses, construction projects, telecom operations, infrastructure developments, and industrial sites with the safe and efficient movement of equipment, machinery, materials, and heavy loads.

Our transport services can support scheduled deliveries, construction materials, telecom equipment, industrial machinery, site-to-site transfers, and other project logistics requirements. We focus on careful planning, safe loading, secure transportation, timely delivery, and clear communication throughout every journey.

Whether clients require a one-off delivery or ongoing transportation support, our team can provide flexible solutions based on load size, destination, access requirements, and project schedules.`,
  image: HeavyTransportation,
  features: [
    'Heavy truck transportation',
    'Lorry transportation services',
    'Machinery and equipment transport',
    'Construction material delivery',
    'Telecom equipment transportation',
    'Industrial load transportation',
    'Site-to-site transfers',
    'Scheduled and one-off deliveries',
    'Project logistics support',
    'Safe loading and unloading coordination',
  ],
  deliverables: [
    'Transportation planning',
    'Suitable vehicle allocation',
    'Safe load movement',
    'Delivery coordination',
    'Site-to-site transportation',
    'Delivery confirmation and documentation',
  ],
  technologies: [
    'Heavy Trucks',
    'Lorries',
    'Load-Securing Equipment',
    'Transport Planning',
    'Project Logistics',
  ],
  faq: [
    {
      question: 'What types of loads can you transport?',
      answer:
        'We can support the transportation of machinery, equipment, construction materials, telecom infrastructure, industrial items, and other heavy loads based on vehicle capacity and project requirements.',
    },
    {
      question: 'Do you provide both one-off and ongoing transportation?',
      answer:
        'Yes. We can support individual deliveries as well as regular transportation requirements for ongoing projects.',
    },
    {
      question: 'Can you transport equipment between project sites?',
      answer:
        'Yes. We provide site-to-site transportation for equipment, machinery, materials, and project-related assets.',
    },
  ],
  seo: {
    title: 'Heavy Transportation Services UK',
    description:
      'Reliable heavy transportation using lorries and heavy trucks for machinery, equipment, materials, industrial loads, and project logistics.',
  },
},
];

// src/constants/service-categories.ts

export const serviceCategories: {
  key: ServiceCategory;
  label: string;
  description: string;
  href: string;
}[] = [
  {
    key: 'telecom',
    label: 'Telecom Services',
    description:
      'Surveying, cabling, civils, networks and data-centre services.',
    href: '/services?category=telecom',
  },
  {
    key: 'digital',
    label: 'Digital Services',
    description:
      'Web, mobile, workplace and project-management solutions.',
    href: '/services?category=digital',
  },
  {
    key: 'transportation',
    label: 'Transport & Logistics',
    description:
      'Heavy transportation and logistics services.',
    href: '/services?category=transportation',
  },
];

// export type ServiceCategory = (typeof serviceCategories)[number]['key'];
