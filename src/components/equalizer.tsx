/** Decorative animated equalizer bars. Purely visual. */
export function Equalizer({
  bars = 28,
  className = "",
}: {
  bars?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`flex items-end gap-[3px] ${className}`}
    >
      {Array.from({ length: bars }).map((_, i) => {
        // deterministic pseudo-random heights/timings (no Math.random for SSR stability)
        const h = 20 + ((i * 37) % 80);
        const dur = 0.7 + ((i * 13) % 9) / 10;
        const delay = ((i * 7) % 11) / 10;
        return (
          <span
            key={i}
            className="eq-bar w-[3px] rounded-full bg-gradient-to-t from-blu-deep to-blu"
            style={{
              height: `${h}%`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
