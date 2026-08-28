import Link from 'next/link';
import { Check, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import {
  formatPackagePrice,
  type PackageTier,
} from '@/lib/packages';

export default function PackageTiers({ tiers }: { tiers: PackageTier[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {tiers.map((tier) => (
        <article
          key={tier.guests}
          className="flex flex-col border border-border bg-card p-7"
        >
          <p className="text-[10px] tracking-[0.3em] text-[#A88D2E] uppercase">
            {tier.guests} People
          </p>
          <p className="mt-3 font-serif text-4xl text-foreground">
            {formatPackagePrice(tier.price)}
          </p>
          <p className="mt-1 text-xs tracking-wide text-foreground/40">
            Venue package
          </p>
          <p className="mt-6 text-[10px] tracking-[0.25em] text-foreground/40 uppercase">
            Includes
          </p>
          <ul className="mt-3 flex flex-1 flex-col gap-2.5">
            {tier.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground/70"
              >
                <Check
                  size={14}
                  className="mt-0.5 shrink-0 text-[#A88D2E]"
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-2">
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 bg-[#A88D2E] px-4 py-3 text-xs font-medium tracking-[0.2em] text-black uppercase transition-colors hover:bg-[#bda962]"
            >
              <Phone size={13} />
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-border px-4 py-3 text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-[#A88D2E] hover:text-[#A88D2E]"
            >
              Inquire
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
