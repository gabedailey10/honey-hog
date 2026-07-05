import Image from "next/image";
import { siteInfo, socialLinks } from "@/lib/site-data";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.14C15.98 3.1 15.03 3 13.92 3 11.6 3 10 4.42 10 7.15v2.45H7.25v3.2H10V21h3.5Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const icons = { Facebook: FacebookIcon, Instagram: InstagramIcon };

export default function Footer() {
  return (
    <footer className="bg-[#150f0a] py-10 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:text-left">
          <Image
            src="/images/logo.png"
            alt={`${siteInfo.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="font-display text-lg font-bold text-honey-light">
              {siteInfo.name}
            </p>
            <p className="mt-1 text-sm">{siteInfo.address}</p>
            <p className="text-sm">{siteInfo.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((s) => {
            const Icon = icons[s.label as keyof typeof icons];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-full border border-cream/20 p-2 transition-colors hover:border-honey-light hover:text-honey-light"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <p className="text-xs">
          &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
