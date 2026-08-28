import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Thank You | ${COMPANY.name}`,
  description: 'Thank you for contacting Thistle & Grace Design.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-32">
      <div className="max-w-lg text-center flex flex-col items-center gap-6">
        <CheckCircle size={56} className="text-[#A88D2E]" strokeWidth={1.5} />
        <p className="text-[#A88D2E] text-[10px] tracking-[0.4em] uppercase">
          Message Received
        </p>
        <h1 className="font-serif text-foreground text-4xl sm:text-5xl">
          Thank You!
        </h1>
        <p className="text-foreground/60 leading-relaxed">
          We&apos;ve received your inquiry and will be in touch within 24
          business hours to discuss your event. In the meantime, follow our
          latest work on Instagram.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/"
            className="px-8 py-3.5 bg-[#A88D2E] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#bda962] transition-colors duration-200"
          >
            Back to Home
          </Link>
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-[#A88D2E] hover:text-[#A88D2E] transition-all duration-200"
          >
            <Phone size={13} />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
