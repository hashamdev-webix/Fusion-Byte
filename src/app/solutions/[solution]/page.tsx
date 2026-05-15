import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../components/PageHero";
import { solutionsMenu } from "../../components/nav";

function titleFor(solution: string) {
  const href = `/solutions/${solution}`;
  return solutionsMenu.find((s) => s.href === href)?.title ?? null;
}

export default async function Page(props: {
  params: Promise<{ solution: string }>;
}) {
  const { solution } = await props.params;
  const title = titleFor(solution);
  if (!title) return notFound();

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="SOLUTION"
        title={title}
        description="Outcome-driven solution design with structured delivery, measurable milestones, and enterprise-grade reliability."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Back to Solutions", href: "/solutions" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Overview
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              FusionByte delivers {title.toLowerCase()} as a structured program:
              discovery, architecture, implementation, testing, and continuous
              optimization—aligned to your business objectives and security
              posture.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Strategy & roadmap",
                "Architecture & design",
                "Implementation",
                "Testing & QA",
                "Deployment",
                "Support & optimization",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-3xl border border-border bg-surface p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold text-foreground">{t}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Enterprise-first process designed for reliability and scale.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
              <p className="text-sm font-semibold text-foreground">
                Explore more
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {solutionsMenu.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className={
                        s.title === title
                          ? "font-semibold text-foreground"
                          : "hover:text-foreground"
                      }
                    >
                      {s.title}
                    </Link>
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

