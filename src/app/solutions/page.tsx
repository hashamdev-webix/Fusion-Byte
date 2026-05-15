import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { solutionsMenu } from "../components/nav";

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="SOLUTIONS"
        title="Strategic Technology Solutions for Modern Enterprises"
        description="FusionByte delivers outcome-driven solutions in digital transformation, custom software development, mobile applications, QA automation, cloud optimization, cybersecurity, artificial intelligence, and blockchain."
        primaryCta={{ label: "Explore Our Services", href: "/what-we-do" }}
        secondaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Solution Areas
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Click an area to review the solution overview and how we deliver it.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutionsMenu.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-3xl border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-surface-2"
            >
              <p className="text-sm font-semibold text-foreground">{s.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Enterprise delivery with security-first architecture.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

