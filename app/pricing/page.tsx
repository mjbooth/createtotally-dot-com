"use client"

import React from 'react';
import { Box, Heading, Button, Container, Text, Flex, Stack } from "@chakra-ui/react";
import { SwooshDivider } from '@/src/components/SwooshDivider';

const PricingPage = () => {
  return (

    <Box pt="40">
      <Box bg="brandNeutral.500">

        <Box bg="brandNeutral.200">
          <Container maxW="1152px" mb="16">
            <Box display="flex" justifyContent="center" alignItems="center" pt="5">
              <Stack gap={6} mx="auto" textAlign="center" alignItems="center" >
                <Box bg="brandPurple.600" p="12px" borderRadius="lg" >
                  <Text fontSize="2xl" fontWeight="bold" color="#brandNeutral.500" lineHeight="1">
                    Pricing Tiers
                  </Text>
                </Box>
                <Heading
                  as="h1"
                  fontSize="5rem"
                  fontWeight="900"
                  lineHeight="1"
                  color="brandNavy.500"
                  textAlign="center"
                  letterSpacing="tight"
                  mb="0"
                >
                  Simple, transparent pricing tiers
                </Heading>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box bg="brandNeutral.500">
        <SwooshDivider fill="#FFFCFB" />
      </Box>
      <Box bg="brandNeutral.500" pb="7.5rem">
        <Box position="relative">
          <Container maxW="1200px" position="relative" mt="-250px">
            <Flex gap="1rem" color="brandNavy.500">
              <Box flex="1" bg="white" p="14" borderRadius="3rem" boxShadow="realistic">
                <Flex gap="4" direction="column" alignItems="left">
                  <Heading as="h3" fontSize="4xl" fontWeight="700" lineHeight="100%" letterSpacing="-1.2px">Studio</Heading>
                  <Text fontSize="1rem" fontWeight="400" lineHeight="160%">For teams starting to build their creative automation capabilities.</Text>
                  <Button variant="solid" fontWeight="600" colorPalette="brandFuchsia" rounded="full" px="5" py="2">Get started →</Button>
                </Flex>
              </Box>
              <Box flex="1" bg="white" p="14" borderRadius="3rem" boxShadow="realistic">
                <Flex gap="4" direction="column" alignItems="left">
                  <Heading as="h3" fontSize="4xl" fontWeight="700" lineHeight="100%" letterSpacing="-1.2px">Powerhouse</Heading>
                  <Text fontSize="1rem" fontWeight="400" lineHeight="160%">For teams looking to grow their creative automation capabilities.</Text>
                  <Button variant="solid" fontWeight="600" colorPalette="brandFuchsia" rounded="full" px="5" py="2">Get started →</Button>
                </Flex>
              </Box>
              <Box flex="1" bg="white" p="14" borderRadius="3rem" boxShadow="realistic">
                <Flex gap="4" direction="column" alignItems="left">
                  <Heading as="h3" fontSize="4xl" fontWeight="700" lineHeight="100%" letterSpacing="-1.2px">Enterprise</Heading>
                  <Text fontSize="1rem" fontWeight="400" lineHeight="160%">For teams looking to deliver high volumes of creative content.</Text>
                  <Button variant="solid" fontWeight="600" colorPalette="brandFuchsia" rounded="full" px="5" py="2">Get started →</Button>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
      <Box bg="brandNeutral.500">
        <SwooshDivider fill="#FFFCFB" flipY />
      </Box>
    </Box>
  );
};

export default PricingPage