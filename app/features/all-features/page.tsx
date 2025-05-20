import { Container, Box, Text, HStack, VStack, Grid, GridItem, Heading, Image, Link } from "@chakra-ui/react"

export default function AllFeatures() {
    const features = [
        {
          "headline": "Template Designer",
          "summary": "Use real Adobe and Figma files to create editable templates in minutes. Tag what’s dynamic, lock what’s not — and never rebuild a design again.",
          "cta": { "text": "Learn more", "href": "/features/template-designer" },
          "icon": "FiPenTool",
          "group": "Create"
        },
        {
          "headline": "Content Creation",
          "summary": "Generate hundreds of creative variations from a single template. Use AI, spreadsheets or the UI — all managed through structured content plans.",
          "cta": { "text": "Explore content plans", "href": "/features/content-creation" },
          "icon": "FiFileText",
          "group": "Create"
        },
        {
          "headline": "Media Spec Library",
          "summary": "Every output meets spec — file sizes, formats, and dimensions are auto-optimised based on your selected channel or publisher.",
          "cta": { "text": "View supported specs", "href": "/features/media-spec-library" },
          "icon": "FiLayout",
          "group": "Adapt"
        },
        {
          "headline": "Workflow Manager",
          "summary": "Create automated, multi-step approval flows with full version tracking. Reviews happen faster, with no dropped balls or missed feedback.",
          "cta": { "text": "See how workflow works", "href": "/features/workflow-manager" },
          "icon": "FiCheckCircle",
          "group": "Approve"
        },
        {
          "headline": "Asset Library",
          "summary": "Organise, tag and reuse images, video and brand elements across templates. Everything your team needs — always on hand, always approved.",
          "cta": { "text": "Manage your assets", "href": "/features/asset-library" },
          "icon": "FiImage",
          "group": "Adapt"
        },
        {
          "headline": "Copy Library",
          "summary": "Centralise messaging, translations and copy blocks. Tag reusable content to templates and manage localisation at scale.",
          "cta": { "text": "Explore copy management", "href": "/features/copy-library" },
          "icon": "FiEdit3",
          "group": "Adapt"
        },
        {
          "headline": "Creative Audit Trail",
          "summary": "Every change, comment and approval is tracked — so you always know who did what, when, and why. Perfect for compliance and collaboration.",
          "cta": { "text": "Understand how it works", "href": "/features/copy-library" },
          "icon": "FiEdit3",
          "group": "Approve"
        },
        {
          "headline": "Open File Delivery",
          "summary": "Need the working file, not just the final render? CreateTOTALLY lets you deliver open files to DAMs, partners or platforms — securely and on time.",
          "cta": { "text": "Learn about delivery", "href": "/features/asset-delivery" },
          "icon": "FiSend",
          "group": "Deliver"
        },
        {
          "headline": "Performance Intelligence",
          "summary": "Link creative outputs to performance results. Understand which templates, messages and variants drive impact — and use that to optimise future work.",
          "cta": { "text": "See how insights connect", "href": "/features/performance-intelligence" },
          "icon": "FiPenTool",
          "group": "Report"
        },
        {
          "headline": "Modular API Integration",
          "summary": "Use our platform as a service. Plug CreateTOTALLY into your DAM, CMS, ad stack or workflow tool — and automate with total flexibility.",
          "cta": { "text": "Explore our APIs", "href": "/features/api-integration" },
          "icon": "FiLayout",
          "group": "Deliver"
        },
        {
          "headline": "Bespoke Reports",
          "summary": "Track what matters — output volumes, turnaround times, creative usage and performance. Build dashboards tailored to your operation.",
          "cta": { "text": "See reporting options", "href": "/features/bespoke-reports" },
          "icon": "FiBarChart2",
          "group": "Report"
        }
      ];

    const groupOrder = ["Create", "Adapt", "Approve", "Deliver", "Report"];

    const groupedFeatures = groupOrder.reduce((acc, group) => {
      acc[group] = features.filter(feature => feature.group === group);
      return acc;
    }, {} as Record<string, typeof features>);

    return (
        <Box bg="brandNeutral.500" pt="40">
            <Box pt="54px">
                <Box bg="#F4F0EB" w="full" minH="100vh">
                    <Container maxW="container.xl" mx="auto">
                        <VStack
                            py={16}
                            gap={12}
                            align="center"
                            w="full"
                            pb="30"
                        >
                            <Text
                                fontSize="6xl"
                                fontWeight="black"
                                lineHeight=".9"
                                color='brandNavy.500'
                                textAlign="center"
                                maxW="4xl"
                            >
                                Creative production. Finally made scalable.
                            </Text>
                            <Text fontSize="xl" color="brandNavy.500" textAlign="center" maxW="3xl">
                            CreateTOTALLY removes the slow, manual steps in every campaign workflow — from template creation to reporting.
                            </Text>
                        </VStack>
                        {/* Process Loop Navigation */}
                        <VStack gap={8} align="center" w="full" pb={24}>
                            <Text fontSize="2xl" fontWeight="bold" color="brandNavy.500">How it works</Text>
                            <HStack gap={4} flexWrap="wrap" justify="center">
                                {["1. Create", "2. Adapt", "3. Approve", "4. Deliver", "5. Report"].map((step, index) => (
                                  <Link href={`#${step.split('. ')[1].toLowerCase()}`} key={index}>
                                    <Box
                                        px={6}
                                        py={3}
                                        bg="white"
                                        borderRadius="full"
                                        border="1px solid #E2E8F0"
                                        fontWeight="medium"
                                        fontSize="md"
                                        color="gray.700"
                                        _hover={{ bg: "gray.100", cursor: "pointer" }}
                                        transition="background 0.2s ease"
                                    >
                                        {step}
                                    </Box>
                                  </Link>
                                ))}
                            </HStack>
                        </VStack>
                        <VStack align="start" gap={16} color="gray.900" pb={32}>
                            {groupOrder.map(group => (
                              <VStack key={group} align="start" gap={4} id={group.toLowerCase()}>
                                <Heading as="h2" size="xl">{group === "Create" ? "Create Templates from Real Design Files" : 
                                  group === "Adapt" ? "Organise & Manage Assets" : 
                                  group === "Approve" ? "Approvals & Insights" : 
                                  group === "Deliver" ? "Deliver & Integrate" : 
                                  group === "Report" ? "Reporting & Intelligence" : group}</Heading>
                                <Grid templateColumns="repeat(3, 1fr)" gap={8}>
                                  {groupedFeatures[group].map((feature, index) => (
                                    <GridItem key={index} bg="white" p={6} borderRadius="md">
                                      <Heading as="h3" size="lg" mb={4}>{feature.headline}</Heading>
                                      <Text mb={4}>{feature.summary}</Text>
                                      <Image src={`/feature-placeholder-${feature.icon}.jpg`} alt={`${feature.headline} illustration`} mb={4} borderRadius="md" />                                            
                                      <Link href={feature.cta.href} color="brandPurple.600" fontWeight="semibold" mt={4} display="block" textAlign="right">
                                        {feature.cta.text} →
                                      </Link>
                                    </GridItem>
                                  ))}
                                </Grid>
                              </VStack>
                            ))}
                        </VStack>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}