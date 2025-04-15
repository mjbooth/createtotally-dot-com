'use client';

import React from 'react';
import { Box, Heading, Text, useBreakpointValue, Stack, Flex, Icon } from '@chakra-ui/react';
import { HiCheckCircle } from "react-icons/hi";



interface FeatureHeroSectionProps {
  featureGroup: string;
  title: string;
  subtitle: string;
  features: string[];
}

export const FeatureHeroSection: React.FC<FeatureHeroSectionProps> = ({
  featureGroup,
  title,
  subtitle,
  features,
}) => {

  const h1FontSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "6xl" });
  const subheadingFontSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box>
      <Box
        bg="gray.50"
        py={{ base: 12, md: 20 }}
        px={{ base: 6, md: 12 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          gap={6}
          maxW="4xl"
          mx="auto"
          textAlign="center"
          alignItems="center"
        >
          <Text fontSize="sm" fontWeight="bold" color="#853FCA" textTransform="uppercase" letterSpacing="wide">
            {featureGroup}
          </Text>
          <Heading
            as="h1"
            fontSize={h1FontSize}
            fontWeight="black"
            lineHeight={{ base: "1.2", md: ".95" }}
            color='#001e44'
            textAlign="center"
            maxW={{ base: "full", md: "6xl" }}
            pt={6}
          >
            {title}
          </Heading>

          <Text
            fontSize={subheadingFontSize}
            color="gray.600"
            maxW={{ base: "full", md: "2xl" }}
          >
            {subtitle}
          </Text>

          <Flex
            flexWrap="wrap"
            justifyContent="center"
            gap={4}
            maxW="3xl"
            mx="auto"
            pt={4}
          >
            {features.map((feature, i) => (
              <Flex
                key={i}
                align="center"
                gap={2}
                fontSize="sm"
                color="gray.700"
                width={{ base: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 11px)' }}
                justifyContent="flex-start"
              >
                <Icon as={HiCheckCircle} color="#853FCA" boxSize={5} flexShrink={0} />
                <Text>{feature}</Text>
              </Flex>
            ))}
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};
