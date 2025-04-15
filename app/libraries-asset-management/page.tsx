import { Container, Box, Text, List, Heading, Image, Flex } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/components/FeatureHeroSection';
import { WaveDivider } from '@/components/WaveDivider';
import { LuCircleCheck, LuCircleX } from "react-icons/lu";

export default function AssetAutomation() {

  return (
    <Box>
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Libraries & Asset Management"
          title="Organised, tagged, and ready to scale. Without additional confusion."
          subtitle="Creative automation only works if your content is ready to use. That’s where our libraries come in."
          features={[
            "Automatic approval routing",
            "Always up-to-date versions",
            "Clear, trackable feedback",
            "Output that's ready to use",
            "Works with your existing tools",
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
                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">Start with the files your team already uses</Heading>
                <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25} mb="6">There’s no need to rebuild or simplify your creative to fit our system. CreateTOTALLY works with your real design files – whether they come from Figma or Adobe. No new design system. No workarounds. Just tag elements inside Figma or Adobe — and we do the rest.</Text>
                <List.Root color="gray.900" fontSize="xl" fontWeight="thin" gap="2" variant="plain" align="center">
                  <List.Item>
                    <List.Indicator asChild color="green.500">
                      <LuCircleCheck />
                    </List.Indicator>
                    Works with native files, not simplified rebuilds
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


        {/* Feature Block 2 */}
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
                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">Advanced Template Analysis</Heading>
                <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25} mb="6">
                  One upload = one flexible template<br />
                  Our system reads every layer and element in your design file.<br />
                  You define what can change — headlines, logos, imagery — and what stays locked.</Text>
                <List.Root color="gray.900" fontSize="xl" fontWeight="thin" gap="2" variant="plain" align="center">
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
                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">Content Planning</Heading>
                <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25} mb="6">Your campaign — in a spreadsheet<br />
                  Each row = one creative variant.<br />
                  Format, copy, image, outputs — all defined in one place.</Text>
                <List.Root color="gray.900" fontSize="xl" fontWeight="thin" gap="2" variant="plain" align="center">
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
                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">Connected Libraries</Heading>
                <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25} mb="6">
                  Always use the right content. Templates connect to your asset and copy libraries, so only approved content gets used.</Text>
                <List.Root color="gray.900" fontSize="xl" fontWeight="thin" gap="2" variant="plain" align="center">
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