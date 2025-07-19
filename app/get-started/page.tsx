'use client';

import { Box, Heading, Flex, VStack, Stack, Text, Alert, Grid, Image, Icon, Textarea, List, GridItem, Container, VisuallyHidden, SimpleGrid, Button, Field, For, Input, NativeSelect } from "@chakra-ui/react"

import { useForm, SubmitHandler } from 'react-hook-form'
import { useState, useEffect } from 'react';
import React from 'react';
import Link from "next/link";
import { useBackground } from '@/src/context/BackgroundContext';

const allClientLogos = [
    { src: "/bacardi_logo.png", alt: "Bacardi" },
    { src: "/vitality-logo.svg", alt: "Vitality" },
    { src: "/Anheuser-Busch_InBev.svg", alt: "Anheuser-Busch InBev" },
    { src: "/googlelogo_clr_74x24px.svg", alt: "Google" },
    { src: "/Logo_NIKE.png", alt: "Nike" },
    { src: "/miele.svg", alt: "Miele" },
    { src: "/patek-philippe-sa-1.svg", alt: "Patek Philippe" },
    { src: "/Allwyn-Logo.png", alt: "Allwyn" },
    { src: "/MSC_Cruises_Logo.png", alt: "MSC Cruises" },
];

type FormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    companyName: string;
    companySize: string;
    country: string;
    capture: string;
    details: string;
};

const Star = ({ filled }: { filled: boolean }) => (
    <svg
        height="16px"
        width="16px"
        viewBox="-1.23 -8.789 141.732 141.732"
    >
        <path
            fill={filled ? "#CA3FC0" : "#e4e5e9"}
            d="M139.273,49.088c0-3.284-2.75-5.949-6.146-5.949c-0.219,0-0.434,0.012-0.646,0.031l-42.445-1.001l-14.5-37.854   C74.805,1.824,72.443,0,69.637,0c-2.809,0-5.168,1.824-5.902,4.315L49.232,42.169L6.789,43.17c-0.213-0.021-0.43-0.031-0.646-0.031   C2.75,43.136,0,45.802,0,49.088c0,2.1,1.121,3.938,2.812,4.997l33.807,23.9l-12.063,37.494c-0.438,0.813-0.688,1.741-0.688,2.723   c0,3.287,2.75,5.952,6.146,5.952c1.438,0,2.766-0.484,3.812-1.29l35.814-22.737l35.812,22.737c1.049,0.806,2.371,1.29,3.812,1.29   c3.393,0,6.143-2.665,6.143-5.952c0-0.979-0.25-1.906-0.688-2.723l-12.062-37.494l33.806-23.9   C138.15,53.024,139.273,51.185,139.273,49.088"
        />
    </svg>
);

export default function TemplateContentCreation() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
    const clientLogos = allClientLogos.slice(0, 9);
    const { setBackgroundColor } = useBackground();

    useEffect(() => {
        setBackgroundColor("#F4F0EB");
        return () => setBackgroundColor("#FFFCFB");
    }, [setBackgroundColor]);


    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                reset(); // Clear the form
                setIsSubmitSuccessful(true); // Set success state
                // Push GTM event for successful submission
                if (typeof window !== 'undefined') {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ event: 'demoFormSubmissionSuccess' });
                }
                // Hide success message after 5 seconds
                setTimeout(() => setIsSubmitSuccessful(false), 5000);
            } else {
            }
        } catch {
        }
    };

    return (
        <Box bg="brandNeutral.500" pt={{ base: "24", md: "40" }}>
            <Box bg="brandNeutral.500">
                <Container maxW="1152px" pb="16">
                    <Box display="flex" justifyContent="center" alignItems="center" pt="5">
                        <Stack gap={6} mx="auto" textAlign="center" alignItems="center" >
                            <Flex
                                bg="brandPurple.600"
                                px={{ base: 2, sm: 3 }}
                                py={{ base: 1, sm: 2 }}
                                borderRadius="lg"
                                gap={{ base: 2, sm: 3 }}
                                alignItems="center"
                                flexWrap="wrap"
                                justifyContent="center"
                            >

                                <Icon
                                    boxSize={{ base: "18px", sm: "24px" }}
                                    fill="brandNeutral.500"
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path d="M3.9,18.9V5.1c0-1.6,1.7-2.6,3-1.8l12,6.9c1.4,0.8,1.4,2.9,0,3.7l-12,6.9C5.6,21.5,3.9,20.5,3.9,18.9z" />
                                    </svg>
                                </Icon>

                                <Text
                                    fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                                    fontWeight="bold"
                                    color="brandNeutral.500"
                                    lineHeight="160%"
                                >
                                    Get Started
                                </Text>
                            </Flex>
                            <Heading
                                as="h1"
                                fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "7xl" }}
                                fontWeight="900"
                                lineHeight="1"
                                color="brandNavy.500"
                                textAlign="center"
                                letterSpacing="tight"
                                mb="0"
                            >
                                Transform your entire workflow with CreateTOTALLY
                            </Heading>
                        </Stack>
                    </Box>
                </Container>
            </Box >
            <Box
                bg="brandNeutral.500"
                pb="12"
            >
                <Container maxW={{ base: "100%", md: "1152px" }} mx="auto" px={{ base: 4, md: 0 }} zIndex="9999">
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        justify="center"
                        align="start"
                        maxW="7xl"
                        mx="auto"
                        gap={16}
                    >
                        {/* Left Side: Text Content */}
                        <VStack align="start" gap={8} flex={1} width="100%">
                            <VStack align={{ base: "center", md: "start" }} gap={2} color="brandNavy.500" fontSize="lg" width="100%">
                                <Text fontWeight="400" fontSize="lg" lineHeight={1.5} textAlign={{ base: "center", md: "left" }}>
                                    Join the teams saving 65% of their time through automated creative production.
                                </Text>
                                <List.Root color="brandNavy.500" fontSize="lg" gap="1" variant="plain" alignItems={{ base: "flex-start", md: "center" }} width="100%">
                                    {[
                                        "Request a demo, see CreateTOTALLY in action.",
                                        "Discuss pricing and use-cases.",
                                        "Get onboarding help.",
                                        "Get a sneak peek at our roadmap."
                                    ].map((item, index) => (
                                        <List.Item key={index} display="flex" alignItems="center" width="100%">
                                            <List.Indicator asChild color="green.500" marginRight={2}>
                                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                                    <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z" />
                                                </svg>
                                            </List.Indicator>
                                            <Text fontSize="md">{item}</Text>
                                        </List.Item>
                                    ))}
                                </List.Root>
                            </VStack>
                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                gap={{ base: 4, sm: 8 }}
                                mt={8}
                                color="brandNavy.500"
                                width="100%"
                                justifyContent={{ base: "center", md: "flex-start" }}
                                alignItems={{ base: "center", md: "flex-start" }}
                                display="none"
                            >
                                {[
                                    { rating: 4.7, platform: "G2 Crowd", url: "https://www.g2.com/" },
                                    { rating: 4.7, platform: "Capterra", url: "https://www.capterra.co.uk/" },
                                    { rating: 4.9, platform: "ProductHunt", url: "https://www.producthunt.com/" }
                                ].map((item, index) => (
                                    <VStack key={index} align={{ base: "center", md: "left" }}>
                                        <Flex>
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} filled={i < Math.floor(item.rating)} />
                                            ))}
                                        </Flex>
                                        <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
                                            {item.rating}/5 on <Link href={item.url}>{item.platform}</Link>
                                        </Text>
                                    </VStack>
                                ))}
                            </Stack>
                        </VStack>

                        {/* Right Side: Form */}
                        <Box
                            bg="brandNeutral.200"
                            borderRadius="lg"
                            p={{ base: 4, md: 16 }}
                            w="full"
                            maxW={{ base: "100%", md: "2xl" }}
                            flex={1}
                            boxShadow="realistic"
                            color="brandNavy.500"
                        >
                            {isSubmitSuccessful && (
                                <Alert.Root status="success" variant="solid" mb={{ base: 6, md: 4 }} p={4}>
                                    <Alert.Indicator />
                                    <Alert.Title fontSize={{ base: "md", md: "sm" }}>Form submitted successfully!</Alert.Title>
                                </Alert.Root>
                            )}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack gap={{ base: 6, md: 4 }}>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 4 }}>
                                        <Field.Root flex={1} invalid={!!errors.firstName}>
                                            <Field.Label fontSize={{ base: "md", md: "sm" }}>
                                                First name *
                                                <Field.RequiredIndicator />
                                            </Field.Label>
                                            <Input
                                                {...register("firstName", { required: "First name is required" })}
                                                placeholder="First name"
                                            />
                                            {errors.firstName && <Field.ErrorText>{errors.firstName.message}</Field.ErrorText>}
                                        </Field.Root>
                                        <Field.Root flex={1} invalid={!!errors.lastName}>
                                            <Field.Label fontSize={{ base: "md", md: "sm" }}>
                                                Last name *
                                                <Field.RequiredIndicator />
                                            </Field.Label>
                                            <Input
                                                {...register("lastName", { required: "Last name is required" })}
                                                placeholder="Last name"
                                            />
                                            {errors.lastName && <Field.ErrorText>{errors.lastName.message}</Field.ErrorText>}
                                        </Field.Root>
                                    </SimpleGrid>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 4 }}>
                                        <Field.Root flex={1} invalid={!!errors.email}>
                                            <Field.Label fontSize={{ base: "md", md: "sm" }}>
                                                Work email *
                                                <Field.RequiredIndicator />
                                            </Field.Label>
                                            <Input
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                                type="email"
                                                placeholder="email@company.abc"
                                            />
                                            {errors.email && <Field.ErrorText>{errors.email.message}</Field.ErrorText>}
                                        </Field.Root>
                                        <Field.Root flex={1} invalid={!!errors.title}>
                                            <Field.Label fontSize={{ base: "md", md: "sm" }}>
                                                Job title *
                                                <Field.RequiredIndicator />
                                            </Field.Label>
                                            <Input
                                                {...register("title", { required: "Job title is required" })}
                                                placeholder="Job title"
                                            />
                                            {errors.title && <Field.ErrorText>{errors.title.message}</Field.ErrorText>}
                                        </Field.Root>
                                    </SimpleGrid>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 4 }}>
                                        <Field.Root flex={1} invalid={!!errors.companyName}>
                                            <Field.Label fontSize={{ base: "md", md: "sm" }}>
                                                Company name *
                                                <Field.RequiredIndicator />
                                            </Field.Label>
                                            <Input
                                                {...register("companyName", { required: "Company name is required" })}
                                                placeholder="Company name"
                                            />
                                            {errors.companyName && <Field.ErrorText color="red.500">{errors.companyName.message}</Field.ErrorText>}
                                        </Field.Root>
                                        <Field.Root flex={1} invalid={!!errors.companySize}>
                                            <Field.Label fontSize={{ base: "md", md: "sm" }}>
                                                Company size *
                                                <Field.RequiredIndicator />
                                            </Field.Label>
                                            <NativeSelect.Root>
                                                <NativeSelect.Field
                                                    {...register("companySize", { required: "Company size is required" })}
                                                >
                                                    <option value="">Company size</option>
                                                    <For each={["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]}>
                                                        {(item) => (
                                                            <option key={item} value={item}>
                                                                {item}
                                                            </option>
                                                        )}
                                                    </For>
                                                </NativeSelect.Field>
                                                <NativeSelect.Indicator />
                                            </NativeSelect.Root>
                                            {errors.companySize && <Field.ErrorText color="red.500">{errors.companySize.message}</Field.ErrorText>}
                                        </Field.Root>
                                    </SimpleGrid>
                                    <Field.Root>
                                        <Field.Label fontSize={{ base: "md", md: "sm" }}>
                                            Additional comments
                                            <Field.RequiredIndicator />
                                        </Field.Label>
                                        <Textarea
                                            {...register("details")}
                                            placeholder="Provide any additional comments (optional)"
                                            rows={4}
                                        />
                                    </Field.Root>
                                    <VisuallyHidden>
                                        <Field.Root flex={1}>
                                            <Field.Label fontSize={{ base: "md", md: "sm" }}>
                                                Honeypot
                                                <Field.RequiredIndicator />
                                            </Field.Label>
                                            <Input
                                                {...register("capture")}
                                            />
                                        </Field.Root>
                                    </VisuallyHidden>
                                    <Button
                                        colorPalette="brandFuchsia"
                                        type="submit"
                                        width="full"
                                        size={{ base: "lg", md: "md" }}
                                        py={{ base: 6, md: 4 }}
                                    >
                                        Get started with a demo →
                                    </Button>
                                </Stack>
                            </form>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Box
                position="relative"
                bg="brandNeutral.200"
                backgroundImage="url('/bg-top.svg')"
                backgroundRepeat="no-repeat"
                backgroundPosition="top center"
                backgroundSize="100% auto"
                pt={{ base: "2", md: "30" }}
                pb={{ base: "20", md: "30" }}
                css={{
                    transform: 'scaleX(-1)',
                    '& > *': {
                        transform: 'scaleX(-1)'
                    }
                }}
            >
                <Container maxW="1200px">
                    <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
                        <Box width={{ base: "100%", md: "40%" }} mb={{ base: 8, md: 0 }}>
                            <Text color="gray.800" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" textAlign={{ base: "center", md: "left" }} letterSpacing="tight" lineHeight="100%">
                                The world&apos;s biggest brands choose CreateTOTALLY
                            </Text>
                        </Box>
                        <Box width={{ base: "100%", md: "55%" }}>
                            <Grid templateColumns="repeat(3, 1fr)" gap={{ base: "1", md: "6" }}>
                                {clientLogos.map((logo, index) => (
                                    <GridItem key={index}>
                                        <Flex
                                            alignItems="center"
                                            justifyContent="center"
                                            height="100px"
                                            borderRadius="md"
                                            p={2}
                                        >
                                            <Image
                                                src={logo.src}
                                                alt={logo.alt}
                                                maxH="80px"
                                                maxW="80%"
                                                objectFit="contain"
                                                filter="grayscale(100%) brightness(0%)"
                                            />
                                        </Flex>
                                    </GridItem>
                                ))}
                            </Grid>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Box >
    );
}