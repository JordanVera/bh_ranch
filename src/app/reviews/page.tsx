import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import { COMPANY } from '@/lib/data';
import { FEATURED_REVIEWS, GOOGLE_REVIEWS } from '@/lib/reviews';

export const metadata: Metadata = {
  title: `Reviews | ${COMPANY.name}`,
  description:
    'Read Google reviews for BH Ranch — a 4.5★ Southwest Houston event venue trusted by couples, families, and event planners.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: COMPANY.name,
  telephone: COMPANY.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address,
    addressLocality: 'Houston',
    addressRegion: 'TX',
    postalCode: '77045',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: GOOGLE_REVIEWS.rating,
    reviewCount: GOOGLE_REVIEWS.count,
    bestRating: 5,
    worstRating: 1,
  },
  review: FEATURED_REVIEWS.map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.author },
    datePublished: review.date,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
  })),
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={
            index < rating
              ? 'fill-[#A88D2E] text-[#A88D2E]'
              : 'fill-transparent text-white/20'
          }
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/wedding-reception-2/05-1790478_orig.jpg"
          alt="Wedding reception at BH Ranch"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#A88D2E] uppercase">
            Client Love
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">Reviews</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 flex flex-col items-center gap-4">
            <StarRating rating={5} />
            <p className="font-serif text-5xl text-foreground">
              {GOOGLE_REVIEWS.rating.toFixed(1)}
            </p>
            <p className="text-sm tracking-[0.15em] text-foreground/55 uppercase">
              Based on {GOOGLE_REVIEWS.count} Google reviews
            </p>
          </div>
          <p className="leading-relaxed text-foreground/60">
            Couples, families, and event planners across Greater Houston trust
            the BH Ranch team to bring their celebrations to life. Here is what
            clients are saying on Google.
          </p>
          <a
            href={GOOGLE_REVIEWS.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#A88D2E] px-8 py-3.5 text-xs tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#bda962]"
          >
            Read All Reviews on Google
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED_REVIEWS.map((review) => (
            <article
              key={`${review.author}-${review.date}`}
              className="flex flex-col border border-border bg-card p-8"
            >
              <StarRating rating={review.rating} />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/70">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-border pt-5">
                <p className="font-serif text-lg text-foreground">
                  {review.author}
                </p>
                <p className="mt-1 text-xs tracking-[0.12em] text-foreground/45 uppercase">
                  Google Review · {review.date}
                </p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-[#A88D2E]/30 bg-[#0e0c08] p-8 text-center sm:p-12">
          <p className="text-[10px] tracking-[0.35em] text-[#A88D2E] uppercase">
            Share Your Experience
          </p>
          <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
            Worked with us recently?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
            We would love to hear about your celebration. Leave a review on
            Google to help other Houston couples and event hosts find BH Ranch.
          </p>
          <a
            href={GOOGLE_REVIEWS.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-white/30 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-colors duration-200 hover:border-[#A88D2E] hover:text-[#A88D2E]"
          >
            Leave a Google Review
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
