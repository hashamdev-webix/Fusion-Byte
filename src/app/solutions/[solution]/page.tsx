import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../components/PageHero";
import { solutionsBySlug } from "../../content/siteCopy";

type Props = { params: Promise<{ solution: string }> };

export default async function Page({ params }: Props) {
  const { solution } = await params;
  const section = solutionsBySlug[solution];
  if (!section) notFound();

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="SOLUTIONS"
        title={section.title}
        description={section.description}
        primaryCta={{ label: "Explore All Solutions", href: "/solutions" }}
        secondaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {section.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
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

          <div className="lg:col-span-6">
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
    </div>
  );
}

