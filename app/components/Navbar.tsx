"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#case-studies", label: "Our Work" },
  { href: "/articles", label: "Articles" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = ["services", "process", "case-studies"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const linkClass = (section: string) =>
    `font-sans text-[11px] sm:text-xs uppercase tracking-wider rounded-full px-3 py-1.5 transition-all duration-300 ${activeSection === section
      ? "text-text-primary bg-stroke/60 font-bold"
      : "text-muted hover:text-text-primary hover:bg-stroke/40"
    }`;

  return (
    <>
      {/* Mobile & tablet header */}
      <header className="fixed top-0 left-0 right-0 z-[100] w-full lg:hidden">
        <div className="w-full bg-black border-b border-white/10 shadow-lg shadow-black/40">
          <div className="flex h-14 items-center justify-between gap-3 px-4 sm:px-6">
            <Link href="/" className="min-w-0 shrink" onClick={closeMenu}>
              <Image
                src="/acumo-logo2.png"
                alt="Acumo Logo"
                width={200}
                height={50}
                className="h-8 w-auto max-w-[130px] sm:max-w-[150px] object-contain"
                priority
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface/80"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5 text-text-primary" />
              ) : (
                <Menu className="h-5 w-5 text-text-primary" />
              )}
            </button>
          </div>

          {isOpen && (
            <nav
              className="border-t border-white/10 bg-black px-4 pb-6 pt-2 sm:px-6"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map(({ href, label }) => {
                  const targetHref = href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
                  return (
                    <li key={href}>
                      <Link
                        href={targetHref}
                        onClick={closeMenu}
                        className="block border-b border-white/5 py-4 font-sans text-sm font-bold uppercase tracking-widest text-muted transition-colors hover:text-text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link
                href={pathname !== "/" ? "/#inquiry" : "#inquiry"}
                onClick={closeMenu}
                className="mt-5 flex w-full items-center justify-center rounded-full border border-white/10 bg-surface px-5 py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-text-primary"
              >
                Start Project <span className="ml-1 text-sm font-normal">↗</span>
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Desktop header */}
      <header className="pointer-events-none fixed top-0 left-0 right-0 z-[100] hidden w-full lg:block lg:px-12 lg:pt-6">
        <div
          className={`pointer-events-auto mx-auto flex w-full max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-surface/45 px-10 py-3.5 backdrop-blur-lg transition-all duration-300 ${scrolled ? "border-white/15 bg-surface/65 py-3 shadow-md shadow-black/30" : ""
            }`}
        >
          <div className="flex items-center gap-2">
            {NAV_LINKS.map(({ href, label }) => {
              const targetHref = href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
              const sectionId = href.startsWith("#") ? href.slice(1) : href.slice(1);
              return (
                <Link
                  key={href}
                  href={targetHref}
                  className={linkClass(sectionId)}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/acumo-logo2.png"
              alt="Acumo Logo"
              width={320}
              height={80}
              className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] transition-transform duration-300 hover:scale-[1.03]"
              priority
            />
          </Link>

          <Link
            href={pathname !== "/" ? "/#inquiry" : "#inquiry"}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-1 rounded-full border border-white/5 bg-surface px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
              Start Project <span className="text-[11px] font-normal">↗</span>
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}
