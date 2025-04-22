'use client';

import React from 'react';
import { Box, Container, Text, GridItem, Grid } from '@chakra-ui/react';
import Image from 'next/image'

interface Logo {
  src: string;
}

interface ClientLogosProps {
  logos: Logo[];
}

export const ClientLogos: React.FC<ClientLogosProps> = ({ logos }) => {
  return (
    <Box bg="white">
      <Container maxW="container.xl" mx="auto" bg="#white" pt={32} pb={32}>
        <Box>
          <Grid
            templateColumns="repeat(6, 1fr)"
            gap="4"
            alignItems="center"
          >
            <GridItem rowSpan={3} colSpan={3} display="flex" alignItems="flex-start">
              <Text alignSelf="flex-start" color="gray.800" fontSize="2xl" fontWeight="bold" textAlign="left">
                The World’s Biggest Brands Choose CreateTOTALLY
              </Text>
            </GridItem>
            {logos.map((logo, index) => (
              <GridItem key={index} display="flex" alignItems="center" justifyContent="center">
                <Box lineHeight="1" mt="6" mb="6" pl="10" pr="10" width="100%" height="100%" position="relative" display="flex" alignItems="center" justifyContent="center">
                  <Image
                    src={logo.src}
                    alt={`Client ${index + 1}`}
                    width={160}
                    height={80}
                    style={{ 
                      objectFit: 'contain', filter: 'grayscale(100%) brightness(0%)' 
                    }}
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