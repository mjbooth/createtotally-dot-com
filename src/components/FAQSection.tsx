// src/components/FAQSection.tsx
'use client';

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react';

interface FAQItem {
  title: string;
  text: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  heading: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ items, heading }) => {
  return (
    <Box bg="brandNeutral.500" py={12}>
      <Box maxW="container.xl" mx="auto">
        <Heading as="h2" fontSize="3xl" mb={6} textAlign={{ base: 'center', md: 'left' }}>
          {heading}
        </Heading>
        <Accordion allowMultiple>
          {items.map((item, idx) => (
            <AccordionItem key={idx}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>{item.text}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};
