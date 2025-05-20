"use client"

import { Container, Box, Text, Link, Heading, IconButton, Button, Image, Flex, useBreakpointValue, } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { useState, useRef, useEffect } from 'react';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { SwooshDivider } from '@/src/components/SwooshDivider';
import { featureBlocks, HowItWorksSteps, heroSectionData, testimonialData, ctaData } from '@/src/data/workflowAutomationData';

export default function TemplateContentCreation() {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      const next = (prev + 1) % HowItWorksSteps.length;
      scrollToStep(next);
      return next;
    });
  };

  const prevStep = () => {
    setCurrentStep((prev) => {
      const next = (prev - 1 + HowItWorksSteps.length) % HowItWorksSteps.length;
      scrollToStep(next);
      return next;
    });
  };

  useEffect(() => {
    scrollToStep(currentStep);
  }, [currentStep]);

  const containerPadding = useBreakpointValue({ base: "0px", md: "calc(50% - 576px)" });

  return (
    <Box bg="brandNeutral.200" pt="40"> 
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup={heroSectionData.featureGroup}
          title={heroSectionData.title}
          subtitle={heroSectionData.subtitle}
          features={heroSectionData.features}
        />
        <Box position="relative" pb="120px">
          <Box
            position="absolute"
            top="-110px"  // Adjust this value to position the wave exactly where you want it
            left="50%"
            transform="translateX(-50%)"
            width="100vw"
            zIndex="1"
          >
            <Image src="/bg-top-footer.svg" alt="Wave divider" width="100%" />
          </Box>
          <Container width="1152px" mx="auto" px="0">
            <Flex gap="120px" direction="column">
              {featureBlocks.map((block, index) => (
                <Flex key={index} display="flex" align="center" gap="3.75rem" flexDirection={index % 2 === 0 ? "row" : "row-reverse"}>
                  <Box flex={{ base: "1 1 100%", md: index === 2 ? "3 1 50%" : "2 1 50%" }}>
                    <Flex gap="8px" direction="column">
                      <Heading as="h2" color="brandNavy.500" fontSize="3rem" fontWeight="700" textAlign="left" lineHeight="102.811%" mb="0" mt="0">
                        {block.heading}
                      </Heading>
                      <Text color="brandNavy.500" fontSize="1rem" fontWeight="400" lineHeight="161.345%">
                        {block.text}
                      </Text>
                    </Flex>
                  </Box>
                  <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
                    <Box width="100%" overflow="hidden">
                      <Image src={block.image} alt={block.heading} width="100%" borderRadius="4xl" />
                    </Box>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Container>
        </Box>
      </Box>

      <Box
        width="100vw"
        bg="brandNeutral.200"
        position="relative"
        zIndex="1"
      >
        <Image src="/bg-bottom-footer-flip.svg" alt="Wave divider" width="100%" />
      </Box>


      <Container
        maxW="100%"
        px="0"
        overflow="hidden"
        position="relative"
        zIndex="2"
        marginTop="-340px" // Adjust this value to control the overlap
      >
        <Heading as="h2" fontSize="3rem" fontWeight="700" textAlign="center" lineHeight="102.811%" mb="3.75rem" mt="0" color="brandNavy.500">
          How CreateTOTALLY<br />transforms your workflow
        </Heading>
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
            {HowItWorksSteps.map((step, index) => (
              <Box
                key={index}
                flex="0 0 auto"
                bg="brandNavy.500"
                borderRadius="36px"
                p="3.75rem"
                width="1152px"
                minW="1152px"
                mr="120px"
              >
                <Flex>
                  <Box width="50%" pr={8}>
                    <Text bg="brandFuchsia.500" color="white" fontWeight="bold" fontSize="sm" px="3" py="1" borderRadius="md" mb={4} display="inline-block">
                      Step {step.step}
                    </Text>
                    <Heading color="white" as="h3" fontSize="4xl" mb={4}>
                      {step.title}
                    </Heading>
                    <Text color="brandNeutral.500" fontSize="lg" lineHeight="1.6">
                      {step.description}
                    </Text>
                  </Box>
                  <Box width="50%">
                    <Image src={step.image} alt={`Step ${step.step}`} borderRadius="2xl" width="100%" height="100%" objectFit="cover" />
                  </Box>
                </Flex>
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
            {HowItWorksSteps.map((_, index) => (
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
            Set up your first automation →
          </Link>
        </Box>
      </Container>

      <Container fluid px="0">
        <Box width="100%">
          <Box
            backgroundColor="#001E44"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p="120px"
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="3.75rem"
            >
              <Image
                src="/purpleCheck.svg"
                alt="CheckIcon"
                height="96px"
              />
              <Text fontSize={["lg", "xl", "4xl"]} fontWeight="900" color="brandPurple.500">
                &quot;{testimonialData.quote}&quot;
              </Text>
              <Text fontWeight="700" color="brandPurple.500" textAlign="center" fontSize="24px" fontStyle="normal" lineHeight="110%" letterSpacing="-0.12px">
                {testimonialData.author}<br />{testimonialData.company}
              </Text>
            </Flex>
          </Box>
        </Box>
      </Container>

      <Box bg="brandNeutral.200">
        <SwooshDivider fill="#F4F0EB" />
      </Box>


      <Box position="relative" bg="brandNeutral.200" py={{ base: 16, md: 24 }}>
        <Container maxW="1200px" position="relative">
          <Box
            position="absolute"
            top={{ base: "-120px", md: "-220px" }}
            left="50%"
            transform="translateX(-50%)"
            zIndex={1}
            px={4}
          >
            <Box
              bg="brandNavy.500"
              borderRadius="48px"
              boxShadow="realistic"
              textAlign="center"
              px={{ base: 6, md: 12 }}
              py={{ base: 10, md: 16 }}
            >
              <Text
                fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                color="brandNeutral.500"
                lineHeight={1.2}
                mb={6}
              >
                {ctaData.title}
              </Text>
              <Link href="/get-started">
                <Button
                  py="6"
                  px="10"
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  variant="solid"
                  colorPalette="brandFuchsia"
                  rounded="full"
                >
                  {ctaData.buttonText}
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}