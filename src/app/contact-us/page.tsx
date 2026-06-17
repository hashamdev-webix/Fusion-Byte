import Link from "next/link";
import { FinalCtaSection } from "../components/FinalCtaSection";
import { PageHero } from "../components/PageHero";
import { Mail, MapPin, Phone } from "lucide-react";

const services = [
  "AI / ML Development",
  "Cloud Consulting",
  "Cyber Security",
  "Software Modernization",
  "Digital Marketing",
  "Blockchain Solutions",
  "General Inquiry",
] as const;

const contactHeroImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80";

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="CONTACT US"
        title="Contact FusionByte IT Consultation and Solutions"
        description="Get in touch with our Alberta-based technology consulting team for AI development, cloud consulting, cybersecurity, digital transformation, software modernization, or enterprise technology solutions."
        backgroundImageSrc={contactHeroImage}
        backgroundImageAlt="Modern office technology collaboration"
        primaryCta={{ label: "Request a Consultation", href: "#contact" }}
      />

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Reach Us Directly
            </h2>
            <div className="mt-5 rounded-3xl border border-border bg-surface p-6 text-sm text-muted-foreground shadow-sm">
              <div className="space-y-3">
                <p className="font-semibold text-foreground">
                  Fusion Byte IT Consultation and Solutions
                </p>

                <div className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 shrink-0 text-foreground" />
                  <span>Unit 3-5105 51 Ave, Drayton Valley, AB T7A 0C3</span>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 shrink-0 text-foreground" />
                  <span>Unit 335, 3016 5 Ave NE, Calgary, AB T2A 6K4</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-foreground" />
                  <a href="tel:+18257364145" className="text-foreground">
                    +1 825-736-4145
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-foreground" />
                  <a
                    href="mailto:info@fusionbyteitconsultation.com"
                    className="text-foreground"
                  >
                    info@fusionbyteitconsultation.com
                  </a>
                </div>
              </div>
              <p className="mt-4 leading-6">
                We respond to all inquiries within 1-2 business days. For
                project discussions, partnerships, or service requests, please
                use the form or click &quot;Get a Quote&quot;.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Send Us a Message
            </h2>
            <div className="mt-5 rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
              <form className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Full Name *", type: "text" },
                  { label: "Email Address *", type: "email" },
                  { label: "Phone Number *", type: "tel" },
                  { label: "Company Name", type: "text" },
                ].map((f) => (
                  <label key={f.label} className="block">
                    <span className="text-xs font-semibold text-foreground">
                      {f.label}
                    </span>
                    <input
                      type={f.type}
                      className="mt-2 h-11 w-full rounded-2xl border border-border bg-background px-4 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                      placeholder={f.label.replace(" *", "")}
                    />
                  </label>
                ))}

                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold text-foreground">
                    Service Interested In *
                  </span>
                  <select className="mt-2 h-11 w-full rounded-2xl border border-border bg-background px-4 text-sm text-foreground shadow-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20">
                    {services.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold text-foreground">
                    Message *
                  </span>
                  <textarea
                    className="mt-2 min-h-32 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    placeholder="Message"
                  />
                </label>

                <fieldset className="sm:col-span-2">
                  <legend className="text-xs font-semibold text-foreground">
                    Preferred Contact Method
                  </legend>
                  <div className="mt-3 flex gap-6 text-sm text-muted-foreground">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="contactMethod" defaultChecked />
                      Email
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="contactMethod" />
                      Phone
                    </label>
                  </div>
                </fieldset>

                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Looking for a Project Estimate?
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            If you would like a detailed proposal, pricing information, or
            structured technology consulting support, please visit our dedicated
            Get a Quote page.
          </p>
          <div className="mt-8">
            <Link
              href="/get-a-quote"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Our Location
        </h2>
        <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
          <div className="grid lg:grid-cols-2">
            <iframe
              title="FusionByte Drayton Valley office map"
              src="https://www.google.com/maps?q=Unit%203%205105%2051%20Ave%20Drayton%20Valley%20AB%20T7A%200C3&output=embed"
              className="h-80 w-full border-0 lg:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <iframe
              title="FusionByte Calgary office map"
              src="https://www.google.com/maps?q=Unit%20335%203016%205%20Ave%20NE%20Calgary%20AB%20T2A%206K4&output=embed"
              className="h-80 w-full border-0 lg:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="p-6">
            <p className="text-base leading-7 text-muted-foreground">
              FusionByte is proudly based in Alberta and serves businesses
              across Canada with enterprise technology solutions and consulting
              services.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Why Businesses Contact FusionByte
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "AI & Automation Consultation",
            "Cloud Migration Planning",
            "Cybersecurity Assessment",
            "Enterprise Software Strategy",
            "Digital Transformation Roadmaps",
            "Long-Term Technology Partnerships",
          ].map((t) => (
            <div
              key={t}
              className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted-foreground shadow-sm"
            >
              <p className="font-semibold text-foreground">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCtaSection
        title="Let's Build Your Next Technology Solution"
        description="Connect with our team today to discuss your requirements and explore scalable, secure, and innovative enterprise solutions."
        primary={{ label: "Contact Us", href: "/contact-us" }}
        secondary={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </div>
  );
}
