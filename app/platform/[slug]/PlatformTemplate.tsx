"use client";

import { Container, Box, Text, Link, Heading, HStack, VStack, IconButton, Button, Image, Flex, SimpleGrid, useBreakpointValue, } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { useState, useRef, useEffect } from 'react';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { SwooshDivider } from '@/src/components/SwooshDivider';

import { PlatformPageData } from "@/src/data/platform";
import IconComponent from '@/app/platform/IconComponent';

export default function PlatformTemplate({ data }: { data: PlatformPageData }) {
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
            const next = (prev + 1) % data.HowItWorksSteps.length;
            scrollToStep(next);
            return next;
        });
    };

    const prevStep = () => {
        setCurrentStep((prev) => {
            const next = (prev - 1 + data.HowItWorksSteps.length) % data.HowItWorksSteps.length;
            scrollToStep(next);
            return next;
        });
    };

    useEffect(() => {
        scrollToStep(currentStep);
    }, [currentStep]);

    interface Feature {
        icon: string | { name: string };
        title: string;
        description: string;
    }

    const containerPadding = useBreakpointValue({ base: "0px", md: "calc(50% - 576px)" });
    return (
        <Box bg="brandNeutral.200" pt="40">
            <Box bg="brandNeutral.500">
                <FeatureHeroSection
                    featureGroup={data.heroSectionData.featureGroup}
                    title={data.heroSectionData.title}
                    subtitle={data.heroSectionData.subtitle}
                    features={data.heroSectionData.features}
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
                            {data.featureBlocks.map((block, index) => (
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
                <Heading as="h2" fontSize="3rem" fontWeight="700" textAlign="center" lineHeight="102.811%" mb="16" mt="0" color="brandNavy.500">
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
                            'msOverflowStyle': 'none',
                        }}
                    >
                        {data.HowItWorksSteps.map((step, index) => (
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
                        {data.HowItWorksSteps.map((_, index) => (
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
                        href="/get-started"
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
                                &quot;{data.testimonialData.quote}&quot;
                            </Text>
                            <Text fontWeight="700" color="brandPurple.500" textAlign="center" fontSize="24px" fontStyle="normal" lineHeight="110%" letterSpacing="-0.12px">
                                {data.testimonialData.author}<br />{data.testimonialData.company}
                            </Text>
                        </Flex>
                    </Box>
                </Box>
            </Container>

            <Box position="relative" bg="brandNeutral.500" pt={{ base: 0, md: 0 }} pb="24">
                <SwooshDivider fill="#FFFCFB" flipX />
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
                        {data.features.map((feature: Feature, index) => (
                            <Box key={index} textAlign="left" p="10" background="white" borderRadius="2xl" shadow="realistic">
                                <HStack align="flex-start" gap="5">
                                    <Box color="brandFuchsia.500">
                                        <IconComponent 
                                            name={
                                                typeof feature.icon === 'string'
                                                    ? feature.icon
                                                    : feature.icon.name
                                            }
                                            aria-label={feature.title}
                                        />
                                    </Box>
                                    <VStack align="left" gap={0}>
                                        <Text fontSize="lg" color="brandNavy.500" fontWeight="700">
                                            {feature.title}
                                        </Text>
                                        <Text color="brandNavy.500" fontSize="md">
                                            {feature.description}
                                        </Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>


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
                                {data.ctaData.title}
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
                                    {data.ctaData.buttonText}
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}