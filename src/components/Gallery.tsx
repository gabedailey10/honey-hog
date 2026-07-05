"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/lib/site-data";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
        );
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  const activeImage = openIndex !== null ? galleryImages[openIndex] : null;

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
            <button
              key={img.id}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Enlarge photo: ${img.alt}`}
              className="group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute right-4 top-4 text-cream/80 transition-colors hover:text-honey-light"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) =>
                i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
              );
            }}
            className="absolute left-2 text-cream/80 transition-colors hover:text-honey-light sm:left-4"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>

          <div
            className="relative h-full max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={activeImage.id}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
            }}
            className="absolute right-2 text-cream/80 transition-colors hover:text-honey-light sm:right-4"
          >
            <ChevronRight className="h-9 w-9" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
