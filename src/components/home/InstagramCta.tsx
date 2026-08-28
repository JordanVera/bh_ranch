'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export default function InstagramCta() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-[#161410] border-y border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <Globe size={28} className="text-[#A88D2E]" strokeWidth={1.5} />
          <p className="text-[#A88D2E] text-[10px] tracking-[0.4em] uppercase">
            Stay Connected
          </p>
          <h2 className="font-serif text-white text-3xl sm:text-4xl">
            Follow BH Ranch
          </h2>
          <p className="text-white/55 text-sm max-w-md leading-relaxed">
            See photos from recent weddings, quinceañeras, and celebrations at
            our Southwest Houston venue — and get updates on availability and
            special packages.
          </p>
          <a
            href={COMPANY.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#A88D2E] text-[#A88D2E] text-xs tracking-[0.2em] uppercase hover:bg-[#A88D2E] hover:text-black transition-all duration-200"
          >
            <Globe size={14} />
            Follow on Facebook
          </a>
        </motion.div>
      </div>
    </section>
  );
}
