import { Container, Box, Text, VStack, Grid, GridItem, Heading } from "@chakra-ui/react"

export default function AllFeatures() {
    const features = [
        {
            "headline": "Template Designer",
            "summary": "Turn your Adobe and Figma files into scalable templates in seconds. Just tag your files, upload them, and let CreateTOTALLY handle the rest. Our platform extracts variable elements, making adaptations effortless. Connect your templates to our Asset Library and Copy Library to control variations and ensure brand consistency."
        },

        {
            "headline": "Content Creation",
            "summary": "Generate hundreds—or even thousands—of unique adaptations with ease. Whether you're working in a spreadsheet or using our intuitive UI, AI-powered copy suggestions and translations help you scale content globally while optimizing for performance."
        },
        {
            "headline": "Media Spec Library",
            "summary": "Never worry about incorrect specs again. Our Media Spec Library ensures every adaptation meets the right dimensions, file types, and weight limits—automatically."
        },

        {
            "headline": "Workflow Manager",
            "summary": "Keep quality in check with built-in approvals. Ensure the right people review every adaptation, so nothing goes live without meeting your brand and business requirements."
        },

        {
            "headline": "Asset Library",
            "summary": "Maximize the value of your images and videos. Store, manage, and reuse them across multiple templates—keeping everything organized and accessible in one place."
        },

        {
            "headline": "Copy Library",
            "summary": "Standardize copy across all adaptations. Manage translations and reusable text from a single hub, ensuring every version is consistent and on-brand."
        },

        {
            "headline": "Bespoke Reports",
            "summary": "Get the insights that matter. Track production efficiency, campaign performance, and creative effectiveness with custom reports built for your needs."
        },

        {
            "headline": "Asset Delivery",
            "summary": "No manual renaming. No missed deadlines. Your adaptations are automatically named and delivered exactly where they need to go—ready for media and production partners."
        },
    ];

    return (
        <Box bg="brandNeutral.500">
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
                                color='gray.800'
                                textAlign="center"
                                maxW="4xl"
                            >
                                The Future of Creative Automation is Here
                            </Text>
                            <Text fontSize="xl" color="gray.600" textAlign="center" maxW="3xl">
                                The ultimate platform for high-speed, high-scale creative production. Designed for brands and agencies that demand precision, efficiency, and impact, this AI-powered ecosystem transforms every step—from design to deployment—into a seamless, automated workflow.
                            </Text>
                        </VStack>
                        <Grid templateColumns="repeat(3, 1fr)" gap="8" color="gray.900">
                            {features.map((feature, index) => (
                                <GridItem key={index} bg="white" p={6} borderRadius="md" boxShadow="md">
                                    <Heading as="h3" size="lg" mb={4}>{feature.headline}</Heading>
                                    <Text mb={4}>{feature.summary}</Text>
                                </GridItem>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}