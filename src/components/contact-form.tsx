"use client";

import { useState } from "react";
import { ArrowIcon, CheckIcon } from "@/components/icons";

const services = [
  "Recording / Tracking",
  "Mixing",
  "Mastering",
  "Full Production",
  "Podcast / Voiceover",
  "Not sure yet",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(services[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end demo only — wire up to your email service / CRM of choice.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-line noise-panel px-8 py-20 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-blu text-ink">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="font-display text-2xl font-bold">You&rsquo;re on the list.</h3>
        <p className="max-w-sm text-fog">
          Thanks for reaching out. We&rsquo;ll get back to you within one business day to lock in
          your session.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-blu link-sweep"
        >
          Send another
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-cloud placeholder:text-fog/60 outline-none transition-colors focus:border-blu";
  const labelClass = "mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-fog";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line noise-panel p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" required placeholder="Jane Doe" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass}>What do you need?</label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setService(s)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                service === s
                  ? "border-blu bg-blu/15 text-blu"
                  : "border-line bg-surface text-fog hover:text-cloud"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <input type="hidden" name="service" value={service} />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Genre, number of songs, target dates, references…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-blu px-7 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.01]"
      >
        Send booking request
        <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-center font-mono text-xs text-fog">
        Prefer to talk? Call the studio directly.
      </p>
    </form>
  );
}
