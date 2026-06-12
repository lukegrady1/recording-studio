export const services = [
  {
    id: "recording",
    icon: "mic",
    title: "Recording & Tracking",
    blurb:
      "Full-band live tracking or layered overdubs in an acoustically treated room. Pristine signal chains, zero-latency monitoring, and an engineer who keeps the vibe moving.",
    price: "from $65/hr",
    points: ["Live room + 2 iso booths", "Vintage & modern mics", "Up to 24 simultaneous inputs"],
  },
  {
    id: "mixing",
    icon: "sliders",
    title: "Mixing",
    blurb:
      "Your rough tracks turned into a finished record — balance, depth, punch, and width. Hybrid analog/digital chain so your mix breathes and hits.",
    price: "from $250/song",
    points: ["Hybrid analog summing", "Stem & recall included", "Two revision rounds"],
  },
  {
    id: "mastering",
    icon: "disc",
    title: "Mastering",
    blurb:
      "The final polish. Loud, translation-ready, and consistent across every speaker, earbud, and streaming platform — without crushing the life out of it.",
    price: "from $90/song",
    points: ["Streaming-optimized loudness", "DDP / WAV / MP3 delivery", "24-hour turnaround"],
  },
  {
    id: "production",
    icon: "wave",
    title: "Production",
    blurb:
      "Come in with a voice memo, leave with a record. Beat-making, arrangement, session musicians, and top-line writing — we build the whole thing with you.",
    price: "custom quote",
    points: ["Beat & instrumental creation", "Session players on call", "Arrangement & co-writing"],
  },
] as const;

export const stats = [
  { value: "12", suffix: "yrs", label: "Behind the glass" },
  { value: "1.4", suffix: "k+", label: "Sessions tracked" },
  { value: "3", suffix: "", label: "Tracking rooms" },
  { value: "24", suffix: "/7", label: "Lockout available" },
] as const;

export const gear = [
  { category: "Console", items: ["API 1608-II 16-channel", "Hybrid in-the-box workflow"] },
  { category: "Monitors", items: ["Focal Trio6 Be", "Yamaha NS-10M", "Auratone 5C"] },
  {
    category: "Microphones",
    items: ["Neumann U87 Ai", "AKG C414 (pair)", "Shure SM7B", "Royer R-121 ribbon"],
  },
  {
    category: "Outboard",
    items: ["Universal Audio 1176", "Tube-Tech CL 1B", "Neve 1073 pre (x2)", "API 512c (x4)"],
  },
  { category: "Converters", items: ["Apogee Symphony I/O", "Antelope Orion 32+"] },
  {
    category: "Instruments",
    items: ["Yamaha C3 grand piano", "1972 Fender Rhodes", "DW Collector's kit", "Vintage amp wall"],
  },
] as const;

export const rooms = [
  {
    name: "The Live Room",
    size: "480 sq ft",
    desc: "High ceilings, variable acoustics, and a drum riser that makes kits sound enormous. Sightlines to every booth.",
  },
  {
    name: "Control Room A",
    size: "320 sq ft",
    desc: "The nerve center. API console, a wall of outboard, and a monitoring setup tuned for decisions you can trust.",
  },
  {
    name: "Vocal Booth",
    size: "60 sq ft",
    desc: "Dead-quiet and dialed for intimacy. Where the takes that give you chills actually happen.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Tell us the vision",
    desc: "A quick call or message about your project — genre, scope, references, and timeline.",
  },
  {
    n: "02",
    title: "We map the session",
    desc: "Clear plan, clear quote. You know exactly what we're cutting and how long it takes.",
  },
  {
    n: "03",
    title: "Get behind the glass",
    desc: "Show up and play. We handle the technical so you can stay in the creative.",
  },
  {
    n: "04",
    title: "Leave with a record",
    desc: "Mixed, mastered, and delivery-ready for streaming, sync, or the pressing plant.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Walked in with a phone demo, walked out with a single that got us our first playlist placement. The room sounds unreal.",
    name: "Marisol Vega",
    role: "Indie artist · Worcester",
  },
  {
    quote:
      "We tracked a full live record in two days. The engineering was flawless and nobody rushed the takes. Rare combo.",
    name: "The Tin Heralds",
    role: "Four-piece rock band",
  },
  {
    quote:
      "Best mastering I've had on the East Coast. It translated perfectly everywhere — car, AirPods, club system.",
    name: "DJ Halcyon",
    role: "Producer · Boston",
  },
] as const;
