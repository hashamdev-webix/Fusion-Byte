import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../components/PageHero";

const roles = [
  {
    slug: "ai-ml-developer",
    title: "AI / ML Developer",
    overview:
      "Design, develop, and deploy intelligent systems, predictive models, and automation solutions for enterprise clients.",
    responsibilities: [
      "Build and deploy ML models",
      "Develop data pipelines and evaluation",
      "Integrate AI into enterprise systems",
      "Collaborate on architecture and delivery",
    ],
    requirements: [
      "Experience with ML frameworks",
      "Strong software engineering fundamentals",
      "Comfort with cloud environments",
      "Structured, security-first mindset",
    ],
  },
  {
    slug: "cloud-solutions-engineer",
    title: "Cloud Solutions Engineer",
    overview:
      "Architect and implement scalable cloud solutions, migrations, and optimization frameworks across modern infrastructures.",
    responsibilities: [
      "Plan cloud migrations and target architectures",
      "Implement IaC and deployment pipelines",
      "Improve reliability, performance, and cost",
      "Support enterprise security and compliance",
    ],
    requirements: [
      "Cloud platform experience (AWS/Azure/GCP)",
      "Networking and security fundamentals",
      "Experience with DevOps tooling",
      "Strong communication and documentation",
    ],
  },
  {
    slug: "cyber-security-analyst",
    title: "Cyber Security Analyst",
    overview:
      "Support risk assessments, vulnerability analysis, security monitoring, and enterprise protection strategies for clients across Canada.",
    responsibilities: [
      "Conduct security audits and assessments",
      "Identify vulnerabilities and gaps",
      "Monitor threats and system logs",
      "Support compliance initiatives",
    ],
    requirements: [
      "Knowledge of security frameworks",
      "Understanding of risk management",
      "Analytical mindset and attention to detail",
      "Hands-on tooling experience is a plus",
    ],
  },
] as const;

export default async function Page(props: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await props.params;
  const current = roles.find((r) => r.slug === role);
  if (!current) return notFound();

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="CAREERS"
        title={current.title}
        description={current.overview}
        primaryCta={{ label: "Apply Now", href: "#apply" }}
        secondaryCta={{ label: "Back to Careers", href: "/careers" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Responsibilities
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {current.responsibilities.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-2 size-1.5 rounded-full bg-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-semibold text-foreground">
              Requirements
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {current.requirements.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-2 size-1.5 rounded-full bg-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div
              id="apply"
              className="rounded-3xl border border-border bg-surface p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">
                Apply for this Position
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                This is a front-end form placeholder (no backend wired yet).
              </p>

              <form className="mt-6 space-y-4">
                {[
                  { label: "Full Name *", name: "name", type: "text" },
                  { label: "Email Address *", name: "email", type: "email" },
                  { label: "Phone Number *", name: "phone", type: "tel" },
                ].map((f) => (
                  <label key={f.name} className="block">
                    <span className="text-xs font-semibold text-foreground">
                      {f.label}
                    </span>
                    <input
                      name={f.name}
                      type={f.type}
                      className="mt-2 h-11 w-full rounded-2xl border border-border bg-background px-4 text-sm text-foreground shadow-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                      placeholder={f.label.replace(" *", "")}
                    />
                  </label>
                ))}

                <label className="block">
                  <span className="text-xs font-semibold text-foreground">
                    Resume Upload
                  </span>
                  <input
                    type="file"
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-2 text-sm text-muted-foreground shadow-sm"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-semibold text-foreground">
                    Cover Letter
                  </span>
                  <textarea
                    className="mt-2 min-h-28 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us briefly about your experience."
                  />
                </label>

                <button
                  type="button"
                  className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  Submit Application
                </button>
              </form>

              <div className="mt-6 flex gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-foreground shadow-sm transition hover:bg-surface-2"
                >
                  Contact Us
                </Link>
                <Link
                  href="/get-a-quote"
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-foreground px-4 text-sm font-semibold text-background shadow-sm transition hover:bg-foreground/90"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

