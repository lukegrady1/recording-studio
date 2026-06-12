import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Blu City Studio — home"
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-full border border-line bg-surface">
        <span className="rec-dot h-2.5 w-2.5 rounded-full bg-rec" />
      </span>
      <span className="font-display text-lg font-bold leading-none tracking-tight">
        BLU<span className="text-blu">·</span>CITY
        <span className="ml-1 align-middle text-[0.6rem] font-mono font-normal tracking-[0.25em] text-fog">
          STUDIO
        </span>
      </span>
    </Link>
  );
}
