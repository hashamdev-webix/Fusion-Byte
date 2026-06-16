export type Cta = { label: string; href: string };

export type ContentSection = {
  id: string;
  title: string;
  description: string;
  cta?: Cta;
  imageSrc?: string;
};

export const whatWeDoHero = {
  eyebrow: "SERVICES",
  title: "Enterprise Technology Services for Digital Transformation",
  description:
    "Fusion Byte delivers AI, cloud, cybersecurity, software modernization, digital marketing, and political technology solutions designed to help organizations innovate, scale, and operate efficiently across Canada.",
  primaryCta: { label: "Request a Service", href: "/get-a-quote" },
  secondaryCta: { label: "Explore Solutions", href: "/solutions" },
} as const;

export const whatWeDoSections: ContentSection[] = [
  {
    id: "ai-ml-development",
    title: "AI / ML Development",
    description:
      "Fusion Byte delivers advanced Artificial Intelligence and Machine Learning development services designed to help organizations transform data into actionable intelligence. Our AI solutions include predictive modeling, natural language processing, computer vision applications, recommendation systems, automation workflows, and intelligent data processing architectures. We build custom AI models tailored to business objectives, operational requirements, and industry use cases. Our development process focuses on data preparation, model training, validation, deployment, and continuous optimization. We design scalable AI frameworks that integrate seamlessly with existing enterprise systems and cloud environments. Security, performance, and structured implementation are central to every AI project we deliver. Whether businesses require automation enhancement, data-driven decision support, or intelligent system integration, FusionByte provides production-ready AI solutions aligned with digital transformation strategies. Our goal is to enable smarter operations, improved efficiency, and long-term technological competitiveness.",
    cta: { label: "Request AI Services", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "modernize-software",
    title: "Modernize Software",
    description:
      "Fusion Byte specializes in modernizing legacy software systems to improve performance, scalability, security, and long-term maintainability. Many organizations operate on outdated platforms that limit efficiency and innovation. Our software modernization services include system refactoring, architecture redesign, performance optimization, API integration, UI/UX improvement, and cloud migration strategies. We analyze existing infrastructure, identify technical debt, and develop structured transition plans that minimize disruption. Our approach ensures business continuity while upgrading systems to modern frameworks and technologies. We focus on improving application responsiveness, system interoperability, and operational reliability. Whether migrating to cloud-native environments or upgrading enterprise platforms, Fusion Byte delivers strategic modernization solutions that align with digital transformation goals. Our objective is to extend system lifespan, enhance user experience, and support future scalability.",
    cta: { label: "Request Modernization", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "cloud-consulting-services",
    title: "Cloud Consulting Services",
    description:
      "Fusion Byte provides comprehensive cloud consulting services that help organizations design, implement, and optimize secure cloud environments. Our expertise includes cloud migration planning, infrastructure architecture, workload optimization, hybrid cloud deployment, and performance enhancement strategies. We assist businesses in transitioning from on-premise systems to scalable cloud platforms while maintaining security, compliance, and operational stability. Our cloud solutions are structured to improve resource efficiency, reduce infrastructure costs, and increase system availability. We evaluate existing architecture, develop migration roadmaps, and implement optimization frameworks tailored to enterprise requirements. Security configuration, data management strategies, and scalability planning are integral parts of our consulting process. Whether organizations require cloud transformation or optimization of existing environments, Fusion Byte delivers reliable and scalable cloud strategies designed for long-term digital growth.",
    cta: { label: "Request Cloud Consulting", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "cyber-security-solutions",
    title: "Cyber Security Solutions",
    description:
      "Fusion Byte provides comprehensive cybersecurity solutions designed to protect organizations from evolving digital threats, data breaches, and unauthorized access. Our security services include vulnerability assessments, risk analysis, security architecture design, threat detection strategies, and infrastructure hardening. We implement layered security frameworks that strengthen networks, applications, cloud environments, and enterprise systems. Our approach focuses on proactive monitoring, identity and access management, compliance alignment, and secure system design. We help businesses identify weaknesses, reduce cyber risks, and establish structured defense mechanisms. Whether organizations require security audits, incident response planning, or ongoing protection strategies, our team delivers scalable and enterprise-grade cybersecurity solutions. Our goal is to safeguard digital assets while ensuring operational continuity and regulatory readiness.",
    cta: { label: "Request Security Assessment", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Fusion Byte delivers strategic digital marketing services focused on improving brand visibility, customer engagement, and online growth. Our services include search engine optimization, performance marketing, content strategy, conversion optimization, and data-driven campaign planning. We design structured marketing frameworks that enhance website traffic, generate qualified leads, and strengthen digital presence. Our team applies analytics-based strategies to improve search rankings, optimize user experience, and increase audience reach. We integrate marketing technology tools to measure performance, refine campaigns, and deliver consistent growth outcomes. Every strategy is aligned with business objectives, target audiences, and competitive positioning. Our digital marketing solutions are designed to support long-term brand development and measurable return on investment.",
    cta: { label: "Request Marketing Strategy", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "political-campaign-technology",
    title: "Political Campaign Technology",
    description:
      "Fusion Byte provides secure and structured technology solutions for political campaigns requiring digital organization, communication systems, and data management support. Our services include campaign infrastructure setup, communication workflow design, digital engagement tools, analytics tracking, and secure data handling strategies. We help campaigns implement technology systems that support structured outreach, audience segmentation, performance monitoring, and operational coordination. Our approach emphasizes security, scalability, and responsible data management. We design systems that enhance communication efficiency while maintaining transparency and control. Whether supporting digital strategy planning or campaign technology optimization, Fusion Byte delivers professional-grade infrastructure aligned with organizational requirements. Our solutions are built to support structured operations and data-driven decision-making.",
    cta: { label: "Request Campaign Consultation", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "blockchain-solutions",
    title: "Blockchain Solutions",
    description:
      "Fusion Byte offers blockchain development and consulting services designed to support secure, decentralized, and transparent digital systems. Our blockchain solutions include smart contract development, distributed application architecture, enterprise blockchain integration, and system design consulting. We help organizations explore blockchain applications for data verification, secure transactions, process automation, and digital record management. Our team focuses on scalable architecture, security optimization, and seamless system integration. Whether businesses require private blockchain implementation or decentralized application support, we deliver structured and production-ready solutions. Our blockchain services are designed to enhance trust, improve operational transparency, and support next-generation digital transformation strategies. We ensure that blockchain implementations align with enterprise goals and technical standards.",
    cta: { label: "Request Blockchain Services", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=1400&q=80",
  },
];

export const whatWeDoWhyChoose = {
  title: "Why Organizations Choose Us",
  points: [
    "Enterprise-Level Expertise",
    "Scalable Technology Architecture",
    "Security-First Development",
    "Long-Term Strategic Partnership",
  ],
} as const;

export const whatWeDoFinalCta = {
  title: "Ready to Start Your Project?",
  description:
    "Contact our team today to request a customized proposal or discuss your technology requirements.",
  primary: { label: "Contact Us", href: "/contact-us" },
  secondary: { label: "Get a Quote", href: "/get-a-quote" },
} as const;

export const solutionsHero = {
  eyebrow: "SOLUTIONS",
  title: "Strategic Technology Solutions for Modern Enterprises",
  description:
    "FusionByte delivers outcome-driven solutions in digital transformation, custom software development, mobile applications, QA automation, cloud optimization, cybersecurity, artificial intelligence, and blockchain.",
  backgroundImageSrc:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
  backgroundImageAlt: "Digital transformation and enterprise architecture",
  primaryCta: { label: "Explore Our Services", href: "/what-we-do" },
  secondaryCta: { label: "Get a Quote", href: "/get-a-quote" },
} as const;

export const solutionsBySlug: Record<string, ContentSection> = {
  "digital-transformation": {
    id: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Fusion Byte provides comprehensive digital transformation solutions designed to help organizations modernize operations, improve efficiency, and adopt advanced technologies. Our approach integrates AI, cloud computing, automation, cybersecurity, and software modernization into a unified strategic roadmap. We evaluate existing systems, identify improvement opportunities, and design structured transformation plans aligned with business objectives. Digital transformation is not only about technology upgrades but also process optimization, system integration, and performance enhancement. We help enterprises reduce manual workflows, improve data visibility, strengthen security frameworks, and increase scalability. Our solutions are tailored for long-term growth, operational resilience, and competitive advantage. Fusion Byte ensures that transformation initiatives are practical, measurable, and strategically implemented.",
    cta: { label: "Request Digital Strategy", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  },
  "custom-software-development": {
    id: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Fusion Byte designs and develops custom software solutions tailored to unique business requirements. We build scalable applications, enterprise platforms, internal management systems, and customer-facing digital products. Our development process includes requirement analysis, system architecture planning, secure coding practices, testing, deployment, and long-term maintenance strategies. Custom software enables organizations to eliminate limitations of off-the-shelf tools and create systems that align precisely with operational workflows. We focus on performance optimization, security integration, and seamless scalability. Whether building from scratch or enhancing existing platforms, our solutions are engineered for reliability and long-term sustainability.",
    cta: { label: "Request Development Plan", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
  },
  "mobile-app-development": {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Fusion Byte delivers cross-platform and native mobile application development services for businesses seeking to expand digital engagement. We design user-friendly applications for iOS and Android with secure backend integration and scalable architecture. Our mobile solutions support customer interaction, internal operations, data management, and service delivery. From concept design and UI/UX development to deployment and optimization, we provide end-to-end mobile strategy. Applications are built with performance efficiency, security standards, and future expandability in mind. Our goal is to create intuitive, reliable, and business-aligned mobile solutions.",
    cta: { label: "Start Your App Project", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80",
  },
  "qa-automation": {
    id: "qa-automation",
    title: "QA Automation",
    description:
      "Fusion Byte offers quality assurance and automation services to ensure software reliability, performance, and stability. Our QA automation solutions include test framework development, continuous integration testing, regression testing, performance validation, and system monitoring strategies. Automated testing reduces development errors, improves deployment speed, and enhances system consistency. We implement structured quality assurance pipelines that integrate with modern development workflows. Our approach increases efficiency, reduces operational risks, and ensures enterprise-grade software reliability.",
    cta: { label: "Request QA Consultation", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80",
  },
  "cloud-optimization": {
    id: "cloud-optimization",
    title: "Cloud Optimization",
    description:
      "Fusion Byte provides cloud optimization strategies designed to improve performance, reduce operational costs, and enhance infrastructure efficiency. We analyze existing cloud environments, identify resource inefficiencies, and implement optimization frameworks for better scalability. Our solutions include workload balancing, architecture refinement, cost management strategies, and security enhancements. Cloud optimization ensures businesses achieve maximum value from their cloud investments while maintaining high availability and compliance standards. We support hybrid, private, and public cloud environments.",
    cta: { label: "Optimize Your Cloud", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  },
  "cyber-security": {
    id: "cyber-security",
    title: "Cyber Security",
    description:
      "Fusion Byte delivers enterprise cybersecurity solutions focused on risk mitigation, vulnerability assessment, and infrastructure protection. Our services include security audits, threat detection systems, identity management strategies, compliance alignment, and secure architecture design. We help organizations safeguard data, protect digital assets, and reduce exposure to cyber threats. Our security frameworks are designed for scalability, regulatory compliance, and continuous monitoring. Cybersecurity is integrated into every stage of system development and infrastructure planning.",
    cta: { label: "Request Security Review", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&w=1400&q=80",
  },
  "artificial-intelligence": {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Fusion Byte designs and implements artificial intelligence solutions that enable automation, predictive insights, and intelligent decision-making. Our AI services include machine learning model development, data analytics systems, natural language processing, and automation frameworks. We build scalable AI architectures that integrate seamlessly with enterprise platforms. Our solutions are structured for secure deployment, performance optimization, and long-term adaptability. AI implementation supports operational efficiency and strategic innovation across industries.",
    cta: { label: "Explore AI Solutions", href: "/what-we-do#ai-ml-development" },
    imageSrc:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=80",
  },
  "blockchain-solutions": {
    id: "blockchain-solutions",
    title: "Blockchain Solutions",
    description:
      "Fusion Byte provides blockchain consulting and development services for organizations seeking secure, transparent, and decentralized systems. Our blockchain solutions include smart contract development, enterprise blockchain architecture, and distributed application design. We help businesses implement secure digital record systems, transactional frameworks, and verification models. Our approach ensures scalability, data integrity, and structured system integration. Blockchain technology can enhance trust, transparency, and automation across digital ecosystems.",
    cta: { label: "Request Blockchain Consultation", href: "/get-a-quote" },
    imageSrc:
      "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=1400&q=80",
  },
};

export const solutionsFinalCta = {
  title: "Ready to Build Your Technology Solution?",
  description:
    "Contact Fusion Byte to discuss your solution requirements and receive a structured proposal tailored to your business needs.",
  primary: { label: "Contact Us", href: "/contact-us" },
  secondary: { label: "Get a Quote", href: "/get-a-quote" },
} as const;

export const whoWeAreHero = {
  eyebrow: "WHO WE ARE",
  title: "About FusionByte IT Consultation and Solutions",
  description:
    "An Alberta-Based Technology Consulting Company Delivering AI, Cloud, Cybersecurity, Software Modernization, and Digital Transformation Solutions.",
  backgroundImageSrc:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
  backgroundImageAlt: "Modern enterprise technology network",
  primaryCta: { label: "Explore Our Services", href: "/what-we-do" },
  secondaryCta: { label: "Get a Quote", href: "/get-a-quote" },
} as const;

export const whoWeAreOverview = {
  id: "company-overview",
  title: "Who We Are",
  description:
    "Fusion Byte IT Consultation and Solutions is a technology-focused consulting company based in Alberta, Canada, dedicated to delivering enterprise-grade digital solutions for organizations seeking innovation, scalability, and operational efficiency. We specialize in AI/ML development, cloud consulting services, cybersecurity solutions, software modernization, digital marketing strategies, blockchain development, and political campaign technology support. Our approach combines structured planning, technical expertise, and scalable architecture to help businesses achieve digital transformation goals. We focus on building reliable, secure, and future-ready technology systems that support long-term growth.",
} as const;

export const whoWeAreMission = {
  id: "mission",
  title: "Our Mission",
  description:
    "Our mission is to deliver high-quality technology consulting and implementation services that empower organizations to modernize their systems, strengthen cybersecurity, adopt cloud technologies, integrate artificial intelligence, and improve overall digital performance. We are committed to providing structured, secure, and scalable solutions that align with business objectives and industry best practices.",
} as const;

export const whoWeAreVision = {
  id: "vision",
  title: "Our Vision",
  description:
    "Our vision is to become a trusted technology partner for businesses across Canada by delivering innovative, secure, and scalable digital transformation solutions. We aim to support organizations in adopting advanced technologies, improving operational efficiency, and building resilient systems that enable sustainable growth in a competitive digital landscape.",
} as const;

export const whoWeAreValues = {
  id: "values",
  title: "Our Core Values",
  items: [
    { title: "Innovation", description: "Driving forward-thinking technology solutions." },
    {
      title: "Security-First Approach",
      description: "Designing systems with enterprise-level protection.",
    },
    { title: "Scalability", description: "Building solutions that grow with your business." },
    { title: "Integrity", description: "Transparent processes and structured delivery." },
  ],
} as const;

export const whoWeAreExpertise = {
  id: "expertise",
  title: "Areas of Expertise",
  items: [
    "Artificial Intelligence & Machine Learning",
    "Cloud Consulting & Optimization",
    "Cybersecurity & Risk Management",
    "Custom Software Development",
    "Digital Transformation Strategy",
    "Blockchain Solutions",
    "Digital Marketing Technology",
    "Enterprise System Modernization",
  ],
} as const;

export const whoWeAreWhyChoose = {
  id: "why-choose",
  title: "Why Organizations Work With Us",
  items: [
    "Enterprise-Level Technical Expertise",
    "Structured Consulting Approach",
    "Secure & Scalable Architectures",
    "Long-Term Technology Partnership",
  ],
} as const;

export const whoWeAreMethodology = {
  id: "methodology",
  title: "Our Consulting Methodology",
  steps: [
    "Requirement Analysis",
    "Strategic Planning",
    "Solution Design",
    "Implementation & Deployment",
    "Optimization & Ongoing Support",
  ],
} as const;

export const whoWeAreFinalCta = {
  title: "Partner With FusionByte for Your Next Technology Initiative",
  description:
    "Connect with our team to discuss enterprise solutions, project requirements, or long-term digital transformation strategies.",
  primary: { label: "Contact Us", href: "/contact-us" },
  secondary: { label: "Get a Quote", href: "/get-a-quote" },
} as const;
