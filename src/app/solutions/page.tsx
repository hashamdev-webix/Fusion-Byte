import Image from "next/image";
import Link from "next/link";
import { solutionsMegaMenu } from "../components/nav";
import { PageHero } from "../components/PageHero";
import {
  solutionsBySlug,
  solutionsFinalCta,
  solutionsHero,
} from "../content/siteCopy";

const solutionOrder = solutionsMegaMenu.flatMap((group) =>
  group.items.map((item) => item.href.split("#").pop()).filter(Boolean),
);

const solutionsCtaImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80";

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero {...solutionsHero} />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            SOLUTIONS MENU
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Explore Our Solutions
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {solutionsMegaMenu.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-border bg-surface p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold tracking-wide text-foreground">
                {group.title}
              </h3>
              <div className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-muted-foreground transition hover:border-border hover:bg-surface-2 hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {solutionOrder.map((slug, index) => {
        if (!slug) return null;
        const section = solutionsBySlug[slug];
        if (!section) return null;

        return (
          <section
            key={slug}
            id={section.id}
            className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div
                className={[
                  "lg:col-span-6",
                  index % 2 === 1 ? "lg:order-2" : "",
                ].join(" ")}
              >
                <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                  SOLUTIONS
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-muted-foreground">
                  {section.description}
                </p>
                {section.cta ? (
                  <div className="mt-8">
                    <Link
                      href={section.cta.href}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                    >
                      {section.cta.label}
                    </Link>
                  </div>
                ) : null}
              </div>

              <div
                className={[
                  "lg:col-span-6",
                  index % 2 === 1 ? "lg:order-1" : "",
                ].join(" ")}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
                  {section.imageSrc ? (
                    <>
                      <Image
                        src={section.imageSrc}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src={solutionsCtaImage}
            alt="Enterprise collaboration"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {solutionsFinalCta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                {solutionsFinalCta.description}
              </p>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-end">
                <Link
                  href={solutionsFinalCta.primary.href}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  {solutionsFinalCta.primary.label}
                </Link>
                <Link
                  href={solutionsFinalCta.secondary.href}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  {solutionsFinalCta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
