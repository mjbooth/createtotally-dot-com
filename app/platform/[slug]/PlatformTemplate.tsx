"use client";

import { Container, Box, Text, Link, Heading, HStack, VStack, Button, Image, Flex, SimpleGrid, useBreakpointValue, } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { useRef, useLayoutEffect, useEffect } from 'react';
import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SwooshDivider } from '@/src/components/SwooshDivider';
import { PlatformPageData } from "@/src/data/platform";
import IconComponent from '@/app/platform/IconComponent';

gsap.registerPlugin(ScrollTrigger);

export default function PlatformTemplate({ data }: { data: PlatformPageData }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const howItWorksWrapperRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const heading = headingRef.current;
        if (!heading) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                heading.classList.add('hidden');
            } else {
                heading.classList.remove('hidden');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useLayoutEffect(() => {
        const wrapper = howItWorksWrapperRef.current;
        const container = scrollContainerRef.current;
        if (!wrapper || !container) return;

        const numSteps = data.HowItWorksSteps.length;
        const cardWidth = 1152;
        const cardMargin = 120;
        const containerWidth = numSteps * cardWidth + (numSteps - 1) * cardMargin;
        const extraOffset = (window.innerWidth - cardWidth) / 2;
        const scrollDistance = containerWidth - window.innerWidth + extraOffset * 2;

        container.style.width = `${containerWidth}px`;

        const ctx = gsap.context(() => {
            gsap.set(container, { x: 0 });
            ScrollTrigger.killAll();

            ScrollTrigger.create({
                trigger: wrapper,
                start: "top top",
                end: () => `+=${scrollDistance}px`,
                pin: true,
                anticipatePin: 1,
                scrub: true,
                invalidateOnRefresh: true,
                onUpdate: self => {
                    gsap.to(container, {
                        x: -scrollDistance * self.progress,
                        duration: 0,
                        overwrite: "auto",
                    });
                },
            });
        }, wrapper);

        return () => {
            ctx.revert();
        };
    }, [data.HowItWorksSteps.length]);

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
                    featureGroupIcon={data.heroSectionData.featureGroupIcon}
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
                    <Container width="1152px" mx="auto" px="0" zIndex="9999">
                        <Flex gap="120px" direction="column">
                            {data.featureBlocks.map((block, index) => (
                                <Flex key={index} display="flex" align="center" gap="60px" flexDirection={index % 2 === 0 ? "row" : "row-reverse"}>
                                    <Box flex={{ base: "1 1 100%", md: index === 2 ? "3 1 50%" : "2 1 50%" }}>
                                        <Flex gap="8px" direction="column">
                                            <Heading as="h2" color="brandNavy.500" fontSize="3rem" fontWeight="700" textAlign="left" lineHeight="102.811%" mb="0" mt="0">
                                                {block.heading}
                                            </Heading>
                                            <Text color="brandNavy.500" fontSize="1rem" fontWeight="400" lineHeight="161.345%">
                                                {block.text.split('\n').map((line, index) => (
                                                    <React.Fragment key={index}>
                                                        {line}
                                                        {index < block.text.split('\n').length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
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
            <Container maxW="100%" px="0" overflow="hidden" position="relative" zIndex="2">
                <Heading
                    as="h2"
                    pt="16"
                    fontSize="3rem"
                    fontWeight="700"
                    textAlign="center"
                    lineHeight="102.811%"
                    color="brandNavy.500"
                    zIndex="10"
                    bg="brandNeutral.200"
                    position="sticky"
                    top="0"
                    ref={headingRef}
                    className="scroll-out-heading"
                    opacity="1"
                >
                    Scale your design workflow with<br />InDesign automationnnnn
                </Heading>
                <Box
                    ref={howItWorksWrapperRef}
                    position="relative"
                    overflow="hidden"
                    height="100vh"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Flex
                        ref={scrollContainerRef}
                        position="absolute"
                        left="0"
                        overflow="visible"
                        px={containerPadding}
                        height="100%"
                        alignItems="center"
                    >
                        <Flex alignItems="center">
                            {data.HowItWorksSteps.map((step, index) => (
                                <Flex
                                    key={index}
                                    flexShrink={0}
                                    bg="brandNavy.500"
                                    borderRadius="xxl"
                                    p="15"
                                    width="1152px"
                                    minW="1152px"
                                    mr="30"
                                    zIndex="9999"
                                    boxShadow="realistic"
                                >
                                    <Flex width="100%" gap="15">
                                        <Flex width="50%" direction="column" gap="2">
                                            <Flex
                                                bg="brandPurple.600"
                                                p="3"
                                                borderRadius="md"
                                                display="inline-flex"
                                                alignSelf="flex-start"
                                            >
                                                <Text
                                                    color="white"
                                                    fontWeight="bold"
                                                    fontSize="2xl"
                                                    lineHeight={1}
                                                    whiteSpace="nowrap"
                                                >
                                                    {step.label}
                                                </Text>
                                            </Flex>
                                            <Flex gap="2" direction="column" justify="center" height="100%">
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
                                                    {step.title}
                                                </Heading>
                                                <Text color="brandNeutral.500" fontSize="lg" lineHeight="1.6">
                                                    {step.description}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                        <Flex width="50%">
                                            <Image src={step.image} alt={`Step ${step.step}`} borderRadius="xxl" width="100%" height="100%" objectFit="cover" />
                                        </Flex>
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
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