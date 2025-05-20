"use client";

import { Container, Box, Text, SimpleGrid, Heading, Image, Flex, Stack, Accordion, Icon, GridItem } from "@chakra-ui/react"
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { WaveDivider } from '@/src/components/WaveDivider';
// import { LuCircleCheck, LuCircleX } from "react-icons/lu";
import { TbPencilBolt } from "react-icons/tb";
import { MdOutlineLabelImportant } from "react-icons/md";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { FaPlug } from "react-icons/fa";
import { AiOutlineTable } from "react-icons/ai";
import { useState } from 'react';

const items = [
  {
    value: "design",
    icon: <TbPencilBolt />,
    title: "Design in your preferred tool",
    content: "Create in Figma or Adobe as you normally would. No need to change your creative workflow.",
    image: "/1c2dba30829585dfe0f6f4722e3d211147b5c080-1680x1120.avif",
  },
  {
    value: "tag",
    icon: <MdOutlineLabelImportant />,
    title: "Define editable elements",
    content: "Mark what can change using our intuitive plugins. These tags help define what content can adapt.",
    image: "/c3cc9a8e1e8138ed8e922f6e27270bc35ee21604-1680x1120.avif",
  },
  {
    value: "upload",
    icon: <HiOutlineCloudUpload />,
    title: "Upload and analyse",
    content: "Our platform maps every aspect of your design, identifying all text, image, and video layers.",
    image: "/ef6640c4b8ee639e6f018e2bda96fd6bc894e2b0-1680x1120.avif",
  },
  {
    value: "connect",
    icon: <FaPlug />,
    title: "Connect to content libraries",
    content: "Link templates to approved assets and copy so your creative always stays on-brand.",
    image: "/6c8ac653c96755e5d2b1af2e6b25a39c0edc445c-1680x1120.avif",
  },
  {
    value: "scale",
    icon: <AiOutlineTable />,
    title: "Scale with content plans",
    content: "Define variations using simple spreadsheet logic, then generate all versions in one click.",
    image: "/430c964dd6ffc2db4f6046bf970bd5e4c3824474-1680x1120.avif",
  }
]

export default function TemplateContentCreation() {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Box>
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Template & Content Creation"
          title="Turn designs into powerful, adaptable templates"
          subtitle="What if one master design could generate hundreds of on-brand variations automatically, putting time and control back where they belong?"
          features={[
            "Native file support",
            "No-code templating",
            "Linked copy & asset libraries",
            "Output-ready formats",
            "Full creative control",
            "Open file delivery"
          ]}
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
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">Designers waste 70% of their time on repetitive tasks</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">Your most talented creative minds aren&#39;t innovating—they&#39;re stuck adapting the same designs for different markets, channels and promotions. This adaptation cycle means less time for breakthrough creative work.</Text>
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
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">Brand consistency erodes with every new adaptation</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">As variations multiply across regions and platforms, small deviations compound into major inconsistencies. Your once-cohesive brand identity becomes fragmented, diluting your market presence and confusing customers.</Text>
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
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="8" mt="0">Traditional templates create frustrating dependencies</Heading>
                <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">When you rely on external vendors, ticketing systems or lengthy implementation cycles, you lose control precisely when deadlines are tightest. The handoff process itself creates the bottleneck.</Text>
              </Box>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
              <Box
                width="100%"
                overflow="hidden"
              >
                <Image src="/ac3268e75e31996b167dae723daf132d17a7600f-1092x864.avif" alt="All Channels" width="100%" />
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

        {/* Feature Block 4 - Vertical Alignment */}
        <Container maxW="container.xl" mx="auto" pt={20} pb={20}>
          <Flex
            direction="column"
            gap={12}
            alignItems="center"
          >
            <Box width="100%" maxW="4xl" textAlign="center">
              <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" lineHeight={1} mb="8">
                Start and finish with your native files
              </Heading>
              <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">
                Unlike platforms that force simplification, CreateTOTALLY works with your real creative files—straight from Figma or the Adobe suite.
              </Text>
              <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5} mb="6">
                Our StudioCraft plugins let designers tag editable elements directly in their native tools. Once uploaded, our platform analyses every layer, asset and text field, giving you granular control over what changes and what stays locked.
              </Text>
            </Box>
            <Box width="100%">
              <Image 
                src="/FigmaPlugin.jpg" 
                alt="Traditional templates dependencies" 
                width="100%" 
                borderRadius="xl"
              />
            </Box>
          </Flex>
        </Container>

        <Container maxW="container.xl" mx="auto" pt={32} pb={0}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={32}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="16">
                  How it works: <br />Smart templates built for scale
                </Heading>
              </Box>
            </Box>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} gap={20} alignItems="flex-start" width="full">
            <Box flex={{ base: "1 1 100%", md: "1 1 33%" }}>
              <Stack width="full">
                <Accordion.Root
                  collapsible
                  value={[selectedItem.value]}
                  onValueChange={(valObj) => {
                    const selectedValue = Array.isArray(valObj?.value) ? valObj.value[0] : valObj?.value;
                    const selected = items.find(item => item.value === selectedValue);
                    if (selected) setSelectedItem(selected);
                  }}
                >
                  {items.map((item) => (
                    <Accordion.Item color="brandNavy.500" key={item.value} value={item.value} p={2}>
                      <Accordion.ItemTrigger>
                        <Icon fontSize="lg" color="brandNavy.500">
                          {item.icon}
                        </Icon>
                        {item.title}
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent>
                        <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </Stack>
            </Box>
            <Box flex={{ base: "1 1 100%", md: "2 1 66%" }}>
              <Image src={selectedItem.image} alt={selectedItem.title} width="100%" />
            </Box>
          </Flex>
        </Container>
        <WaveDivider
          backgroundImage="/wave-divider-1.svg"
          heightBase="380px"
          heightMd="380px"
          rotation="-180deg"
        />

        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={24}
            alignItems="center"
          >
            <Box flex={{ base: "1 1 100%", md: "3 1 50%" }}>
              <Box>
                <Heading as="h2" color="brandNavy.500" fontSize="5xl" maxW="4xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="16">
                  The results our clients experience
                </Heading>
              </Box>
            </Box>
          </Flex>
          <SimpleGrid columns={2} gap={16} mb={20}>
            <GridItem bg="brandNeutral.50" >
              <Box p={24}>
                <Heading as="h4" color="brandNavy.500" fontSize="4xl" fontWeight="regular" textAlign="center" lineHeight={1.5} mb="2" mt="4">
                  &quot;The combination of native design support and structured content planning is what unlocked scale for us.&quot;
                </Heading>
                <Box textAlign="right" mt="24">
                  <Text color="brandPurple.500" fontSize="md" fontWeight="black" textAlign="right">Director of Creative Operations</Text>
                  <Text color="brandPurple.500" fontSize="md" fontWeight="regular" textAlign="right">Agency Partner</Text>
                </Box>
              </Box>
            </GridItem>

            <GridItem bg="brandNeutral.50" >
              <Box p={24}>
                <Heading as="h4" color="brandNavy.500" fontSize="4xl" fontWeight="regular" textAlign="center" lineHeight={1.5} mb="2" mt="4">
                  &quot;It felt like the way our team always wanted to work, but never had the system to support.&quot;
                </Heading>
                <Box textAlign="right" mt="24">
                  <Text color="brandPurple.500" fontSize="md" fontWeight="black" textAlign="right">Head of Design Systems</Text>
                  <Text color="brandPurple.500" fontSize="md" fontWeight="regular" textAlign="right">Global Brand</Text>
                </Box>
              </Box>
            </GridItem>

          </SimpleGrid>
        </Container>

      </Box>
    </Box>
  );
}