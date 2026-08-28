'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { HERO_IMAGES } from '@/lib/portfolio';

const SLIDE_MS = 8000;
const FADE_S = 1.6;

const KEN_BURNS = [
  {
    from: { scale: 1.08, x: '0%', y: '0%' },
    to: { scale: 1.2, x: '-3%', y: '-2%' },
  },
  {
    from: { scale: 1.18, x: '3%', y: '1%' },
    to: { scale: 1.08, x: '-1%', y: '-1%' },
  },
  {
    from: { scale: 1.08, x: '-2%', y: '1%' },
    to: { scale: 1.2, x: '2%', y: '-2%' },
  },
  {
    from: { scale: 1.1, x: '0%', y: '3%' },
    to: { scale: 1.22, x: '0%', y: '-2%' },
  },
] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, SLIDE_MS);

    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  const nextIndex = (index + 1) % HERO_IMAGES.length;
  const kenBurns = KEN_BURNS[index] ?? KEN_BURNS[0];

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0" aria-hidden>
        {prefersReducedMotion ? (
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGES[0].src}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ) : (
          <AnimatePresence initial={false}>
            <motion.div
              key={HERO_IMAGES[index].src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_S, ease: 'easeInOut' }}
            >
              <motion.div
                className="absolute inset-0"
                initial={kenBurns.from}
                animate={kenBurns.to}
                transition={{
                  duration: SLIDE_MS / 1000 + FADE_S,
                  ease: 'linear',
                }}
              >
                <Image
                  src={HERO_IMAGES[index].src}
                  alt=""
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}

        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

        {!prefersReducedMotion ? (
          <Image
            src={HERO_IMAGES[nextIndex].src}
            alt=""
            width={16}
            height={16}
            className="pointer-events-none absolute h-px w-px opacity-0"
          />
        ) : null}
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs tracking-[0.4em] text-[#A88D2E] uppercase"
        >
          Entertainment & Event Center · Houston
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Where Memories Become <em className="italic text-[#A88D2E]">Legend</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          {COMPANY.name} is Southwest Houston&apos;s premier 11-acre event
          venue — hosting weddings, quinceañeras, reunions, and celebrations
          for 50 to 500 guests.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="bg-[#A88D2E] px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#bda962]"
          >
            Get in Touch
          </Link>
          <Link
            href="/portfolio"
            className="border border-white/50 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-all duration-200 hover:border-[#A88D2E] hover:text-[#A88D2E]"
          >
            View Gallery
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
