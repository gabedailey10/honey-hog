import Image from "next/image";
import { siteInfo } from "@/lib/site-data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-charcoal text-cream"
    >
      <Image
        src="/images/honey-hog/honey-hog-outside-2.jpeg"
        alt="The Honey Hog restaurant"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-charcoal/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-brick/40 to-honey/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(217,153,44,0.35),transparent_60%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-honey-light">
          Morganton, NC
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
          {siteInfo.name}
        </h1>
        <p className="mt-6 text-lg font-medium text-cream/90 sm:text-xl">
          {siteInfo.tagline}
        </p>
        <p className="mt-4 text-base text-cream/70 sm:text-lg">
          {siteInfo.subTagline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="w-full rounded-full bg-honey px-8 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-honey-light sm:w-auto"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-cream/40 px-8 py-3 text-sm font-semibold text-cream transition-colors hover:border-honey-light hover:text-honey-light sm:w-auto"
          >
            Visit Us
          </a>
        </div>
      </div>
    </section>
  );
}
