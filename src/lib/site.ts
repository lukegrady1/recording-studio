export const site = {
  name: "Blu City Studio",
  shortName: "Blu City",
  tagline: "Worcester's late-night sound laboratory.",
  description:
    "Blu City Studio is a professional recording, mixing, and mastering studio in Worcester, Massachusetts. Tracking rooms, vintage outboard gear, and engineers who actually listen.",
  phone: "(508) 849-1124",
  phoneHref: "tel:+15088491124",
  email: "booking@blucitystudio.com",
  emailHref: "mailto:booking@blucitystudio.com",
  city: "Worcester, Massachusetts",
  address: {
    line1: "Canal District",
    line2: "Worcester, MA 01608",
  },
  hours: [
    { day: "Mon – Thu", time: "10:00 — 22:00" },
    { day: "Fri – Sat", time: "10:00 — 02:00" },
    { day: "Sunday", time: "By appointment" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "SoundCloud", href: "https://soundcloud.com" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "The Studio", href: "/studio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
