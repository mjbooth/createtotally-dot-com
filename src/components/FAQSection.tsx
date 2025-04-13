// src/components/FAQSection.tsx
'use client';

import React from 'react';
import {
  Accordion,
  Text,
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
        <Accordion.Root>
          {items.map((item, index) => (
            <Accordion.Item key={index} value={item.title}>
              <h2>
                <Accordion.ItemTrigger>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {item.title}
                  </Box>
                </Accordion.ItemTrigger>
              </h2>
              <Accordion.ItemContent pb={4}>
                <Text>{item.text}</Text>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
    </Box>
  );
};
