import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { PhoneIcon, PinIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: `Book a session at Blu City Studio in Worcester, MA. Call ${site.phone} or send a booking request.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Booking"
        index="04 / 05"
        title={
          <>
            Let&rsquo;s get you
            <br />
            <span className="text-blu">behind the glass.</span>
          </>
        }
        intro="Tell us what you're making and when you want to make it. We answer every request within one business day — or just call the studio and talk to a human."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: details */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <a
                href={site.phoneHref}
                className="group flex items-center gap-5 rounded-3xl border border-line noise-panel p-7 transition-colors hover:border-blu/50"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blu text-ink">
                  <PhoneIcon className="h-7 w-7" />
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.2em] text-fog">
                    Call the studio
                  </span>
                  <span className="block font-display text-2xl font-bold transition-colors group-hover:text-blu">
                    {site.phone}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={1}>
              <a
                href={site.emailHref}
                className="group flex items-center gap-5 rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-blu/50"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-ink text-blu">
                  <span className="font-display text-2xl font-bold">@</span>
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.2em] text-fog">
                    Email
                  </span>
                  <span className="block font-display text-lg font-bold transition-colors group-hover:text-blu">
                    {site.email}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={2} className="rounded-3xl border border-line bg-surface p-7">
              <div className="flex items-center gap-3">
                <PinIcon className="h-5 w-5 text-blu" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
                  Where we are
                </span>
              </div>
              <p className="mt-4 font-display text-lg font-medium">
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
              <p className="mt-2 text-sm text-fog">
                Parking on-site. Load-in access for full bands.
              </p>
            </Reveal>

            <Reveal delay={3} className="rounded-3xl border border-line bg-surface p-7">
              <div className="flex items-center gap-3">
                <ClockIcon className="h-5 w-5 text-blu" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
                  Studio hours
                </span>
              </div>
              <div className="mt-4 divide-y divide-line">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between py-3">
                    <span className="font-display font-medium">{h.day}</span>
                    <span className="font-mono text-sm text-blu">{h.time}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
