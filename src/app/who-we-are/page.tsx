import Link from "next/link";
import { PageHero } from "../components/PageHero";

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="WHO WE ARE"
        title="About FusionByte IT Consultation and Solutions"
        description="An Alberta-based technology consulting company delivering AI, cloud, cybersecurity, software modernization, and digital transformation solutions."
        primaryCta={{ label: "Explore Our Services", href: "/what-we-do" }}
        secondaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Who We Are
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Fusion Byte IT Consultation and Solutions is a technology-focused
              consulting company based in Alberta, Canada, dedicated to
              delivering enterprise-grade digital solutions for organizations
              seeking innovation, scalability, and operational efficiency. We
              specialize in AI/ML development, cloud consulting services,
              cybersecurity solutions, software modernization, digital marketing
              strategies, blockchain development, and political campaign
              technology support.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Our Mission", href: "/who-we-are/mission" },
                { title: "Our Values", href: "/who-we-are/values" },
                { title: "Areas of Expertise", href: "/who-we-are/expertise" },
                { title: "Contact Us", href: "/contact-us" },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-3xl border border-border bg-surface p-6 shadow-sm transition hover:bg-surface-2"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {c.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Learn more about our enterprise consulting approach.
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
              <p className="text-sm font-semibold text-foreground">Why us</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "Enterprise-level technical expertise",
                  "Structured consulting approach",
                  "Secure & scalable architectures",
                  "Long-term strategic partnership",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

