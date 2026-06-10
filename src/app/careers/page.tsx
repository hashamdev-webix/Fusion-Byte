import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

const roles = [
  {
    id: "ai-ml-developer",
    title: "AI / ML Developer",
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80",
    overview:
      "Fusion Byte is seeking an AI/ML Developer to design, develop, and deploy intelligent systems, predictive models, and automation solutions. This role involves working on artificial intelligence frameworks, data modeling, machine learning pipelines, and enterprise integrations.",
    responsibilities: [
      "Develop and train machine learning models",
      "Work with structured and unstructured data",
      "Build AI-powered automation systems",
      "Integrate AI solutions into enterprise applications",
      "Optimize model performance and scalability",
    ],
    requirements: [
      "Experience in Python and AI frameworks",
      "Understanding of machine learning concepts",
      "Knowledge of data processing and model deployment",
      "Strong problem-solving skills",
    ],
    whyJoin: [
      "Work on advanced AI projects",
      "Growth-focused environment",
      "Enterprise-level technology exposure",
    ],
  },
  {
    id: "cloud-solutions-engineer",
    title: "Cloud Solutions Engineer",
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    overview:
      "We are hiring a Cloud Solutions Engineer to design, implement, and optimize cloud infrastructure for enterprise clients. The role focuses on cloud migration, architecture planning, performance optimization, and secure deployments.",
    responsibilities: [
      "Design cloud-based architectures",
      "Perform cloud migrations",
      "Optimize cloud performance",
      "Implement security best practices",
      "Work with hybrid environments",
    ],
    requirements: [
      "Experience with cloud platforms",
      "Knowledge of infrastructure design",
      "Understanding of security and scalability",
      "Strong technical background",
    ],
    whyJoin: [
      "Work on large-scale infrastructure",
      "Enterprise consulting exposure",
      "Innovative project environment",
    ],
  },
  {
    id: "cyber-security-analyst",
    title: "Cyber Security Analyst",
    imageSrc:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    overview:
      "Fusion Byte is looking for a Cyber Security Analyst to support risk assessments, vulnerability analysis, security monitoring, and enterprise protection strategies for clients across Canada.",
    responsibilities: [
      "Conduct security audits",
      "Identify vulnerabilities",
      "Monitor threats and system logs",
      "Implement security improvements",
      "Support compliance initiatives",
    ],
    requirements: [
      "Knowledge of cybersecurity frameworks",
      "Understanding of risk management",
      "Analytical mindset",
      "Security tools experience",
    ],
    whyJoin: [
      "Work in security-first environment",
      "Exposure to enterprise clients",
      "Career growth in cybersecurity",
    ],
  },
] as const;

function ApplicationForm({ roleTitle }: { roleTitle: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        Apply for this Position
      </h3>

      <form className="mt-6 grid gap-4">
        {[
          { label: "Full Name *", type: "text" },
          { label: "Email Address *", type: "email" },
          { label: "Phone Number *", type: "tel" },
        ].map((f) => (
          <label key={f.label} className="block">
            <span className="text-xs font-semibold text-foreground">
              {f.label}
            </span>
            <input
              type={f.type}
              className="mt-2 h-11 w-full rounded-2xl border border-border bg-background px-4 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              placeholder={f.label.replace(" *", "")}
            />
          </label>
        ))}

        <label className="block">
          <span className="text-xs font-semibold text-foreground">
            Resume Upload (PDF/Word)
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
            placeholder="Cover letter"
          />
        </label>

        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          Submit Application
        </button>

        <p className="text-xs text-muted-foreground">
          Application form is a UI placeholder for {roleTitle}.
        </p>
      </form>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="CAREERS"
        title="Build Your Career in Technology & Innovation"
        description="Join FusionByte IT Consultation and Solutions and work on AI, Cloud, Cybersecurity, Digital Transformation, and Enterprise Technology projects across Alberta and Canada."
        primaryCta={{ label: "Join Us Today", href: "/contact-us" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Open Positions
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={r.imageSrc}
                  alt={r.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-lg font-semibold text-white">{r.title}</p>
                  <p className="mt-1 text-sm text-white/80">Learn More</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {roles.map((r) => (
        <section
          key={r.id}
          id={r.id}
          className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {r.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {r.overview}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">
                    Responsibilities
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {r.responsibilities.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-primary" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">
                    Requirements
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {r.requirements.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-primary" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-border bg-surface p-6 shadow-sm">
                <p className="text-sm font-semibold text-foreground">
                  Why Join Us
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {r.whyJoin.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-primary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/get-a-quote"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-surface px-5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-surface-2"
                >
                  Explore company work
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ApplicationForm roleTitle={r.title} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
