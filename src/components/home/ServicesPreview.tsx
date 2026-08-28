'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

const icons = {
  heart: Heart,
  briefcase: Briefcase,
  sparkles: Sparkles,
};

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[#0e0c08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#A88D2E] text-[10px] tracking-[0.35em] uppercase mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-white text-4xl sm:text-5xl"
          >
            Our Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative overflow-hidden bg-[#161410] border border-white/5 hover:border-[#A88D2E]/40 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161410] via-[#161410]/20 to-transparent" />
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full border border-[#A88D2E]/30 flex items-center justify-center">
                      <Icon size={14} className="text-[#A88D2E]" />
                    </div>
                    <span className="text-[#A88D2E] text-[10px] tracking-[0.3em] uppercase">
                      {service.subtitle}
                    </span>
                  </div>
                  <h3 className="font-serif text-white text-2xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    href={
                      service.id === 'wedding-packages'
                        ? '/packages'
                        : '/contact'
                    }
                    className="inline-flex items-center gap-2 mt-6 text-[#A88D2E] text-xs tracking-[0.2em] uppercase group/link hover:gap-3 transition-all duration-200"
                  >
                    {service.id === 'wedding-packages'
                      ? 'View Packages'
                      : 'Inquire'}
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
