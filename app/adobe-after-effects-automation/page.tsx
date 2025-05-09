import { Container, Box, Text, Link, Heading, Highlight, Button, Image, Flex, Separator, SimpleGrid, GridItem } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { WaveDivider } from '@/src/components/WaveDivider';

export default function TemplateContentCreation() {

  return (
    <Box>
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Adobe After Effects Automation"
          title="Break from Video Production Bottlenecks—Without Sacrificing Creative Control"
          subtitle="Scale your After Effects templates to 100s of versions whilst keeping every pixel exactly how you designed it."
          features={[
            "Automate entire Figma files",
            "Adapt for every market in seconds",
            "One-click content generation",
            "Self-serve adaptation",
            "Eliminate manual versioning",
            "Empower your entire team"]}
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
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">You&#39;re drowning in repetitive versioning</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">Every small text change, every asset swap, every language variant means reopening projects, hunting down layers, and manually adjusting compositions. Your skilled designers become glorified text editors, burning creative energy on monotonous tasks.</Text>
                <Separator mb="6" />
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6"><Highlight query="With CreateTOTALLY:" styles={{ fontWeight: "black", color: "brandFuchsia.500" }}>With CreateTOTALLY:</Highlight> Upload your existing After Effects templates—exactly as they are—and automate thousands of variations through a clean, intuitive interface. No rework. No compromises. Just your design, made dynamic.</Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/feature-placeholder-FiPenTool-sqr.jpg" borderRadius="3xl" alt="All Channels" width="100%" />
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
                <Image src="/feature-placeholder-FiLayout-sqr.jpg" borderRadius="3xl" alt="All Channels" width="100%" />
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">&quot;Automation&quot; forces you to design differently</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">Other tools demand rigid token systems and obscure naming conventions that limit your creative freedom. You&#39;re forced to adapt your design process to fit their technical constraints, not the other way around.</Text>
                <Separator mb="6" />
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6"><Highlight query="With CreateTOTALLY:" styles={{ fontWeight: "black", color: "brandFuchsia.500" }}>With CreateTOTALLY:</Highlight> We don&#39;t ask you to design differently—we work the way you already do. Our platform analyses your After Effects project directly, making every text layer, image, and nested comp editable while preserving your creative intent.</Text>
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
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mt="0" mb="8">Quality breaks down at scale</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">What looks perfect in a test render falls apart when you need to produce hundreds of variations. Typography issues, missing assets, plugin compatibility problems - suddenly, your streamlined process becomes a quality control nightmare.</Text>
                <Separator mb="6" />
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6"><Highlight query="With CreateTOTALLY:" styles={{ fontWeight: "black", color: "brandFuchsia.500" }}>With CreateTOTALLY:</Highlight> Our deep template intelligence understands the intricacies of motion design. From nested precomps to track mattes, from blend modes to expressions, we preserve the fine details that make your work sing.</Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/feature-placeholder-FiPenTool-sqr.jpg" borderRadius="3xl" alt="All Channels" width="100%" />
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

      <Box as="section" bg="brandWhite.500">
        {/* Feature Block 3 */}
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">
                  How it works:<br />Simplicity meets sophistication
                </Heading>
              </Box>
            </Box>
          </Flex>
          <SimpleGrid columns={3} gap={16} mb={20}>
            <GridItem>
              <Box>
                <Image borderRadius="3xl" src="/feature-placeholder-FiPenTool-sqr.jpg" alt="All Channels" width="100%" />
                <Heading as="h3" color="brandNavy.500" fontSize="3xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Design naturally
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">
                  Create your After Effects templates exactly as you normally would, with all the creative complexity your project demands.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Image borderRadius="3xl" src="/feature-placeholder-FiPenTool-sqr.jpg" alt="All Channels" width="100%" />
                <Heading as="h3" color="brandNavy.500" fontSize="3xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Upload seamlessly
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">
                  Our plugin packages everything correctly, flags any potential issues, and securely transfers your template to our platform.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Image borderRadius="3xl" src="/feature-placeholder-FiPenTool-sqr.jpg" alt="All Channels" width="100%" />
                <Heading as="h3" color="brandNavy.500" fontSize="3xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Edit at scale
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">
                  Modify text, swap images, update colours, or inject data across hundreds of variations through our intuitive interface.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Image borderRadius="3xl" src="/feature-placeholder-FiPenTool-sqr.jpg" alt="All Channels" width="100%" />
                <Heading as="h3" color="brandNavy.500" fontSize="3xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Render and deliver
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">
                  Get production-ready MP4 or ProRes files that maintain every detail of your original design, ready for deployment.
                </Text>
              </Box>
            </GridItem>
          </SimpleGrid>
          <Box textAlign="right" mb={8}>
            <Link
              href="/get-started#figma"
              color="brandFuchsia.500"
              fontSize="lg"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              Set up your first automation →
            </Link>
          </Box>
        </Container>

        {/* Client Callout */}
        <Box width="100%">
          <Box
            backgroundColor="#ffc42c"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            py="44"
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
                p={4}
                textAlign="center"
                maxWidth="container.xl"
                mx="auto"
              >
                <Text fontSize={["lg", "xl", "4xl"]} fontWeight="bold" color="black">
                  &quot;We used to spend days on adaptation. Now it takes minutes.&quot;
                </Text>
              </Box>
              <Flex
                justify="flex-end"
              >
                <Image
                  src="/PerfectDraft.svg"
                  alt="PerfectDraft logo"
                  height="60px"
                />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Box bg="brandNeutral.500">
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={32}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">
                  Engineered for real-world production excellence
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" lineHeight={1.5} mb="6">
                  CreateTOTALLY isn&#39;t just another automation tool—it&#39;s created by designers who&#39;ve felt your pain:
                </Text>
              </Box>
            </Box>
          </Flex>
          <SimpleGrid columns={4} gap={8} mb={20}>
            <GridItem>
              <Box>
                <Image src="/feature-placeholder-FiPenTool-sqr.jpg" alt="All Channels" width="100%" />
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="6">True typography</Heading>
                <Text color="brandNavy.500" fontSize="lg" lineHeight={1.5} mb="0">Support for all fonts (OTF/TTF) across render machines, Unicode compatibility for any language, language-specific font substitutions, and both paragraph and point text options.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Image src="/feature-placeholder-FiPenTool-sqr.jpg" alt="All Channels" width="100%" />
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="6">Third-party plugin support</Heading>
                <Text color="brandNavy.500" fontSize="lg" lineHeight={1.5} mb="0">Pre-installed plugins including Red Giant (Trapcode, Universe, VFX), Video Copilot (Element 3D, Optical Flares, SABER), Boris FX, RE:Vision, Frischluft, and more.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Image src="/feature-placeholder-FiPenTool-sqr.jpg" alt="All Channels" width="100%" />
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="6">Production-grade rendering</Heading>
                <Text color="brandNavy.500" fontSize="lg" lineHeight={1.5} mb="0">Maintains linked assets intact, preserves adjustment layers, mattes, and native effects, ensures consistent layout integrity, and supports both MP4 and ProRes deliverables.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Image src="/feature-placeholder-FiPenTool-sqr.jpg" alt="All Channels" width="100%" />
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="6">Bulletproof project handling</Heading>
                <Text color="brandNavy.500" fontSize="lg" lineHeight={1.5} mb="0">Automatically flags missing assets before upload, packages projects correctly, and ensures smooth handoffs between team members.</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Container>

        <WaveDivider
          backgroundImage="/wave-divider-1.svg"
          heightBase="380px"
          heightMd="380px"
          rotation="-180deg"
        />

        <Box width="100%">
          <Box
            backgroundColor="white"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            py="44"
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
                p={4}
                textAlign="center"
                maxWidth="container.xl"
                mx="auto"
              >
                <Text fontSize={["lg", "xl", "4xl"]} fontWeight="bold" color="black" lineHeight={1.2} pb="8">
                  Ready to reclaim your creative time?
                </Text>
                <Link href="/get-started">
                  <Button py="8" px="12" variant="solid" fontSize={["lg", "xl", "2xl"]} colorPalette="brandFuchsia" rounded="full" >Get started today →</Button>
                </Link>
                {/* <Stack direction="row" gap="12">
                  <Button py="8" colorPalette="brandFuchsia" fontSize={["lg", "xl", "2xl"]} rounded="full" variant="solid">Pilot with your content →</Button>
                  <Link href="/get-started">
                    <Button py="8" variant="solid" fontSize={["lg", "xl", "2xl"]} colorPalette="brandFuchsia" rounded="full" >Get started today →</Button>
                  </Link>
                </Stack> */}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}