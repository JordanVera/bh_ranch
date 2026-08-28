'use client';

import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
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
          <Camera size={28} className="text-[#A88D2E]" strokeWidth={1.5} />
          <p className="text-[#A88D2E] text-[10px] tracking-[0.4em] uppercase">
            Follow Our Latest Work
          </p>
          <h2 className="font-serif text-white text-3xl sm:text-4xl">
            {COMPANY.instagramHandle}
          </h2>
          <p className="text-white/55 text-sm max-w-md leading-relaxed">
            See our newest floral installations, wedding designs, and event
            styling — updated regularly on Instagram.
          </p>
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#A88D2E] text-[#A88D2E] text-xs tracking-[0.2em] uppercase hover:bg-[#A88D2E] hover:text-black transition-all duration-200"
          >
            <Camera size={14} />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
