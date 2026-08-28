'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '@/lib/portfolio';

export default function PortfolioTeaser() {
  return (
    <section className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 text-[10px] tracking-[0.35em] text-[#A88D2E] uppercase"
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl text-foreground sm:text-5xl"
            >
              Gallery
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#A88D2E] uppercase transition-all duration-200 hover:gap-3"
            >
              View Full Gallery <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative block overflow-hidden"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="font-serif text-lg text-white sm:text-xl">
                      {project.title}
                    </h3>
                    {project.photographer ? (
                      <p className="mt-1 text-[10px] tracking-[0.16em] text-white/70 uppercase">
                        {project.photographer}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
