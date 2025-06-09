'use client';

import React from 'react';
import { Container, Box, Text, Image, Heading, Flex } from "@chakra-ui/react"

interface TextLeftPlusImageProps {
  title: string;
  paragraph: string;
  imageSrc: string;
}

export const TextLeftPlusImage: React.FC<TextLeftPlusImageProps> = ({
  title,
  paragraph,
  imageSrc,
}) => {

  return (
    <Box>
      <Container maxW="container.xl" mx="auto" pt={4} pb={20}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={8}
          alignItems="flex-start"
        >
          <Box flex={{ base: "1 1 100%", md: "3 1 60%" }}>
            <Box>
              <Heading color='#001e44' fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">{title}</Heading>
              <Text color='#001e44' fontSize="2xl" fontWeight="thin" lineHeight={1.25} mb="6">{paragraph}</Text>
            </Box>
          </Box>
          <Box flex={{ base: "1 1 100%", md: "2 1 40%" }}>
            <Box
              width="100%"
              overflow="hidden"
            >
              <Image src={imageSrc} alt="All Channels" width="100%" />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};  