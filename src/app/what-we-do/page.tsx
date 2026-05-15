import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { whatWeDoMegaMenu } from "../components/nav";

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="WHAT WE DO"
        title="Enterprise Technology Solutions for Digital Transformation"
        description="Fusion Byte delivers AI/ML, cloud, cybersecurity, software modernization, digital marketing technology, blockchain, and political campaign technology services—built for secure, scalable enterprise outcomes."
        primaryCta={{ label: "Request a Service", href: "/get-a-quote" }}
        secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Service Areas
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Browse our service categories and the detailed offerings under each.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDoMegaMenu.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-border bg-surface p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link className="hover:text-foreground" href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={group.items[0]?.href ?? "/get-a-quote"}
                  className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-surface px-4 text-sm font-medium text-foreground shadow-sm transition hover:bg-surface-2"
                >
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

