import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../../components/PageHero";
import { whatWeDoMegaMenu } from "../../../components/nav";

function findTopic(category: string, topic: string) {
  const href = `/what-we-do/${category}/${topic}`;
  for (const group of whatWeDoMegaMenu) {
    for (const item of group.items) {
      if (item.href === href) return { group, item };
    }
  }
  return null;
}

export default async function Page(props: {
  params: Promise<{ category: string; topic: string }>;
}) {
  const { category, topic } = await props.params;
  const found = findTopic(category, topic);
  if (!found) return notFound();

  const { group, item } = found;

  return (
    <div className="bg-background">
      <PageHero
        eyebrow={group.title}
        title={item.title}
        description="Enterprise-focused consulting and delivery—structured, secure, and built to scale across modern cloud and application architectures."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "View All Services", href: "/what-we-do" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              What you get
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              FusionByte delivers {item.title.toLowerCase()} with a structured
              consulting process—discovery, architecture, implementation, and
              ongoing optimization. We align strategy, security, and
              measurability to your business goals.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Discovery & requirements",
                "Secure architecture design",
                "Implementation & delivery",
                "Quality assurance & handoff",
                "Performance & scalability",
                "Documentation & support",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-2xl border border-border bg-surface p-4 text-sm text-muted-foreground shadow-sm"
                >
                  <p className="font-semibold text-foreground">{t}</p>
                  <p className="mt-1">
                    Built for enterprise reliability and long-term maintenance.
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
              <p className="text-sm font-semibold text-foreground">
                Related services
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {group.items.map((i) => (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      className={
                        i.href === item.href
                          ? "font-semibold text-foreground"
                          : "hover:text-foreground"
                      }
                    >
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/get-a-quote"
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-foreground shadow-sm transition hover:bg-surface-2"
                >
                  Contact
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

