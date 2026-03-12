"use client";

import { Container, Box, Text, Link, Heading, Button, Flex, Avatar, useBreakpointValue, AspectRatio, } from "@chakra-ui/react"
import NextImage from 'next/image';
import { blurDataURL } from '@/src/utils/image';
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import React from 'react';
import { FeaturePageData } from "@/src/types/feature";
import { useHorizontalScrollTrigger } from '@/src/hooks/useHorizontalScrollTrigger';

export default function FeatureTemplate({ data }: { data: FeaturePageData }) {
    const isMobile = useBreakpointValue({ base: true, md: false });

    const {
        scrollContainerRef,
        howItWorksWrapperRef,
        headingRef,
        stepRefs,
        currentStep,
        setCurrentStep,
        maxStepHeight,
        handleTouchStart,
        handleTouchMove,
        containerPadding,
    } = useHorizontalScrollTrigger({ stepsCount: data.HowItWorksSteps.length, isMobile });

    return (
        <>
            <Box bg="brandNeutral.200" pt={{ base: "24", md: "40" }}>
                <Box bg="brandNeutral.500">
                <FeatureHeroSection
                    featureGroup={data.heroSectionData.featureGroup}
                    featureGroupIcon={data.heroSectionData.featureGroupIcon}
                    title={data.heroSectionData.title}
                    subtitle={data.heroSectionData.subtitle}
                    features={data.heroSectionData.features}
                />
                <Box
                    position="relative"
                    bg="brandNeutral.500"
                    zIndex="2"
                    backgroundImage="url('/wave-FFFCFB-F4F0EB.svg')"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="top center"
                    backgroundSize="100% auto"
                    css={{
                        transform: 'scaleX(-1)',
                        '& > *': {
                            transform: 'scaleX(-1)'
                        }
                    }}
                >
                    <Container maxW={{ base: "100%", md: "1152px" }} mx="auto" px={{ base: 4, md: 0 }} zIndex="9999">
                        <Flex gap={{ base: "15", md: "32" }} direction="column" pt="32">
                            {data.featureBlocks.map((block, index) => {
                                const isLastItem = index === data.featureBlocks.length - 1;

                                if (isLastItem) {
                                    // Special layout for the last item
                                    return (
                                        <Flex
                                            key={index}
                                            direction="column"
                                            align="center"
                                            textAlign="center"
                                            px={{ base: 4, md: 0 }}
                                            pb="8"
                                        >
                                            <Heading
                                                as="h2"
                                                color="brandNavy.500"
                                                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                                fontWeight="700"
                                                mb={{ base: 3, md: 4 }}
                                                lineHeight="100%"
                                                letterSpacing="tight"
                                            >
                                                {block.heading}
                                            </Heading>
                                            <Text
                                                color="brandNavy.500"
                                                fontSize={{ base: "sm", md: "md", lg: "1rem" }}
                                                fontWeight="400"
                                                lineHeight="160%"
                                                mb={{ base: 6, md: 8 }}
                                                maxW={{ base: "full", md: "3xl" }}
                                            >
                                                {block.text}
                                            </Text>
                                            <Box
                                                overflow="hidden"
                                                borderRadius={{ base: "xl", md: "xxl" }}
                                                maxW={{ base: "full", md: "3xl" }}
                                                width="100%"
                                            >
                                                {block.image && <NextImage src={block.image} alt={block.imageAlt} width={800} height={450} placeholder="blur" blurDataURL={blurDataURL(800, 450)} style={{ width: '100%', height: 'auto' }} sizes="(max-width: 768px) 100vw, 768px" />}
                                            </Box>
                                        </Flex>
                                    );
                                }

                                // Original layout for other items
                                return (
                                    <Flex
                                        key={index}
                                        direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
                                        align={{ base: "center", md: "center" }}
                                        gap={{ base: "8", md: "15" }}
                                        px={{ base: 4, md: 0 }}
                                    >
                                        <Box flex={{ base: "1", md: "1" }} width={{ base: "100%", md: "50%" }}>
                                            <Flex gap="4" direction="column">
                                                <Heading
                                                    as="h2"
                                                    color="brandNavy.500"
                                                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                                    fontWeight="700"
                                                    textAlign={{ base: "center", md: "left" }}
                                                    lineHeight="100%"
                                                    mb="0"
                                                    mt="0"
                                                >
                                                    {block.heading}
                                                </Heading>
                                                <Text
                                                    color="brandNavy.500"
                                                    fontSize={{ base: "sm", md: "md", lg: "1rem" }}
                                                    fontWeight="400"
                                                    lineHeight="161.345%"
                                                    textAlign={{ base: "center", md: "left" }}
                                                >
                                                    {block.text.split('\n').map((line, lineIndex) => (
                                                        <React.Fragment key={lineIndex}>
                                                            {line}
                                                            {lineIndex < block.text.split('\n').length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}
                                                </Text>
                                            </Flex>
                                        </Box>
                                        <Box flex={{ base: "1", md: "1" }} width={{ base: "100%", md: "50%" }}>
                                            <Box width="100%" overflow="hidden" borderRadius={{ base: "xl", md: "4xl" }}>
                                                {block.image && <NextImage src={block.image} alt={block.imageAlt} width={576} height={400} placeholder="blur" blurDataURL={blurDataURL(576, 400)} style={{ width: '100%', height: 'auto' }} sizes="(max-width: 768px) 100vw, 576px" />}
                                            </Box>
                                        </Box>
                                    </Flex>
                                );
                            })}
                        </Flex>
                    </Container>
                </Box>
            </Box>

            {/* How it works */}
            <Box position="relative" bg="brandNeutral.200" zIndex="2" backgroundImage="url('/bg-bottom-footer-flip.svg')" backgroundRepeat="no-repeat" backgroundPosition="top center" backgroundSize="100% auto" pt="100px" >
                <Container maxW="100%" px="0" position="relative" >
                    <Heading as="h2" pt="16" fontSize="3rem" fontWeight="700" textAlign="center" lineHeight="102.811%" color="brandNavy.500" zIndex="10" position="sticky" top="0" ref={headingRef} className="scroll-out-heading" opacity="1" pb="16" >
                        How it works
                    </Heading>
                    <Box
                        ref={howItWorksWrapperRef}
                        position="relative"
                        overflow="hidden"
                        height={{ base: "auto", md: "100vh" }}
                        minHeight={{ base: "auto", md: "700px" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        css={{ contain: 'layout' }}
                    >
                        {/* Mobile view */}
                        <Box
                            display={{ base: "block", md: "none" }}
                            width="100%"
                            px="4"
                            position="relative"
                            overflow="hidden"
                        >
                            <Flex
                                direction="row"
                                width={`${data.HowItWorksSteps.length * 100}%`}
                                transform={`translateX(-${currentStep * (100 / data.HowItWorksSteps.length)}%)`}
                                transition="transform 0.3s ease"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                            >
                                {data.HowItWorksSteps.map((step, index) => (
                                    <Box
                                        key={index}
                                        width={`${100 / data.HowItWorksSteps.length}%`}
                                        flexShrink={0}
                                        px="2"
                                    >
                                        <Box
                                            ref={(el: HTMLDivElement | null) => stepRefs.current[index] = el}
                                            bg="brandNavy.500"
                                            borderRadius="xl"
                                            p="6"
                                            boxShadow="realistic"
                                            minHeight={maxStepHeight > 0 ? `${maxStepHeight}px` : undefined}
                                            overflowY="auto"
                                        >
                                            <Flex gap="6" direction="column">
                                                <AspectRatio ratio={1 / 1}>
                                                    <NextImage src={step.image} alt={step.imageAlt} fill placeholder="blur" blurDataURL={blurDataURL()} style={{ objectFit: 'cover', borderRadius: '0.5rem' }} sizes="90vw" />
                                                </AspectRatio>
                                                <Flex gap="3" direction="column">
                                                    <Flex bg="brandPurple.600" p="3" borderRadius="md" display="inline-flex" alignSelf="flex-start">
                                                        <Text color="brandNeutral.200" fontWeight="bold" fontSize="md" lineHeight={1} whiteSpace="nowrap">
                                                            {step.label}
                                                        </Text>
                                                    </Flex>
                                                    <Heading color="brandNeutral.500" as="h3" fontSize="2xl" fontWeight="700">
                                                        {step.title}
                                                    </Heading>
                                                    <Text color="brandNeutral.500" fontSize="md">
                                                        {step.description}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                    </Box>
                                ))}
                            </Flex>
                            <Flex justify="center" mt="8" mb="8">
                                {data.HowItWorksSteps.map((_, index) => (
                                    <Box
                                        key={index}
                                        w="4"
                                        h="4"
                                        borderRadius="full"
                                        bg={currentStep === index ? "brandPurple.500" : "gray.300"}
                                        mx="1"
                                        onClick={() => setCurrentStep(index)}
                                    />
                                ))}
                            </Flex>
                        </Box>

                        {/* Desktop view */}
                        <Flex
                            ref={scrollContainerRef}
                            display={{ base: "none", md: "flex" }}
                            position="absolute"
                            left="0"
                            overflow="visible"
                            px={containerPadding}
                            height="100%"
                            alignItems="center"
                            css={{ willChange: 'transform', contain: 'layout style' }}
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
                                        mr={index !== data.HowItWorksSteps.length - 1 ? "30" : "0"}
                                        zIndex="1"
                                        boxShadow="realistic"
                                    >
                                        <Flex width="100%" gap="15">
                                            <Flex width="50%" direction="column" gap="4">
                                                <Flex bg="brandPurple.600" p="3" borderRadius="md" display="inline-flex" alignSelf="flex-start" >
                                                    <Text color="brandNeutral.200" fontWeight="bold" fontSize="2xl" lineHeight={1} whiteSpace="nowrap" >
                                                        {step.label}
                                                    </Text>
                                                </Flex>
                                                <Flex gap="2" direction="column" justify="center" height="100%">
                                                    <Heading color="brandNeutral.500" as="h3" fontSize={["3xl", "4xl", "5xl"]} fontWeight="700" lineHeight="100%" mt="0" mb="0" letterSpacing="tight" >
                                                        {step.title}
                                                    </Heading>
                                                    <Text color="brandNeutral.500" fontSize="lg" lineHeight="1.6">
                                                        {step.description}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Flex width={{ base: "100%", md: "50%" }} css={{ aspectRatio: '1/1' }}>
                                                <NextImage src={step.image} alt={step.imageAlt} width={576} height={576} placeholder="blur" blurDataURL={blurDataURL(576, 576)} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '3rem' }} sizes="576px" />
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
                        p={{ base: "4", md: "16", lg: "24" }}
                    >
                        <Flex
                            bg="#EBDFF6"
                            borderRadius="xxl"
                            maxW="ctContainer"
                            p={{ base: "8", md: "16", lg: "15" }}
                        >
                            <Flex
                                flexDirection="column"
                                alignItems="left"
                                justifyContent="center"
                                gap={{ base: "8", md: "16", lg: "15" }}
                            >
                                <Text
                                    fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
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
                                            <Avatar.Image src={data.testimonialData.avatar} alt={`${data.testimonialData.author}, ${data.testimonialData.role} at ${data.testimonialData.company}`}/>
                                        </Avatar.Root>
                                        <Text
                                            fontWeight="400"
                                            color="brandPurple.600"
                                            textAlign="left"
                                            fontSize={{ base: "md", md: "lg", lg: "xl" }}
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

            <Box
                position="relative"
                bg="brandNeutral.200"
                zIndex="2"
                backgroundImage="url('/wave-F4F0EB.svg')"
                backgroundRepeat="no-repeat"
                backgroundPosition="top center"
                backgroundSize="100% auto"
            >
                <Container position="relative">
                    <Box
                        px={{ base: "0", md: "4", lg: "4" }}
                        py={{ base: "16", md: "30", lg: "30" }}
                    >
                        <Flex
                            maxW="3xl"
                            mx="auto"
                            bg="brandNavy.500"
                            borderRadius="xxl"
                            boxShadow="realistic"
                            textAlign="center"
                            p={{ base: "8", md: "15", lg: "15" }}
                            gap="15"
                            direction="column"
                            alignItems="center"
                        >
                            <Text
                                fontSize={{ base: "4xl", md: "3xl", lg: "3rem" }}
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
                                    px={{ base: "4", md: "10", lg: "10" }}
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
        </Box >
        </>
    );
}