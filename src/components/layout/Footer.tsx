import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/data';
import SocialLinks from '@/components/layout/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-[#0e0c08] text-white/70">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-main.png"
                alt={COMPANY.name}
                width={140}
                height={86}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              {COMPANY.tagline} — Southwest Houston&apos;s premier venue for
              weddings, quinceañeras, reunions, and celebrations.
            </p>
            <SocialLinks />
          </div>
          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--gold,#C9A84C)]"
                  >
                    {link.label}
                  </Link>
                  {link.children ? (
                    <ul className="mt-2 flex flex-col gap-2 pl-3">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="text-sm text-white/50 transition-colors hover:text-[var(--gold,#C9A84C)]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="text-sm">
                11-acre event venue with covered pavilion and gazebo
              </li>
              <li className="text-sm">
                Event decorating and coordination
              </li>
              <li className="text-sm">
                Wedding packages (50–500 guests) with decorations
              </li>
              <li className="text-sm">
                Catering coordination and full kitchen
              </li>
              <li className="text-sm">
                Tables, chairs, chair covers, table covers, and themed sashes
              </li>
              <li className="text-sm">
                Granite countertop bars and optional bartender
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-2">
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap sm:gap-8">
              <li>
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex items-center gap-3 transition-colors hover:text-[var(--gold,#C9A84C)]"
                >
                  <Phone
                    size={14}
                    className="flex-shrink-0 text-[var(--gold,#C9A84C)]"
                  />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-[var(--gold,#C9A84C)]"
                >
                  <Mail
                    size={14}
                    className="flex-shrink-0 text-[var(--gold,#C9A84C)]"
                  />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-[var(--gold,#C9A84C)]"
                />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.city}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/30 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
          <p>Greater Houston, Texas</p>
        </div>
      </div>
    </footer>
  );
}
