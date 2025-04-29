import { Container, Box, Text, List, Heading, Image, Flex } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { WaveDivider } from '@/src/components/WaveDivider';
import { LuCircleCheck } from "react-icons/lu";
import { Table } from "@chakra-ui/react"

const items = [
  { id: 1, name: "Content versioning", category: "Manual, repetative", price: "Automated, scalable" },
  { id: 2, name: "Localisation", category: "Done by designers", price: "Done by anyone" },
  { id: 3, name: "Campaign variants", category: "One-by-one", price: "1-to-1,000+ in a click" },
  { id: 4, name: "Approval workflows", category: "External tools", price: "Fully integrated" },
  { id: 5, name: "Output & delivery", category: "Export and upload", price: "Built-in export & delivery" },
]

export default function TemplateContentCreation() {

  return (
    <Box>
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Figma Creative Automation"
          title="Figma automation that doesn’t compromise on creativity"
          subtitle="Automate, adapt and scale your designs — without ever leaving your Figma workflow."
          features={[
            "Automate native Figma files",
            "Adapt for every market in seconds",
            "One-click content generation",
            "Self-serve adaptation",
            "Eliminate manual versioning",
            "Empower your entire team"          ]}
        />

        {/* Feature Block 1 */}
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">Your creative team is stretched. Your content demands are growing.</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mb="6">Figma is brilliant. But it wasn’t built for high-volume content production.</Text>
                <List.Root color="brandNavy.500" fontSize="lg" fontWeight="regular" gap="2" variant="plain" align="center">
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Manual versioning slows everything down
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Localised changes are still being made by designers
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Non-designers are stuck waiting for exports and edits
                  </List.Item>
                </List.Root>
              </Box>
              <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mt="6" mb="6">
                You don&apos;t need more headcount. You need scalable automation that works natively with Figma. That&apos;s CreateTOTALLY.
              </Text>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/feature-placeholder-FiPenTool.jpg" alt="All Channels" width="100%" />
              </Box>
            </Box>
          </Flex>
        </Container>


        {/* Feature Block 2 */}
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/feature-placeholder-FiPenTool.jpg" alt="All Channels" width="100%" />
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">
                  The new way to work with Figma
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mb="6">
                  Imagine creating a single Figma file that powers hundreds of brand-safe, on-message variations across markets and platforms.
                </Text>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mb="6">
                  Your team controls updates to text, imagery and language — all without needing to re-enter Figma. No specialist skills required.
                </Text>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mb="6">
                  One source of truth. One beautiful interface. One platform to adapt everything.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>


        {/* Feature Block 3 */}
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">What you can do with CreateTOTALLY + Figma</Heading>
                <List.Root color="brandNavy.500" fontSize="lg" fontWeight="regular" gap="2" variant="plain" align="center">
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Automate native Figma files into thousands of variants
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Empower non-designers to generate creative through a simple UI
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Adapt campaigns by market, product, language or format
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Review and approve content inside a collaborative workflow
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Render at scale, with serverless cloud infrastructure
                  </List.Item>
                </List.Root>
              </Box>
              <Box>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mt="6" mb="6">
                  CreateTOTALLY gives you a creative automation engine, built on top of the design tool your team already loves.
                </Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/feature-placeholder-FiPenTool.jpg" alt="All Channels" width="100%" />
              </Box>
            </Box>
          </Flex>
        </Container>

        {/* Feature Block 4 */}
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">From production bottlenecks to creative scale</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mb="6">
                  Here’s what changes
                </Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Table.Root size="md">
                  <Table.Header >
                    <Table.Row backgroundColor="brandNeutral.500">
                      <Table.ColumnHeader color="brandNavy.500"></Table.ColumnHeader>
                      <Table.ColumnHeader color="brandNavy.500" fontWeight="bold">Figma alone</Table.ColumnHeader>
                      <Table.ColumnHeader color="brandNavy.500" fontWeight="bold">With CreateTOTALLY</Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {items.map((item) => (
                      <Table.Row key={item.id} backgroundColor="brandNeutral.500" color="brandNavy.500">
                        <Table.Cell fontWeight="bold">{item.name}</Table.Cell>
                        <Table.Cell>{item.category}</Table.Cell>
                        <Table.Cell>{item.price}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>
          </Flex>
        </Container>

        {/* Feature Block 5 */}
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box width="100%" overflow="hidden">
                <Box
                  backgroundColor="#ffc42c"
                  borderRadius="3xl"
                  width="100%"
                  height="400px"
                  overflow="hidden"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    width="100%"
                    px={4}
                  >
                    <Box
                      width={["90%", "80%", "70%"]}
                      p={4}
                      textAlign="center"
                      mb={6}
                    >
                      <Text fontSize={["lg", "xl", "2xl"]} fontWeight="bold" color="brandNavy.500">
                        &quot;We used to spend days on adaptation. Now it takes minutes.&quot;
                      </Text>
                    </Box>
                    <Flex
                      width={["70%", "60%", "50%"]}
                      height="100px"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src="/PerfectDraft.svg"
                        alt="PerfectDraft logo"
                        objectFit="contain"
                        maxWidth="100%"
                        maxHeight="100%"
                      />
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">CreateTOTALLY x PerfectDraft</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mt="6" mb="6">
                In 2024, PerfectDraft produced thousands of pieces of content manually. In 2025, they needed to scale without adding headcount.<br />Using CreateTOTALLY, they:
                </Text>
                <List.Root color="brandNavy.500" fontSize="lg" fontWeight="regular" gap="2" variant="plain" align="center">
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Automated content production from Figma
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Empowered marketers to create their own assets
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Launched faster with less creative bottleneck
                  </List.Item>
                </List.Root>
              </Box>
              <Box>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mt="6" mb="6">
                The result? More content. Faster time to market. Zero compromise.
                </Text>
              </Box>
            </Box>

          </Flex>
        </Container>

        <WaveDivider
          backgroundImage="/wave-divider-1.svg"
          heightBase="380px"
          heightMd="380px"
          rotation="-180deg"
        />
      </Box>
    </Box>
  );
}