import { FileText } from "lucide-react";
import { menus } from "@/lib/site-data";

export default function Menu() {
  return (
    <section id="menu" className="bg-cream py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brick">
          Menu
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
          Slow-Smoked, Whole Hog BBQ
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
          Take a look at what we&apos;re serving up. Menus are updated seasonally to
          feature the best of what&apos;s locally available.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {menus.map((m) => (
            <a
              key={m.href}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border border-charcoal/10 bg-white/60 px-6 py-8 text-lg font-semibold text-charcoal shadow-sm transition-all hover:-translate-y-0.5 hover:border-honey hover:shadow-md"
            >
              <FileText className="h-6 w-6 text-brick" />
              {m.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
