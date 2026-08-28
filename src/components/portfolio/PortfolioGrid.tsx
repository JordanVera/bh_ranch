'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
} from '@/lib/portfolio';
import { cn } from '@/lib/utils';

export default function PortfolioGrid() {
  const [category, setCategory] = useState<'All' | PortfolioCategory>('All');

  const projects = useMemo(
    () =>
      category === 'All'
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter((project) => project.category === category),
    [category],
  );

  return (
    <div>
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {PORTFOLIO_CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
            className={cn(
              'px-4 py-2 text-[10px] tracking-[0.22em] uppercase transition-colors duration-200',
              category === item
                ? 'bg-[#A88D2E] text-black'
                : 'text-foreground/50 hover:text-foreground',
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-4"
        >
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group block"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.04, 0.4),
                }}
              >
                <div className="relative aspect-5/6 overflow-hidden bg-muted">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="font-serif text-lg text-foreground transition-colors duration-200 group-hover:text-[#A88D2E] sm:text-xl">
                    {project.title}
                  </h2>
                  {project.photographer ? (
                    <p className="mt-1 text-[11px] tracking-[0.12em] text-foreground/45">
                      {project.photographer}
                    </p>
                  ) : null}
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
