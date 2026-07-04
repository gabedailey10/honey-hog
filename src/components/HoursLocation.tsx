import { Clock, MapPin, Phone } from "lucide-react";
import { hours, siteInfo } from "@/lib/site-data";

export default function HoursLocation() {
  return (
    <section id="contact" className="bg-charcoal py-20 text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-honey-light">
            Hours
          </p>
          <h2 className="mt-3 flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
            <Clock className="h-8 w-8 text-honey-light" />
            When We&apos;re Open
          </h2>
          <dl className="mt-8 divide-y divide-cream/10">
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between py-2.5 text-sm sm:text-base">
                <dt className="font-medium text-cream/80">{h.day}</dt>
                <dd className="text-cream">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-honey-light">
            Find Us
          </p>
          <h2 className="mt-3 flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
            <MapPin className="h-8 w-8 text-honey-light" />
            Come On By
          </h2>

          <div className="mt-8 space-y-5">
            <a
              href="https://maps.google.com/?q=3221+NC-126,+Morganton,+NC+28655"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-cream/90 hover:text-honey-light"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
              <span>{siteInfo.address}</span>
            </a>
            <a
              href={siteInfo.phoneHref}
              className="flex items-center gap-3 text-cream/90 hover:text-honey-light"
            >
              <Phone className="h-5 w-5 shrink-0" />
              <span>{siteInfo.phone}</span>
            </a>
          </div>

          <a
            href="https://maps.google.com/?q=3221+NC-126,+Morganton,+NC+28655"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-honey px-7 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-honey-light"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
