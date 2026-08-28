import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProjectGallery from '@/components/portfolio/ProjectGallery';
import CtaStrip from '@/components/home/CtaStrip';
import { COMPANY } from '@/lib/data';
import {
  getAdjacentProjects,
  getProject,
  PORTFOLIO_PROJECTS,
} from '@/lib/portfolio';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: `Portfolio | ${COMPANY.name}` };
  }

  const description = project.photographer
    ? `${project.title} at BH Ranch. Photography by ${project.photographer}.`
    : `${project.title} at BH Ranch in Southwest Houston, TX.`;

  return {
    title: `${project.title} | Portfolio | ${COMPANY.name}`,
    description,
    openGraph: {
      title: `${project.title} | ${COMPANY.name}`,
      description,
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0e0c08]">
        <div className="absolute inset-0">
          <Image
            src={project.cover}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-[#0e0c08]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-88 max-w-4xl flex-col items-center justify-end px-6 pb-16 pt-32 text-center sm:min-h-104 sm:pb-20">
          <Link
            href="/portfolio"
            className="mb-6 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] text-white/55 uppercase transition-colors hover:text-[#A88D2E]"
          >
            <ArrowLeft size={12} />
            All Projects
          </Link>
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#A88D2E] uppercase">
            {project.category}
          </p>
          <h1 className="font-serif text-4xl text-white sm:text-6xl">
            {project.title}
          </h1>
          {project.photographer ? (
            <p className="mt-4 text-sm tracking-[0.12em] text-white/55">
              Photography by {project.photographer}
            </p>
          ) : null}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectGallery project={project} />
        </div>
      </section>

      {prev && next ? (
        <section className="border-t border-border px-6 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2">
            <Link
              href={`/portfolio/${prev.slug}`}
              className="group relative flex min-h-44 items-end overflow-hidden p-6 sm:min-h-52"
            >
              <Image
                src={prev.cover}
                alt={prev.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/45" />
              <div className="relative z-10 text-left">
                <p className="mb-2 inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-white/60 uppercase">
                  <ArrowLeft size={12} />
                  Previous
                </p>
                <h2 className="font-serif text-2xl text-white sm:text-3xl">
                  {prev.title}
                </h2>
              </div>
            </Link>

            <Link
              href={`/portfolio/${next.slug}`}
              className="group relative flex min-h-44 items-end overflow-hidden p-6 sm:min-h-52"
            >
              <Image
                src={next.cover}
                alt={next.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/45" />
              <div className="relative z-10 w-full text-right">
                <p className="mb-2 inline-flex items-center justify-end gap-2 text-[10px] tracking-[0.22em] text-white/60 uppercase">
                  Next
                  <ArrowRight size={12} />
                </p>
                <h2 className="font-serif text-2xl text-white sm:text-3xl">
                  {next.title}
                </h2>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <CtaStrip />
    </>
  );
}
