import { Container, Box, Text, Link, Heading, HStack, Button, Image, Flex, SimpleGrid, GridItem, Icon, VStack } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { WaveDivider } from '@/src/components/WaveDivider';
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaSitemap } from "react-icons/fa";
import { TbTypography } from "react-icons/tb";
import { MdExtension } from "react-icons/md";
import { HiOutlinePuzzle } from "react-icons/hi";
import { BsCameraReels } from "react-icons/bs";
import { LuStretchHorizontal } from "react-icons/lu";
import { FaGlobeAmericas } from "react-icons/fa";

const features = [
  { 
    title: "Native template compatibility",
    descitption: "Upload After Effects projects as-is without restrictive tokens or special naming conventions—your creative workflow stays intact",
    icon: <AiOutlineFileAdd />
  },
  { 
    title: "Intelligent composition analysis",
    descitption: "Every text layer, image, and nested comp becomes editable while preserving your original design hierarchy and relationships",
    icon: <FaSitemap />
  },
  { 
    title: "Advanced typography handling",
    descitption: "Font installation across all render machines with full Unicode support for global languages and precise typographic control",
    icon: <TbTypography />
  },
  { 
    title: "Plugin ecosystem integration",
    descitption: "Industry-standard plugins pre-installed and ready to render, including Red Giant, Video Copilot, Boris FX and more",
    icon: <MdExtension />
  },
  { 
    title: "Linked asset integrity",
    descitption: "All linked assets, adjustment layers, mattes, and native effects remain intact throughout the automation process",
    icon: <HiOutlinePuzzle />
  },
  { 
    title: "Flexible output control",
    descitption: "Render to MP4, ProRes, or other formats with consistent quality and frame-perfect accuracy across all versions",
    icon: <BsCameraReels />
  },
  { 
    title: "Automatic layout adaptation",
    descitption: "Text resizes and repositions intelligently for different languages and content lengths without breaking your design",
    icon: <LuStretchHorizontal />
  },
  { 
    title: "Global localisation support",
    descitption: "Apply language-specific font substitutions and direction changes while maintaining visual hierarchy and brand integrity",
    icon: <FaGlobeAmericas />
  }
];

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
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">Too many versions,<br />too little time</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">Every small text change, every asset swap, every language variant means reopening projects, hunting down layers, and manually adjusting compositions. Your skilled designers become glorified text editors, burning creative energy on monotonous tasks.</Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/feature-placeholder-FiPenTool-sqr.jpg" borderRadius="4xl" alt="All Channels" width="100%" />
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
                <Image src="/feature-placeholder-FiLayout-sqr.jpg" borderRadius="4xl" alt="All Channels" width="100%" />
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">Rigid systems that fight your flow</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">Other tools demand rigid token systems and obscure naming conventions that limit your creative freedom. You&#39;re forced to adapt your design process to fit their technical constraints, not the other way around.</Text>
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
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mt="0" mb="8">Quality drops as speed climbs</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">What looks perfect in a test render falls apart when you need to produce hundreds of variations. Typography issues, missing assets, plugin compatibility problems - suddenly, your streamlined process becomes a quality control nightmare.</Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/feature-placeholder-FiPenTool-sqr.jpg" borderRadius="4xl" alt="All Channels" width="100%" />
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
                  Scale your video production<br />with After Effects automation
                </Heading>
              </Box>
            </Box>
          </Flex>
          <SimpleGrid columns={3} gap={16} mb={20}>
            <GridItem bg="brandNeutral.500" >
              <Box p={6}>
                <Text color="brandPurple.500" fontSize="md" fontWeight="black" mb="3">STEP ONE</Text>
                <Heading as="h3" color="brandNavy.500" fontSize="2xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="2" mt="4">
                  Set up in After Effects
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5}>
                  Use our StudioCraft plugin that sits within After Effects, allowing motion designers and editors to effortlessly prepare and apply design rules to projects. It integrates directly into your workflow so operators can apply the required design logic without restrictive tokens or special naming conventions.
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
                  Your After Effects templates become intelligent production systems that work like a motion designer - preserving every layer, comp, and effect exactly where you&apos;d expect, from complex nested compositions to dynamic text layers, while maintaining full creative control.
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
                Generate hundreds of video assets across every format, language, or region in minutes. Make a single change to text, imagery, or animations and apply it everywhere instantly - all while preserving your precise motion design specifications.
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
            backgroundColor="#8C0014"
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
                <Text fontSize={["lg", "xl", "4xl"]} fontWeight="bold" color="white">
                  &quot;A lovely quote from someone at Miele&quot;
                </Text>
              </Box>
              <Flex
                justify="flex-end"
              >
                <Image
                  src="/Miele_Logo_M_Red_sRGB.svg"
                  alt="PerfectDraft logo"
                  height="120px"
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
                  Production-ready features built for motion at scale
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" lineHeight={1.5} mb="12">
                  CreateTOTALLY isn&#39;t just another automation tool—it&#39;s created by motion designers who&#39;ve felt your pain:
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
                maxW="3xl"
              >
                <Text fontSize={["lg", "xl", "4xl"]} fontWeight="bold" color="brandNavy.500" lineHeight={1} pb="8">
                  Ready to reclaim your creative time?
                </Text>
                <Text fontSize={["lg", "xl", "lg"]} color="brandNavy.500" lineHeight={1.2} pb="8">
                  Get a demo today and see how you can launch more, bottleneck less, and collaborate effortlessly - all while keeping every pixel on point.
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