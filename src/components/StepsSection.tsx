'use client';

import { useState, useRef, useEffect } from 'react';
import { Container, Box, Text, VStack, Image, Heading, Flex, useBreakpointValue } from "@chakra-ui/react"
import { Tag } from "@/src/components/ui/tag"
import { motion, useScroll, useTransform } from 'framer-motion';
import { PiRocketFill } from "react-icons/pi";
import { IoCheckboxOutline } from "react-icons/io5";
import React from 'react';

const StepsSection = () => {
    const steps = [
        { icon: IoCheckboxOutline, label: "#1 Start with Figma & Adobe", subLabel: "Upload existing Figma and Adobe design files, prepared using our suite of plugins.", image: "/FigmaPlugin.jpg" },
        { icon: IoCheckboxOutline, label: "#2 No-code Templating", subLabel: "Set up templates easily, without writing any code. Just click and customise.", image: "/TemplateDesigner.jpg" },
        { icon: IoCheckboxOutline, label: "#3 Content Planning", subLabel: "Choose what you need: sizes, styles, and languages ensuring every adapt is perfect.", image: "/CreateTOTALLY-Content-planning-02-27-2025_04_32_PM.png" },
        // { icon: IoCheckboxOutline, label: "#4 Automate at Scale", subLabel: "The system quickly creates all your designs, perfectly formatted every time.", image: "/purple.svg" },
        { icon: IoCheckboxOutline, label: "#4 Approve Without the Back-and-Forth", subLabel: "Share for review in one place. Get feedback, make changes, and approve quickly.", image: "/TaskNotification.jpg" },
        // { icon: IoCheckboxOutline, label: "#6 Deliver Instantly", subLabel: "Send your files where they need to go—no extra steps, no renaming.", image: "/blue.svg" },
        { icon: IoCheckboxOutline, label: "#5 Track & Optimise", subLabel: "See what's working, measure results, and improve designs over time.", image: "/CreateTOTALLY-Reports-Campaign-performance-02-20-2025_09_33_PM.png" }
    ];
    const [currentStep, setCurrentStep] = useState(0);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (stepsRef.current && imageContainerRef.current) {
                const stepsRect = stepsRef.current.getBoundingClientRect();
                const stepHeight = stepsRect.height / steps.length;
                const scrollPosition = window.scrollY - stepsRect.top + window.innerHeight / 2;
                const newStep = Math.min(
                    Math.max(Math.floor(scrollPosition / stepHeight), 0),
                    steps.length - 1
                );
                setCurrentStep(newStep);

                // Check if the last step is in the middle of the viewport
                const lastStepTop = stepsRect.top + stepHeight * (steps.length - 1);
                if (lastStepTop <= window.innerHeight / 2) {
                    imageContainerRef.current.style.position = 'absolute';
                    imageContainerRef.current.style.top = `${lastStepTop - window.innerHeight / 2}px`;
                } else {
                    imageContainerRef.current.style.position = 'sticky';
                    imageContainerRef.current.style.top = '0';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [steps.length]);

    const lineRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: lineRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            const step = Math.floor(v * steps.length);
            setCurrentStep(Math.min(step, steps.length - 1));
        });
        return () => unsubscribe();
    }, [scrollYProgress, steps.length]);


    const h2FontSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "5xl" });

    return (
        <Box bg="brandNeutral.500">
            <Box>
                <Box bg="white">
                    <Box>
                        <Container maxW="container.xl" mx="auto" pb={6}>
                            <VStack gap={16} align="center">
                                <Box textAlign="center" maxW="4xl">
                                    <Tag
                                        variant="solid"
                                        size={{ base: "md", md: "lg" }}
                                        bg="brandFuchsia.100"
                                        color="brandFuchsia.600"
                                        mb={{ base: 2, md: 3 }}
                                        startElement={<PiRocketFill />}>
                                        Workflow & Automation
                                    </Tag>
                                    <Heading
                                        as="h2"
                                        fontSize={h2FontSize}
                                        fontWeight="black"
                                        lineHeight={{ base: "1.2", md: ".95" }}
                                        color='#001e44'
                                        textAlign={{ base: "center" }}
                                        mb={{ base: 3, md: 4 }}
                                    >
                                        How It Works
                                    </Heading>
                                    <Text fontSize={{ base: "lg", md: "xl" }} color="gray.900" mt={4}>
                                        Streamline your content creation process with our powerful automation tools.
                                    </Text>
                                </Box>
                                <Box w="full" ref={lineRef} position="relative">
                                    <Flex justify="center" direction={{ base: "column", md: "row" }}>
                                        <Box maxWidth="1200px" width="100%" position="relative">
                                            <Flex direction={{ base: "column", md: "row" }}>
                                                <Box width={{ base: "100%", md: "35%" }} position="relative" pr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
                                                    <Box
                                                        display={{ base: "none", md: "block" }}
                                                        position="absolute"
                                                        right="31px"
                                                        top="8px"
                                                        bottom="8px"
                                                        width="2px"
                                                        bg="gray.200"
                                                        transform="translateX(50%)"
                                                    />
                                                    {/* Progress line */}
                                                    <Box display={{ base: "none", md: "block" }}>
                                                        <motion.div
                                                            style={{
                                                                position: 'absolute',
                                                                right: '31px',
                                                                top: '8px',
                                                                bottom: '8px',
                                                                width: '2px',
                                                                background: '#CA3FC0',
                                                                transformOrigin: 'top',
                                                                transform: 'translateX(50%)',
                                                                height: lineHeight
                                                            }}
                                                        />
                                                    </Box>
                                                    <VStack gap={{ base: 12, md: 36 }} align="stretch">
                                                        {steps.map((step, index) => (
                                                            <Flex key={index} align="center" id={`step-${index}`}>
                                                                <Box flex="1" pr={4} textAlign={{ base: "left", md: "right" }}>
                                                                    <Text fontWeight="bold" fontSize="md" color="gray.900" lineHeight="1.2">
                                                                        {step.label}
                                                                    </Text>
                                                                    <Text fontSize="md" color="gray.600" lineHeight="1.2">
                                                                        {step.subLabel}
                                                                    </Text>
                                                                </Box>
                                                                <Box
                                                                    flex="none"
                                                                    width="60px"
                                                                    height="60px"
                                                                    borderRadius="full"
                                                                    bg="brandFuchsia.500"
                                                                    display={{ base: "none", md: "flex" }}
                                                                    alignItems="center"
                                                                    justifyContent="center"
                                                                    zIndex={1}
                                                                    position="relative"
                                                                    left={{ base: 0, md: "30px" }}
                                                                >
                                                                    <Box display={{ base: "none", md: "block" }}>
                                                                        <step.icon color="white" size="24px" />
                                                                    </Box>
                                                                </Box>
                                                            </Flex>
                                                        ))}
                                                    </VStack>
                                                </Box>

                                                <Box width={{ base: "100%", md: "65%" }} pl={{ base: 0, md: 8 }} position="relative" height="auto">
                                                    <Box
                                                        ref={imageContainerRef}
                                                        position={{ base: "relative", md: "sticky" }}
                                                        top="100px"
                                                        width="100%"
                                                        height="0"
                                                        paddingBottom="56.25%" // This maintains the 16:9 aspect ratio
                                                        display="flex"
                                                        alignItems="center"
                                                        justifyContent="center"
                                                    >
                                                        <Box
                                                            position="absolute"
                                                            top="0"
                                                            left="0"
                                                            right="0"
                                                            bottom="0"
                                                            overflow="hidden"
                                                            borderRadius="xl"
                                                            display={{ base: "none", md: "block" }}
                                                        >
                                                            {steps.map((step, index) => (
                                                                <Image
                                                                    key={index}
                                                                    src={step.image}
                                                                    alt={step.label}
                                                                    position="absolute"
                                                                    top="0"
                                                                    left="0"
                                                                    width="100%"
                                                                    height="100%"
                                                                    objectFit="cover"
                                                                    opacity={index === currentStep ? 1 : 0}
                                                                    transition="opacity 0.3s ease-in-out"
                                                                    display={{ base: "none", md: "block" }}
                                                                />
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                </Box>

                                            </Flex>
                                        </Box>
                                    </Flex>
                                </Box>
                            </VStack>
                        </Container>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default StepsSection;