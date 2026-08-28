import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import { COMPANY } from '@/lib/data';
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio';

export const metadata: Metadata = {
  title: `Gallery | ${COMPANY.name}`,
  description:
    'Browse photos from weddings, quinceañeras, birthday parties, and celebrations hosted at BH Ranch in Southwest Houston.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/bh-ranch-gallery/01-SANY2888.jpg"
          alt="BH Ranch event gallery"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#A88D2E] uppercase">
            Our Events
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Gallery
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="leading-relaxed text-foreground/60">
            {PORTFOLIO_PROJECTS.length} collections from real events at BH
            Ranch — weddings, quinceañeras, birthday parties, and more. Ready
            to host yours?{' '}
            <Link href="/contact" className="text-[#A88D2E] hover:underline">
              Get in touch
            </Link>{' '}
            to schedule a tour.
          </p>
        </div>

        <PortfolioGrid />

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex bg-[#A88D2E] px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#bda962]"
          >
            Book Your Event
          </Link>
        </div>
      </section>
    </>
  );
}
