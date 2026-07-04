import PlaceholderImage from "./PlaceholderImage";
import { galleryImages } from "@/lib/site-data";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal py-20 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-honey-light">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            A Taste of What&apos;s Cooking
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <PlaceholderImage
              key={img.id}
              index={i}
              className="aspect-square w-full rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
