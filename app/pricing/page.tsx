import React from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import { Card } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';

const plans = [
  {
    name: "Studio",
    subtitle: "For teams starting to build their creative automation capabilities",
    price: "From £16 / asset",
    originalPrice: "$5",
    frequency: "USD/mo annually, or $5 monthly",
    features: [
      "Adobe Creative Cloud Automation",
      "Translation management",
      "Task and project management",
      "Automated workflows",
      "Unlimited reviews",
      "Asset lifecycle controls",
      "Online support and knowledge base"
    ],
    isRecommended: false,
  },
  {
    name: "Powerhouse",
    subtitle: "For teams looking to grow their creative automation capabilities",
    price: "From £16 / asset",
    afterTrial: "then $7.50/mo annually, or $9 monthly",
    features: [
      "Advanced customization of buttons, themes, and fonts",
      "Click, conversion, and revenue tracking",
      "Upgraded customer support",
      "Option to hide Linktree logo",
      "Social platform integrations to automatically display your latest content",
      "Multiple admins",
    ],
    isRecommended: false,
  },
  {
    name: "Enterprise",
    subtitle: "For teams looking to deliver high-volume, highly scalable creative automation",
    price: "From £16 / asset",
    originalPrice: "$24",
    frequency: "USD/mo annually, or $24 monthly",
    features: [
      "Dedicated customer success manager with 1-1 onboarding",
      "Analytics: Export lifetime data",
      "Access to exclusive webinars & best practice videos",
      "Premium support, response time 4 hours",
    ],
    isRecommended: false,
  },
];

const PricingPage = () => {
  return (

    <Box>
      <Box bg="gray.50">
        <FeatureHeroSection
          featureGroup="Pricing"
          title="Simple, transparent pricing tiers"
          subtitle=""
          features={[
            "Automatic approval routing",
            "Always up-to-date versions",
            "Clear, trackable feedback",
            "Output that's ready to use",
            "Works with your existing tools",
          ]}
        />

        <Box p={6} maxW="7xl" mx="auto">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={8}
            alignItems="stretch"
          >
            {plans.map((plan) => (
              <Card.Root
                key={plan.name}
                bg={plan.isRecommended ? "purple.50" : "white"}
                position="relative"
              >
                <Card.Body color="brandNavy.500">
                  <Stack gap={3}>
                    <Heading fontSize="3xl" fontWeight="bold">{plan.name}</Heading>
                    <Text fontSize="md" fontWeight="regular">
                      {plan.subtitle}
                    </Text>
                    <Text fontSize="2xl" fontWeight="bold">
                      {plan.price}
                    </Text>
                    {plan.afterTrial && (
                      <Text fontSize="sm">
                        {plan.afterTrial}
                      </Text>
                    )}
                    <Text fontSize="sm">
                      {plan.frequency}
                    </Text>
                    <Stack gap={1} mt={4}>
                      {plan.features.map((feature, idx) => (
                        <Flex key={idx} align="center">
                          <Icon color="brandFuchsia.500" boxSize={5} flexShrink={0}>
                            <LuCircleCheck />
                          </Icon>
                          <Text fontSize="sm">{feature}</Text>
                        </Flex>
                      ))}
                    </Stack>
                  </Stack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingPage