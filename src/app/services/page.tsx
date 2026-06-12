import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { site } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ServiceGlyph } from "@/components/service-glyph";
import { ArrowIcon, CheckIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Recording, mixing, mastering, and full production at Blu City Studio in Worcester, MA. Transparent hourly and per-song rates.",
};

const addons = [
  { name: "Session musicians", note: "Drums, bass, keys, strings & more on call" },
  { name: "Top-line writing", note: "Melody & lyric co-writes with our producers" },
  { name: "Vocal tuning & comping", note: "Transparent, musical, never robotic" },
  { name: "Stem mastering", note: "For sync, film, and post-production delivery" },
  { name: "Overnight lockout", note: "Have the whole room to yourself till sunrise" },
  { name: "Mobile recording", note: "We bring the rig to your venue or rehearsal space" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Pricing"
        index="01 / 05"
        title={
          <>
            What it costs to
            <br />
            sound <span className="text-blu">expensive.</span>
          </>
        }
        intro="No mystery quotes, no hidden engineering fees. Here's exactly what we offer and what it runs — from a single vocal session to a fully produced record."
      />

      {/* Service detail blocks */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-5">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              id={s.id}
              as="article"
              className="group grid scroll-mt-28 gap-8 rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-blu/40 sm:p-10 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-sm text-fog">0{i + 1}</span>
              </div>

              <div className="lg:col-span-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-ink text-blu">
                    <ServiceGlyph icon={s.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="font-display text-3xl font-bold">{s.title}</h2>
                </div>
                <p className="mt-5 max-w-xl leading-relaxed text-fog">{s.blurb}</p>
              </div>

              <div className="lg:col-span-3">
                <ul className="space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-cloud/90">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-blu" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start gap-3 lg:col-span-2 lg:items-end lg:text-right">
                <span className="font-display text-2xl font-bold text-blu">{s.price}</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cloud transition-colors hover:text-blu link-sweep"
                >
                  Book <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="border-y border-line bg-night py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="eyebrow mb-4">Take it further</Reveal>
          <Reveal as="h2" delay={1} className="text-display font-display font-bold">
            Add-ons & extras.
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((a, i) => (
              <Reveal
                key={a.name}
                delay={i % 3}
                className="bg-surface p-7 transition-colors hover:bg-surface-2"
              >
                <h3 className="font-display text-lg font-bold">{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{a.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Block-booking note + CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-10 rounded-3xl border border-line noise-panel p-8 sm:p-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal className="eyebrow mb-4">Doing a whole project?</Reveal>
            <Reveal as="h2" delay={1} className="text-display font-display font-bold">
              Day rates &amp; EP packages.
            </Reveal>
            <Reveal as="p" delay={2} className="mt-5 max-w-xl text-fog">
              Tracking an EP or album? We build flat-rate packages around your song count and
              timeline so you can budget once and stay in the creative zone. Tell us what
              you&rsquo;re making and we&rsquo;ll put numbers to it the same day.
            </Reveal>
          </div>
          <Reveal delay={2} className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-blu px-7 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Get a custom quote
              <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-7 py-4 text-base font-medium text-cloud transition-colors hover:border-blu hover:text-blu"
            >
              <PhoneIcon className="h-5 w-5" /> {site.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
