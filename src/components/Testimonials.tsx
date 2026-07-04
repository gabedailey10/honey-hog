import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brick">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            What Folks Are Saying
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-charcoal/10 bg-white/60 p-6 shadow-sm"
            >
              <Quote className="h-6 w-6 text-honey" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-brick">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
