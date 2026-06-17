import Image from "next/image";
import Link from "next/link";
import { FinalCtaSection } from "../components/FinalCtaSection";
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

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero {...solutionsHero} />

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

      <FinalCtaSection
        title={solutionsFinalCta.title}
        description={solutionsFinalCta.description}
        primary={solutionsFinalCta.primary}
        secondary={solutionsFinalCta.secondary}
      />
    </div>
  );
}
