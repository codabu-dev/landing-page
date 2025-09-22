'use client';

import FaqSection from '@/components/sections/faq-section';
import FeaturesSection from '@/components/sections/features-section';
import HeroSection from '@/components/sections/hero-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import PricingSection from '@/components/sections/pricing-section';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <FaqSection />
    </>
  );
};

export default Home;
