import React from 'react';
import { Box } from "@chakra-ui/react"
import { HeroSection } from '../components/HeroSection';
import { StepsSection } from '../components/StepsSection';
import { IntegrationsSection } from '../components/IntegrationsSection';
import { FAQSection } from '../components/FAQSection';
import { WaveDivider } from '@/components/WaveDivider';
import { ClientLogos } from '../components/ClientLogos';
import { integrationItems } from '@/data/integrationItems';
import { clientLogos } from '@/data/clientLogos';

export default function HomePage() {
  const stepsData = [
    {
      icon: require('react-icons/io5').IoCheckboxOutline,
      label: "#1 Start with Figma & Adobe",
      subLabel: "...",
      image: "/FigmaPlugin.jpg",
    },
    // ...
  ];

  const faqItems = [
    {
      title: "How does the automation actually work?",
      text: "Think of CreateTOTALLY as your creative team’s efficiency powerhouse...",
    },
    // ...
  ];

  return (
    <Box bg="brandNeutral.500">
      <HeroSection
        title="Cut Creative Production Costs by 65%, Instantly."
        subtitle="If you make more than 10 print, video, or digital adapts per campaign, our AI automation technology can cut your production costs by 65%. Without sacrificing creative control."
        ctaLabel="Book a Free 1:1 Strategy Call →"
        ctaLink="mailto:info@createtotally.com"
      />
      
      <WaveDivider
        backgroundImage="/wave-divider-1.svg"
        heightBase="380px"
        heightMd="380px"
        rotation="-180deg" 
      />

      <ClientLogos logos={clientLogos} />

      <WaveDivider
        backgroundImage="/wave-divider-1.svg"
        heightBase="380px"
        heightMd="380px"
        rotation="0deg" 
      />

      <StepsSection title="How It Works" steps={stepsData} />

      <IntegrationsSection
        integrations={integrationItems}
        tagTitle="Integrations"
      />
    </Box>
  );
}
