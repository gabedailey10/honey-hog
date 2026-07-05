import Image from "next/image";
import { siteInfo } from "@/lib/site-data";

export default function About() {
  return (
    <section id="about" className="bg-cream py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/honey-hog/food1.jpg"
            alt="BBQ dish at The Honey Hog"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brick">
            About Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Farmer owned. Community driven.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
            {siteInfo.about}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-charcoal px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brick"
          >
            See Our Hours
          </a>
        </div>
      </div>
    </section>
  );
}
