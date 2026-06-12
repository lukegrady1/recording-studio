import { MicIcon, SlidersIcon, DiscIcon, WaveIcon } from "@/components/icons";

const map = {
  mic: MicIcon,
  sliders: SlidersIcon,
  disc: DiscIcon,
  wave: WaveIcon,
} as const;

export function ServiceGlyph({
  icon,
  className,
}: {
  icon: keyof typeof map;
  className?: string;
}) {
  const Glyph = map[icon] ?? MicIcon;
  return <Glyph className={className} />;
}
