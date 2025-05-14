'use client';

import { Box, Heading, Flex, VStack, Stack, Text, Alert, Image, Textarea, List, Container, VisuallyHidden } from "@chakra-ui/react"
import {
  Button,
  Field,
  For,
  Input,
  NativeSelect,
} from "@chakra-ui/react"
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6"

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

export default function TemplateContentCreation() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);


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
        console.log('Form submitted successfully');
        reset(); // Clear the form
        setIsSubmitSuccessful(true); // Set success state
        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitSuccessful(false), 5000);
      } else {
        console.error('Form submission failed');
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 6, md: 12 }} bg="brandNeutral.500" color="brandNavy.500">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="start"
        maxW="7xl"
        mx="auto"
        gap={16}
      >
        {/* Left Side: Text Content */}
        <VStack align="start" gap={8} flex={1}>
          <Heading
            as="h1"
            fontSize={{ base: "lg", md: "3xl", lg: "5xl" }}
            fontWeight="black"
            lineHeight={{ base: "1.2", md: ".95" }}
            color="brandNavy.500"
            textAlign="left"
            maxW={{ base: "full", md: "6xl" }}
            pt={6}
          >
            Transform your creative workflow with CreateTOTALLY
          </Heading>
          <VStack align="start" gap={2} color="brandNavy.500" fontSize="lg">
            <Text fontWeight="regular" lineHeight={1.5}>
              Join the teams saving 65% of their time through automated creative production.
            </Text>
            <List.Root color="gray.900" fontSize="xl" gap="1" variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Request a demo, see CreateTOTALLY in action.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Discuss pricing and use-cases.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Get onboarding help.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Get a sneak peek at our roadmap.
              </List.Item>
            </List.Root>
          </VStack>
          <Stack direction="row" gap={8} mt={8} color="brandNavy.500">
            <VStack align="left">
              <Flex>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < 4 ? "#CA3FC0" : "#e4e5e9"} />
                ))}
              </Flex>
              <Text fontSize="sm">4.7/5 on <Link href="https://www.g2.com/">G2 Crowd</Link></Text>
            </VStack>
            <VStack align="left">
              <Flex>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < 4 ? "#CA3FC0" : "#e4e5e9"} />
                ))}
              </Flex>
              <Text fontSize="sm">4.7/5 on <Link href="https://www.capterra.co.uk/">Capterra</Link></Text>
            </VStack>
            <VStack align="left">
              <Flex>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < 5 ? "#CA3FC0" : "#e4e5e9"} />
                ))}
              </Flex>
              <Text fontSize="sm">4.9/5 on <Link href="https://www.producthunt.com/">ProductHunt</Link></Text>
            </VStack>
          </Stack>
        </VStack>

        {/* Right Side: Form */}
        <Box
          bg="white"
          borderRadius="lg"
          p={16}
          w="full"
          maxW="2xl"
          flex={1}
        >
          {isSubmitSuccessful && (
            <Alert.Root status="success" variant="solid" mb={4}>
              <Alert.Indicator />
              <Alert.Title>Form submitted successfully!</Alert.Title>
            </Alert.Root>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={4}>
              <Flex gap={4}>
                <Field.Root flex={1} invalid={!!errors.firstName}>
                  <Field.Label>
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
                  <Field.Label>
                    Last name *
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    {...register("lastName", { required: "Last name is required" })}
                    placeholder="Last name"
                  />
                  {errors.lastName && <Field.ErrorText>{errors.lastName.message}</Field.ErrorText>}
                </Field.Root>
              </Flex>
              <Flex gap={4}>
                <Field.Root flex={1} invalid={!!errors.email}>
                  <Field.Label>
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
                  <Field.Label>
                    Job title *
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    {...register("title", { required: "Job title is required" })}
                    placeholder="Job title"
                  />
                  {errors.title && <Field.ErrorText>{errors.title.message}</Field.ErrorText>}
                </Field.Root>
              </Flex>
              <Flex gap={4}>
                <Field.Root flex={1} invalid={!!errors.companyName}>
                  <Field.Label>
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
                  <Field.Label>
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
              </Flex>
              <Field.Root>
                <Field.Label>
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
                  <Field.Label>
                    Honeypot
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    {...register("capture")}
                  />
                </Field.Root>
</VisuallyHidden>
              <Button colorPalette="brandFuchsia" type="submit" width="full">
                Get started with a demo →
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>

      {/* Testimonials Section */}
      <Box mt={40}>
        <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={8} color="brandNavy.500">
          3,000+ ducentes societates CreateTOTALLY ut solam veritatis originem confidunt.
        </Text>
        <Flex justify="center" gap={16} mb={16}>
          <Image height="40px" src="/PerfectDraft.svg" alt="PerfectDraft" />
          <Image height="40px" src="/Miele_Logo_M_Red_sRGB.png" alt="Miele" />
          <Image height="40px" src="/Allwyn-Logo.png" alt="Allwyn" />
          <Image height="40px" src="/Logo_NIKE.png" alt="PerfectDraft" />
          <Image height="26px" src="/AGY_22_Logo_Doner_RGB.png" alt="Miele" />
          <Image height="40px" src="/googlelogo_clr_74x24px.svg" alt="Allwyn" />
        </Flex>
      </Box>
      <Box>
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Heading as="h2" color="brandNavy.500" fontSize="4xl" fontWeight="bold" textAlign="center" lineHeight={1} mt="0" mb="8">
            They say it better than we do.
          </Heading>
          <Flex gap={8} justify="center">
            {/* Testimonial cards */}
            <Box bg="white" p={6} borderRadius="md" maxW="sm" color="brandNavy.500">
              <Text mb={8}>&quot;Lorem ipsum dolor sit amet, facilisi rapidus crescimus, elementum adoptionis est crucialis eligendi solutionem novam. Slite est amica, facilis adoptio.&quot;</Text>
              <Flex align="center">
                <Box>
                  <Text fontWeight="bold">Martijn Hazelaar</Text>
                  <Text fontSize="sm">Head of digital, Vennoot</Text>
                </Box>
              </Flex>
            </Box>
            <Box bg="white" p={6} borderRadius="md" maxW="sm" color="brandNavy.500">
              <Text mb={8}>&quot;Lorem ipsum dolor sit amet, facilisi rapidus crescimus, elementum adoptionis est crucialis eligendi solutionem novam. Slite est amica, facilis adoptio.&quot;</Text>
              <Flex align="center">
                <Box>
                  <Text fontWeight="bold">Martijn Hazelaar</Text>
                  <Text fontSize="sm">Head of digital, Vennoot</Text>
                </Box>
              </Flex>
            </Box>
            <Box bg="white" p={6} borderRadius="md" maxW="sm" color="brandNavy.500">
              <Text mb={8}>&quot;Lorem ipsum dolor sit amet, facilisi rapidus crescimus, elementum adoptionis est crucialis eligendi solutionem novam. Slite est amica, facilis adoptio.&quot;</Text>
              <Flex align="center">
                <Box>
                  <Text fontWeight="bold">Martijn Hazelaar</Text>
                  <Text fontSize="sm">Head of digital, Vennoot</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}