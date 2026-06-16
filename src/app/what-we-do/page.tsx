import Image from "next/image";
import Link from "next/link";
import { whatWeDoMegaMenu } from "../components/nav";
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

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            SERVICES MENU
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Explore Our Services
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whatWeDoMegaMenu.map((group) => (
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
                    key={`${group.title}-${item.title}`}
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

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
            alt="Modern tech collaboration"
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
                {whatWeDoFinalCta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                {whatWeDoFinalCta.description}
              </p>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-end">
                <Link
                  href={whatWeDoFinalCta.primary.href}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  {whatWeDoFinalCta.primary.label}
                </Link>
                <Link
                  href={whatWeDoFinalCta.secondary.href}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  {whatWeDoFinalCta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
