import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/logo";
import { PhoneIcon, PinIcon, ArrowIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-night">
      <div className="orb drift -top-32 right-0 h-72 w-72 bg-blu-deep/20" />

      {/* CTA band */}
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-line pb-16 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow mb-4">Ready when you are</p>
            <h2 className="text-display font-display font-bold">
              Let&rsquo;s make
              <br />
              something loud.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-blu px-7 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Book a session
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">{site.tagline}</p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fog">Explore</p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-cloud/90 transition-colors hover:text-blu"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fog">Find us</p>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm text-cloud/90 transition-colors hover:text-blu"
            >
              <PhoneIcon className="h-4 w-4 text-blu" /> {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="text-sm text-cloud/90 transition-colors hover:text-blu"
            >
              {site.email}
            </a>
            <p className="flex items-start gap-2 text-sm text-cloud/90">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-blu" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fog">Hours</p>
            {site.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4 text-sm">
                <span className="text-cloud/90">{h.day}</span>
                <span className="font-mono text-xs text-fog">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row sm:px-8">
          <p className="font-mono text-xs text-fog">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:text-cloud"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
