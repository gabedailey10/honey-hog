import { Gift } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

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
            Gift cards are available in any amount — perfect for the steak lover,
            burger fanatic, or cheese curd connoisseur in your life.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-honey px-7 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-honey-light"
          >
            Buy a Gift Card
          </a>
        </div>

        <PlaceholderImage
          label="Gift Card"
          index={1}
          className="aspect-[16/10] w-full rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
