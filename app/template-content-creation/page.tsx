import { Container, Box, Text, List, Heading, Image, Flex, Em } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/components/FeatureHeroSection';
import { WaveDivider } from '@/components/WaveDivider';
import { LuCircleCheck, LuCircleX } from "react-icons/lu";

export default function TemplateContentCreation() {

  return (
    <Box>
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Template & Content Creation"
          title="Build real templates. Scale real creative."
          subtitle="Use your actual design files to create dynamic templates and generate hundreds of custom versions - without outsourcing, delays or compromise."
          features={[
            "Native file support",
            "No-code templating",
            "Dynamic content planning",
            "Linked copy & asset libraries",
            "Output-ready formats",
            "Full creative control",
            "Open file delivery"
          ]}
        />

        {/* Feature Block 1 */}
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 60%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">Create dynamic templates - straight from your design files</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mb="6">Use our StudioCraft plugins to select and label dynamic fields inside Adobe Creative Cloud and Figma. Then drag your file into the platform. We’ll automatically analyse and extract everything from layout structure to layer names.<br /><br />You stay in control of what can change - and what must stay on-brand.</Text>
                <List.Root color="brandNavy.500" fontSize="lg" fontWeight="regular" gap="2" variant="plain" align="center">
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Work directly in native files, not simplified rebuilds
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Tag what’s editable, lock what’s not
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Create and upload in minutes, not days
                  </List.Item>
                </List.Root>
              </Box>
              <Box mt="12">
                <Text color="brandNavy.500" fontSize="lg" fontWeight="thin" lineHeight={1.25} textAlign="right">
                  <Em>“We didn’t have to change how we work — just tag and upload.”</Em>
                </Text>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="bold" lineHeight={1.25} textAlign="right">
                  Senior Designer, Agency Partner
                </Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 40%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/FigmaPlugin.jpg" alt="All Channels" width="100%" />
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
                <Image src="/FigmaPlugin.jpg" alt="All Channels" width="100%" />
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">Advanced Template Analysis</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mb="6">
                  One upload = one flexible template. Our system reads every layer and element in your design file. You define what can change - headlines, logos, imagery - and what stays locked.</Text>
                <List.Root color="brandNavy.500" fontSize="lg" fontWeight="regular" gap="2" variant="plain" align="center">
                  <List.Item>
                    <List.Indicator asChild color="red.500">
                      <LuCircleX />
                    </List.Indicator>
                    No need to brief a vendor
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="red.500">
                      <LuCircleX />
                    </List.Indicator>
                    No ticketing systems
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Full brand control stays with you
                  </List.Item>
                </List.Root>
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
            <Box flex={{ base: "1 1 100%", md: "3 1 60%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">Content Planning</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mb="6">Your campaign — in a spreadsheet<br />
                  Each row = one creative variant.<br />
                  Format, copy, image, outputs — all defined in one place.</Text>
                <List.Root color="brandNavy.500" fontSize="lg" fontWeight="regular" gap="2" variant="plain" align="center">
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Build manually or import media plans
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Handle 1 or 1,000 adaptations with ease
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    The platform manages specs, versioning, and approvals
                  </List.Item>
                </List.Root>
              </Box>
              <Box>
                <Text color="#001e44" fontSize="xl" fontWeight="thin" lineHeight={1.25} mt="6">
                  “We didn’t have to change how we work — just upload and tag.”<br />Senior Designer, Agency Partner
                </Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 40%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/FigmaPlugin.jpg" alt="All Channels" width="100%" />
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
            <Box flex={{ base: "1 1 100%", md: "2 1 40%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/FigmaPlugin.jpg" alt="All Channels" width="100%" />
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "3 1 60%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8">Connected Libraries</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.2} mb="6">
                  Always use the right content. Templates connect to your asset and copy libraries, so only approved content gets used.</Text>
                <List.Root color="brandNavy.500" fontSize="lg" fontWeight="regular" gap="2" variant="plain" align="center">
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Pull from existing brand assets
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Eliminate version errors
                  </List.Item>
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Keep everything consistent
                  </List.Item>
                </List.Root>
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