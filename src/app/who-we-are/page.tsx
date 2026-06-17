import Image from "next/image";
import { FinalCtaSection } from "../components/FinalCtaSection";
import { PageHero } from "../components/PageHero";
import {
  whoWeAreExpertise,
  whoWeAreFinalCta,
  whoWeAreHero,
  whoWeAreMethodology,
  whoWeAreMission,
  whoWeAreOverview,
  whoWeAreValues,
  whoWeAreVision,
  whoWeAreWhyChoose,
} from "../content/siteCopy";

const missionImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80";

const visionImage =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80";

const expertiseImages = [
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
] as const;

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero {...whoWeAreHero} />

      <section
        id={whoWeAreOverview.id}
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex min-h-[320px] flex-col justify-center rounded-3xl border border-border bg-surface p-7 shadow-sm sm:p-10 lg:min-h-[430px]">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              WHO WE ARE
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {whoWeAreOverview.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              {whoWeAreOverview.description}
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border bg-surface shadow-sm lg:min-h-[430px]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
              alt="Enterprise collaboration"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      <section
        id={whoWeAreMission.id}
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border bg-surface shadow-sm lg:min-h-[430px]">
            <Image
              src={missionImage}
              alt="Technology roadmap and digital strategy dashboard"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          </div>
          <div className="flex min-h-[320px] flex-col justify-center rounded-3xl border border-border bg-surface p-7 shadow-sm sm:p-10 lg:min-h-[430px]">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              MISSION
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {whoWeAreMission.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              {whoWeAreMission.description}
            </p>
          </div>
        </div>
      </section>

      <section
        id={whoWeAreVision.id}
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex min-h-[320px] flex-col justify-center rounded-3xl border border-border bg-surface p-7 shadow-sm sm:p-10 lg:min-h-[430px]">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              VISION
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {whoWeAreVision.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              {whoWeAreVision.description}
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border bg-surface shadow-sm lg:min-h-[430px]">
            <Image
              src={visionImage}
              alt="Futuristic enterprise technology environment"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          </div>
        </div>
      </section>

      <section
        id={whoWeAreValues.id}
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {whoWeAreValues.title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeAreValues.items.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-border bg-surface p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">{v.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id={whoWeAreExpertise.id}
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {whoWeAreExpertise.title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeAreExpertise.items.map((t, index) => (
            <div
              key={t}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-surface shadow-sm"
            >
              <Image
                src={expertiseImages[index]}
                alt={t}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-sm font-semibold leading-5 text-white">
                  {t}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id={whoWeAreWhyChoose.id}
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {whoWeAreWhyChoose.title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeAreWhyChoose.items.map((t) => (
            <div
              key={t}
              className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted-foreground shadow-sm"
            >
              <p className="font-semibold text-foreground">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id={whoWeAreMethodology.id}
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {whoWeAreMethodology.title}
        </h2>
        <ol className="mt-8 space-y-4">
          {whoWeAreMethodology.steps.map((s, idx) => (
            <li
              key={s}
              className="flex items-start gap-3 rounded-3xl border border-border bg-surface p-6 shadow-sm"
            >
              <span className="grid size-8 flex-none place-items-center rounded-full bg-muted text-sm font-semibold text-foreground">
                {idx + 1}
              </span>
              <span className="text-sm font-semibold text-foreground">{s}</span>
            </li>
          ))}
        </ol>
      </section>

      <FinalCtaSection
        title={whoWeAreFinalCta.title}
        description={whoWeAreFinalCta.description}
        primary={whoWeAreFinalCta.primary}
        secondary={whoWeAreFinalCta.secondary}
      />
    </div>
  );
}
