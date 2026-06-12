import Link from "next/link";
import { site } from "@/lib/site";
import { services, stats, steps, testimonials } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { Equalizer } from "@/components/equalizer";
import { ServiceGlyph } from "@/components/service-glyph";
import { ArrowIcon, PhoneIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="orb drift -top-20 -left-10 h-[28rem] w-[28rem] bg-blu-deep/30" />
        <div
          className="orb drift right-0 top-1/3 h-80 w-80 bg-amber/10"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background: "linear-gradient(to top, var(--color-ink), transparent)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="flex items-center gap-3">
            <span className="rec-dot h-2.5 w-2.5 rounded-full bg-rec" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-fog">
              Now recording · {site.city}
            </span>
          </Reveal>

          <h1 className="mt-8 text-hero font-display font-extrabold">
            <Reveal as="span" delay={1} className="block">
              Where the
            </Reveal>
            <Reveal as="span" delay={2} className="block text-blu">
              city gets loud.
            </Reveal>
          </h1>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={3} className="max-w-xl">
              <p className="text-lg leading-relaxed text-fog">
                {site.name}{" "}is Worcester&rsquo;s late-night sound laboratory — a full-service
                recording, mixing, and mastering studio built for artists who care how the record
                actually <span className="text-cloud">feels</span>.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-blu px-7 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
                >
                  Book a session
                  <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-6 py-4 text-base font-medium text-cloud backdrop-blur transition-colors hover:border-blu hover:text-blu"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {site.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={4} className="hidden shrink-0 lg:block">
              <Equalizer bars={40} className="h-28 w-72 opacity-90" />
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ============ STATS ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i} className="bg-surface px-6 py-10 text-center sm:py-12">
              <div className="font-display text-5xl font-bold text-cloud sm:text-6xl">
                {s.value}
                <span className="text-blu">{s.suffix}</span>
              </div>
              <div className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-fog">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="relative border-y border-line bg-night py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal className="eyebrow mb-4">What we do</Reveal>
              <Reveal as="h2" delay={1} className="text-display font-display font-bold">
                Every stage,
                <br />
                under one roof.
              </Reveal>
            </div>
            <Reveal delay={2}>
              <Link
                href="/services"
                className="link-sweep inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-blu"
              >
                All services &amp; pricing <ArrowIcon className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i % 2}>
                <Link
                  href={`/services#${s.id}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blu/50 hover:bg-surface-2"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-ink text-blu transition-colors group-hover:bg-blu group-hover:text-ink">
                      <ServiceGlyph icon={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-xs text-fog">{s.price}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{s.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cloud transition-colors group-hover:text-blu">
                    Learn more
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="eyebrow mb-4">The workflow</Reveal>
        <Reveal as="h2" delay={1} className="max-w-2xl text-display font-display font-bold">
          From voice memo to finished master.
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i}
              className="group relative bg-surface p-7 transition-colors hover:bg-surface-2"
            >
              <span className="font-display text-5xl font-bold text-line transition-colors group-hover:text-blu">
                {step.n}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="relative overflow-hidden border-y border-line bg-night py-20 sm:py-28">
        <div className="orb drift bottom-0 left-1/4 h-72 w-72 bg-blu-deep/20" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="eyebrow mb-4">Word on the street</Reveal>
          <Reveal as="h2" delay={1} className="text-display font-display font-bold">
            Heard around the block.
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i}
                className="flex flex-col rounded-3xl border border-line bg-surface p-7"
              >
                <span className="font-display text-5xl leading-none text-blu">&ldquo;</span>
                <p className="-mt-2 flex-1 text-base leading-relaxed text-cloud/90">{t.quote}</p>
                <div className="mt-6 border-t border-line pt-5">
                  <div className="font-display font-bold">{t.name}</div>
                  <div className="font-mono text-xs text-fog">{t.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOURS / VISIT STRIP ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-10 rounded-3xl border border-line noise-panel p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <Reveal className="eyebrow mb-4">Drop in</Reveal>
            <Reveal as="h2" delay={1} className="text-display font-display font-bold">
              Open late, by design.
            </Reveal>
            <Reveal as="p" delay={2} className="mt-5 max-w-md text-fog">
              The best ideas rarely show up at 9am. We keep the doors open into the small hours and
              offer overnight lockouts for projects that need to breathe.
            </Reveal>
          </div>
          <Reveal delay={2} className="divide-y divide-line">
            {site.hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between py-4">
                <span className="font-display text-lg font-medium">{h.day}</span>
                <span className="font-mono text-sm text-blu">{h.time}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
