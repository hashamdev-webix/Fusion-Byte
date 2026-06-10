import Image from "next/image";
import Link from "next/link";
import { CardSlider, type SliderCard } from "./components/CardSlider";
import { HeroBackgroundSlider } from "./components/HeroBackgroundSlider";
import { QuoteRotator } from "./components/QuoteRotator";

const heroBackgroundImages: string[] = [
  "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1773332585687-85beb4da71ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
];

const serviceCards: SliderCard[] = [
  {
    title: "AI / ML Development",
    href: "#services",
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Modernize Software",
    href: "#services",
    imageSrc:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Cloud Consulting Services",
    href: "#services",
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Cyber Security Solutions",
    href: "#services",
    imageSrc:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Digital Marketing",
    href: "#services",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Political Campaign Technology",
    href: "#services",
    imageSrc:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80",
  },
];

const solutionCards: SliderCard[] = [
  {
    title: "Digital Transformation",
    href: "#solutions",
    imageSrc:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Custom Software Development",
    href: "#solutions",
    imageSrc:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Mobile App Development",
    href: "#solutions",
    imageSrc:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "QA Automation",
    href: "#solutions",
    imageSrc:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Cloud Optimization",
    href: "#solutions",
    imageSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Cyber Security",
    href: "#solutions",
    imageSrc:
      "https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Artificial Intelligence",
    href: "#solutions",
    imageSrc:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Blockchain Solutions",
    href: "#solutions",
    imageSrc:
      "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <HeroBackgroundSlider images={heroBackgroundImages} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative flex w-full flex-col items-center px-0 py-20 text-white sm:py-28 lg:py-32">
          <p className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
            Enterprise IT Consulting • Alberta & Canada
          </p>

          <div className="my-6 w-full max-w-4xl">
            <QuoteRotator />
          </div>

          <p className="mt-12 max-w-3xl text-balance text-center text-base leading-7 text-white/80 sm:text-lg">
            Fusion Byte provides enterprise-grade IT consulting and technology
            solutions including AI/ML development, cloud consulting,
            cybersecurity, digital transformation, software modernization,
            digital marketing, and political campaign technology solutions
            across Alberta and Canada.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <a
              href="#solutions"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Explore Our Solutions
            </a>
            <Link
              href="/get-a-quote"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="w-full px-4 py-16 lg:py-20"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden border border-border bg-surface shadow-sm">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="Technology consulting team collaboration"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              WHAT WE DO
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Our Technology Services
            </h2>
            <p className="mt-5 text-lg leading-7 text-muted-foreground sm:text-xl">
              Fusion Byte provides enterprise-grade IT consulting and technology
              solutions including AI/ML development, cloud consulting,
              cybersecurity, digital transformation, software modernization,
              digital marketing, and political campaign technology solutions
              across Alberta and Canada.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-surface-2/60 py-16 sm:py-20"
      >
        <div className="w-full px-4">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                SERVICES
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Our Core Services
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              </p>
            </div>
            <Link
              href="/get-a-quote"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Get a Quote
            </Link>
          </div>

          <div className="mt-10">
            <CardSlider cards={serviceCards} />
          </div>
        </div>
      </section>

      <section id="solutions" className="py-16 sm:py-20">
        <div className="w-full px-4">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            SOLUTIONS
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Our Technology Solutions
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
           
          </p>

          <div className="mt-10">
            <CardSlider cards={solutionCards} />
          </div>
        </div>
      </section>

      <section id="who-we-are" className="bg-surface-2/60 py-16 sm:py-20">
        <div className="w-full px-4">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                WHO WE ARE
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Who We Are
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                Fusion Byte IT Consultation and Solutions is an Alberta-based
                technology company focused on delivering scalable digital
                transformation services for businesses seeking innovation,
                security, and operational efficiency.
              </p>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-16 sm:py-20">
        <div className="w-full px-4">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            PROCESS
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            How Our Process Works
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Submit Your Request",
                description: "User clicks “Get a Quote” or contacts us.",
              },
              {
                title: "Consultation & Requirement Analysis",
                description: "Our team reviews your project needs and goals.",
              },
              {
                title: "Proposal & Solution Design",
                description:
                  "We present a structured plan with timeline and cost.",
              },
              {
                title: "Project Execution",
                description:
                  "Development, implementation, testing, and delivery.",
              },
              {
                title: "Support & Optimization",
                description: "Ongoing improvements and technical support.",
              },
            ].map((s, idx) => (
              <div
                key={s.title}
                className="rounded-3xl border border-border bg-surface p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="grid size-9 flex-none place-items-center rounded-full bg-muted text-sm font-semibold text-foreground">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {s.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="py-16 sm:py-20">
        <div className="w-full ">
          <div className="grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                CAREERS
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Build With a Modern Team
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                We bring enterprise delivery discipline to modern technology.
                Share your experience and help organizations ship secure,
                scalable solutions.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
              <ol className="space-y-5 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="grid size-8 flex-none place-items-center rounded-full bg-muted text-foreground">
                    1
                  </span>
                  <span>
                    Share your profile and what you want to build.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="grid size-8 flex-none place-items-center rounded-full bg-muted text-foreground">
                    2
                  </span>
                  <span>
                    Meet the team and align on technical ownership.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="grid size-8 flex-none place-items-center rounded-full bg-muted text-foreground">
                    3
                  </span>
                  <span>Deliver enterprise outcomes with modern tooling.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
            alt="Technology team collaboration"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative w-full px-0">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center px-4">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Ready to Start Your Digital Transformation?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Connect with our team to discuss your project, request a
                proposal, or explore enterprise technology solutions tailored to
                your business.
              </p>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-end">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  Contact Us
                </a>
                <Link
                  href="/get-a-quote"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
