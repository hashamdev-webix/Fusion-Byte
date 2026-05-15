export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const whatWeDoMegaMenu: NavGroup[] = [
  {
    title: "Digital Transformation",
    items: [
      {
        title: "Strategy Consulting",
        href: "/what-we-do/digital-transformation/strategy-consulting",
      },
      {
        title: "Process Optimization",
        href: "/what-we-do/digital-transformation/process-optimization",
      },
      {
        title: "Technology Roadmapping",
        href: "/what-we-do/digital-transformation/technology-roadmapping",
      },
    ],
  },
  {
    title: "Custom Software Development",
    items: [
      {
        title: "Enterprise Software",
        href: "/what-we-do/custom-software-development/enterprise-software",
      },
      {
        title: "Web Applications",
        href: "/what-we-do/custom-software-development/web-applications",
      },
      {
        title: "System Architecture",
        href: "/what-we-do/custom-software-development/system-architecture",
      },
    ],
  },
  {
    title: "AI / ML Development",
    items: [
      {
        title: "Machine Learning Models",
        href: "/what-we-do/ai-ml-development/machine-learning-models",
      },
      {
        title: "AI Integration",
        href: "/what-we-do/ai-ml-development/ai-integration",
      },
      {
        title: "Predictive Analytics",
        href: "/what-we-do/ai-ml-development/predictive-analytics",
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      {
        title: "Cloud Consulting",
        href: "/what-we-do/cloud-infrastructure/cloud-consulting",
      },
      {
        title: "Cloud Migration",
        href: "/what-we-do/cloud-infrastructure/cloud-migration",
      },
      {
        title: "Cloud Optimization",
        href: "/what-we-do/cloud-infrastructure/cloud-optimization",
      },
    ],
  },
  {
    title: "Cyber Security Solutions",
    items: [
      {
        title: "Security Audits",
        href: "/what-we-do/cyber-security-solutions/security-audits",
      },
      {
        title: "Threat Detection",
        href: "/what-we-do/cyber-security-solutions/threat-detection",
      },
      {
        title: "Risk Assessment",
        href: "/what-we-do/cyber-security-solutions/risk-assessment",
      },
    ],
  },
  {
    title: "Blockchain Solutions",
    items: [
      {
        title: "Smart Contracts",
        href: "/what-we-do/blockchain-solutions/smart-contracts",
      },
      {
        title: "Web3 Development",
        href: "/what-we-do/blockchain-solutions/web3-development",
      },
      {
        title: "Enterprise Blockchain",
        href: "/what-we-do/blockchain-solutions/enterprise-blockchain",
      },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      {
        title: "SEO & Performance",
        href: "/what-we-do/digital-marketing/seo-performance",
      },
      {
        title: "Paid Media Strategy",
        href: "/what-we-do/digital-marketing/paid-media-strategy",
      },
      {
        title: "Brand Growth Strategy",
        href: "/what-we-do/digital-marketing/brand-growth-strategy",
      },
    ],
  },
  {
    title: "Modernize Software",
    items: [
      {
        title: "Legacy System Upgrade",
        href: "/what-we-do/modernize-software/legacy-system-upgrade",
      },
      {
        title: "Application Refactoring",
        href: "/what-we-do/modernize-software/application-refactoring",
      },
      {
        title: "System Modernization",
        href: "/what-we-do/modernize-software/system-modernization",
      },
    ],
  },
  {
    title: "Political Campaigns",
    items: [
      {
        title: "Campaign Tech Setup",
        href: "/what-we-do/political-campaigns/campaign-tech-setup",
      },
      {
        title: "Data Strategy",
        href: "/what-we-do/political-campaigns/data-strategy",
      },
      {
        title: "Communication Automation",
        href: "/what-we-do/political-campaigns/communication-automation",
      },
    ],
  },
];

export const solutionsMenu: NavItem[] = [
  { title: "Digital Transformation", href: "/solutions/digital-transformation" },
  { title: "Cloud Optimization", href: "/solutions/cloud-optimization" },
  { title: "Artificial Intelligence", href: "/solutions/artificial-intelligence" },
  {
    title: "Custom Software Development",
    href: "/solutions/custom-software-development",
  },
  { title: "Mobile App Development", href: "/solutions/mobile-app-development" },
  { title: "QA Automation", href: "/solutions/qa-automation" },
  { title: "Cyber Security", href: "/solutions/cyber-security" },
  { title: "Blockchain Solutions", href: "/solutions/blockchain-solutions" },
];

export const solutionsMegaMenu: NavGroup[] = [
  {
    title: "Strategy & Transformation",
    items: [
      { title: "Digital Transformation", href: "/solutions/digital-transformation" },
      { title: "Cloud Optimization", href: "/solutions/cloud-optimization" },
      { title: "Artificial Intelligence", href: "/solutions/artificial-intelligence" },
    ],
  },
  {
    title: "Software & Engineering",
    items: [
      {
        title: "Custom Software Development",
        href: "/solutions/custom-software-development",
      },
      { title: "Mobile App Development", href: "/solutions/mobile-app-development" },
      { title: "QA Automation", href: "/solutions/qa-automation" },
    ],
  },
  {
    title: "Security & Emerging Tech",
    items: [
      { title: "Cyber Security", href: "/solutions/cyber-security" },
      { title: "Blockchain Solutions", href: "/solutions/blockchain-solutions" },
    ],
  },
];

export const whoWeAreMenu: NavItem[] = [
  { title: "About", href: "/who-we-are" },
  { title: "Mission", href: "/who-we-are/mission" },
  { title: "Values", href: "/who-we-are/values" },
  { title: "Expertise", href: "/who-we-are/expertise" },
];

export const whoWeAreMegaMenu: NavGroup[] = [
  {
    title: "Company Overview",
    items: [
      { title: "About FusionByte", href: "/who-we-are" },
      { title: "Company Background", href: "/who-we-are/company-background" },
      { title: "Our Philosophy", href: "/who-we-are/our-philosophy" },
    ],
  },
  {
    title: "Our Approach",
    items: [
      {
        title: "Consulting Methodology",
        href: "/who-we-are/consulting-methodology",
      },
      {
        title: "Client-Centric Model",
        href: "/who-we-are/client-centric-model",
      },
      { title: "Agile Delivery Model", href: "/who-we-are/agile-delivery-model" },
    ],
  },
  {
    title: "Leadership & Values",
    items: [
      { title: "Innovation Focus", href: "/who-we-are/innovation-focus" },
      {
        title: "Integrity & Transparency",
        href: "/who-we-are/integrity-transparency",
      },
      { title: "Quality Commitment", href: "/who-we-are/quality-commitment" },
    ],
  },
  {
    title: "Global Presence",
    items: [
      { title: "Alberta Operations", href: "/who-we-are/alberta-operations" },
      { title: "Canada Focus", href: "/who-we-are/canada-focus" },
      { title: "Expansion Vision", href: "/who-we-are/expansion-vision" },
    ],
  },
  {
    title: "Our Values",
    items: [
      { title: "Excellence", href: "/who-we-are/excellence" },
      { title: "Collaboration", href: "/who-we-are/collaboration" },
      {
        title: "Technology Leadership",
        href: "/who-we-are/technology-leadership",
      },
    ],
  },
  {
    title: "Why Choose Us",
    items: [
      { title: "Industry Expertise", href: "/who-we-are/industry-expertise" },
      { title: "Scalable Solutions", href: "/who-we-are/scalable-solutions" },
      {
        title: "Long-Term Partnerships",
        href: "/who-we-are/long-term-partnerships",
      },
    ],
  },
];

export const careersMenu: NavItem[] = [
  { title: "Careers", href: "/careers" },
  { title: "AI / ML Developer", href: "/careers/ai-ml-developer" },
  { title: "Cloud Solutions Engineer", href: "/careers/cloud-solutions-engineer" },
  { title: "Cyber Security Analyst", href: "/careers/cyber-security-analyst" },
];
