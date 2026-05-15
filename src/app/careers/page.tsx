import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

const roles = [
  {
    slug: "ai-ml-developer",
    title: "AI / ML Developer",
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "cloud-solutions-engineer",
    title: "Cloud Solutions Engineer",
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "cyber-security-analyst",
    title: "Cyber Security Analyst",
    imageSrc:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="CAREERS"
        title="Build Your Career in Technology & Innovation"
        description="Join FusionByte IT Consultation and Solutions and work on AI, cloud, cybersecurity, digital transformation, and enterprise technology projects across Alberta and Canada."
        primaryCta={{ label: "Join Us Today", href: "/contact-us" }}
        secondaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Open Positions
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <Link
              key={r.slug}
              href={`/careers/${r.slug}`}
              className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={r.imageSrc}
                  alt={r.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-lg font-semibold text-white">{r.title}</p>
                  <p className="mt-1 text-sm text-white/80">
                    Learn more → Scrolls to details & apply form
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

