// src/components/StepsSection.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Container, Box, Text, VStack, Image, Heading, Flex } from "@chakra-ui/react"
import { Tag } from "@/components/ui/tag"
import { PiRocketFill } from "react-icons/pi";
import { steps } from '../data/howItWorksSteps';


interface StepsSectionProps {
  title: string;
}

export const StepsSection: React.FC<StepsSectionProps> = ({ title }) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start center', 'end center'],
  });

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      const step = Math.floor(v * steps.length);
      setCurrentStep(Math.min(step, steps.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <Box>
      <Box>
        <Box>
          <Container maxW="container.xl" mx="auto" pt={36} pb={6}>
            <VStack gap={16} align="center">
              <Box textAlign="center" maxW="4xl">
                <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<PiRocketFill />}>Workflow & Automation</Tag>
                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="center" lineHeight={1} mb="3">{title}</Heading>
                <Text fontSize="xl" color="gray.600" mt={4}>
                  Streamline your content creation process with our powerful automation tools.
                </Text>
              </Box>
              <Box w="full" position="relative" ref={lineRef}>
                <Flex justify="center">
                  <Box maxWidth="1200px" width="100%" position="relative">
                    <Flex>
                      <Box width="35%" position="relative" pr={8}>
                        <Box
                          position="absolute"
                          right="31px"
                          top="8px"
                          bottom="8px"
                          width="2px"
                          bg="gray.200"
                          transform="translateX(50%)"
                        />
                        <motion.div
                          style={{
                            position: 'absolute',
                            right: '30px',
                            top: '8px',
                            bottom: '8px',
                            width: '2px',
                            background: '#CA3FC0',
                            transformOrigin: 'top',
                            scaleY: scrollYProgress,
                            transform: 'translateX(50%)',
                          }}
                        />

                        <VStack gap={24} align="stretch">
                          {steps.map((steps, index) => (
                            <Flex key={index} align="center">
                              <Box flex="1" pr={4} textAlign="right">
                                <Text fontWeight="bold" fontSize="md" color="gray.900" lineHeight="1.2">
                                  {steps.label}
                                </Text>
                                <Text fontSize="md" color="gray.600" lineHeight="1.2">
                                  {steps.subLabel}
                                </Text>
                              </Box>
                              <Box
                                flex="none"
                                width="60px"
                                height="60px"
                                borderRadius="full"
                                bg="brandFuchsia.500"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                zIndex={1}
                                position="relative"
                                left="30px"
                              >
                                <steps.icon color="white" size="24px" />
                              </Box>
                            </Flex>
                          ))}
                        </VStack>
                      </Box>
                      <Box width="65%" pl={8}>
                        {steps.map((step, index) => (
                          <Box
                            key={index}
                            width="100%"
                            aspectRatio="16/9"
                            borderRadius="xl"
                            borderWidth="1px"
                            borderColor="gray.500"
                            overflow="hidden"
                            p="1.5"
                            display={index === currentStep ? "block" : "none"}
                            >
                            <Image
                              src={step.image}
                              borderRadius="xl"
                              alt={step.label}
                            />
                          </Box>
                        ))}
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};  