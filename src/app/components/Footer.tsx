import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinkClass = "transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpeg"
                width={0}
                height={0}
                sizes="100vw"
                alt="FusionByte logo"
                className="h-auto w-56 sm:w-64"
              />
            </Link>

            <p className="mt-4 max-w-sm text-xl leading-8 text-white">
              Transforming businesses through intelligent technology solutions.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <p className="text-lg font-semibold text-white">Quick Links</p>
              <ul className="mt-4 space-y-3 text-base text-white">
                <li>
                  <Link className={footerLinkClass} href="/what-we-do">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className={footerLinkClass} href="/who-we-are">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link className={footerLinkClass} href="/careers">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className={footerLinkClass} href="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold text-white">Services</p>
              <ul className="mt-4 space-y-3 text-base text-white">
                <li>
                  <Link
                    className={footerLinkClass}
                    href="/what-we-do#ai-ml-development"
                  >
                    AI / ML
                  </Link>
                </li>
                <li>
                  <Link
                    className={footerLinkClass}
                    href="/what-we-do#cloud-consulting-services"
                  >
                    Cloud Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    className={footerLinkClass}
                    href="/what-we-do#cyber-security-solutions"
                  >
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link
                    className={footerLinkClass}
                    href="/what-we-do#modernize-software"
                  >
                    Software Modernization
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2">
              <p className="text-lg font-semibold text-white">Contact</p>

              <ul className="mt-4 grid gap-4 text-base leading-7 text-white sm:grid-cols-2">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <a
                    href="mailto:info@fusionbyteitconsultation.com"
                    className={footerLinkClass}
                  >
                    info@fusionbyteitconsultation.com
                  </a>
                </li>{" "}
                <br />
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <a href="tel:+18257364145" className={footerLinkClass}>
                    +1 825-736-4145
                  </a>
                </li>
                <br />
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    Unit 3-5105 51 Ave,
                    <br />
                    Drayton Valley, AB T7A 0C3
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>Unit 335, 3016 5 Ave NE, Calgary, AB T2A 6K4</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-6 text-lg text-white sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Fusion Byte IT Consultation and
            Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
