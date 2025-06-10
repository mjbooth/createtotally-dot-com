"use client"

import React from 'react';
import { Box, Heading, Button, Container, Text, Flex, Stack, Icon, Separator, SimpleGrid, HStack, VStack, List, Highlight, Image, Link, Avatar } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import { renderIcon } from '@/src/utils/iconUtils';
import { TbCoinPoundFilled } from "react-icons/tb";

const CustomCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M10.9976 17.2996L18.6226 9.64961L16.3976 7.37461L10.9976 12.7746L8.42263 10.1996L6.17263 12.4746L10.9976 17.2996ZM12.4726 23.1496C10.9286 23.1496 9.47472 22.8613 8.11088 22.2846C6.74722 21.7078 5.5633 20.9173 4.55913 19.9131C3.55497 18.9089 2.76447 17.725 2.18763 16.3614C1.61097 14.9975 1.32263 13.5436 1.32263 11.9996C1.32263 10.4513 1.61147 8.99753 2.18913 7.63836C2.76697 6.27919 3.56013 5.09636 4.56863 4.08986C5.57713 3.08336 6.76105 2.29169 8.12038 1.71486C9.47988 1.13803 10.9306 0.849609 12.4726 0.849609C14.0208 0.849609 15.4748 1.13786 16.8346 1.71436C18.1945 2.29103 19.3775 3.08244 20.3836 4.08861C21.3898 5.09478 22.1812 6.27803 22.7579 7.63836C23.3344 8.99869 23.6226 10.4531 23.6226 12.0016C23.6226 13.5503 23.3342 15.0024 22.7574 16.3579C22.1805 17.7132 21.3889 18.8951 20.3824 19.9036C19.3759 20.9121 18.193 21.7053 16.8339 22.2831C15.4747 22.8608 14.021 23.1496 12.4726 23.1496ZM12.4669 19.7496C14.6459 19.7496 16.4833 19.0037 17.9791 17.5119C19.4748 16.0199 20.2226 14.1844 20.2226 12.0054C20.2226 9.82636 19.4767 7.98894 17.9849 6.49311C16.4929 4.99744 14.6574 4.24961 12.4784 4.24961C10.2994 4.24961 8.46197 4.99553 6.96613 6.48736C5.47047 7.97936 4.72263 9.81486 4.72263 11.9939C4.72263 14.1729 5.46855 16.0103 6.96038 17.5061C8.45238 19.0018 10.2879 19.7496 12.4669 19.7496Z" fill="#853FCA" />
  </svg>
);

const pricingBenefits = [
  { benefit: 1, headline: "Unlimited users", subline: "Add your whole team, no per-seat charges" },
  { benefit: 2, headline: "All modules unlocked", subline: "No feature gates or \"premium\" tiers" },
  { benefit: 3, headline: "Full integration freedom", subline: "Connect your tech stack end-to-end" },
  { benefit: 4, headline: "Insights included", subline: "Reporting is standard, not a bolt-on" },
  { benefit: 5, headline: "No templating fees", subline: "Build what you need, when you need it" },
  { benefit: 6, headline: "Flat pricing, globally", subline: "No hidden fees based on region" },
];

const testimonialData = [
  {
    quote: "In just a few days we created 750+ videos using\nCreateTOTALLY. It’s cheaper, more consistent and speedy...\nit’ll be an important tool for Lukkien in the future.",
    author: "Mattijs van Moorsel",
    role: "Head of Production",
    avatar: "/feature-placeholder-FiPenTool-sqr.jpg",
    company: "Lukkien",
  },
];

const ctaData = [
  {
    title: "Ready to see how it works?",
    subline: "Let’s talk. In 20 minutes, we’ll walk you through pricing, use cases, and how other teams are scaling automation - without blowing budgets.",
    buttonText: "Book your pricing walkthrough →"
  },
];

const clientHighlights = [
  {
    title: "55% reduction in production \ncosts. 8x faster.",
    description: ["55% reduction", "8x faster."],
    icon: "MdGridOn",
    image: "/white-claw-hard-seltzer-logo-vector.svg",
    client: "White Claw",
  },
  {
    title: "Briefing to live in 3 weeks. \nSold out in 3 markets.",
    description: "Briefing to live in 3 weeks.",
    icon: "LuLayoutDashboard",
    image: "/Hasbro_logo.svg",
    client: "Hasbro",
  },
  {
    title: "10x faster to brief, adapt \nand deliver retail films.",
    description: "10x faster",
    icon: "HiOutlinePuzzle",
    image: "/nike-4-logo.svg",
    client: "Nike",
  },
  {
    title: "38% reduction in new customer cost per acquisition.",
    description: "38% reduction",
    icon: "TbTextWrapDisabled",
    image: "/tws.jpeg",
    client: "The Wine Society",
  },
];

const pricingModels = [
  {
    modelBlock: true,
    icon: "FaPencilAlt",
    headline: "SaaS platform",
    body: "For in-house brand teams and production partners who want full control.",
    highlights: [
      "Unlimited users, integrations, and markets",
      "All platform modules included",
      "Tiered pricing based on creative volume",
      "Full control of setup, workflow, and automation",
    ],
    useCase: "Ideal for: Scaling in-house ops without bloated vendor costs",
  },
  {
    modelBlock: true,
    icon: "FaPencilAlt",
    headline: "Managed Service",
    body: "For lean teams or urgent campaigns. We do the work - fast.",
    highlights: [
      "Hands-on delivery from setup to execution",
      "Dedicated account manager and support team",
      "No internal resourcing or training required",
      "Flat-rate pricing per campaign",
    ],
    useCase: "Perfect for: Campaign spikes, high-volume sprints, or no in-house bandwidth",
  },
  {
    modelBlock: true,
    icon: "FaPencilAlt",
    headline: "Consultency",
    body: "For teams scaling automation across functions or regions, looking to drive greater efficiencies.",
    highlights: [
      "Discovery interviews & workflow mapping",
      "Creative asset audit & automation scoring",
      "Live campaign pilot to prove ROI",
      "Strategic rollout roadmap",
    ],
    useCase: "Best for: Cross-functional teams evaluating and scaling automation",
  },
  {
    modelBlock: false,
    headline: "Want help choosing?",
    cta: "Book your pricing walkthrough →",
  },
];

const cards = [
  {
    title: 'SaaS Platform',
    bestFor: 'In-house creative ops \nand production partners',
    included: 'Full access, unlimited users, \nusage-based pricing',
    pricing: 'Tiered by annual \ncreative volume',
  },
  {
    title: 'Managed Service',
    bestFor: 'Brands or agencies \nduring spikes',
    included: 'Campaign delivery, QA, \nlocalisation, platform access',
    pricing: 'Flat-rate per campaign',
  },
  {
    title: 'Consulting',
    bestFor: 'Teams scaling automation',
    included: 'Discovery, audit, \npilot, rollout plan',
    pricing: 'Scoped per engagement',
  },
];

const tableRows = [
  { label: "", key: "title" },
  { label: "Best for", key: "bestFor" },
  { label: "What's included", key: "included" },
  { label: "Pricing", key: "pricing" },
  { label: "", key: "" },
];

interface Feature {
  image: string;
  icon: string | { name: string };
  title: string;
  client: string;
  description: string | string[];
}
const PricingPage = () => {
  return (
    <Box bg="brandNeutral.200" pt={{ base: "20", md: "40", lg: "40" }}>
      <Box bg="brandNeutral.200">
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
                  as={TbCoinPoundFilled}
                  boxSize={{ base: "18px", sm: "24px" }}
                  color="brandNeutral.500"
                />

                <Text
                  fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="brandNeutral.500"
                  lineHeight="160%"
                >
                  Pricing
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
                Automate more. Pay less.
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                color="brandNavy.500"
                maxW={{ base: "full", md: "2xl" }}
                px={{ base: 4, sm: 0 }}
              >
                Whether you’re just starting out or orchestrating global campaigns, CreateTOTALLY adapts to your workflow and scales without surprises.
              </Text>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box
        position="relative"
        bg="brandNeutral.500"
        zIndex="2"
        backgroundImage="url('/wave-FFFCFB-F4F0EB.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="top center"
        backgroundSize="100% auto"
      >
        <Container width={{ base: "100%", md: "90%", lg: "1152px" }} mx="auto" px={{ base: "4", md: "0" }} py={{ base: "12", md: "30", lg: "30" }}>
          <Flex gap={{ base: "60px", md: "120px" }} direction="column">
            <Flex direction={{ base: "column", md: "row" }} align={{ base: "stretch", md: "center" }} gap={{ base: "30px", md: "60px" }}>
              <Box flex={{ base: "1 1 100%", md: "1 1 50%" }}>
                <Flex gap="4" direction="column" align={{ base: "center", md: "flex-start" }}>
                  <Heading as="h2" color="brandNavy.500" fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }} fontWeight="700" textAlign={{ base: "center", md: "left" }} lineHeight="102.811%" mb="0" mt="0">
                    We’ve removed every blocker to fast, flexible creative production:
                  </Heading>
                </Flex>
              </Box>
              <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
                {pricingBenefits.map((item) => (
                  <Flex key={item.benefit} gap="12px" direction="row" pb="4" align="top">
                    <Box pt="1">
                      <Icon as={CustomCheckIcon} boxSize="1.4rem" flexShrink={0} minWidth="1.4rem" />
                    </Box>
                    <Box>
                      <Text color="brandNavy.500" fontSize={{ base: "md", md: "md", lg: "lg" }} fontWeight="600" lineHeight="160%" textAlign="left">
                        {item.headline}
                      </Text>
                      <Text color="brandNavy.500" fontSize={{ base: "sm", md: "sm", lg: "md" }} fontWeight="400" lineHeight="160%" textAlign="left">
                        {item.subline}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Box>
            </Flex>
          </Flex>
        </Container>


        <Container id="ways-to-engage" width={{ base: "100%", md: "90%", lg: "1152px" }} mx="auto" px={{ base: "4", md: "0" }} py={{ base: "12", md: "30", lg: "30" }}>
          <Box display="flex" justifyContent="center" alignItems="center" pb="15">
            <Stack gap={6} mx="auto" textAlign="center" alignItems="center" >
              <Heading as="h2" fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }} fontWeight="700" textAlign="center" lineHeight="102.811%" color="brandNavy.500" >
                Built for teams of every shape and scale
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                color="brandNavy.500"
                maxW={{ base: "full", md: "2xl" }}
                px={{ base: 4, sm: 0 }}
              >
                Choose the model that fits your creative setup, speed, and resourcing.
              </Text>
            </Stack>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="3.75rem">

            {pricingModels.map((model, index) => (
              <Box
                key={index}
                flex={model.modelBlock ? { base: "1 1 100%", md: "1 1 calc(50% - 1.875rem)" } : "1 1 100%"}
                bg="brandNavy.500"
                p={{ base: "8", md: "14", lg: "14" }}
                borderRadius="3rem"
                boxShadow="realistic"
              >
                {model.modelBlock ? (
                  <Flex gap="6" direction="column" alignItems="left">
                    <Flex bg="brandPurple.600" p="3" borderRadius="md" display="inline-flex" alignSelf="flex-start" color="brandNeutral.500">
                      <Text color="brandNeutral.200" fontWeight="bold" fontSize="xl" lineHeight={1} whiteSpace="nowrap">
                        {model.icon && (
                          <Icon
                            as={renderIcon(model.icon)}
                            boxSize="18px"
                            color="currentColor"
                          />
                        )}
                      </Text>
                    </Flex>
                    <Flex gap="4" direction="column" alignItems="left" py="3">
                      <Heading as="h3" fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }} fontWeight="700" lineHeight="100%" letterSpacing="tight" color="brandNeutral.500">
                        {model.headline}
                      </Heading>
                      <Text fontSize="md" fontWeight="400" lineHeight="160%" color="brandNeutral.500">
                        {model.body}
                      </Text>

                      <List.Root gap="2" variant="plain" align="center" color="brandNeutral.500">
                        {model.highlights && model.highlights.map((highlight, hIndex) => (
                          <List.Item key={hIndex} color="brandNeutral.500">
                            <List.Indicator asChild color="brandNeutral.500">
                              <LuCircleCheck />
                            </List.Indicator>
                            {highlight}
                          </List.Item>
                        ))}
                      </List.Root>

                      <Text fontSize="lg" fontWeight="600" lineHeight="160%" color="brandNeutral.500">
                        {model.useCase}
                      </Text>
                    </Flex>
                  </Flex>
                ) : (
                  <Flex
                    gap="15"
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <Heading as="h3" textAlign="center" fontSize="5xl" fontWeight="700" lineHeight="100%" letterSpacing="-1.2px" color="brandNeutral.500">
                      {model.headline}
                    </Heading>
                    <Link href="/get-started">
                      <Button alignSelf="center" variant="solid" fontWeight="600" colorPalette="brandFuchsia" rounded="full" px="5" py="2">
                        {model.cta}
                      </Button>
                    </Link>
                  </Flex>
                )}
              </Box>
            ))}

          </SimpleGrid>
        </Container>
      </Box>
      <Box
        position="relative"
        bg="brandNeutral.200"
        zIndex="2"
        backgroundImage="url('/bg-bottom-footer-flip.svg')"
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
        <Container id="compare" width={{ base: "100%", md: "90%", lg: "1152px" }} mx="auto" px={{ base: "4", md: "0" }} py={{ base: "12", md: "30", lg: "30" }}>
          <Flex gap={{ base: "60px", md: "120px" }} direction="column">
            <Flex direction={{ base: "column", md: "row" }} align={{ base: "stretch", md: "center" }} gap={{ base: "30px", md: "60px" }}>
              <Box flex={{ base: "1 1 100%", md: "1 1 50%" }}>
                <Flex gap="4" direction="column" align={{ base: "center", md: "flex-start" }}>
                  <Heading as="h2" color="brandNavy.500" fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }} fontWeight="700" textAlign={{ base: "center", md: "left" }} lineHeight="102.811%" mb="0" mt="0">
                    Not sure which model fits?
                  </Heading>
                </Flex>
              </Box>
            </Flex>
          </Flex>
          <Box py={{ base: 8, md: 16 }} px={{ base: 2, md: 4, lg: 10 }} color="brandNavy.500">
            <Flex
              gap={{ base: 4, md: 2 }}
              direction={{ base: "column", md: "row" }}
              align="stretch"
              overflowX={{ base: "auto", md: "visible" }}
            >
              {[{ title: "" }, ...cards].map((card, cardIndex) => (
                <Flex
                  key={cardIndex}
                  bg={
                    cardIndex === 0
                      ? "transparent"
                      : cardIndex === 2
                        ? "rgba(235, 223, 246, 0.62)"
                        : "#EBDFF6"
                  }
                  direction="column"
                  gap="0"
                  borderRadius={{ base: "xl", md: "3rem" }}
                  minW={{ base: "100%", md: cardIndex === 0 ? "auto" : "xs" }}
                  flex={{ base: "0 0 auto", md: cardIndex === 0 ? "0 0 auto" : "1 1 0" }}
                  display={{ base: cardIndex === 0 ? "none" : "flex", md: "flex" }}
                >
                  {tableRows.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                      <Flex
                        py={{ base: "8", md: "3" }}
                        px={{ base: 2, md: "3" }}
                        pr={{ base: 2, md: cardIndex === 0 ? "2.25rem" : "0" }}
                        textAlign={cardIndex === 0 ? "left" : "center"}
                        height={{ base: "auto", md: "6.5rem" }}
                        alignItems="center"
                        justifyContent={cardIndex === 0 ? "flex-start" : "center"}
                        direction={cardIndex === 0 ? "row" : "column"}
                      >
                        {(() => {
                          const content = cardIndex === 0 ? row.label : (card as Record<string, string>)[row.key];
                          if (content === undefined) return null;
                          return (
                            <>
                              {cardIndex !== 0 && (
                                <>
                                  <Text
                                    display={{ base: "block", md: "none" }}
                                    fontWeight="700"
                                    fontSize="sm"
                                    mb={2}
                                    color="rgba(0, 30, 68, .75)"
                                  >
                                    {row.label}
                                  </Text>
                                  {content.split('\n').map((line, lineIndex) => (
                                    <Text
                                      key={lineIndex}
                                      fontWeight={(rowIndex === 0) ? "700" : "400"}
                                      fontSize={{ base: "md", md: "md" }}
                                      lineHeight="1.2"
                                    >
                                      {line}
                                    </Text>
                                  ))}
                                </>
                              )}
                              {cardIndex === 0 && (
                                <Text
                                  fontWeight="700"
                                  fontSize={{ base: "md", md: "md" }}
                                  lineHeight="1.2"
                                  display={{ base: "none", md: "block" }}
                                >
                                  {content}
                                </Text>
                              )}
                            </>
                          );
                        })()}
                      </Flex>
                      {rowIndex < tableRows.length - 1 && (
                        <Separator
                          borderColor="#C5A3E6"
                          display={{
                            base: cardIndex === 0 ? "none" : "block",
                            md: "block"
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </Flex>
              ))}
            </Flex>
          </Box>
        </Container>
      </Box>

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
        <Container width={{ base: "100%", md: "90%", lg: "1152px" }} mx="auto" px={{ base: "4", md: "0" }} pt="30" pb="30">
          <Flex
            direction="column"
            gap={2}
            alignItems="center"
            textAlign="center"
            maxW="xl"
            mx="auto"
            pb={{ base: "8", md: "16", lg: "16" }}
          >
            <Heading as="h2" color="brandNavy.500" fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }} fontWeight="bold" lineHeight={1} m="0">
              The more you automate, the more you save
            </Heading>
            <Text color="brandNavy.500" fontSize="lg" lineHeight={1.5}>
              CreateTOTALLY is engineered for scale. The bigger your creative ambition, the lower your cost per asset.
            </Text>
          </Flex>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={3} p={3}>
            {clientHighlights.map((feature: Feature, index) => (
              <Box key={index} textAlign="left" p={{ base: 4, lg: 10 }} background="white" borderRadius="2xl" shadow="realistic">
                <HStack align="center" gap="6">
                  <Box color="brandFuchsia.500">
                    <Image
                      src={feature.image}
                      alt={feature.client}
                      minW={{ base: "12", lg: "28" }}
                      maxW={{ base: "12", lg: "28" }}
                    />
                  </Box>
                  <VStack align="left" justify="center" height="100%" gap={0}>
                    <Text fontSize={{ base: "lg", lg: "xl" }} color="brandNavy.500" fontWeight="700" lineHeight="120%">
                      {feature.title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          <Highlight
                            query={Array.isArray(feature.description) ? feature.description : [feature.description]}
                            styles={{ color: "brandFuchsia.500" }}
                          >
                            {line}
                          </Highlight>
                          {index < feature.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
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
                  {testimonialData.length > 0 && testimonialData[0].quote.split('\n').map((line, index, array) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < array.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  &rdquo;
                </Text>
                {testimonialData ? (
                  <Flex gap="5">
                    <Avatar.Root size="md" key="md">
                      <Avatar.Fallback name={testimonialData[0].author} />
                      <Avatar.Image src={testimonialData[0].avatar} />
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
                      {testimonialData[0].author}, {testimonialData[0].role}<br />{testimonialData[0].company}
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
              <Flex
                gap={{ base: "4", md: "2", lg: "2" }}
                direction="column"
              >
                <Text
                  fontSize={{ base: "4xl", md: "3xl", lg: "3rem" }}
                  fontWeight="bold"
                  color="brandNeutral.500"
                  lineHeight="100%"
                  letterSpacing="tight"
                >
                  {ctaData[0].title}
                </Text>
                <Text
                  fontSize={{ base: "md", md: "md", lg: "md" }}
                  fontWeight="400"
                  color="brandNeutral.500"
                  lineHeight="160%"
                  px={{ base: "6", md: "8", lg: "8" }}
                >
                  {ctaData[0].subline}
                </Text>
              </Flex>
              <Link href="/get-started">
                <Button
                  py="6"
                  px={{ base: "4", md: "10", lg: "10" }}
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  variant="solid"
                  colorPalette="brandFuchsia"
                  rounded="full"
                >
                  {ctaData[0].buttonText}
                </Button>
              </Link>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box >
  );
};

export default PricingPage