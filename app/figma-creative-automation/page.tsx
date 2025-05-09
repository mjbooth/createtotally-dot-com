import { Container, Box, Text, Link, Heading, Highlight, VStack, HStack, Icon, Button, Image, Flex, Separator, SimpleGrid, GridItem } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { WaveDivider } from '@/src/components/WaveDivider';
import { MdGridOn } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlinePuzzle } from "react-icons/hi";
import { TbTextWrapDisabled } from "react-icons/tb";
import { FiFolderPlus } from "react-icons/fi";
import { BiLayerPlus } from "react-icons/bi";
import { VscFileMedia } from "react-icons/vsc";

const features = [
  { 
    title: "Pixel-perfect rendering",
    descitption: "What you design is exactly what gets rendered, every time",
    icon: <MdGridOn />
  },
  { 
    title: "Native auto layout support",
    descitption: "Your responsive design logic works exactly as intended",
    icon: <LuLayoutDashboard />
  },
  { 
    title: "Component consistency",
    descitption: "Update once, apply everywhere with linked elements",
    icon: <HiOutlinePuzzle />
  },
  { 
    title: "Text that knows how to behave",
    descitption: "Smart text scaling keeps your layouts intact, even with longer translations",
    icon: <TbTextWrapDisabled />
  },
  { 
    title: "Asset management that makes sense",
    descitption: "Centralised library with usage rights and market-specific controls",
    icon: <FiFolderPlus />
  },
  { 
    title: "Bulk generation that actually works",
    descitption: "Hundreds of assets from a single content plan, no manual exports",
    icon: <BiLayerPlus />
  },
  { 
    title: "Multi-format exports",
    descitption: "PNG, JPEG, @2x, or custom specs—automatically packaged and ready to use",
    icon: <VscFileMedia />
  }
];
export default function TemplateContentCreation() {

  return (
    <Box>
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Figma Creative Automation"
          title="Stop Drowning in Design Edits. Start Automating Your Figma Workflow."
          subtitle="Turn a single Figma file into hundreds of on-brand assets—without endless manual adjustments or late nights at your desk."
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
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">The localisation bottleneck</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">You&#39;ve designed the perfect campaign in Figma. Then the requests flood in: &quot;Can we get this in 12 languages?&quot; &quot;We need all the CTAs adapted for each market.&quot; &quot;The legal copy needs updating for France.&quot;<br /><br />Your team gets stuck in an endless cycle of edits, copying and pasting translations, checking alignment, and fixing broken layouts—hours of work that doesn&#39;t use your creative talents.</Text>
                <Separator mb="6" />
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="0"><Highlight query="With CreateTOTALLY:" styles={{ fontWeight: "black", color: "brandFuchsia.500" }}>With CreateTOTALLY:</Highlight> Set up your design once, apply translations across multiple markets with a single click, and watch as properly formatted assets generate automatically—with fonts, spacing and layouts that respect each language&#39;s unique requirements.</Text>
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
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">The format explosion</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">Your stakeholders need assets in every conceivable format: Instagram Stories, Facebook carousels, LinkedIn posts, display ads in six different sizes, email headers...<br /><br />Each adaptation means reopening Figma, adjusting designs, manually exporting, and renaming files—over and over again.</Text>
                <Separator mb="6" />
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6"><Highlight query="With CreateTOTALLY:" styles={{ fontWeight: "black", color: "brandFuchsia.500" }}>With CreateTOTALLY:</Highlight> Set up your design once, apply translations across multiple markets with a single click, and watch as properly formatted assets generate automatically—with fonts, spacing and layouts that respect each language&#39;s unique requirements.</Text>
              </Box>
            </Box>
          </Flex>
        </Container>


        {/* Feature Block 3 */}
        <Container maxW="container.xl" mx="auto" pt={32} pb={3}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mt="0" mb="8">The approval-revision loop</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">You send assets for review. Then come the change requests: &quot;Can we try a different image?&quot; &quot;The headline&#39;s too long.&quot; &quot;Legal wants different disclaimers for each market.&quot;<br /><br />Each small change means reopening files, making adjustments, re-exporting, and updating your tracking spreadsheet—multiplied by dozens of versions.</Text>
                <Separator mb="6" />
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6"><Highlight query="With CreateTOTALLY:" styles={{ fontWeight: "black", color: "brandFuchsia.500" }}>&quot;With CreateTOTALLY:&quot;</Highlight> Make changes in seconds through our intuitive interface. Swap images, update text, or adjust components across multiple outputs simultaneously. Provide stakeholders with options without doubling your workload.</Text>
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
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" maxW="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="16">
                  Scale your design workflow with InDesign automation
                </Heading>
              </Box>
            </Box>
          </Flex>
          <SimpleGrid columns={3} gap={16} mb={20}>
            <GridItem bg="brandNeutral.500" >
              <Box p={6}>
                <Text color="brandPurple.500" fontSize="md" fontWeight="black" mb="3">STEP ONE</Text>
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Set up in Figma
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5}>
                  Use our StudioCraft plugin to tag dynamic elements, define outputs, and create smart templates that know how to adapt.
                </Text>
              </Box>
              <Image src="/FigmaPlugin.jpg" alt="All Channels" width="100%"/>
            </GridItem>

            <GridItem bg="brandNeutral.500" >
              <Box p={6}>
                <Text color="brandPurple.500" fontSize="md" fontWeight="black" mb="3">STEP TWO</Text>
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Upload to CreateTOTALLY
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5}>
                  Your templates become intelligent production systems that maintain design integrity, while allowing controlled changes.
                </Text>
              </Box>
              <Image src="/812f934f093212b5f2a939227b970a6bf3406929-1080x864.avif" alt="All Channels" width="100%" />
            </GridItem>

            <GridItem bg="brandNeutral.500" >
              <Box p={6}>
                <Text color="brandPurple.500" fontSize="md" fontWeight="black" mb="3">STEP THREE</Text>
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Scale endlessly
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5}>
                  With CreateTOTALLY, you can scale your design workflow to handle thousands of assets, hundreds of projects, or even tens of thousands of clients.Generate hundreds of assets with different copy, images, sizes, and formats—all maintaining your precise design specifications.
                </Text>
              </Box>
              <Image src="/9c8500506ec9297dc6eb446ceedf317df81b8b1e-1560x1248.avif" alt="All Channels" width="100%" />
            </GridItem>

          </SimpleGrid>
          <Box textAlign="right" mb={8}>
            <Link
              href="/get-started#figma"
              color="brandPurple.500"
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
            py="64"
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
            >
              <Box
                p={4}
                pb={12}
                textAlign="center"
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
        <Container maxW="container.xl" mx="auto" pt={32} pb={0}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={32}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">
                  Built by designers who understand production
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" lineHeight={1.5} mb="12">
                  CreateTOTALLY isn&#39;t just another automation tool—it&#39;s created by designers who&#39;ve felt your pain:
                </Text>
              </Box>
            </Box>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={12}>
            {features.map((feature, index) => (
              <Box key={index} textAlign="left">
                <HStack align="left" mb={4} gap="0">
                  <Box color="brandFuchsia.500" m={4} mt={0} p={3} >
                    <Icon size="2xl" color="brandFuchsia.500">
                      {feature.icon}
                    </Icon>
                  </Box>
                  <Box>
                    <VStack align="left" mb={4} gap="0">
                      <Text fontSize="lg" color="brandNavy.500" fontWeight="bold">
                        {feature.title}
                      </Text>
                      <Text color="brandNavy.500" fontSize="md" lineHeight={1.6}>
                        {feature.descitption}
                      </Text>
                    </VStack>
                  </Box>
                </HStack>
              </Box>
            ))}
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
                  Accelerate your Figma<br />workflows with CreateTOTALLY
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