// src/components/IntegrationsSection.tsx
'use client';

import React, { useState } from 'react';
import { Container, Box, Heading, Image, Flex, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiPlugsFill } from "react-icons/pi";
import { Tag } from "@/components/ui/tag"

interface Integration {
  src: string;
  text: string;
  colour: string;
}

interface IntegrationsSectionProps {
  integrations: Integration[];
  tagTitle: string;
}

export const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({
  integrations,
  tagTitle,
}) => {
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null);

  return (
    <Box bg="white">
      <Container maxW="container.xl" mx="auto" pt={32} pb={32}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={1}
        >
          <Box flex={{ base: "1 1 100%", md: "1 1 50%" }} position="relative" display="flex" alignItems="center">
            <Box>
              <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<PiPlugsFill />} >{tagTitle}</Tag>
              <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">
                Seamless integration<br />with{" "}
                <span style={{ display: 'inline-flex', alignItems: 'center', minWidth: '10ch' }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={hoveredIntegration || "default"}
                      initial={{
                        rotateX: 60,
                        translateY: '-30%',
                        opacity: 0
                      }}
                      animate={{
                        rotateX: 0,
                        translateY: '0%',
                        opacity: 1,
                        transition: {
                          type: "tween",
                          duration: 0.35,
                          ease: "easeOut"
                        }
                      }}
                      exit={{
                        rotateX: -60,
                        translateY: '30%',
                        opacity: 0,
                        transition: {
                          duration: 0.15
                        }
                      }}
                      style={{
                        display: 'inline-block',
                        color: hoveredIntegration
                          ? integrations.find(i => i.text === hoveredIntegration)?.colour || "#ff0000"
                          : "inherit",
                        transformOrigin: 'center center',
                        transformStyle: 'preserve-3d',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {hoveredIntegration || "your tech stack"}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </Heading>
              <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25}>Disconnected tools slow teams down. CreateTOTALLY integrates with your existing tech ensuring everything stays in sync.</Text>
            </Box>
          </Box>
          <Box flex={{ base: "1 1 100%", md: "1 1 50%" }}>
            <Flex
              flexWrap="wrap"
              justifyContent="space-between"
            >
              {integrations.map(({ src, text }: Integration, index: number) => (
                <Box
                  key={index}
                  position="relative"
                  width={{ base: "50%", sm: "33.33%", md: "25%" }}
                  onMouseEnter={() => setHoveredIntegration(text)}
                  onMouseLeave={() => setHoveredIntegration(null)}
                >
                  <Box position="relative" width="120%" paddingBottom="calc(100% + 0rem)" >
                    <Box position="absolute" top="0" left="0" right="0" bottom="0" rounded="md" bg="white" display="flex" flexDirection="column" overflow="hidden" >
                      <Box position="relative" width="100%" paddingBottom="100%" >
                        <Box position="absolute" top="0" left="0" right="0" bottom="0" display="flex" alignItems="center" justifyContent="center" >
                          <Image src={src} alt={`Integration ${index + 1}`} objectFit="contain" maxWidth="50%" maxHeight="50%" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
