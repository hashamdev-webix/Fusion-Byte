import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#050505]">
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
                className="w-72 h-auto"
              />
            </Link>

            <p className="mt-4 max-w-sm text-lg leading-6 text-muted-foreground">
              “Transforming Businesses Through Intelligent Technology
              Solutions.”
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <p className="text-base font-semibold text-white">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm text-white">
                <li>
                  <Link href="/what-we-do">What We Do</Link>
                </li>
                <li>
                  <Link href="/who-we-are">Who We Are</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base font-semibold text-white">Services</p>
              <ul className="mt-4 space-y-2 text-sm text-white">
                <li>
                  <Link href="/what-we-do/ai-ml-development/machine-learning-models">
                    AI / ML
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/cloud-infrastructure/cloud-consulting">
                    Cloud Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/cyber-security-solutions/security-audits">
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/custom-software-development/enterprise-software">
                    Software Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base font-semibold text-foreground">Contact</p>

              <ul className="mt-4 space-y-4 text-sm text-white">
                {/* Email */}
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <a
                    href="mailto:info@fusionbyteitconsultation.com"
                    className="hover:text-foreground transition-colors"
                  >
                    info@fusionbyteitconsultation.com
                  </a>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <a
                    href="tel:+18257364145"
                    className="hover:text-foreground transition-colors"
                  >
                    +1 825-736-4145
                  </a>
                </li>

                {/* Drayton Valley Office */}
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Unit 3-5105 51 Ave,
                    <br />
                    Drayton Valley, AB T7A 0C3
                  </span>
                </li>

                {/* Calgary Office */}
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Unit 335, 3016 5 Ave NE,
                    <br />
                    Calgary, AB T2A 6K4
                  </span>
                </li>
              </ul>
            </div>

            {/* <div>
              <p className="text-base font-semibold text-foreground">Social</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
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
            </div> */}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-border/80 pt-6 text-lg text-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Fusion Byte IT Consultation and
            Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
