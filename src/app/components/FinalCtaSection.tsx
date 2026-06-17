import Link from "next/link";

type FinalCtaLink = {
  label: string;
  href: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  primary: FinalCtaLink;
  secondary: FinalCtaLink;
};

export function FinalCtaSection({
  id,
  eyebrow = "START YOUR PROJECT",
  title,
  description,
  primary,
  secondary,
}: Props) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-black px-4 py-16 text-white sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(239,68,68,0.42),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(20,184,166,0.3),transparent_28%),linear-gradient(135deg,#050505_0%,#111827_48%,#220b0b_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 py-4 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold tracking-widest text-white/70">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.82]">
            {description}
          </p>
        </div>

        <div className="lg:col-span-5 lg:flex lg:justify-end">
          <div className="flex w-full flex-col gap-3 rounded-3xl border border-white/15 bg-white/[0.08] p-4 shadow-2xl backdrop-blur sm:w-auto sm:min-w-80">
            <Link
              href={primary.href}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              {primary.label}
            </Link>

            <Link
              href={secondary.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-white hover:text-black"
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
