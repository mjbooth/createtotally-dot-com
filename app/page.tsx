"use client";

import { PiRocketFill } from "react-icons/pi"
import { IoCheckboxOutline } from "react-icons/io5"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import React from 'react';
import { Box, Container, Flex, Grid, GridItem, Heading, Image, List, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { WaveDivider } from '@/src/components/WaveDivider';
import { HiTemplate } from "react-icons/hi";
import { LuCircleCheck } from "react-icons/lu";
import { Tag } from "@/src/components/ui/tag"

const allClientLogos = [
  { src: "/bacardi_logo.png", alt: "Bacardi" },
  { src: "/vitality-logo.svg", alt: "Vitality" },
  { src: "/Anheuser-Busch_InBev.svg", alt: "Anheuser-Busch InBev" },
  { src: "/googlelogo_clr_74x24px.svg", alt: "Google" },
  { src: "/Logo_NIKE.png", alt: "Nike" },
  { src: "/miele.svg", alt: "Miele" },
  { src: "/patek-philippe-sa-1.svg", alt: "Patek Philippe" },
  { src: "/Allwyn-Logo.png", alt: "Allwyn" },
  { src: "/MSC_Cruises_Logo.png", alt: "MSC Cruises" },
];

export default function HomePage() {
  const clientLogos = allClientLogos.slice(0, 9);

  const steps = [
    { icon: IoCheckboxOutline, label: "#1 Start with Figma & Adobe", subLabel: "Upload existing Figma and Adobe design files, prepared using our suite of plugins.", image: "/FigmaPlugin.jpg" },
    { icon: IoCheckboxOutline, label: "#2 No-code Templating", subLabel: "Set up templates easily, without writing any code. Just click and customise.", image: "/TemplateDesigner.jpg" },
    { icon: IoCheckboxOutline, label: "#3 Content Planning", subLabel: "Choose what you need: sizes, styles, and languages ensuring every adapt is perfect.", image: "/CreateTOTALLY-Content-planning-02-27-2025_04_32_PM.png" },
    // { icon: IoCheckboxOutline, label: "#4 Automate at Scale", subLabel: "The system quickly creates all your designs, perfectly formatted every time.", image: "/purple.svg" },
    { icon: IoCheckboxOutline, label: "#4 Approve Without the Back-and-Forth", subLabel: "Share for review in one place. Get feedback, make changes, and approve quickly.", image: "/TaskNotification.jpg" },
    // { icon: IoCheckboxOutline, label: "#6 Deliver Instantly", subLabel: "Send your files where they need to go—no extra steps, no renaming.", image: "/blue.svg" },
    { icon: IoCheckboxOutline, label: "#5 Track & Optimise", subLabel: "See what's working, measure results, and improve designs over time.", image: "/CreateTOTALLY-Reports-Campaign-performance-02-20-2025_09_33_PM.png" }
];

  const [currentStep, setCurrentStep] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const step = Math.floor(v * steps.length);
      setCurrentStep(Math.min(step, steps.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress, steps.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (stepsRef.current && imageContainerRef.current) {
        const stepsRect = stepsRef.current.getBoundingClientRect();
        const stepHeight = stepsRect.height / steps.length;
        const scrollPosition = window.scrollY - stepsRect.top + window.innerHeight / 2;
        const newStep = Math.min(Math.max(Math.floor(scrollPosition / stepHeight), 0), steps.length - 1);
        setCurrentStep(newStep);
  
        const lastStepTop = stepsRect.top + stepHeight * (steps.length - 1);
        if (lastStepTop <= window.innerHeight / 2) {
          imageContainerRef.current.style.position = 'absolute';
          imageContainerRef.current.style.top = `${lastStepTop - window.innerHeight / 2}px`;
        } else {
          imageContainerRef.current.style.position = 'sticky';
          imageContainerRef.current.style.top = '0';
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);
  
  const h2FontSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "5xl" });

  return (
    <Box bg="brandNeutral.500">
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
                fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
                fontWeight="black"
                lineHeight={{ base: "1.2", md: ".95" }}
                color="#001e44"
                textAlign="center"
                maxW={{ base: "full", md: "6xl" }}
                pt={{ base: 6, md: "12" }}
              >
                Cut Creative Production Costs by 65%, Instantly.
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="#001e44"
                textAlign="center"
                maxW={{ base: "full", md: "3xl" }}
                lineHeight="1.2"
                pb={{ base: 3, md: "18" }}
              >
                If you make more than 10 print, video, or digital adapts per campaign, our AI automation technology can cut your production costs by 65%. Without sacrificing creative control.
              </Text>

              <Box
                w="full"
                maxW="6xl"
                mx="auto"
                overflow="hidden"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.900/10"
                position="relative"
                aspectRatio="16/9"
              >
              </Box>
            </VStack>
          </Container>
        </Box>
      </Box>
      <WaveDivider
        backgroundImage="/wave-divider-1.svg"
        heightBase="380px"
        heightMd="380px"
        rotation="-180deg"
      />
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
              {clientLogos.map((logo, index) => (
                <GridItem key={index} display="flex" alignItems="center" justifyContent="center">
                  <Box lineHeight="1" mt="6" mb="6" pl="10" pr="10" width="100%" height="100%" position="relative" display="flex" alignItems="center" justifyContent="center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
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
      <WaveDivider
        backgroundImage="/wave-divider-1.svg"
        heightBase="380px"
        heightMd="380px"
        rotation="0deg"
      />
      <Box>
        <Container maxW="container.xl" mx="auto" pt={4} pb={20}>
          <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<HiTemplate />} >Template & Content Creation</Tag>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={8}
            alignItems="flex-start"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 60%" }}>
              <Box>
                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">Double Your Output.<br /> Zero Trade-offs.</Heading>
                <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25} mb="6">Your team relies on Figma and Adobe—so we built automation that works with your native tools, not against them.</Text>
                <List.Root color="gray.900" fontSize="xl" fontWeight="thin" gap="2" variant="plain" align="center">
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    No switching. Keep your existing workflows. No proprietary software.
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Full creative control. Set design rules, automate, and approve—without losing the craft.
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    One-click efficiency. Automate without coding. Handle thousands of assets in minutes.</List.Item>
                </List.Root>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 40%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/AutomationSuite.svg" alt="All Channels" width="100%" />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
      {/* How It Works Section */}
      <Box>
        <Box bg="white">
          <Box>
            <Container maxW="container.xl" mx="auto" pb={6}>
              <VStack gap={16} align="center">
                <Box textAlign="center" maxW="4xl">
                  <Tag
                    variant="solid"
                    size={{ base: "md", md: "lg" }}
                    bg="brandFuchsia.100"
                    color="brandFuchsia.600"
                    mb={{ base: 2, md: 3 }}
                    startElement={<PiRocketFill />}>
                    Workflow & Automation
                  </Tag>
                  <Heading
                    as="h2"
                    fontSize={h2FontSize}
                    fontWeight="black"
                    lineHeight={{ base: "1.2", md: ".95" }}
                    color='#001e44'
                    textAlign={{ base: "center" }}
                    mb={{ base: 3, md: 4 }}
                  >
                    How It Works
                  </Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} color="gray.900" mt={4}>
                    Streamline your content creation process with our powerful automation tools.
                  </Text>
                </Box>
                <Box w="full" ref={lineRef} position="relative">
                  <Flex justify="center" direction={{ base: "column", md: "row" }}>
                    <Box maxWidth="1200px" width="100%" position="relative">
                      <Flex direction={{ base: "column", md: "row" }}>
                        <Box width={{ base: "100%", md: "35%" }} position="relative" pr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
                          <Box
                            display={{ base: "none", md: "block" }}
                            position="absolute"
                            right="31px"
                            top="8px"
                            bottom="8px"
                            width="2px"
                            bg="gray.200"
                            transform="translateX(50%)"
                          />
                          {/* Progress line */}
                          <Box display={{ base: "none", md: "block" }}>
                            <motion.div
                              style={{
                                position: 'absolute',
                                right: '31px',
                                top: '8px',
                                bottom: '8px',
                                width: '2px',
                                background: '#CA3FC0',
                                transformOrigin: 'top',
                                transform: 'translateX(50%)',
                                height: lineHeight
                              }}
                            />
                          </Box>
                          <VStack gap={{ base: 12, md: 36 }} align="stretch" ref={stepsRef}>
                            {steps.map((step, index) => (
                              <Flex key={index} align="center" id={`step-${index}`}>
                                <Box flex="1" pr={4} textAlign={{ base: "left", md: "right" }}>
                                  <Text fontWeight="bold" fontSize="md" color="gray.900" lineHeight="1.2">
                                    {step.label}
                                  </Text>
                                  <Text fontSize="md" color="gray.600" lineHeight="1.2">
                                    {step.subLabel}
                                  </Text>
                                </Box>
                                <Box
                                  flex="none"
                                  width="60px"
                                  height="60px"
                                  borderRadius="full"
                                  bg="brandFuchsia.500"
                                  display={{ base: "none", md: "flex" }}
                                  alignItems="center"
                                  justifyContent="center"
                                  zIndex={1}
                                  position="relative"
                                  left={{ base: 0, md: "30px" }}
                                >
                                  <Box display={{ base: "none", md: "block" }}>
                                    <step.icon color="white" size="24px" />
                                  </Box>
                                </Box>
                              </Flex>
                            ))}
                          </VStack>
                        </Box>
                        <Box width={{ base: "100%", md: "65%" }} pl={{ base: 0, md: 8 }} position="relative" height="auto">
                          <Box
                            ref={imageContainerRef}
                            position={{ base: "relative", md: "sticky" }}
                            top="100px"
                            width="100%"
                            height="0"
                            paddingBottom="56.25%" // This maintains the 16:9 aspect ratio
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Box
                              position="absolute"
                              top="0"
                              left="0"
                              right="0"
                              bottom="0"
                              overflow="hidden"
                              borderRadius="xl"
                              display={{ base: "none", md: "block" }}
                            >
                              {steps.map((step, index) => (
                                <Image
                                  key={index}
                                  src={step.image}
                                  alt={step.label}
                                  position="absolute"
                                  top="0"
                                  left="0"
                                  width="100%"
                                  height="100%"
                                  objectFit="cover"
                                  opacity={index === currentStep ? 1 : 0}
                                  transition="opacity 0.3s ease-in-out"
                                  display={{ base: "none", md: "block" }}
                                />
                              ))}
                            </Box>
                          </Box>
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
    </Box>
  );
}