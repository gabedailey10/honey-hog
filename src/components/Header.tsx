"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteInfo } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-cream shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={`${siteInfo.name} logo`}
            width={44}
            height={44}
            className="h-10 w-10 rounded-full sm:h-11 sm:w-11"
            priority
          />
          <span className="font-display text-xl font-bold tracking-wide text-honey-light sm:text-2xl">
            {siteInfo.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cream/90 transition-colors hover:text-honey-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteInfo.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-cream/90 hover:text-honey-light"
          >
            <Phone className="h-4 w-4" />
            {siteInfo.phone}
          </a>
          <a
            href="#menu"
            className="rounded-full bg-honey px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-honey-light"
          >
            Order Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-cream/10 px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-cream/90 hover:bg-cream/5 hover:text-honey-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-honey px-5 py-2.5 text-center text-sm font-semibold text-charcoal"
          >
            Order Now
          </a>
        </nav>
      ) : null}
    </header>
  );
}
