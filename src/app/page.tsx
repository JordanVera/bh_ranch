import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import ServicesPreview from '@/components/home/ServicesPreview';
import PortfolioTeaser from '@/components/home/PortfolioTeaser';
import InstagramCta from '@/components/home/InstagramCta';
import CtaStrip from '@/components/home/CtaStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <ServicesPreview />
      <PortfolioTeaser />
      <InstagramCta />
      <CtaStrip />
    </>
  );
}
