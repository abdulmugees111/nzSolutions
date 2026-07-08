import Surveying from "@/assets/images/services/surveying.jpeg";
import Civil from "@/assets/images/services/civils.jpg";
import Cable from "@/assets/images/services/cabling-coloured.jpeg";
import Splicing from "@/assets/images/services/Splicing.png";
import Data from "@/assets/images/services/data-centre.jpeg";
import Network from "@/assets/images/services/Neworking-Services.jpeg";
import Web from "@/assets/images/services/web.jpg";
import Mobile from "@/assets/images/services/mobile.jpg";

export type ServiceCategory = "telecom" | "digital";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  eyebrow: string;
  shortDescription: string;
  description: string;
  image: any;
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
];
