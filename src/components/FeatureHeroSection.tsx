'use client';

import React from 'react';
import { Box, Heading, Text, Stack, Flex, Icon, Container } from '@chakra-ui/react';
import { HiCheckCircle } from "react-icons/hi";
import { getIcon } from '@/src/utils/iconUtils';

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

  const IconComponent = getIcon(featureGroupIcon);

  return (
    <Box bg="brandNeutral.200">
      <Container maxW="1152px" pb={{ base: "16", sm: "20", md: "30" }} px={{ base: 4, sm: 6, md: 8 }}>
        <Box display="flex" justifyContent="center" alignItems="center" pt={{ base: 4, sm: 5 }}>
          <Stack
            gap={{ base: 4, sm: 5, md: 6 }}
            mx="auto"
            textAlign="center"
            alignItems="center"
            width="100%"
          >
            <Flex
              bg="brandPurple.600"
              px={{ base: 2, sm: 3 }}
              py={{ base: 1, sm: 2 }}
              borderRadius="lg"
              gap={{ base: 2, sm: 3 }}
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
            >
              {IconComponent && (
                <Icon
                  as={IconComponent}
                  boxSize={{ base: "18px", sm: "24px" }}
                  color="brandNeutral.500"
                />
              )}
              <Text
                fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                fontWeight="bold"
                color="brandNeutral.500"
                lineHeight="160%"
              >
                {featureGroup}
              </Text>
            </Flex>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="900"
              lineHeight={{ base: 1.2, md: 1 }}
              color="brandNavy.500"
              textAlign="center"
              letterSpacing="tight"
              mb="0"
            >
              {title}
            </Heading>
            <Text
              fontSize={{ base: "sm", sm: "md", md: "lg" }}
              color="gray.600"
              maxW={{ base: "full", md: "2xl" }}
              px={{ base: 4, sm: 0 }}
            >
              {subtitle}
            </Text>
            <Flex
              flexWrap="wrap"
              justifyContent="center"
              gap={{ base: 3, sm: 3, md: 4 }}
              maxW="3xl"
              mx="auto"
              pt={{ base: 2, sm: 3, md: 4 }}
            >
              {features.map((feature, i) => (
                <Flex
                  key={i}
                  align="center"
                  gap={{ base: 1, sm: 2, md: 2 }}
                  fontSize={{ base: "xs", sm: "sm" }}
                  color="gray.700"
                  justifyContent="flex-start"
                  flexBasis="auto"
                >
                  <Icon
                    as={HiCheckCircle}
                    color="brandPurple.600"
                    boxSize={{ base: 4, sm: 5 }}
                    flexShrink={0}
                  />
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