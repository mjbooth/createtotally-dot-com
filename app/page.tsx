"use client";

import { useState, useRef, useEffect } from "react"
import React from 'react';
import { Box, Container, Flex, Grid, GridItem, Heading, Image, IconButton, Text, Highlight, useBreakpointValue, Stack, Icon, Link } from "@chakra-ui/react";
import { FaPencilRuler } from "react-icons/fa";
import Vimeo from '@u-wave/react-vimeo';
import { SwooshDivider } from '@/src/components/SwooshDivider';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { useBackground } from '@/src/context/BackgroundContext';

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
  const [currentStep, setCurrentStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { setBackgroundColor } = useBackground();

  const scrollToStep = (stepIndex: number) => {
    if (scrollContainerRef.current) {
      const stepWidth = 1152 + 120; // 1152px width + 120px gap
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollPosition = stepWidth * stepIndex - (containerWidth - 1152) / 2 + (containerWidth - stepWidth) / 2;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => {
      const next = (prev + 1) % steps.length;
      scrollToStep(next);
      return next;
    });
  };

  const prevStep = () => {
    setCurrentStep((prev) => {
      const next = (prev - 1 + steps.length) % steps.length;
      scrollToStep(next);
      return next;
    });
  };

  useEffect(() => {
    scrollToStep(currentStep);
  }, [currentStep]);

  useEffect(() => {
    setBackgroundColor("#F4F0EB");
    return () => setBackgroundColor("#FFFCFB"); // Reset on unmount
  }, [setBackgroundColor]);

  const containerPadding = useBreakpointValue({ base: "0px", md: "calc(50% - 576px)" });

  const steps = [
    {
      "icon": "IoCheckboxOutline",
      "step": "Step one",
      "feature": "Feature name",
      "headline": "Start with Figma & Adobe",
      "subLabel": "Upload existing Figma and Adobe design files, prepared using our suite of plugins.",
      "image": "/FigmaPlugin.jpg",
      "cta": "Explore our design integrations →"
    },
    {
      "icon": "IoCheckboxOutline",
      "step": "Step two",
      "feature": "Feature name",
      "headline": "No-code Templating",
      "subLabel": "Set up templates easily, without writing any code. Just click and customise.",
      "image": "/TemplateDesigner.jpg",
      "cta": "See how templates work →"
    },
    {
      "icon": "IoCheckboxOutline",
      "step": "Step three",
      "feature": "Feature name",
      "headline": "Content Planning",
      "subLabel": "Choose what you need: sizes, styles, and languages ensuring every adapt is perfect.",
      "image": "/CreateTOTALLY-Content-planning-02-27-2025_04_32_PM.png",
      "cta": "Discover content planning tools →"
    },
    {
      "icon": "IoCheckboxOutline",
      "step": "Step four",
      "feature": "Feature name",
      "headline": "Automate at Scale",
      "subLabel": "The system quickly creates all your designs, perfectly formatted every time.",
      "image": "/purple.svg",
      "cta": "Learn about scalable automation →"
    },
    {
      "icon": "IoCheckboxOutline",
      "step": "Step five",
      "feature": "Feature name",
      "headline": "Approve Without the Back-and-Forth",
      "subLabel": "Share for review in one place. Get feedback, make changes, and approve quickly.",
      "image": "/TaskNotification.jpg",
      "cta": "View our approval workflows →"
    },
    {
      "icon": "IoCheckboxOutline",
      "step": "Step six",
      "feature": "Feature name",
      "headline": "Deliver Instantly",
      "subLabel": "Send your files where they need to go—no extra steps, no renaming.",
      "image": "/blue.svg",
      "cta": "See delivery options →"
    },
    {
      "icon": "IoCheckboxOutline",
      "step": "Step seven",
      "feature": "Feature name",
      "headline": "Track & Optimise",
      "subLabel": "See what's working, measure results, and improve designs over time.",
      "image": "/CreateTOTALLY-Reports-Campaign-performance-02-20-2025_09_33_PM.png",
      "cta": "Explore analytics capabilities →"
    }
  ];

  const CustomCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M10.9976 17.2996L18.6226 9.64961L16.3976 7.37461L10.9976 12.7746L8.42263 10.1996L6.17263 12.4746L10.9976 17.2996ZM12.4726 23.1496C10.9286 23.1496 9.47472 22.8613 8.11088 22.2846C6.74722 21.7078 5.5633 20.9173 4.55913 19.9131C3.55497 18.9089 2.76447 17.725 2.18763 16.3614C1.61097 14.9975 1.32263 13.5436 1.32263 11.9996C1.32263 10.4513 1.61147 8.99753 2.18913 7.63836C2.76697 6.27919 3.56013 5.09636 4.56863 4.08986C5.57713 3.08336 6.76105 2.29169 8.12038 1.71486C9.47988 1.13803 10.9306 0.849609 12.4726 0.849609C14.0208 0.849609 15.4748 1.13786 16.8346 1.71436C18.1945 2.29103 19.3775 3.08244 20.3836 4.08861C21.3898 5.09478 22.1812 6.27803 22.7579 7.63836C23.3344 8.99869 23.6226 10.4531 23.6226 12.0016C23.6226 13.5503 23.3342 15.0024 22.7574 16.3579C22.1805 17.7132 21.3889 18.8951 20.3824 19.9036C19.3759 20.9121 18.193 21.7053 16.8339 22.2831C15.4747 22.8608 14.021 23.1496 12.4726 23.1496ZM12.4669 19.7496C14.6459 19.7496 16.4833 19.0037 17.9791 17.5119C19.4748 16.0199 20.2226 14.1844 20.2226 12.0054C20.2226 9.82636 19.4767 7.98894 17.9849 6.49311C16.4929 4.99744 14.6574 4.24961 12.4784 4.24961C10.2994 4.24961 8.46197 4.99553 6.96613 6.48736C5.47047 7.97936 4.72263 9.81486 4.72263 11.9939C4.72263 14.1729 5.46855 16.0103 6.96038 17.5061C8.45238 19.0018 10.2879 19.7496 12.4669 19.7496Z" fill="#853FCA" />
    </svg>
  );

  return (
    <Box bg="brandNeutral.500" pt="40">
      <Box>
        <Container maxW="1152px" mb="110px">
          <Box display="flex" justifyContent="center" alignItems="center" pt="5">
            <Stack gap={6} mx="auto" textAlign="center" alignItems="center" pb="7.5rem" >
              <Heading
                as="h1"
                fontSize="8xl"
                fontWeight="900"
                lineHeight="1"
                color="brandNavy.500"
                textAlign="center"
                letterSpacing="tight"
                mb="0"
              >
                Cut creative production costs by 65%, <br />instantly.
              </Heading>
              <Text
                fontSize="1rem"
                color="brandNavy.500"
                fontWeight="400"
                maxW={{ base: "full", md: "3xl" }}
              >
                If you make more than 10 print, video, or digital adapts per campaign, our AI automation technology can cut your production costs by 65%. Without sacrificing creative control.
              </Text>
            </Stack>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              w="full"
              maxW="6xl"
              overflow="hidden"
              borderRadius="3rem"
              borderWidth="1px"
              borderColor="gray.900/10"
              position="relative"
              height="auto"
              aspectRatio="16/9"
            >
              <Vimeo
                video="https://vimeo.com/1054417102"
                responsive={true}
                autopause={false}
                autoplay={false}
                loop={true}
                controls={true}
                muted={true}
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box bg="brandNeutral.200" pb="7.5rem">

        <Box bg="brandNeutral.200">
          <SwooshDivider fill="#F4F0EB" flipX />
        </Box>

        <Box position="relative">
          <Container maxW="1200px" position="relative" mt="-230px">
            <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" >
              <Box width={{ base: "100%", md: "40%" }} mb={{ base: 8, md: 0 }}>
                <Text color="gray.800" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" textAlign={{ base: "center", md: "left" }} letterSpacing="tight" lineHeight="100%">
                  The world&apos;s biggest brands choose CreateTOTALLY
                </Text>
              </Box>
              <Box width={{ base: "100%", md: "55%" }}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  {clientLogos.map((logo, index) => (
                    <GridItem key={index}>
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        height="100px"
                        borderRadius="md"
                        p={4}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          maxH="80px"
                          maxW="80%"
                          objectFit="contain"
                          filter="grayscale(100%) brightness(0%)"
                        />
                      </Flex>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>

      <Box bg="#F4F0EB">
        <Box bg="#F4F0EB">
          <SwooshDivider fill="#FFFCFB" />
        </Box>

        <Box bg="brandNeutral.500">
          <Box position="relative" pb="120px" mt="-260px">
            <Container width="1152px" mx="auto" px="0">
              <Flex gap="120px" direction="column">
                <Flex display="flex" align="center" gap="60px" flexDirection="row">
                  <Box flex="base: 1 1 100%">
                    <Box bg="brandPurple.600" color="brandNeutral.500" mb="2" px="3" py="2" borderRadius="lg" fontWeight="700" fontSize="md" width="fit-content">
                      <Flex gap="12px" direction="row" alignItems="center">
                        <Icon color="brandNeutral.500" as={FaPencilRuler} fontSize="md" />
                        <Text>Easy templating</Text>
                      </Flex>
                    </Box>
                    <Flex gap="8px" direction="column">
                      <Heading as="h2" color="brandNavy.500" fontSize="3rem" fontWeight="700" textAlign="left" lineHeight="102.811%" mb="0" mt="0">
                        Double Your Output.<br />Zero Trade-offs.
                      </Heading>
                      <Text color="brandNavy.500" fontSize="1rem" fontWeight="400" lineHeight="161.345%">
                        Your team relies on Figma and Adobe — so we built automation that works with your native tools, not against them.
                      </Text>
                      <Flex gap="12px" direction="row" pb="1">
                        <Icon as={CustomCheckIcon} mt="2" />
                        <Text color="brandNavy.500" fontSize="md" fontWeight="400" lineHeight="160%">
                          <Highlight query="No switching." styles={{ fontWeight: "bold" }}>No switching. Keep your existing workflows. No proprietary software.</Highlight>
                        </Text>
                      </Flex>
                      <Flex gap="12px" direction="row" pb="1">
                        <Icon as={CustomCheckIcon} mt="2" />
                        <Text color="brandNavy.500" fontSize="md" fontWeight="400" lineHeight="160%">
                          <Highlight query="Full creative control." styles={{ fontWeight: "bold" }}>Full creative control. Set design rules, automate, and approve — without losing the craft.</Highlight>
                        </Text>
                      </Flex>
                      <Flex gap="12px" direction="row" pb="1">
                        <Icon as={CustomCheckIcon} mt="2" />
                        <Text color="brandNavy.500" fontSize="md" fontWeight="400" lineHeight="160%">
                          <Highlight query="One-click efficiency." styles={{ fontWeight: "bold" }}>One-click efficiency. Automate without coding. Handle thousands of assets in minutes.</Highlight>
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
                    <Box width="100%" overflow="hidden">
                      <Image src="/AutomationSuite.svg" alt="Icon" width="100%" borderRadius="4xl" />
                    </Box>
                  </Box>
                </Flex>
              </Flex>
            </Container>
          </Box>
        </Box>
      </Box>

      {/* How It Works Section */}
      <Container
        maxW="100%"
        px="0"
        overflow="hidden"
        position="relative"
        zIndex="2"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Stack gap={2} mx="auto" textAlign="center" alignItems="center" pb="16">
            <Box bg="brandPurple.600" color="brandNeutral.500" mb="2" px="3" py="2" borderRadius="lg" fontWeight="700" fontSize="md">
              <Flex gap="12px" direction="row" alignItems="center">
                <Icon color="brandNeutral.500" as={FaPencilRuler} fontSize="md" />
                <Text>Workflow-automation</Text>
              </Flex>
            </Box>
            <Heading as="h2" m="0" fontSize="3rem" fontWeight="700" textAlign="center" lineHeight="100%" letterSpacing="tight" color="brandNavy.500">
              How it works
            </Heading>
            <Text
              fontSize="md"
              color="brandNavy.500"
              fontWeight="400"
              maxW={{ base: "full", md: "sm" }}
            >
              Streamline your content creation process with our powerful automation tools.
            </Text>
          </Stack>
        </Box>
        <Box position="relative">
          <Flex
            ref={scrollContainerRef}
            overflowX="auto"
            px={containerPadding}
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              'scrollbarWidth': 'none',
              'msOverflowStyle': 'none',
            }}
          >
            {steps.map((step, index) => (
              <Box
                key={index}
                flex="0 0 auto"
                bg="brandNavy.500"
                borderRadius={["24px", "36px"]}
                p={["4", "6", "60px"]}
                width={["100%", "100%", "1152px"]}
                minW={["100%", "100%", "1152px"]}
                mr={["0", "0", "120px"]}
              >
                <Stack
                  direction={["column", "column", "row"]}
                  gap={["4", "6", "60px"]}
                  align="stretch"
                >
                  <Flex
                    direction="column"
                    width={["100%", "100%", "calc(50% - 30px)"]}
                    justify="center"
                  >
                    <Box pb="2">
                      <Text
                        bg="brandFuchsia.500"
                        color="brandNeutral.500"
                        fontWeight="bold"
                        fontSize={["md", "2xl"]}
                        px="3"
                        py="1"
                        borderRadius="md"
                        display="inline-block"
                      >
                        {step.step}
                      </Text>
                    </Box>
                    <Flex direction="column" justify="center" height="100%" gap="2">
                      <Heading
                        color="brandNeutral.500"
                        as="h3"
                        fontSize={["3xl", "4xl", "5xl"]}
                        fontWeight="700"
                        lineHeight="100%"
                        mt="0"
                        mb="0"
                        letterSpacing="tight"
                      >
                        {step.headline}
                      </Heading>
                      <Text
                        color="brandNeutral.500"
                        fontSize={["md", "md"]}
                        lineHeight="1.6"
                      >
                        {step.subLabel}
                      </Text>
                    </Flex>
                  </Flex>
                  <Box
                    width={["100%", "100%", "calc(50% - 30px)"]}
                    paddingBottom={["64.6245%", "64.6245%", "47.0931%"]}
                    position="relative"
                    overflow="hidden"
                    borderRadius="2xl"
                  >
                    <Image
                      src={step.image}
                      alt={`Step ${step.step}`}
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      loading="lazy"
                    />
                  </Box>
                </Stack>
              </Box>
            ))}
          </Flex>
          <Flex justify="center" mt={4} align="center">
            <IconButton
              onClick={prevStep}
              aria-label="Previous step"
              mr={2}
              bg="transparent"
              color="brandFuchsia.500"
            >
              <FaCircleChevronLeft />
            </IconButton>
            {steps.map((_, index) => (
              <Box
                key={index}
                as="button"
                w={3}
                h={3}
                borderRadius="full"
                bg={currentStep === index ? "brandFuchsia.500" : "gray.300"}
                mx={1}
                onClick={() => {
                  setCurrentStep(index);
                  scrollToStep(index);
                }}
              />
            ))}
            <IconButton
              onClick={nextStep}
              aria-label="Next step"
              ml={2}
              bg="transparent"
              color="brandFuchsia.500"
            >
              <FaCircleChevronRight />
            </IconButton>
          </Flex>
        </Box>
        <Box textAlign="center" mt={8} mb={32}>
          <Link
            href="/get-started#figma"
            color="brandFuchsia.500"
            fontSize="lg"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            {steps[currentStep].cta}
          </Link>
        </Box>
      </Container>
    </Box>
  );
}