import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../components/PageHero";

const sections = [
  {
    slug: "mission",
    title: "Our Mission",
    description:
      "Deliver high-quality consulting and implementation services that empower organizations to modernize systems, strengthen security, and scale confidently.",
  },
  {
    slug: "values",
    title: "Our Core Values",
    description:
      "Innovation, security-first thinking, scalability, and integrity—guiding every engagement from discovery to delivery.",
  },
  {
    slug: "expertise",
    title: "Areas of Expertise",
    description:
      "AI/ML, cloud consulting & optimization, cybersecurity & risk management, custom software development, digital transformation strategy, blockchain solutions, digital marketing technology, and enterprise modernization.",
  },
  {
    slug: "company-background",
    title: "Company Background",
    description:
      "An Alberta-based consulting team focused on secure, scalable enterprise delivery across Canada.",
  },
  {
    slug: "our-philosophy",
    title: "Our Philosophy",
    description:
      "Structured consulting, clear outcomes, and long-term partnerships—built on reliability and trust.",
  },
  {
    slug: "consulting-methodology",
    title: "Consulting Methodology",
    description:
      "A repeatable engagement model: discovery, roadmap, architecture, implementation, and continuous optimization.",
  },
  {
    slug: "client-centric-model",
    title: "Client-Centric Model",
    description:
      "We align technical decisions to business outcomes with transparent delivery and measurable milestones.",
  },
  {
    slug: "agile-delivery-model",
    title: "Agile Delivery Model",
    description:
      "Iterative delivery with tight feedback loops, quality gates, and enterprise change control when needed.",
  },
  {
    slug: "innovation-focus",
    title: "Innovation Focus",
    description:
      "Modern architectures, automation, and AI-driven improvements—adopted responsibly and securely.",
  },
  {
    slug: "integrity-transparency",
    title: "Integrity & Transparency",
    description:
      "Clear communication, realistic timelines, and decisions documented for long-term maintainability.",
  },
  {
    slug: "quality-commitment",
    title: "Quality Commitment",
    description:
      "Security-first engineering, testing discipline, and reliable handoff with documentation.",
  },
  {
    slug: "alberta-operations",
    title: "Alberta Operations",
    description:
      "Local presence with enterprise delivery standards—supporting organizations across Alberta.",
  },
  {
    slug: "canada-focus",
    title: "Canada Focus",
    description:
      "Canada-focused solutions designed for compliance, scalability, and multi-stakeholder environments.",
  },
  {
    slug: "expansion-vision",
    title: "Expansion Vision",
    description:
      "Scaling capabilities while maintaining security, quality, and structured consulting processes.",
  },
  {
    slug: "excellence",
    title: "Excellence",
    description:
      "High standards across architecture, implementation, QA, and operational reliability.",
  },
  {
    slug: "collaboration",
    title: "Collaboration",
    description:
      "We work as an extension of your team—shared ownership, clear roles, and consistent communication.",
  },
  {
    slug: "technology-leadership",
    title: "Technology Leadership",
    description:
      "Guidance on modern stacks, cloud strategy, AI enablement, and secure engineering practices.",
  },
  {
    slug: "industry-expertise",
    title: "Industry Expertise",
    description:
      "Experience across enterprise delivery contexts—technology choices aligned to risk and outcomes.",
  },
  {
    slug: "scalable-solutions",
    title: "Scalable Solutions",
    description:
      "Architected for growth: performance, reliability, security, and maintainability from day one.",
  },
  {
    slug: "long-term-partnerships",
    title: "Long-Term Partnerships",
    description:
      "Ongoing support, optimization, and roadmap planning beyond initial delivery.",
  },
] as const;

export default async function Page(props: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await props.params;
  const current = sections.find((s) => s.slug === section);
  if (!current) return notFound();

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="WHO WE ARE"
        title={current.title}
        description={current.description}
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Back to About", href: "/who-we-are" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
          <p className="text-sm leading-7 text-muted-foreground">
            This section is designed as a dedicated page so it can be used as a
            real header submenu target (not just an anchor).
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/what-we-do"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-surface px-5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-surface-2"
            >
              Explore Services
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
