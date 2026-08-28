'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export default function CtaStrip() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8">
      <div className="absolute inset-0">
        <Image
          src="https://thistleandgracedesign.com/wp-content/uploads/2025/10/10-scaled.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-linear-to-r from-[#A88D2E]/25 via-transparent to-[#A88D2E]/20" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-[10px] tracking-[0.4em] text-[#A88D2E] uppercase"
        >
          Ready to Begin
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Let&apos;s Design Your{' '}
          <em className="italic text-[#A88D2E]">Perfect Event</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-xl text-base text-white/75 sm:text-lg"
        >
          From your first consultation to the final installation, our team
          handles every floral detail so you can enjoy your celebration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="bg-[#A88D2E] px-8 py-3.5 text-xs tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#bda962]"
          >
            Get in Touch
          </Link>
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-colors duration-200 hover:border-[#A88D2E] hover:text-[#A88D2E]"
          >
            <Phone size={13} />
            {COMPANY.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
