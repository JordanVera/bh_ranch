import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { PACKAGE_CATEGORIES } from '@/lib/packages';
import CtaStrip from '@/components/home/CtaStrip';

export const metadata: Metadata = {
  title: `Packages | ${COMPANY.name}`,
  description:
    'Wedding, quinceañera, family reunion, and party packages at BH Ranch — venue, decorations, tables, and chairs for 50 to 500 guests in Southwest Houston.',
};

export default function PackagesPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/wedding-reception-2/01-884651_orig.jpg"
          alt="BH Ranch celebration packages"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#A88D2E] uppercase">
            Special Packages
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Packages
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="leading-relaxed text-foreground/60">
            Choose a package sized for your guest count. Every option includes
            the venue, decorations, tables, and chairs. Catering is not
            included — call us to customize your celebration.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PACKAGE_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/packages/${category.slug}`}
              className="group relative overflow-hidden border border-border bg-card transition-colors hover:border-[#A88D2E]/50"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={category.heroImage}
                  alt={category.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0e0c08] via-[#0e0c08]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-1 text-[10px] tracking-[0.3em] text-[#A88D2E] uppercase">
                    {category.subtitle}
                  </p>
                  <h2 className="font-serif text-3xl text-white">
                    {category.title}
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-between p-6">
                <p className="max-w-sm text-sm leading-relaxed text-foreground/60">
                  {category.tiers.length} guest-count options from{' '}
                  {category.tiers[0].guests} to{' '}
                  {category.tiers[category.tiers.length - 1].guests} people.
                </p>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#A88D2E] uppercase transition-all group-hover:gap-3">
                  View
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
