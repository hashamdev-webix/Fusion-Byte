"use client";

import { PageHero } from "../components/PageHero";

export default function Page() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="CONTACT US"
        title="Contact FusionByte IT Consultation and Solutions"
        description="Get in touch with our Alberta-based technology consulting team for AI development, cloud consulting, cybersecurity, digital transformation, software modernization, or enterprise technology solutions."
        primaryCta={{ label: "Request a Consultation", href: "#contact" }}
        secondaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
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
              <p className="font-semibold text-foreground">
                Fusion Byte IT Consultation and Solutions
              </p>
              <p className="mt-2">Alberta, Canada</p>
              <p className="mt-2">
                Email:{" "}
                <a className="text-foreground" href="mailto:info@fusionbyte.com">
                  info@fusionbyte.com
                </a>
              </p>
              <p className="mt-4 leading-6">
                We respond to all inquiries within 1–2 business days. For
                project discussions, partnerships, or service requests, please
                use the form or click “Get a Quote”.
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
                    {[
                      "AI / ML Development",
                      "Cloud Consulting",
                      "Cyber Security",
                      "Software Modernization",
                      "Digital Marketing",
                      "Blockchain Solutions",
                      "Political Campaign Technology",
                      "General IT Consulting",
                    ].map((o) => (
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
                    placeholder="Tell us about your project."
                  />
                </label>

                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">
                Form submission is currently a UI placeholder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

