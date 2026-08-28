'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { PortfolioProject } from '@/lib/portfolio';

export default function ProjectGallery({
  project,
}: {
  project: PortfolioProject;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const count = project.images.length;

  const close = () => setSelected(null);
  const prev = useCallback(() => {
    setSelected((current) =>
      current === null ? 0 : (current - 1 + count) % count,
    );
  }, [count]);
  const next = useCallback(() => {
    setSelected((current) => (current === null ? 0 : (current + 1) % count));
  }, [count]);

  useEffect(() => {
    if (selected === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') prev();
      if (event.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, prev, next]);

  return (
    <>
      <div className="columns-1 gap-3 space-y-3 sm:columns-2 lg:columns-3">
        {project.images.map((src, index) => (
          <motion.button
            key={src}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
            className="group relative mb-3 block w-full break-inside-avoid overflow-hidden bg-muted"
            onClick={() => setSelected(index)}
            aria-label={`View ${project.title} photo ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${project.title} floral design ${index + 1}`}
              width={1200}
              height={900}
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </motion.button>
        ))}
      </div>

      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => !open && close()}
      >
        <AnimatePresence>
          {selected !== null ? (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm"
                />
              </Dialog.Overlay>

              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  onClick={(event) => {
                    if (event.target === event.currentTarget) close();
                  }}
                >
                  <Dialog.Title className="sr-only">
                    {project.title} — photo {selected + 1} of {count}
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">
                    {project.photographer
                      ? `Photography by ${project.photographer}`
                      : `${project.title} gallery`}
                  </Dialog.Description>

                  <Dialog.Close className="absolute top-5 right-5 z-10 text-white/60 transition-colors hover:text-white">
                    <X size={22} />
                  </Dialog.Close>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      prev();
                    }}
                    className="absolute left-3 z-10 p-2 text-white/60 transition-colors hover:text-white md:left-8"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={28} />
                  </button>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selected}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.2 }}
                      className="relative w-full max-w-5xl"
                    >
                      <Image
                        src={project.images[selected]}
                        alt={`${project.title} floral design ${selected + 1}`}
                        width={1600}
                        height={1200}
                        className="mx-auto h-auto max-h-[80vh] w-auto object-contain"
                        priority
                      />
                      <div className="mt-4 text-center">
                        <p className="text-xs tracking-[0.2em] text-white/50 uppercase">
                          {project.title}
                        </p>
                        <p className="mt-1 text-xs text-white/35">
                          {selected + 1} / {count}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      next();
                    }}
                    className="absolute right-3 z-10 p-2 text-white/60 transition-colors hover:text-white md:right-8"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={28} />
                  </button>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          ) : null}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
