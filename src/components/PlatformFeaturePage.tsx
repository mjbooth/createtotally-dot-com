import React, { useEffect, useRef, useState } from "react";
import {
  Box, Container, Heading, Text, Image, Flex, SimpleGrid, HStack, VStack, Icon, IconButton, Button, Link
} from "@chakra-ui/react";
import { SwooshDivider } from "@/src/components/SwooshDivider";
import { FeatureHeroSection } from "@/src/components/FeatureHeroSection";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

// Define types for the props
interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeatureBlock {
  heading: string;
  text: string;
  image: string;
}

interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

interface TestimonialData {
  quote: string;
  author: string;
  company: string;
}

interface CTAData {
  title: string;
  buttonText: string;
}

interface HeroSectionData {
  featureGroup: string;
  featureGroupIcon: string;
  title: string;
  subtitle: string;
  features: string[];
}

interface PlatformFeaturePageProps {
  features: Feature[];
  featureBlocks: FeatureBlock[];
  HowItWorksSteps: HowItWorksStep[];
  heroSectionData: HeroSectionData;
  testimonialData: TestimonialData;
  ctaData: CTAData;
}

export default function PlatformFeaturePage({
  features,
  featureBlocks,
  HowItWorksSteps,
  heroSectionData,
  testimonialData,
  ctaData
}: PlatformFeaturePageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToStep = (stepIndex: number) => {
    if (scrollContainerRef.current) {
      const stepWidth = 1152 + 120;
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollPosition = stepWidth * stepIndex - (containerWidth - 1152) / 2 + (containerWidth - stepWidth) / 2;
      scrollContainerRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => { scrollToStep(currentStep); }, [currentStep]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % HowItWorksSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + HowItWorksSteps.length) % HowItWorksSteps.length);
  };

  return (
    <Box bg="brandNeutral.200" pt="40">
      {/* HERO SECTION */}
      <Box bg="brandNeutral.500">
        <FeatureHeroSection {...heroSectionData} />

        {/* FEATURE BLOCKS */}
        <Box position="relative" pb="7.5rem">
          <Box position="absolute" top="-110px" left="50%" transform="translateX(-50%)" width="100vw" zIndex="1">
            <Image src="/bg-top-footer.svg" alt="Wave divider" width="100%" />
          </Box>
          <Container width="1152px" mx="auto" px="0">
            <Flex gap="120px" direction="column">
              {featureBlocks.map((block, index) => (
                <Flex key={index} align="center" gap="60px" flexDirection={index % 2 === 0 ? "row" : "row-reverse"}>
                  <Box flex="1">
                    <Heading as="h2" color="brandNavy.500" fontSize="3rem" fontWeight="700" textAlign="left" lineHeight="102.811%" mb="0" mt="0">{block.heading}</Heading>
                    <Text fontSize="1rem" color="brandNavy.500">{block.text}</Text>
                  </Box>
                  <Box flex="1">
                    <Image src={block.image} alt={block.heading} borderRadius="4xl" width="100%" />
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Container>
        </Box>
      </Box>

      {/* HOW IT WORKS */}
      <Container maxW="100%" px="0" overflow="hidden" position="relative" zIndex="2" marginTop="-340px">
        <Heading textAlign="center" fontSize="3rem" mb="8">Scale your design workflow</Heading>
        <Box position="relative">
          <Flex ref={scrollContainerRef} overflowX="auto" px="0" css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
            {HowItWorksSteps.map((step, index) => (
              <Box key={index} flex="0 0 auto" bg="brandNavy.500" borderRadius="36px" p="60px" width="1152px" mr="120px">
                <Flex>
                  <Box width="50%" pr={8}>
                    <Text bg="brandFuchsia.500" color="white" fontWeight="bold" fontSize="sm" px="3" py="1" borderRadius="md" mb={4}>Step {step.step}</Text>
                    <Heading color="white" fontSize="4xl" mb={4}>{step.title}</Heading>
                    <Text color="brandNeutral.500" fontSize="lg">{step.description}</Text>
                  </Box>
                  <Box width="50%">
                    <Image src={step.image} alt={`Step ${step.step}`} borderRadius="2xl" width="100%" />
                  </Box>
                </Flex>
              </Box>
            ))}
          </Flex>
          <Flex justify="center" mt={4}>
            <IconButton onClick={prevStep} aria-label="Previous" bg="transparent" color="brandFuchsia.500"><FaCircleChevronLeft /></IconButton>
            {HowItWorksSteps.map((_, index) => (
              <Box key={index} as="button" w={3} h={3} borderRadius="full" bg={currentStep === index ? "brandFuchsia.500" : "gray.300"} mx={1} onClick={() => setCurrentStep(index)} />
            ))}
            <IconButton onClick={nextStep} aria-label="Next" bg="transparent" color="brandFuchsia.500"><FaCircleChevronRight /></IconButton>
          </Flex>
        </Box>
      </Container>

      {/* FEATURES */}
      <Box bg="brandNeutral.500" pt={24} pb={24}>
        <SwooshDivider fill="#FFFCFB" flipX />
        <Container maxW="1200px" mt="-270px">
          <Heading textAlign="center" fontSize="5xl" mb={8}>Production-proof features built for design at scale</Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
            {features.map((feature, index) => (
              <Box key={index} bg="white" p="10" borderRadius="2xl" shadow="realistic">
                <HStack align="start" gap={5}>
                  <Icon as={feature.icon} w={8} h={8} color="brandFuchsia.500" />
                  <VStack align="start" gap={1}>
                    <Text fontWeight="700" fontSize="lg" color="brandNavy.500">{feature.title}</Text>
                    <Text color="brandNavy.500">{feature.description}</Text>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* TESTIMONIAL + CTA */}
      <Box bg="#001E44" py="120px" textAlign="center">
        <Image src="/purpleCheck.svg" alt="CheckIcon" height="96px" mx="auto" mb={8} />
        <Text fontSize="4xl" fontWeight="900" color="brandPurple.500" mb={4}>&quot;{testimonialData.quote}&quot;</Text>
        <Text fontWeight="700" color="brandPurple.500">{testimonialData.author}<br />{testimonialData.company}</Text>
      </Box>

      <Box bg="brandNeutral.200" py={24}>
        <SwooshDivider fill="#F4F0EB" />
        <Container maxW="1200px" mt="-270px" textAlign="center">
          <Box bg="brandNavy.500" borderRadius="48px" px={12} py={16} boxShadow="realistic">
            <Text fontSize="4xl" fontWeight="bold" color="brandNeutral.500" mb={6}>{ctaData.title}</Text>
            <Link href="/get-started">
              <Button size="lg" colorScheme="pink" rounded="full">{ctaData.buttonText}</Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}