const items = [
  "Tracking",
  "Mixing",
  "Mastering",
  "Production",
  "Vocal Comping",
  "Podcasts",
  "Voiceover",
  "Live Sessions",
  "Re-Amping",
  "Sound Design",
];

export function Marquee() {
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-night py-5">
      <div className="marquee-track gap-10">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-xl font-medium text-cloud/80">{item}</span>
            <span className="text-blu">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
