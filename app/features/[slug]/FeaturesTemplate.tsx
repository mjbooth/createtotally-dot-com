"use client";

import { Container, Box, Text, Link, Heading, Button, Image, Flex, Avatar, useBreakpointValue, } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { useRef, useLayoutEffect, useEffect } from 'react';
import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SwooshDivider } from '@/src/components/SwooshDivider';
import { FeaturePageData } from "@/src/types/feature";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureTemplate({ data }: { data: FeaturePageData }) {
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
                            {data.featureBlocks.map((block, index) => {
                                const isLastItem = index === data.featureBlocks.length - 1;

                                if (isLastItem) {
                                    // Special layout for the last item
                                    return (
                                        <Flex key={index} direction="column" align="center" textAlign="center">
                                            <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="700" mb="4" lineHeight="100%" letterSpacing="tight">
                                                {block.heading}
                                            </Heading>
                                            <Text color="brandNavy.500" fontSize="1rem" fontWeight="400" lineHeight="160%" mb="8" maxW="3xl">
                                                {block.text}
                                            </Text>
                                            <Box overflow="hidden" borderRadius="xxl" boxShadow="realistic" maxW="3xl">
                                                <Image src={block.image} alt={block.heading} width="100%" />
                                            </Box>
                                        </Flex>
                                    );
                                }

                                // Original layout for other items
                                return (
                                    <Flex key={index} display="flex" align="center" gap="60px" flexDirection={index % 2 === 0 ? "row" : "row-reverse"}>
                                        <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
                                            <Flex gap="8px" direction="column">
                                                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="700" textAlign="left" lineHeight="100%" mb="0" mt="0">
                                                    {block.heading}
                                                </Heading>
                                                <Text color="brandNavy.500" fontSize="1rem" fontWeight="400" lineHeight="161.345%">
                                                    {block.text.split('\n').map((line, lineIndex) => (
                                                        <React.Fragment key={lineIndex}>
                                                            {line}
                                                            {lineIndex < block.text.split('\n').length - 1 && <br />}
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
                                );
                            })}
                        </Flex>
                    </Container>
                </Box>
            </Box>

            <Box
                position="relative"
                bg="brandNeutral.200"
                zIndex="2"
                backgroundImage="url('/bg-bottom-footer-flip.svg')"
                backgroundRepeat="no-repeat"
                backgroundPosition="top center"
                backgroundSize="100% auto"
                pt="100px"
            >
                <Container
                    maxW="100%"
                    px="0"
                    overflow="hidden"
                    position="relative"
                >
                    <Heading
                        as="h2"
                        pt="16"
                        fontSize="3rem"
                        fontWeight="700"
                        textAlign="center"
                        lineHeight="102.811%"
                        color="brandNavy.500"
                        zIndex="10"
                        position="sticky"
                        top="0"
                        ref={headingRef}
                        className="scroll-out-heading"
                        opacity="1"
                        pb="16"
                    >
                        Scale your design workflow with<br />InDesign automation
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
            </Box>

            <Container fluid px="0">
                <Box width="100%">
                    <Flex
                        backgroundColor="#001E44"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p="6.25rem"
                    >
                        <Flex
                            bg="#EBDFF6"
                            borderRadius="xxl"
                            maxW="ctContainer"
                            p="15"
                        >
                            <Flex
                                flexDirection="column"
                                alignItems="left"
                                justifyContent="center"
                                gap="15"
                            >
                                <Text
                                    fontSize="4xl"
                                    fontWeight="700"
                                    color="brandPurple.600"
                                    letterSpacing="tight"
                                    lineHeight="110%"
                                    position="relative"
                                    paddingLeft="0.5em"
                                >
                                    <Box
                                        as="span"
                                        position="absolute"
                                        left="0em"
                                    >
                                        &ldquo;
                                    </Box>
                                    {data.testimonialData.quote.split('\n').map((line, index, array) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            {index < array.length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                    &rdquo;
                                </Text>
                                {data.testimonialData ? (
                                    <Flex gap="5">
                                        <Avatar.Root size="md" key="md">
                                            <Avatar.Fallback name={data.testimonialData.author} />
                                            <Avatar.Image src={data.testimonialData.avatar} />
                                        </Avatar.Root>
                                        <Text
                                            fontWeight="400"
                                            color="brandPurple.600"
                                            textAlign="left"
                                            fontSize="xl"
                                            fontStyle="normal"
                                            lineHeight="110%"
                                            letterSpacing="-0.12px"
                                        >
                                            {data.testimonialData.author}, {data.testimonialData.role}<br />{data.testimonialData.company}
                                        </Text>
                                    </Flex>
                                ) : (
                                    <Text>No testimonial data available</Text>
                                )}
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Container>



            <Box position="relative" bg="brandNeutral.200" pb="15">
                <Box bg="brandNeutral.200">
                    <SwooshDivider fill="#F4F0EB" />
                </Box>
                <Container position="relative">
                    <Box
                        position="relative"
                        marginTop={{ base: "-120px", md: "-220px" }}
                        zIndex={1}
                        px={4}
                    >
                        <Flex
                            maxW="3xl"
                            mx="auto"
                            bg="brandNavy.500"
                            borderRadius="xxl"
                            boxShadow="realistic"
                            textAlign="center"
                            p="15"
                            gap="15"
                            direction="column"
                            alignItems="center"
                        >
                            <Text
                                fontSize={{ base: "xl", md: "3xl", lg: "3rem" }}
                                fontWeight="bold"
                                color="brandNeutral.500"
                                lineHeight="100%"
                                letterSpacing="tight"
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
                        </Flex>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}