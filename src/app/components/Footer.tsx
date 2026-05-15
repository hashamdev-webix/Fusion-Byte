import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
             <Link href="/" className="flex items-center gap-2">
  <Image
    src="/logo.jpeg"
    width={0}
    height={0}
    sizes="100vw"
    alt="Logo"
    className="w-52 h-auto"
  />
</Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              “Transforming Businesses Through Intelligent Technology
              Solutions.”
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <p className="text-sm font-semibold text-foreground">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/what-we-do" className="hover:text-foreground">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are" className="hover:text-foreground">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">Services</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/what-we-do/ai-ml-development/machine-learning-models" className="hover:text-foreground">
                    AI / ML
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/cloud-infrastructure/cloud-consulting" className="hover:text-foreground">
                    Cloud Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/cyber-security-solutions/security-audits" className="hover:text-foreground">
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/custom-software-development/enterprise-software" className="hover:text-foreground">
                    Software Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">Contact</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    className="hover:text-foreground"
                    href="mailto:info@fusionbyte.ca"
                  >
                    info@fusionbyte.ca
                  </a>
                </li>
                <li>
                  <span>Alberta, Canada</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">Social</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a className="hover:text-foreground" href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground" href="#">
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/80 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Fusion Byte IT Consultation and Solutions</p>
          <p className="text-xs">No policy links by design.</p>
        </div>
      </div>
    </footer>
  );
}
