import { Container, Box, Text, Link, Heading, HStack, VStack, Icon, Button, Image, Flex, SimpleGrid, GridItem } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { WaveDivider } from '@/src/components/WaveDivider';
import { TbTextSize } from "react-icons/tb";
import { MdTextFields, MdOutlineRuleFolder } from "react-icons/md";
import { HiOutlineAdjustments } from "react-icons/hi";
import { PiPaletteBold } from "react-icons/pi";
import { FiType } from "react-icons/fi";
import { BsCollectionPlay } from "react-icons/bs";

const features = [
  {
    title: "Fine-tuned typography control",
    description: "Character styles can be applied dynamically, with precise spacing, alignment, and style rules",
    icon: <TbTextSize />
  },
  {
    title: "Smart text behaviour",
    description: "Text can auto-shrink, reflow, or raise a flag based on the logic you define",
    icon: <MdTextFields />
  },
  {
    title: "Alpha channel precision",
    description: "Perfect cropping for product shots, people, or anything with transparency – no repetitive masking",
    icon: <HiOutlineAdjustments />
  },
  {
    title: "Dynamic colour updates",
    description: "Swap out spot colour swatches instantly for seasonal campaigns or regional palettes",
    icon: <PiPaletteBold />
  },
  {
    title: "Centralised font management",
    description: "Fonts managed in one place with automatic fallbacks and full style fidelity",
    icon: <FiType />
  },
  {
    title: "Outputs for every channel",
    description: "Generate CMYK-ready PDFs with bleed and trim or digital assets with custom file size limits",
    icon: <BsCollectionPlay />
  },
  {
    title: "Clean fallbacks",
    description: "Set rules to skip, hide, or replace empty content automatically",
    icon: <MdOutlineRuleFolder />
  }
];

export default function TemplateContentCreation() {

  return (
    <Box>
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Figma Creative Automation"
          title="Scale design production without sacrificing quality."
          subtitle="Keep your creative control. Let automation handle the busywork."
          features={[
            "",
            "",
            "",
            "",
            "",
            ""]}
        />

        {/* Feature Block 1 */}
        <Container maxW="container.xl" mx="auto" pt={20} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">Too much time wasted on repetitive tasks</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">You became a designer to create, not copy-paste. But 70% of your day disappears into formatting, resizing, and versioning – leaving little time for actual design work.</Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/70351b60fc6d75651f4a46ff991c56ad2769c5a1-1080x864.avif" alt="All Channels" width="100%" />
              </Box>
            </Box>
          </Flex>
        </Container>

        {/* Feature Block 2 */}
        <Container maxW="container.xl" mx="auto" pt={20} pb={20}>
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
                <Image src="/13340a050ed0774753cf0ad62d126f05e1db4080-1560x1170.avif" alt="All Channels" width="100%" />
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">Losing control when scaling production</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">When production needs ramp up, quality suffers. External teams don&#39;t understand your brand nuances, and templated solutions force you to rebuild everything from scratch.</Text>
              </Box>
            </Box>
          </Flex>
        </Container>


        {/* Feature Block 3 */}
        <Container maxW="container.xl" mx="auto" pt={20} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">Quality assurance becomes a nightmare</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">When producing hundreds of variants, errors creep in. Text overflow issues, missing assets, and broken layouts mean endless revision cycles and missed deadlines.</Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/ac3268e75e31996b167dae723daf132d17a7600f-1092x864.avif" alt="All Channels" width="100%" borderRadius="md"/>
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
                  Set up in InDesign
                </Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5}>
                  Use our StudioCraft plugin that runs quietly in the background, prepping your files for automation without ever touching your design intent. No new tools to learn. No templates to rebuild.
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
                  Your InDesign templates become intelligent production systems that work like a designer - placing every element exactly where you&#39;d expect, from multilingual formats to dynamic image swaps, while maintaining full visual control.
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
                Generate hundreds of assets across every format, region, or language in seconds. Make a single change to colors, fonts, or layouts and apply it everywhere instantly - all while maintaining your precise design specifications.
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
            backgroundColor="#C0AF9F"
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
                  &quot;A lovely quote by the team deliverying Patek Philippe globally&quot;
                </Text>
              </Box>
              <Flex
                justify="flex-end"
              >
                <Image
                  src="/patek-philippe-sa-1.svg"
                  alt="PerfectDraft logo"
                  height="120px"
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
                  Production-proof features built for design at scale
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
                <HStack align="left" gap="0">
                  <Box color="brandFuchsia.500" m={4} mt={0} p={3} >
                    <Icon size="2xl" color="brandFuchsia.500">
                      {feature.icon}
                    </Icon>
                  </Box>
                  <Box>
                    <VStack align="left" gap="0">
                      <Text fontSize="lg" color="brandNavy.500" fontWeight="bold">
                        {feature.title}
                      </Text>
                      <Text color="brandNavy.500" fontSize="md" lineHeight={1.6}>
                        {feature.description}
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
                  Accelerate your InDesign<br />workflows with CreateTOTALLY
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