import React from 'react';
import { Box } from '@chakra-ui/react';
import { FAQSection } from '@/components/FAQSection';
import { StepsSection } from '@/components/StepsSection';
import { VideoSection } from '@/components/VideoSection';
import { HeroSection } from '@/components/HeroSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { getSteps } from '@/data/marketingData';

export default function Home() {
  const stepsData = getSteps();

  const integrationItems = [
    { src: "/adroll.svg", text: "AdRoll", colour: "#00aeef" },
    // ... (add the rest of your integration items)
  ];

  const faqItems = [
    {
      title: "How does the automation actually work?",
      text: "Think of CreateTOTALLY as your creative team's efficiency powerhouse...",
    },
    // ... (add the rest of your FAQ items)
  ];

  return (
    <Box>
      <HeroSection
        title="Cut Creative Production Costs by 65%, Instantly."
        subtitle="If you make more than 10 prints..."
        ctaLabel="Book a Free 1:1 Strategy Call →"
        ctaLink="mailto:info@createtotally.com"
      />
      <VideoSection videoUrl="https://vimeo.com/1054417102" />

      <StepsSection title="How It Works" steps={stepsData} />

      <IntegrationsSection
        integrations={integrationItems}
        title="Seamless Integration"
      />

      <FAQSection heading="Questions & Answers" items={faqItems} />
    </Box>
  );
}