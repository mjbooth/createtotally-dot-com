"use client"

import { Container, Box, Text, Link, Heading, HStack, VStack, Icon, IconButton, Button, Image, Flex, SimpleGrid, useBreakpointValue, } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { TbTextSize } from "react-icons/tb";
import { MdTextFields, MdOutlineRuleFolder } from "react-icons/md";
import { HiOutlineAdjustments } from "react-icons/hi";
import { PiPaletteBold } from "react-icons/pi";
import { FiType } from "react-icons/fi";
import { BsCollectionPlay } from "react-icons/bs";
import { useState, useRef, useEffect } from 'react';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { SwooshDivider } from '@/src/components/SwooshDivider';

const features = [
  {
    title: "Fine-tuned typography control",
    description: "Character styles can be applied dynamically, with precise spacing, alignment, and style rules",
    icon: <TbTextSize />
  },
  {
    title: "Smart text behaviour",
    description: "Text can auto-shrink, reflow, or raise a flag based on the logic you define",
    icon: <MdTextFields />
  },
  {
    title: "Alpha channel precision",
    description: "Perfect cropping for product shots, people, or anything with transparency – no repetitive masking",
    icon: <HiOutlineAdjustments />
  },
  {
    title: "Dynamic colour updates",
    description: "Swap out spot colour swatches instantly for seasonal campaigns or regional palettes",
    icon: <PiPaletteBold />
  },
  {
    title: "Centralised font management",
    description: "Fonts managed in one place with automatic fallbacks and full style fidelity",
    icon: <FiType />
  },
  {
    title: "Outputs for every channel",
    description: "Generate CMYK-ready PDFs with bleed and trim or digital assets with custom file size limits",
    icon: <BsCollectionPlay />
  },
  {
    title: "Clean fallbacks",
    description: "Set rules to skip, hide, or replace empty content automatically",
    icon: <MdOutlineRuleFolder />
  }
];

const featureBlocks = [
  {
    heading: "Too much time wasted on repetitive tasks",
    text: "You became a designer to create, not copy-paste. But 70% of your day disappears into formatting, resizing, and versioning – leaving little time for actual design work.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  },
  {
    heading: "Brand consistency erodes with every new adaptation",
    text: "As variations multiply across regions and platforms, small deviations compound into major inconsistencies. Your once-cohesive brand identity becomes fragmented, diluting your market presence and confusing customers.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  },
  {
    heading: "Traditional templates create frustrating dependencies",
    text: "When you rely on external vendors, ticketing systems or lengthy implementation cycles, you lose control precisely when deadlines are tightest. The handoff process itself creates the bottleneck.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  }
];

const HowItWorksSteps = [
  {
    step: "one",
    title: "Set up in InDesign",
    description: "Use our StudioCraft plugin that runs quietly in the background, prepping your files for automation without ever touching your design intent. No new tools to learn. No templates to rebuild.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  },
  {
    step: "two",
    title: "Upload to CreateTOTALLY",
    description: "Your InDesign templates become intelligent production systems that work like a designer - placing every element exactly where you'd expect, from multilingual formats to dynamic image swaps, while maintaining full visual control.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  },
  {
    step: "three",
    title: "Scale endlessly",
    description: "Generate hundreds of assets across every format, region, or language in seconds. Make a single change to colors, fonts, or layouts and apply it everywhere instantly - all while maintaining your precise design specifications.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  }
];

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
    <Box bg="brandNeutral.200">
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Adobe InDesign Creative Automation"
          title="Scale design production without sacrificing quality."
          subtitle="Keep your creative control. Let automation handle the busywork."
          features={[
            "Something",
            "Something else a bit longer",
            "Something else here",
            "Another word or two",
            "A little bit longer",
            "That's enough to show you"]}
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
                <Flex key={index} display="flex" align="center" gap="60px" flexDirection={index % 2 === 0 ? "row" : "row-reverse"}>
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
        <Heading as="h2" fontSize="3rem" fontWeight="700" textAlign="center" lineHeight="102.811%" mb="8" mt="0">
          Scale your design workflow with<br />InDesign automation
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
              '-ms-overflow-style': 'none',
            }}
          >
            {HowItWorksSteps.map((step, index) => (
              <Box
                key={index}
                flex="0 0 auto"
                bg="brandNavy.500"
                borderRadius="36px"
                p="60px"
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
              gap="60px"
            >
              <Image
                src="/purpleCheck.svg"
                alt="CheckIcon"
                height="96px"
              />
              <Text fontSize={["lg", "xl", "4xl"]} fontWeight="900" color="brandPurple.500">
                &quot;A lovely quote by the team deliverying Patek Philippe globally&quot;
              </Text>
              <Text
                fontWeight="700"
                color="brandPurple.500"
                textAlign="center"
                fontSize="24px"
                fontStyle="normal"
                lineHeight="110%"
                letterSpacing="-0.12px"
              >
                David Seal<br />Patek Philippe
              </Text>
            </Flex>
          </Box>
        </Box>
      </Container>

      <Box position="relative" bg="brandNeutral.500" pt={{ base: 0, md: 0 }} pb="24">
        <SwooshDivider fill="#FFFCFB" flipX/>
        <Container maxW="1200px" mt="-270px">
          <Flex
            direction="column"
            gap={2}
            alignItems="center"
            textAlign="center"
            maxW="xl"
            mx="auto"
            mb="16"
          >
            <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" lineHeight={1} m="0">
              Production-proof features built for design at scale
            </Heading>
            <Text color="brandNavy.500" fontSize="lg" lineHeight={1.5}>
              CreateTOTALLY isn&#39;t just another automation tool—it&#39;s created by designers who&#39;ve felt your pain:
            </Text>
          </Flex>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={3} p={3}>
            {features.map((feature, index) => (
              <Box key={index} textAlign="left" p="10" background="white" borderRadius="2xl" shadow="realistic">
                <HStack align="left" gap="5">
                  <Box color="brandFuchsia.500">
                    <Icon size="2xl" color="brandFuchsia.500">
                      {feature.icon}
                    </Icon>
                  </Box>
                  <Box>
                    <VStack align="left" gap="0">
                      <Text fontSize="lg" color="brandNavy.500" fontWeight="700" lineHeight="156%">
                        {feature.title}
                      </Text>
                      <Text color="brandNavy.500" fontSize="md" lineHeight="173.559%">
                        {feature.description}
                      </Text>
                    </VStack>
                  </Box>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      
      <Box bg="brandNeutral.200">
        <SwooshDivider fill="#F4F0EB"/>
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
                Accelerate your InDesign<br />workflows with<br />CreateTOTALLY
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
                  Get started today →
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}