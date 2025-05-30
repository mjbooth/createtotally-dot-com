'use client';

import React from 'react';
import { Box, Heading, Text, useBreakpointValue, Stack, Flex, Icon, Container } from '@chakra-ui/react';
import { HiCheckCircle } from "react-icons/hi";
import { renderIcon } from '@/src/utils/iconUtils';

interface FeatureHeroSectionProps {
  featureGroup: string;
  featureGroupIcon: string;
  title: string;
  subtitle: string;
  features: string[];
}

export const FeatureHeroSection: React.FC<FeatureHeroSectionProps> = ({
  featureGroup,
  featureGroupIcon,
  title,
  subtitle,
  features,
}) => {

  const h1FontSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "80px" });
  const subheadingFontSize = useBreakpointValue({ base: "md", md: "lg" });

  const IconComponent = renderIcon(featureGroupIcon);

  return (
    <Box bg="brandNeutral.200">
      <Container maxW="1152px" mb="110px">
        <Box display="flex" justifyContent="center" alignItems="center" pt="5">
          <Stack gap={6} mx="auto" textAlign="center" alignItems="center" pb="40" >
            <Flex bg="brandPurple.600" px="3" py="2" borderRadius="lg" gap="3" alignItems="center">
              {IconComponent && <Icon as={IconComponent} size="md" color="brandNeutral.500" />}
              <Text fontSize="2xl" fontWeight="bold" color="#brandNeutral.500" lineHeight="160%">
                {featureGroup}
              </Text>
            </Flex>
            <Heading
              as="h1"
              fontSize={h1FontSize}
              fontWeight="900"
              lineHeight="1"
              color="brandNavy.500"
              textAlign="center"
              letterSpacing="tight"
              mb="0"
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
                  justifyContent="flex-start"
                >
                  <Icon as={HiCheckCircle} color="brandPurple.600" boxSize={5} flexShrink={0} />
                  <Text>{feature}</Text>
                </Flex>
              ))}
            </Flex>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
