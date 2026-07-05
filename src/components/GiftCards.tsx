import { Gift } from "lucide-react";
import Image from "next/image";

export default function GiftCards() {
  return (
    <section id="gift-cards" className="bg-charcoal py-20 text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-honey-light">
            Gift Cards
          </p>
          <h2 className="mt-3 flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
            <Gift className="h-8 w-8 text-honey-light" />
            Share The Honey Hog
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Gift cards are available in any amount — perfect for the brisket lover,
            rib fanatic, or whole hog BBQ connoisseur in your life.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-honey px-7 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-honey-light"
          >
            Buy a Gift Card
          </a>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/honey-hog/pig1.jpg"
            alt="Farm-raised hog at The Honey Hog farm"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
