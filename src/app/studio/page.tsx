import type { Metadata } from "next";
import Link from "next/link";
import { gear, rooms } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Equalizer } from "@/components/equalizer";
import { ArrowIcon, HeadphonesIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Tour Blu City Studio in Worcester, MA — three tracking rooms, an API console, and a curated locker of vintage and modern recording gear.",
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="The Space"
        index="02 / 05"
        title={
          <>
            Rooms built to
            <br />
            be <span className="text-blu">heard.</span>
          </>
        }
        intro="Acoustics aren't an afterthought here — they're the foundation. Treated rooms, tuned monitoring, and a gear locker we've spent over a decade curating."
      />

      {/* Rooms */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-5 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <Reveal
              key={room.name}
              delay={i}
              className="group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blu/40"
            >
              <div
                className="orb drift -right-10 -top-10 h-40 w-40 bg-blu-deep/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ animationDelay: `${i}s` }}
              />
              <div className="relative flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blu">
                  Room 0{i + 1}
                </span>
                <span className="font-mono text-xs text-fog">{room.size}</span>
              </div>
              <Equalizer
                bars={18}
                className="relative my-8 h-16 w-full opacity-40 transition-opacity group-hover:opacity-90"
              />
              <div className="relative">
                <h2 className="font-display text-2xl font-bold">{room.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-fog">{room.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Atmosphere band */}
      <section className="relative overflow-hidden border-y border-line bg-night">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal className="flex items-center gap-3">
            <HeadphonesIcon className="h-6 w-6 text-blu" />
            <span className="eyebrow">No bad seats</span>
          </Reveal>
          <Reveal
            as="p"
            delay={1}
            className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl"
          >
            &ldquo;A great room doesn&rsquo;t fix a bad performance — but it&rsquo;ll make a great
            one <span className="text-blu">unforgettable.</span>&rdquo;
          </Reveal>
        </div>
      </section>

      {/* Gear locker */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal className="eyebrow mb-4">The locker</Reveal>
            <Reveal as="h2" delay={1} className="text-display font-display font-bold">
              Gear that earns
              <br />
              its rack space.
            </Reveal>
          </div>
          <Reveal as="p" delay={2} className="max-w-sm text-sm leading-relaxed text-fog">
            A working selection — not the whole list. If you need a specific piece, ask. Odds are
            it&rsquo;s here or we know where to get it.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gear.map((g, i) => (
            <Reveal
              key={g.category}
              delay={i % 3}
              className="rounded-3xl border border-line bg-surface p-7"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-blu">
                {g.category}
              </h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 border-b border-line/60 pb-3 text-sm text-cloud/90 last:border-0 last:pb-0"
                  >
                    <span className="h-1 w-1 shrink-0 translate-y-1.5 rounded-full bg-blu" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1} className="mt-14 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-line bg-surface px-7 py-4 text-base font-medium text-cloud transition-colors hover:border-blu hover:text-blu"
          >
            Book a tour or session
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
