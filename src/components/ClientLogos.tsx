'use client';

import React from 'react';
import { Box, Container, Heading, Text, Button, VStack, HStack, Link, useBreakpointValue, GridItem, Image, Grid } from '@chakra-ui/react';

interface Logo {
  src: string;
}

interface ClientLogosProps {
  logos: Logo[];
}

export const ClientLogos: React.FC<ClientLogosProps> = ({ logos }) => {
  return (
    <Box bg="white">
      <Container maxW="container.xl" mx="auto" bg="#white" pt={20} pb={20}>
        <Box>
          <Grid
            templateColumns="repeat(8, 1fr)"
            gap="4"
            alignItems="center"
          >
            <GridItem rowSpan={2} colSpan={3} display="flex" alignItems="flex-start">
              <Text alignSelf="flex-start" color="gray.800" fontSize="2xl" fontWeight="bold" textAlign="left">
                The World’s Biggest Brands Choose CreateTOTALLY
              </Text>
            </GridItem>
            {logos.map((logo, index) => (
              <GridItem key={index} display="flex" alignItems="center" justifyContent="center">
                <Box lineHeight="1" mt="2" mb="2" pl="7" pr="7" width="100%" height="100%" position="relative" display="flex" alignItems="center" justifyContent="center">
                  <Image
                    src={logo.src}
                    alt={`Client ${index + 1}`}
                    objectFit="contain"
                    maxWidth="100%"
                    maxHeight="100%"
                    filter="grayscale(100%) brightness(0%)"
                  />
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};