import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, CalendarDays, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import DotMatrixBanner from "./DotMatrixBanner";

const CONTACT_EMAIL = "teamacumo@gmail.com";
const CALENDLY_URL = "https://calendly.com/teamacumo/30min";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

// Hash links are prefixed with "/" so they work from every page (services, articles, etc.)
const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "MVP Development", href: "/services/mvp-development" },
      { label: "Voice AI & CRM", href: "/services/voice-ai-crm" },
      { label: "Websites & Booking", href: "/services/websites-booking" },
      { label: "AI & Automations", href: "/services/ai-automation" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Process", href: "/#process" },
      { label: "Our Work", href: "/#case-studies" },
      { label: "Articles", href: "/articles" },
      { label: "FAQ", href: "/#faq" },
      { label: "Start a Project", href: "/#inquiry" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/acumo.ai/",
        external: true,
        icon: <FaInstagram className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Email Us",
        href: `mailto:${CONTACT_EMAIL}`,
        icon: <Mail className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Book a Call",
        href: CALENDLY_URL,
        external: true,
        icon: <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />,
      },
    ],
  },
];

const linkBase =
  "group inline-flex items-center gap-2 rounded-sm text-[15px] font-medium text-muted transition-colors duration-300 hover:text-text-primary focus-visible:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-vibrant/60 focus-visible:ring-offset-4 focus-visible:ring-offset-bg";

// Animated underline that grows from the left on hover
const underline =
  "bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_1px] group-focus-visible:bg-[length:100%_1px]";

function FooterNavLink({ link }: { link: FooterLink }) {
  const content = (
    <>
      {link.icon && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-surface/60 text-muted transition-all duration-300 group-hover:border-brand-vibrant/50 group-hover:bg-brand-vibrant/10 group-hover:text-brand-light">
          {link.icon}
        </span>
      )}
      <span className={underline}>{link.label}</span>
      {link.external && (
        <ArrowUpRight
          className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-light group-hover:opacity-100"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkBase}>
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  if (link.href.startsWith("mailto:")) {
    return (
      <a href={link.href} className={linkBase}>
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={linkBase}>
      {content}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        className="relative w-full overflow-x-hidden border-t border-white/5 bg-bg pt-20 pb-10 sm:pt-24 lg:pt-28"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        {/* Soft brand glow along the top edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-vibrant/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-[60%] -translate-x-1/2 rounded-full bg-brand-vibrant/[0.06] blur-3xl"
        />

        <div className="relative mx-auto w-full min-w-0 max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            {/* Brand column */}
            <div className="lg:col-span-5">
              <Link
                href="/"
                aria-label="Acumo home"
                className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-vibrant/60 focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
              >
                <Image
                  src="/acumo-logo2.png"
                  alt="Acumo Logo"
                  width={400}
                  height={100}
                  className="h-14 w-auto max-w-[200px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-transform duration-300 hover:scale-[1.03] sm:h-16"
                />
              </Link>

              <p className="mt-6 max-w-sm font-sans text-[15px] font-medium leading-[1.6] text-muted">
                Engineering infrastructure for the ambitious. We build systems that endure.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group mt-8 inline-flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-text-primary transition-colors hover:text-brand-light"
              >
                <span className={underline}>{CONTACT_EMAIL}</span>
              </a>

              <div className="mt-8">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-vibrant/60 focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
                >
                  <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10 flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-text-primary">
                    Book a free scoping call
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>

            {/* Link columns */}
            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:col-span-7"
            >
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title} className="min-w-0">
                  <h3 className="mb-6 flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary">
                    <span className="h-1.5 w-1.5 rounded-[2px] bg-brand-vibrant shadow-[0_0_8px_#2563FF]" aria-hidden="true" />
                    {column.title}
                  </h3>
                  <ul className="space-y-4">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <FooterNavLink link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center md:justify-between lg:mt-24">
            <div className="flex flex-col gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-muted/70 sm:flex-row sm:items-center sm:gap-6">
              <span>© {year} Acumo AI</span>
              <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true" />
              <span>Made with ❤️ for us, by us</span>
            </div>

            <div className="flex items-center justify-between gap-4 md:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/50 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                All systems operational
              </span>

              <a
                href="#"
                aria-label="Back to top"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-surface/50 text-muted transition-all duration-300 hover:border-brand-vibrant/50 hover:bg-brand-vibrant/10 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-vibrant/60"
              >
                <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <DotMatrixBanner />
    </>
  );
}
