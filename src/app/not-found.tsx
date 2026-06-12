import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5">
      <div className="orb drift -top-10 left-1/4 h-80 w-80 bg-blu-deep/25" />
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="relative text-center">
        <p className="eyebrow">Dead air</p>
        <h1 className="mt-4 font-display text-[6rem] font-extrabold leading-none text-blu sm:text-[10rem]">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-fog">
          This track didn&rsquo;t make the final cut. Let&rsquo;s get you back to the session.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-blu px-7 py-4 font-semibold text-ink transition-transform hover:scale-[1.03]"
        >
          Back to home
          <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
