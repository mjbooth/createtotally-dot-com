import React from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Icon,
  Image,
  SimpleGrid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import { Card } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { WaveDivider } from '@/src/components/WaveDivider';

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
      <Box bg="brandNeutral.500">
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

        <WaveDivider
          backgroundImage="/wave-divider-1.svg"
          heightBase="380px"
          heightMd="380px"
          rotation="0deg"
        />
        <Box
          position="relative"
          marginTop={{ base: "-100px", md: "-200px" }}
          zIndex={1}
        >


      <Box as="section" bg="brandWhite.500">
        {/* Feature Block 3 */}
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
          </Flex>
          <SimpleGrid columns={3} gap={16} mb={20}>
            <GridItem bg="white" borderRadius="4xl">
              <Box p={6} borderRadius="4xl">
                <Text color="brandPurple.500" fontSize="md" fontWeight="black" mb="3">STEP ONE</Text>
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Set up in InDesign
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5}>
                  Use our StudioCraft plugin that runs quietly in the background, prepping your files for automation without ever touching your design intent. No new tools to learn. No templates to rebuild.
                </Text>
              </Box>
              <Image src="/FigmaPlugin.jpg" alt="All Channels" width="100%" />
            </GridItem>

            <GridItem bg="white" borderRadius="4xl">
              <Box p={6} borderRadius="4xl">
                <Text color="brandPurple.500" fontSize="md" fontWeight="black" mb="3">STEP TWO</Text>
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Upload to CreateTOTALLY
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5}>
                  Your InDesign templates become intelligent production systems that work like a designer - placing every element exactly where you&#39;d expect, from multilingual formats to dynamic image swaps, while maintaining full visual control.
                </Text>
              </Box>
            </GridItem>

            <GridItem bg="white" borderRadius="4xl">
              <Box p={6} borderRadius="4xl">
                <Text color="brandPurple.500" fontSize="md" fontWeight="black" mb="3">STEP THREE</Text>
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Scale endlessly
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5}>
                Generate hundreds of assets across every format, region, or language in seconds. Make a single change to colors, fonts, or layouts and apply it everywhere instantly - all while maintaining your precise design specifications.
                </Text>
              </Box>
              <Image src="/9c8500506ec9297dc6eb446ceedf317df81b8b1e-1560x1248.avif" alt="All Channels" width="100%" />
            </GridItem>
          </SimpleGrid>
        </Container>

      </Box>

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
    </Box>
  );
};

export default PricingPage