// src/components/StepsSection.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Heading, Flex, VStack, Text, Icon, Image } from '@chakra-ui/react';
import { IoCheckboxOutline } from 'react-icons/io5';

interface Step {
  icon: React.ElementType;
  label: string;
  subLabel: string;
  image: string;
}

interface StepsSectionProps {
  title: string;
  steps: Step[];
}

export const StepsSection: React.FC<StepsSectionProps> = ({ title, steps }) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start center', 'end center'],
  });

  // Animate the line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Box py={20} ref={lineRef} position="relative">
      <Heading textAlign="center" fontSize={{ base: '2xl', md: '4xl' }} mb={10}>
        {title}
      </Heading>
      <Flex flexDir={{ base: 'column', md: 'row' }} maxW="6xl" mx="auto">
        <Box w={{ base: '100%', md: '35%' }} pr={{ base: 0, md: 8 }}>
          {/* Background line */}
          <Box
            display={{ base: 'none', md: 'block' }}
            position="absolute"
            right="31px"
            top="8px"
            bottom="8px"
            width="2px"
            bg="gray.200"
            transform="translateX(50%)"
          />
          {/* Animated progress line */}
          <motion.div
            style={{
              display: 'none',
              position: 'absolute',
              right: '31px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              background: '#CA3FC0',
              transformOrigin: 'top',
              transform: 'translateX(50%)',
              height: lineHeight,
            }}
          />
          <VStack align="stretch" spacing={12}>
            {steps.map((step, idx) => (
              <Flex key={idx} align="center">
                <Text flex="1" pr={4} fontWeight="bold">
                  {step.label}
                </Text>
                <Box
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  bg="brandFuchsia.500"
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="center"
                  justifyContent="center"
                  zIndex={1}
                  position="relative"
                  left="30px"
                >
                  <Icon as={step.icon} color="white" boxSize={5} />
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>
        <Box w={{ base: '100%', md: '65%' }} position="relative">
          {/* Sticky container for images */}
          {/* Could animate based on scroll if you want separate images shown per step */}
          <Image
            src={steps[0].image}
            alt="Steps Visual"
            width="100%"
            borderRadius="xl"
          />
        </Box>
      </Flex>
    </Box>
  );
};
