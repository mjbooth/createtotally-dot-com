'use client';

import React from 'react';
import { Box, Container, Heading, Text, Button, VStack, HStack, Link, useBreakpointValue, } from '@chakra-ui/react';
import { VideoSection } from './VideoSection';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaLabel,
  ctaLink,
}) => {
  
  const h1FontSize = useBreakpointValue({ base: "4xl", md: "6xl", lg: "8xl" });
  const subheadingFontSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });
  
  return (
    <Box pt={{ base: "24px", md: "54px" }}>
      <Box bg="#F4F0EB" w="full" minH="100vh">
        <Container maxW="container.xl" mx="auto">
          <VStack
              pt={{ base: 8, md: 16 }}
              gap={{ base: 6, md: 12 }}
              align="center"
              w="full"
          >
            <Heading
              as="h1"
              fontSize={h1FontSize}
              fontWeight="black"
              lineHeight={{ base: "1.2", md: ".95" }}
              color='#001e44'
              textAlign="center"
              maxW={{ base: "full", md: "6xl" }}
              pt={{ base: 6, md: "12" }}
            >
              {title}
            </Heading>
            <Text
              fontSize={subheadingFontSize}
              color="#001e44"
              textAlign="center"
              maxW={{ base: "full", md: "3xl" }}
              lineHeight="1.2"
              pb={{ base: 3, md: "18" }}
            >
              {subtitle}
            </Text>
            <HStack gap={{ base: 4, md: 16 }} flexDirection={{ base: "column", md: "row" }}>
              <Button bg="#001e44" size="lg" variant="surface" width={{ base: "full", md: "auto" }}>
                <Link href={ctaLink} color="white">{ctaLabel}</Link>
              </Button>
              </HStack>
              <VideoSection videoUrl="https://vimeo.com/1054417102" />
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};
