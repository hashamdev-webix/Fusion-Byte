export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

const serviceHref = (id: string) => `/what-we-do#${id}`;
const solutionHref = (id: string) => `/solutions#${id}`;
const companyHref = (id: string) => `/who-we-are#${id}`;

export const whatWeDoMegaMenu: NavGroup[] = [
  {
    title: "AI / ML Development",
    items: [
      {
        title: "Machine Learning Models",
        href: serviceHref("ai-ml-development"),
      },
      {
        title: "AI Integration",
        href: serviceHref("ai-ml-development"),
      },
      {
        title: "Predictive Analytics",
        href: serviceHref("ai-ml-development"),
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      {
        title: "Cloud Consulting",
        href: serviceHref("cloud-consulting-services"),
      },
      {
        title: "Cloud Migration",
        href: serviceHref("cloud-consulting-services"),
      },
      {
        title: "Cloud Optimization",
        href: serviceHref("cloud-consulting-services"),
      },
    ],
  },
  {
    title: "Cyber Security Solutions",
    items: [
      {
        title: "Security Audits",
        href: serviceHref("cyber-security-solutions"),
      },
      {
        title: "Threat Detection",
        href: serviceHref("cyber-security-solutions"),
      },
      {
        title: "Risk Assessment",
        href: serviceHref("cyber-security-solutions"),
      },
    ],
  },
  {
    title: "Blockchain Solutions",
    items: [
      {
        title: "Smart Contracts",
        href: serviceHref("blockchain-solutions"),
      },
      {
        title: "Web3 Development",
        href: serviceHref("blockchain-solutions"),
      },
      {
        title: "Enterprise Blockchain",
        href: serviceHref("blockchain-solutions"),
      },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      {
        title: "SEO & Performance",
        href: serviceHref("digital-marketing"),
      },
      {
        title: "Paid Media Strategy",
        href: serviceHref("digital-marketing"),
      },
      {
        title: "Brand Growth Strategy",
        href: serviceHref("digital-marketing"),
      },
    ],
  },
  {
    title: "Modernize Software",
    items: [
      {
        title: "Legacy System Upgrade",
        href: serviceHref("modernize-software"),
      },
      {
        title: "Application Refactoring",
        href: serviceHref("modernize-software"),
      },
      {
        title: "System Modernization",
        href: serviceHref("modernize-software"),
      },
    ],
  },
  {
    title: "Political Campaigns",
    items: [
      {
        title: "Campaign Tech Setup",
        href: serviceHref("political-campaign-technology"),
      },
      {
        title: "Data Strategy",
        href: serviceHref("political-campaign-technology"),
      },
      {
        title: "Communication Automation",
        href: serviceHref("political-campaign-technology"),
      },
    ],
  },
];

export const solutionsMenu: NavItem[] = [
  { title: "Digital Transformation", href: solutionHref("digital-transformation") },
  { title: "Cloud Optimization", href: solutionHref("cloud-optimization") },
  { title: "Artificial Intelligence", href: solutionHref("artificial-intelligence") },
  {
    title: "Custom Software Development",
    href: solutionHref("custom-software-development"),
  },
  { title: "Mobile App Development", href: solutionHref("mobile-app-development") },
  { title: "QA Automation", href: solutionHref("qa-automation") },
  { title: "Cyber Security", href: solutionHref("cyber-security") },
  { title: "Blockchain Solutions", href: solutionHref("blockchain-solutions") },
];

export const solutionsMegaMenu: NavGroup[] = [
  {
    title: "Strategy & Transformation",
    items: [
      { title: "Digital Transformation", href: solutionHref("digital-transformation") },
      { title: "Cloud Optimization", href: solutionHref("cloud-optimization") },
      { title: "Artificial Intelligence", href: solutionHref("artificial-intelligence") },
    ],
  },
  {
    title: "Software & Engineering",
    items: [
      {
        title: "Custom Software Development",
        href: solutionHref("custom-software-development"),
      },
      { title: "Mobile App Development", href: solutionHref("mobile-app-development") },
      { title: "QA Automation", href: solutionHref("qa-automation") },
    ],
  },
  {
    title: "Security & Emerging Tech",
    items: [
      { title: "Cyber Security", href: solutionHref("cyber-security") },
      { title: "Blockchain Solutions", href: solutionHref("blockchain-solutions") },
    ],
  },
];

export const whoWeAreMenu: NavItem[] = [
  { title: "About", href: "/who-we-are" },
  { title: "Mission", href: companyHref("mission") },
  { title: "Values", href: companyHref("values") },
  { title: "Expertise", href: companyHref("expertise") },
];

export const whoWeAreMegaMenu: NavGroup[] = [
  {
    title: "Company Overview",
    items: [
      { title: "About FusionByte", href: "/who-we-are" },
      { title: "Company Background", href: companyHref("company-overview") },
      { title: "Our Philosophy", href: companyHref("company-overview") },
    ],
  },
  {
    title: "Our Approach",
    items: [
      {
        title: "Consulting Methodology",
        href: companyHref("methodology"),
      },
      {
        title: "Client-Centric Model",
        href: companyHref("methodology"),
      },
      { title: "Agile Delivery Model", href: companyHref("methodology") },
    ],
  },
  {
    title: "Leadership & Values",
    items: [
      { title: "Innovation Focus", href: companyHref("values") },
      {
        title: "Integrity & Transparency",
        href: companyHref("values"),
      },
      { title: "Quality Commitment", href: companyHref("values") },
    ],
  },
  {
    title: "Global Presence",
    items: [
      { title: "Alberta Operations", href: companyHref("company-overview") },
      { title: "Canada Focus", href: companyHref("company-overview") },
      { title: "Expansion Vision", href: companyHref("vision") },
    ],
  },
  {
    title: "Our Values",
    items: [
      { title: "Excellence", href: companyHref("values") },
      { title: "Collaboration", href: companyHref("values") },
      {
        title: "Technology Leadership",
        href: companyHref("values"),
      },
    ],
  },
  {
    title: "Why Choose Us",
    items: [
      { title: "Industry Expertise", href: companyHref("expertise") },
      { title: "Scalable Solutions", href: companyHref("expertise") },
      {
        title: "Long-Term Partnerships",
        href: companyHref("why-choose"),
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
