import { Container, Box, Text, VStack } from "@chakra-ui/react"


export default function WorkflowAutomation() {

    return (
        <Box bg="brandNeutral.500">
            <Box pt="54px"> {/* Adjust this value based on the height of your header */}
                <Box bg="#F4F0EB" w="full" minH="100vh">
                    <Container maxW="container.xl" mx="auto">
                        {/* Hero Section */}
                        <VStack
                            py={16}
                            gap={12}
                            align="center"
                            w="full"
                            pb="30"
                        >
                            <Text
                                fontSize="8xl"
                                fontWeight="black"
                                lineHeight=".9"
                                color='gray.800'
                                textAlign="center"
                                maxW="4xl"
                            >
                                Fewer bottlenecks. Faster approvals. Better control.
                            </Text>
                            <Text fontSize="3xl" color="gray.600" textAlign="center" maxW="3xl" lineHeight="1.2" fontWeight="light">
                            Automate approvals, streamline delivery, and eliminate manual work.
                            </Text>
                        </VStack>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}
