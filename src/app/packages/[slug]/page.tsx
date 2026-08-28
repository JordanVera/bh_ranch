import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COMPANY } from '@/lib/data';
import {
  PACKAGE_CATEGORIES,
  getPackageCategory,
} from '@/lib/packages';
import PackageTiers from '@/components/packages/PackageTiers';
import CtaStrip from '@/components/home/CtaStrip';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PACKAGE_CATEGORIES.map((category) => ({ slug: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getPackageCategory(slug);

  if (!category) {
    return { title: `Packages | ${COMPANY.name}` };
  }

  return {
    title: `${category.title} | ${COMPANY.name}`,
    description: category.description,
  };
}

export default async function PackageCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getPackageCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src={category.heroImage}
          alt={category.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#A88D2E] uppercase">
            {category.eyebrow}
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            {category.title}
          </h1>
          <p className="mt-4 text-sm tracking-[0.15em] text-white/70 uppercase">
            {category.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="leading-relaxed text-foreground/60">
            {category.description}
          </p>
        </div>

        <nav
          aria-label="Package types"
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {PACKAGE_CATEGORIES.map((item) => {
            const isActive = item.slug === category.slug;
            return (
              <Link
                key={item.slug}
                href={`/packages/${item.slug}`}
                className={
                  isActive
                    ? 'bg-[#A88D2E] px-4 py-2 text-[10px] tracking-[0.2em] text-black uppercase'
                    : 'border border-border px-4 py-2 text-[10px] tracking-[0.2em] text-foreground/70 uppercase transition-colors hover:border-[#A88D2E] hover:text-[#A88D2E]'
                }
              >
                {item.navLabel.replace(' Packages', '')}
              </Link>
            );
          })}
        </nav>

        <PackageTiers tiers={category.tiers} />
      </section>

      <CtaStrip />
    </>
  );
}
