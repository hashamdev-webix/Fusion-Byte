import Image from "next/image";
import Link from "next/link";
import { FinalCtaSection } from "../components/FinalCtaSection";
import { PageHero } from "../components/PageHero";
import {
  whatWeDoFinalCta,
  whatWeDoHero,
  whatWeDoSections,
  whatWeDoWhyChoose,
} from "../content/siteCopy";

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero {...whatWeDoHero} />

      {whatWeDoSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
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

            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                WHAT WE DO
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
          </div>
        </section>
      ))}

      <section
        id="why-choose-fusionbyte"
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {whatWeDoWhyChoose.title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whatWeDoWhyChoose.points.map((p) => (
            <div
              key={p}
              className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted-foreground shadow-sm"
            >
              <p className="font-semibold text-foreground">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCtaSection
        title={whatWeDoFinalCta.title}
        description={whatWeDoFinalCta.description}
        primary={whatWeDoFinalCta.primary}
        secondary={whatWeDoFinalCta.secondary}
      />
    </div>
  );
}
