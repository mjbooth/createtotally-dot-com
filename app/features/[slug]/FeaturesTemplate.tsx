"use client";

import { Container, Box, Text, Link, Heading, Button, Image, Flex, Avatar, useBreakpointValue, AspectRatio, } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { useRef, useLayoutEffect, useEffect, useState, useCallback, } from 'react';
import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeaturePageData } from "@/src/types/feature";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureTemplate({ data }: { data: FeaturePageData }) {
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
        console.log("[ScrollTrigger] useLayoutEffect start", Date.now());

        const runScrollTrigger = () => {
            console.log("[ScrollTrigger] runScrollTrigger called", Date.now());

            const wrapper = howItWorksWrapperRef.current;
            const container = scrollContainerRef.current;

            if (isMobile) {
                console.log("[ScrollTrigger] Skipped because isMobile === true");
            }
            if (!wrapper || !container || isMobile) {
                console.warn("[ScrollTrigger] Skipped: wrapper or container missing, or mobile");
                return;
            }

            // Early return guard for zero offsetWidth
            if (container.offsetWidth === 0 || wrapper.offsetWidth === 0) {
                console.warn("[ScrollTrigger] Aborted: container or wrapper offsetWidth === 0");
                return;
            }

            // Force container width early
            container.style.width = `${container.scrollWidth}px`;

            const scrollDistance = container.scrollWidth - wrapper.offsetWidth;

            if (scrollDistance <= 0) {
                console.warn("[ScrollTrigger] Aborted: scrollDistance is zero or negative", scrollDistance);
                // Retry once if layout may not have settled
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        console.log("[ScrollTrigger] Retrying runScrollTrigger after delay");
                        runScrollTrigger();
                    }, 50);
                });
                return;
            }

            try {
                console.log("[HowItWorks] Creating ScrollTrigger...");
                const ctx = gsap.context(() => {
                    // --- Wrapper height diagnostic and guard ---
                    const wrapperHeight = wrapper.clientHeight;
                    console.log("[ScrollTrigger] Wrapper clientHeight:", wrapperHeight);
                    if (wrapperHeight < 200) {
                        console.warn("[ScrollTrigger] Aborted: wrapper height too small", wrapperHeight);
                        return;
                    }

                    // Clean up all ScrollTriggers targeting this wrapper
                    ScrollTrigger.getAll().forEach(trigger => {
                        if (trigger.trigger === wrapper || trigger.vars.id === 'howItWorks') {
                            trigger.kill();
                        }
                    });
                    // container.style.transform = "none";
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
                        scroller: window, // explicitly set the scroller
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
                console.log("[HowItWorks] ScrollTrigger created successfully.");

                return () => {
                    ctx.revert();
                };
            } catch (error) {
                console.error("[HowItWorks] ScrollTrigger setup failed:", error);
            }
        };

        if (document?.fonts?.ready) {
            document.fonts.ready.then(() => {
                console.log("[ScrollTrigger] Fonts ready");
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        runScrollTrigger();
                    }, 0);
                });
            });
        } else {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    runScrollTrigger();
                }, 0);
            });
        }
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

        // Calculate scroll distance using scrollWidth and offsetWidth
        const scrollDistance = container.scrollWidth - wrapper.offsetWidth;
        if (!isMobile) {
            container.style.width = `${container.scrollWidth}px`;
        }

        gsap.set(container, { x: 0 });

        //console.log("[GSAP] scrollWidth:", container.scrollWidth);
        //console.log("[GSAP] wrapper.offsetWidth:", wrapper.offsetWidth);
        //console.log("[GSAP] scrollDistance:", scrollDistance);

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
        // Debug: log before cleanup
        console.log("[ResetMobile] clearing wrapper height:", howItWorksWrapperRef.current?.style.height);
        console.log("[ResetMobile] killing all ScrollTriggers...");
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
        // Remove pin-spacer
        const pinSpacer = document.querySelector('.pin-spacer');
        if (pinSpacer) {
            const parent = pinSpacer.parentNode;
            while (pinSpacer.firstChild) parent?.insertBefore(pinSpacer.firstChild, pinSpacer);
            parent?.removeChild(pinSpacer);
        }
        // Remove any pinned inline styles by targeting .pin-spacer > *
        const pinnedChildren = document.querySelectorAll('.pin-spacer > *');
        pinnedChildren.forEach(el => {
            (el as HTMLElement).style.position = 'relative';
        });
    };

    return (
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
                                                <Image src={block.image} alt={block.heading} width="100%" />
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
                                            <Box width="100%" overflow="hidden">
                                                <Image
                                                    src={block.image}
                                                    alt={block.heading}
                                                    width="100%"
                                                    borderRadius={{ base: "xl", md: "4xl" }}
                                                />
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
                                                        alt={`Step ${step.step}`}
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
                                                <Flex width="50%">
                                                    <Image src={step.image} alt={`Step ${step.step}`} borderRadius="xxl" width="100%" height="100%" objectFit="cover" />
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
                                            <Avatar.Image src={data.testimonialData.avatar} />
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
    );
}