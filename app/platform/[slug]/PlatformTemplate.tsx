"use client";

import { Container, Box, Text, Link, Heading, HStack, VStack, Button, Image, Flex, SimpleGrid, useBreakpointValue, AspectRatio, Avatar } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { useRef, useLayoutEffect, useEffect, useState, useCallback, } from 'react';
import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlatformPageData } from "@/src/data/platform";
import IconComponent, { iconMap, IconName } from '@/app/platform/IconComponent';

gsap.registerPlugin(ScrollTrigger);

export default function PlatformTemplate({ data }: { data: PlatformPageData }) {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const howItWorksWrapperRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    const [currentStep, setCurrentStep] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const containerPadding = useBreakpointValue({ base: "0px", md: "calc(50% - 576px)" });

    const [maxStepHeight, setMaxStepHeight] = useState(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const calculateMaxHeight = () => {
            const heights = stepRefs.current.map(ref => ref?.offsetHeight || 0);
            const maxHeight = Math.max(...heights);
            setMaxStepHeight(maxHeight);
        };

        calculateMaxHeight();
        window.addEventListener('resize', calculateMaxHeight);

        return () => {
            window.removeEventListener('resize', calculateMaxHeight);
        };
    }, [data.HowItWorksSteps]);

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

        const runScrollTrigger = () => {

            const wrapper = howItWorksWrapperRef.current;
            const container = scrollContainerRef.current;
            try {
                if (isMobile) {
                }
                if (!wrapper || !container || isMobile) {
                    return;
                }

                if (container.offsetWidth === 0 || wrapper.offsetWidth === 0) {
                    return;
                }

                container.style.width = `${container.scrollWidth}px`;

                const scrollDistance = container.scrollWidth - wrapper.offsetWidth;

                if (scrollDistance <= 0) {
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            runScrollTrigger();
                        }, 50);
                    });
                    return;
                }

                const ctx = gsap.context(() => {
                    const wrapperHeight = wrapper.clientHeight;
                    if (wrapperHeight < 200) {
                        return;
                    }

                    ScrollTrigger.getAll().forEach(trigger => {
                        if (trigger.trigger === wrapper || trigger.vars.id === 'howItWorks') {
                            trigger.kill();
                        }
                    });
                    container.style.transform = "none";
                    const pinSpacers = document.querySelectorAll('.pin-spacer');
                    pinSpacers.forEach(pinSpacer => {
                        const parent = pinSpacer.parentNode;
                        while (pinSpacer.firstChild) parent?.insertBefore(pinSpacer.firstChild, pinSpacer);
                        parent?.removeChild(pinSpacer);
                    });
                    gsap.set(container, { x: 0 });

                    ScrollTrigger.create({
                        id: 'howItWorks',
                        trigger: wrapper,
                        scroller: window,
                        start: "top top",
                        end: () => `+=${scrollDistance}px`,
                        pin: true,
                        anticipatePin: 1,
                        scrub: true,
                        fastScrollEnd: true,
                        invalidateOnRefresh: true,
                        onUpdate: self => {
                            gsap.to(container, {
                                x: -scrollDistance * self.progress,
                                duration: 0,
                                overwrite: "auto",
                            });
                        },
                    });
                    ScrollTrigger.refresh();
                    setTimeout(() => ScrollTrigger.refresh(), 100);
                }, wrapper);
                // Removed unused setupElapsed variable

                return () => {
                    ctx.revert();
                };
            } catch {
            } finally {
                document.body.style.overflow = '';
            }
        };

        const whenLayoutIsReady = async () => {
            document.body.style.overflow = 'hidden';

            if (document.fonts?.ready) {
                await document.fonts.ready;
            }

            const wrapper = howItWorksWrapperRef.current;
            if (wrapper) {
                const images = Array.from(wrapper.querySelectorAll("img"));
                await Promise.all(
                    images.map((img) => {
                        if (img.complete) return Promise.resolve();
                        return new Promise<void>((resolve) => {
                            img.onload = () => resolve();
                            img.onerror = () => resolve();
                        });
                    })
                );
            }

            requestAnimationFrame(() => {
                setTimeout(() => {
                    runScrollTrigger();
                    document.body.style.overflow = '';
                }, 0);
            });
        };

        whenLayoutIsReady();
    }, [data.HowItWorksSteps.length, isMobile]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStart === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchStart - currentTouch;

        if (diff > 50) {
            // Swipe left
            setCurrentStep((prev) => Math.min(prev + 1, data.HowItWorksSteps.length - 1));
        }

        if (diff < -50) {
            // Swipe right
            setCurrentStep((prev) => Math.max(prev - 1, 0));
        }

        setTouchStart(null);
    };

    const setupGSAPForDesktop = useCallback(() => {
        const wrapper = howItWorksWrapperRef.current;
        const container = scrollContainerRef.current;
        if (!wrapper || !container || isMobile) return;

        const existingPinSpacer = document.querySelector('.pin-spacer');
        if (existingPinSpacer) {
            const parent = existingPinSpacer.parentNode;
            while (existingPinSpacer.firstChild) parent?.insertBefore(existingPinSpacer.firstChild, existingPinSpacer);
            parent?.removeChild(existingPinSpacer);
        }

        const scrollDistance = container.scrollWidth - wrapper.offsetWidth;
        if (!isMobile) {
            container.style.width = `${container.scrollWidth}px`;
        }

        gsap.set(container, { x: 0 });

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
    }, [isMobile]);

    useEffect(() => {
        const handleResize = () => {
            if (isMobile) {
                resetLayoutForMobile();
            } else {
                setupGSAPForDesktop();
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [data.HowItWorksSteps.length, isMobile, setupGSAPForDesktop]);

    const resetLayoutForMobile = () => {
        ScrollTrigger.killAll();

        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.width = '100%';
            scrollContainerRef.current.style.transform = 'none';
        }
        if (howItWorksWrapperRef.current) {
            howItWorksWrapperRef.current.style.height = 'auto';
            howItWorksWrapperRef.current.style.overflow = 'visible';
            howItWorksWrapperRef.current.style.minHeight = 'auto';
        }
        const pinSpacer = document.querySelector('.pin-spacer');
        if (pinSpacer) {
            const parent = pinSpacer.parentNode;
            while (pinSpacer.firstChild) parent?.insertBefore(pinSpacer.firstChild, pinSpacer);
            parent?.removeChild(pinSpacer);
        }
        const pinnedChildren = document.querySelectorAll('.pin-spacer > *');
        pinnedChildren.forEach(el => {
            (el as HTMLElement).style.position = 'relative';
        });
    };

    interface Feature {
        icon: string | { name: string };
        title: string;
        description: string;
    }

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
                            {data.featureBlocks.map((block, index) => (
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
                                                lineHeight="160%"
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
                                        <Box width="100%" overflow="hidden">
                                            <Image
                                                src={block.image}
                                                alt={block.imageAlt}
                                                width="100%"
                                                borderRadius={{ base: "xl", md: "4xl" }}
                                            />
                                        </Box>
                                    </Box>
                                </Flex>
                            ))}
                        </Flex>
                    </Container>
                </Box>
            </Box>

            {/* How it works */}
            <Box position="relative" bg="brandNeutral.200" zIndex="2" backgroundImage="url('/bg-bottom-footer-flip.svg')" backgroundRepeat="no-repeat" backgroundPosition="top center" backgroundSize="100% auto" pt="100px" >
                <Container maxW="100%" px="0" overflow="hidden" position="relative" >
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
                                            height={maxStepHeight > 0 ? `${maxStepHeight}px` : 'auto'}
                                            overflowY="auto"
                                        >
                                            <Flex gap="6" direction="column">
                                                <AspectRatio ratio={1 / 1}>
                                                    <Image
                                                        src={step.image}
                                                        alt={step.imageAlt}
                                                        borderRadius="lg"
                                                        width="100%"
                                                        height="auto"
                                                        objectFit="cover"
                                                    />
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
                        {!isMobile && (
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
                                            mr={index !== data.HowItWorksSteps.length - 1 ? "30" : "0"}
                                            zIndex="9999"
                                            boxShadow="realistic"
                                        >
                                            <Flex width="100%" gap="15">
                                                <Flex
                                                    width="50%"
                                                    direction="column"
                                                    gap="4"
                                                >
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
                                                <Flex width={{ base: "100%", md: "50%" }} >
                                                    <Image src={step.image} alt={step.imageAlt} borderRadius="xxl" width="100%" height="100%" objectFit="cover" />
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>
                        )}
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
                                            <Avatar.Image src={data.testimonialData.avatar} alt={`${data.testimonialData.author}, ${data.testimonialData.role} at ${data.testimonialData.company}`} />
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
                <Container maxW={{ base: "100%", md: "1152px" }} py="30">
                    <Flex
                        direction="column"
                        gap={2}
                        alignItems="center"
                        textAlign="center"
                        maxW="xl"
                        mx="auto"
                        mb="16"
                    >
                        <Heading as="h2" color="brandNavy.500" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" lineHeight={1} m="0">
                            Production-proof features built for design at scale
                        </Heading>
                        <Text color="brandNavy.500" fontSize="lg" lineHeight={1.5}>
                            CreateTOTALLY isn&#39;t just another automation tool—it&#39;s created by designers who&#39;ve felt your pain:
                        </Text>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={3} p={3}>
                        {data.features.map((feature: Feature, index) => (
                            <Box key={index} textAlign="left" p={{ base: "8", md: "10", lg: "10" }} minHeight={{ base: "48", md: "30", lg: "24" }} background="white" borderRadius="2xl" shadow="realistic">
                                <HStack align="flex-start" gap="5">
                                    <Box color="brandFuchsia.500">
                                        {typeof feature.icon === 'string' && feature.icon in iconMap && (
                                            <IconComponent
                                                name={feature.icon as IconName}
                                                aria-label={feature.title}
                                            />
                                        )}
                                        {typeof feature.icon === 'object' && 'name' in feature.icon && feature.icon.name in iconMap && (
                                            <IconComponent
                                                name={feature.icon.name as IconName}
                                                aria-label={feature.title}
                                            />
                                        )}
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
        </Box>
        </>
    );
}