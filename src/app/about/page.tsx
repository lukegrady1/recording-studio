import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { stats } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Blu City Studio — a Worcester, Massachusetts recording studio built by engineers who care how the record feels.",
};

const team = [
  {
    name: "Marcus Bell",
    role: "Founder · Lead Engineer",
    bio: "Twelve years behind the console and counting. Marcus built Blu City around one rule: the artist's vision wins, every time.",
    tag: "Tracking · Mixing",
  },
  {
    name: "Priya Desai",
    role: "Producer · Mix Engineer",
    bio: "Equal parts technician and translator. Priya turns half-formed ideas into arrangements that hit on the first listen.",
    tag: "Production · Top-line",
  },
  {
    name: "Theo Quinn",
    role: "Mastering Engineer",
    bio: "The last set of ears before your music meets the world. Obsessive about translation across every speaker on earth.",
    tag: "Mastering · QC",
  },
];

const values = [
  {
    title: "Performance first",
    desc: "Gear matters, but a take with feeling beats a clean one without it. We chase the moment, then make it sound incredible.",
  },
  {
    title: "No clock anxiety",
    desc: "Transparent rates and honest timelines. You'll never watch the meter run because we forgot to plan the session.",
  },
  {
    title: "Built in Worcester",
    desc: "We're proud of this city and its scene. Local artists get our full attention — and our home-team rates.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        index="03 / 05"
        title={
          <>
            A studio with
            <br />
            a <span className="text-blu">point of view.</span>
          </>
        }
        intro={`${site.name} started in a cramped basement with one good microphone and too many ideas. A decade later, it's one of Worcester's most trusted rooms — but the obsession hasn't changed.`}
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="space-y-6 text-lg leading-relaxed text-fog">
            <p>
              We opened the doors because Worcester deserved a room as serious as its talent. Too
              many great local artists were driving to Boston or settling for bedroom setups that
              couldn&rsquo;t do their songs justice.
            </p>
            <p>
              So we built the room <span className="text-cloud">we</span> always wanted to record
              in — treated acoustics, a console with character, and a workflow that keeps the energy
              up instead of killing it with technical detours.
            </p>
            <p>
              Today we track everything from solo singer-songwriters to full live bands, score
              indie films, cut podcasts, and master records that land on playlists worldwide. The
              common thread is care. We treat your project like it&rsquo;s the only one that matters
              — because while you&rsquo;re here, it is.
            </p>
          </Reveal>

          <Reveal delay={1} className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-6 py-10 text-center">
                <div className="font-display text-4xl font-bold text-cloud sm:text-5xl">
                  {s.value}
                  <span className="text-blu">{s.suffix}</span>
                </div>
                <div className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-fog">
                  {s.label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-night py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="eyebrow mb-4">What we believe</Reveal>
          <Reveal as="h2" delay={1} className="text-display font-display font-bold">
            House rules.
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i} className="bg-surface p-8">
                <span className="font-display text-5xl font-bold text-line">0{i + 1}</span>
                <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="eyebrow mb-4">Behind the glass</Reveal>
        <Reveal as="h2" delay={1} className="text-display font-display font-bold">
          The people on the faders.
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal
              key={member.name}
              delay={i}
              className="group overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-blu/40"
            >
              <div className="relative flex h-44 items-end overflow-hidden bg-gradient-to-br from-surface-2 to-ink p-6">
                <div className="absolute inset-0 grid-lines opacity-40" />
                <div
                  className="orb drift -right-8 -top-8 h-28 w-28 bg-blu-deep/30"
                  style={{ animationDelay: `${i}s` }}
                />
                <span className="relative font-display text-6xl font-bold text-blu/30">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-blu">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fog">{member.bio}</p>
                <span className="mt-5 inline-block rounded-full border border-line px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-fog">
                  {member.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1} className="mt-14 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-blu px-7 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Work with us
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
