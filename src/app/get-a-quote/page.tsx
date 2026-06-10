import Link from "next/link";
import { PageHero } from "../components/PageHero";

const projectTypes = [
  "AI / ML Development",
  "Cloud Consulting",
  "Cyber Security",
  "Software Modernization",
  "Digital Marketing",
  "Blockchain Solutions",
  "Political Campaign Technology",
  "General IT Consulting",
] as const;

const budgets = ["Under $10,000", "$10,000 – $50,000", "$50,000 – $100,000", "$100,000+"] as const;
const timelines = ["ASAP", "1–3 Months", "3–6 Months", "Flexible"] as const;

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="GET A QUOTE"
        title="Request a Custom Technology Quote"
        description="Tell us about your project and our team will provide a structured proposal for AI development, cloud consulting, cybersecurity, software modernization, digital transformation, or enterprise technology solutions."
        primaryCta={{ label: "Start Your Project", href: "#quote" }}
      />

      <section
        id="quote"
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Tell Us About Your Project
          </h2>

          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Full Name *", type: "text" },
              { label: "Email Address *", type: "email" },
              { label: "Phone Number", type: "tel" },
              { label: "Company Name", type: "text" },
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

            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold text-foreground">
                Project Type *
              </span>
              <select className="mt-2 h-11 w-full rounded-2xl border border-border bg-background px-4 text-sm text-foreground shadow-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20">
                {projectTypes.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold text-foreground">
                Project Budget Range
              </span>
              <select className="mt-2 h-11 w-full rounded-2xl border border-border bg-background px-4 text-sm text-foreground shadow-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20">
                {budgets.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold text-foreground">
                Project Timeline
              </span>
              <select className="mt-2 h-11 w-full rounded-2xl border border-border bg-background px-4 text-sm text-foreground shadow-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20">
                {timelines.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold text-foreground">
                Project Description *
              </span>
              <textarea
                className="mt-2 min-h-32 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                placeholder="Project description"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold text-foreground">
                File Upload (Optional)
              </span>
              <input
                type="file"
                className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-2 text-sm text-muted-foreground shadow-sm"
              />
            </label>

            <fieldset className="sm:col-span-2">
              <legend className="text-xs font-semibold text-foreground">
                Preferred Contact Method
              </legend>
              <div className="mt-3 flex gap-6 text-sm text-muted-foreground">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="contactMethod" defaultChecked />
                  Email
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="contactMethod" />
                  Phone
                </label>
              </div>
            </fieldset>

            <div className="sm:col-span-2">
              <button
                type="button"
                className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          What Happens After You Submit
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Project Review", text: "Our team reviews your requirements." },
            {
              title: "Consultation Call",
              text: "We schedule a discussion to understand your goals.",
            },
            {
              title: "Proposal Preparation",
              text: "We prepare a structured technical and pricing proposal.",
            },
            {
              title: "Agreement & Kickoff",
              text: "Once approved, we begin project implementation.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-border bg-surface p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">{s.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Why Work With Us
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Enterprise-Level Expertise",
            "Secure & Scalable Architecture",
            "Structured Consulting Process",
            "Long-Term Technology Partnership",
            "Alberta-Based Company",
            "Canada-Focused Solutions",
          ].map((t) => (
            <div
              key={t}
              className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted-foreground shadow-sm"
            >
              <p className="font-semibold text-foreground">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Prefer to Speak With Us Directly?
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            You can also reach our team by phone or email for immediate
            consultation regarding your project requirements.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Contact Us
            </Link>
            <Link
              href="/what-we-do"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground shadow-sm transition hover:bg-surface-2"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

