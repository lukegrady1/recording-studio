"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/logo";
import { MenuIcon, CloseIcon, PhoneIcon } from "@/components/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-sweep font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                  active ? "text-blu" : "text-fog hover:text-cloud"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 font-mono text-xs tracking-wide text-cloud transition-all hover:border-blu hover:text-blu sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="hidden rounded-full bg-blu px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] lg:inline-block"
          >
            Book a session
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-cloud md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-line bg-ink/95 backdrop-blur-xl transition-[max-height] duration-500 md:hidden ${
          open ? "max-h-96 border-b" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-lg transition-colors ${
                  active ? "bg-surface text-blu" : "text-cloud hover:bg-surface"
                }`}
              >
                {item.label}
                <span className="font-mono text-xs text-fog">0{nav.indexOf(item) + 1}</span>
              </Link>
            );
          })}
          <a
            href={site.phoneHref}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blu px-4 py-3 font-semibold text-ink"
          >
            <PhoneIcon className="h-4 w-4" /> {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
