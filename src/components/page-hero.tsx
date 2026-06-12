import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  index,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  index: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="orb -top-24 -left-24 h-80 w-80 bg-blu-deep/25" />
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex items-center gap-4">
          <span className="eyebrow">{eyebrow}</span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-xs text-fog">{index}</span>
        </Reveal>
        <Reveal as="h1" delay={1} className="mt-6 max-w-4xl text-hero font-display font-bold">
          {title}
        </Reveal>
        {intro && (
          <Reveal as="p" delay={2} className="mt-8 max-w-2xl text-lg leading-relaxed text-fog">
            {intro}
          </Reveal>
        )}
      </div>
    </section>
  );
}
