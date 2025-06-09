'use client';

import { useState, useEffect } from 'react';
import { SimpleGrid, Box, Text, Image, Flex } from "@chakra-ui/react";
import { Integration } from '../types';
import { getIntegrations } from '../data/marketingData';
import { shuffleArray } from '../utils/helpers';

export default function IntegrationGrid() {
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null);
  const [integrations, setIntegrations] = useState<Integration[]>([]);

  useEffect(() => {
    // Get integrations and shuffle them
    const allIntegrations = getIntegrations();
    const shuffledIntegrations = shuffleArray(allIntegrations);
    setIntegrations(shuffledIntegrations);
  }, []);

  return (
    <Box my={12} w="full">
      <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
        Connects with your favorite tools
      </Text>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} gap={6}>
        {integrations.map((integration, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            justify="center"
            p={4}
            borderRadius="md"
            bg="white"
            boxShadow="sm"
            transition="all 0.2s"
            onMouseEnter={() => setHoveredIntegration(integration.text)}
            onMouseLeave={() => setHoveredIntegration(null)}
            opacity={hoveredIntegration && hoveredIntegration !== integration.text ? 0.5 : 1}
            _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
          >
            <Box h="60px" w="60px" display="flex" alignItems="center" justifyContent="center" mb={2}>
              <Image 
                src={integration.src} 
                alt={integration.text} 
                maxH="100%" 
                maxW="100%" 
                objectFit="contain" 
              />
            </Box>
            <Text fontSize="sm" fontWeight="medium" textAlign="center">
              {integration.text}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}