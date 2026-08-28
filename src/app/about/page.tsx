import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ABOUT_CONTENT, COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `About | ${COMPANY.name}`,
  description:
    'Learn about BH Ranch — an 11-acre Southwest Houston event venue with a covered pavilion, gazebo, full kitchen, and stage for weddings, quinceañeras, and celebrations.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="BH Ranch event venue"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#A88D2E] text-[10px] tracking-[0.4em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">About</h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="relative aspect-[4/3] w-full mx-auto lg:mx-0 overflow-hidden lg:col-span-1">
            <Image
              src="/venue-front.jpg"
              alt="BH Ranch venue entrance"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div>
              <p className="text-[#A88D2E] text-[10px] tracking-[0.35em] uppercase mb-4">
                Southwest Houston
              </p>
              <h2 className="font-serif text-foreground text-4xl sm:text-5xl leading-tight">
                {COMPANY.name}
              </h2>
              <p className="text-[#A88D2E] text-sm tracking-[0.15em] uppercase mt-2">
                {COMPANY.tagline}
              </p>
            </div>

            <p className="text-foreground/65 leading-relaxed text-base sm:text-lg">
              {ABOUT_CONTENT.intro}
            </p>

            <p className="text-foreground/65 leading-relaxed text-base sm:text-lg">
              {ABOUT_CONTENT.body}
            </p>

            <p className="text-foreground/65 leading-relaxed text-base sm:text-lg">
              {ABOUT_CONTENT.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex justify-center px-8 py-3.5 bg-[#A88D2E] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#bda962] transition-colors duration-200"
              >
                Book a Tour
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex justify-center px-8 py-3.5 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-[#A88D2E] hover:text-[#A88D2E] transition-all duration-200"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-[#0e0c08]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#A88D2E] text-[10px] tracking-[0.35em] uppercase mb-4">
            Visit the Ranch
          </p>
          <h2 className="font-serif text-white text-3xl sm:text-4xl mb-6">
            Experience BH Ranch in Person
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Schedule a tour to walk our 11-acre grounds, explore the covered
            pavilion, gazebo, fish ponds, and granite bar areas — and see why
            couples and families choose BH Ranch for their most important
            celebrations.
          </p>
          <p className="text-white/80 text-sm">
            {COMPANY.address}
            <br />
            {COMPANY.city}
          </p>
        </div>
      </section>
    </>
  );
}
