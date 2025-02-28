import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Container, Box, Text, Button, VStack, HStack, Image, Grid, GridItem, Highlight, Heading, List, Flex, Circle } from "@chakra-ui/react"
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"
import { Tag } from "@/components/ui/tag"
import { motion, AnimatePresence } from 'framer-motion';
import Vimeo from '@u-wave/react-vimeo';
import { HiTemplate } from "react-icons/hi";
import { BsBarChartFill } from "react-icons/bs";
import { RiShieldFlashFill } from "react-icons/ri";
import { PiRocketFill, PiPlugsFill } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import { AiOutlineCheckCircle, AiOutlineWallet } from "react-icons/ai";
import { FiCloud } from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";
import ReactPlayer from 'react-player';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { LuCircleCheck, LuCircleX } from "react-icons/lu";
import ReactMarkdown from 'react-markdown';
import { IoCheckboxOutline } from "react-icons/io5";



// Add the shuffleArray function
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

interface Integration {
    src: string;
    text: string;
    colour: string;
}

const features = [
    {
        "headline": "Native Adobe Creative Cloud Automation",
        "summary": "Our advanced automation technology means you're assets are automated in the native applications. So everything you can do on the desktop, we can do at scale."
    },
    {
        "headline": "Industry First Figma Automation",
        "summary": "Our advanced automation technology means you're assets are automated in the native applications. So everything you can do on the desktop, we can do at scale."
    },
    {
        "headline": "Template Designer",
        "summary": "Turn your Adobe and Figma files into scalable templates in seconds. Just tag your files, upload them, and let CreateTOTALLY handle the rest."
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

const items = [
    {
        "value": "a",
        "title": "How does the automation actually work?",
        "text": "Think of CreateTOTALLY as your creative team's **efficiency hack**. It’s not AI making random guesses. It’s not a one-size-fits-all template mess. It’s a **smart blend of templates and rule-based automation** that adapts to your needs.\n\nHere’s the magic: We **never** lock down your original design files. Unlike other automation tools, your team can **jump in and tweak** whenever they need. No rigid outputs. No compromises. Just pure creative **freedom at scale**."
    },
    {
        "value": "b",
        "title": "What types of content does it automate?",
        "text": "Short answer? **Everything.** Social media, display ads, video, email, print—you name it.\n\nNeed to **localize content**? That’s built in. Upload translations or let our **AI translation engine** handle it for you. No more manual copy-pasting into endless variations. **Global campaigns at lightning speed.**"
    },
    {
        "value": "c",
        "title": "How does it fit within an in-house marketing team?",
        "text": "**We’re not here to replace designers.** We’re here to **free them** from the grunt work.\n\nThink of all the time wasted resizing ads, duplicating assets, and making small tweaks. CreateTOTALLY **automates** that so your team can focus on high-value creative work. Less time on production. More time on strategy, storytelling, and **actually being creative**."
    },
    {
        "value": "d",
        "title": "How much creative flexibility does it allow?",
        "text": "Automation **shouldn’t kill creativity.** And with CreateTOTALLY, it doesn’t.\n\nEvery adaptation is **100% editable**. If you need to tweak, refine, or experiment, you can. No frustrating templates that force you into a box. **If you can do it in Adobe or Figma, you can do it here.** The difference? You get there **10x faster.**"
    },
    {
        "value": "e",
        "title": "How complex is the implementation?",
        "text": "Most teams are **up and running in 30 days.** No IT headaches, no months-long onboarding.\n\nSome integrations are **plug-and-play**. Others need a bit of mapping to match your existing workflows. Either way, we **guide you every step of the way.** The goal? Get you creating content **faster than ever**."
    }
]


export default function CreateTotallyHomepage() {
    const [selectedFeature, setSelectedFeature] = useState('Translation');
    const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const featureImages = {
        Translation: "https://placehold.co/1152x720?text=Translation+Feature",
        "Quality Control": "https://placehold.co/1152x720?text=Quality+Control+Feature",
        "Auto-Adapt": "https://placehold.co/1152x720?text=Auto-Adapt+Feature"
    };

    const integrations = useMemo<Integration[]>(() => shuffleArray([
        { src: "/src/assets/adroll.svg", text: "AdRoll", colour: "#00aeef" },
        { src: "/src/assets/aem.svg", text: "AEM", colour: "rgb(238, 126, 55)" },
        { src: "/src/assets/brandfolder.svg", text: "Brandfolder", colour: "rgb(110, 206, 241)" },
        { src: "/src/assets/bynder.svg", text: "Bynder", colour: "#126dfe" },
        { src: "/src/assets/drive.svg", text: "Google Drive", colour: "#4285f4" },
        { src: "/src/assets/google-ads.svg", text: "Google Ads", colour: "#fbbc05" },
        { src: "/src/assets/monday-logo-x2.png", text: "Monday.com", colour: "#6161FF" },
        { src: "/src/assets/powerbi.svg", text: "Power BI", colour: "#f2c811" },
        { src: "/src/assets/adobe-workfront.png", text: "Adobe Workfront", colour: "#ff0000" },
        { src: "/src/assets/box.svg", text: "Box", colour: "#2486FC" },
        { src: "/src/assets/click-up.svg", text: "ClickUp", colour: "rgba(250, 18, 227, 1)" },
        { src: "/src/assets/aws-s3.svg", text: "Amazon S3", colour: "rgb(232, 146, 56)" },
        { src: "/src/assets/Sitecore.svg", text: "Sitecore", colour: "#ff1f38" },
        { src: "/src/assets/mark-gradient-blue-jira.svg", text: "Jira", colour: "#0146B3" },
        { src: "/src/assets/YouTube.svg", text: "YouTube", colour: "#ff0000" },
        { src: "/src/assets/Meta_Platforms_Inc_logo.svg", text: "Meta", colour: "#0082fb" }
    ]), []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Autoplay failed:", error);
                setIsPlaying(false);
            });
        }
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <Box bg="brandNeutral.500">
            <Box pt="54px"> {/* Adjust this value based on the height of your header */}
                <Box bg="#F4F0EB" w="full" minH="100vh">
                    <Container maxW="container.xl" mx="auto">
                        {/* Hero Section */}
                        <VStack
                            pt={16}
                            gap={12}
                            align="center"
                            w="full"
                        >
                            <Heading
                                fontSize="8xl"
                                fontWeight="black"
                                lineHeight=".95"
                                color='gray.800'
                                textAlign="center"
                                maxW="6xl"
                                pt="12"
                            >
                                Automate without compromise.
                            </Heading>
                            <Text fontSize="3xl" color="gray.600" textAlign="center" maxW="3xl" lineHeight="1.2" fontWeight="light" pb="18">
                                Reduce creative production costs by 50% in just 30 days by seamlessly automating your workflow—without ever ditching Adobe or Figma.
                            </Text>
                            <HStack gap={16}>
                                <Button colorScheme="blue" size="lg" variant="surface">Contact Sales</Button>
                                <Button colorScheme="blue" size="lg" variant="surface">Book a Demo</Button>
                            </HStack>
                            <Box
                                w="full"
                                maxW="6xl"
                                overflow="hidden"
                                borderRadius="lg"
                                borderWidth="1px"
                                borderColor="gray.900/10"
                                position="relative"
                                height="auto" // Changed from fixed height
                                aspectRatio="16/9" // Added aspect ratio
                            >
                                <Vimeo
                                    video="https://vimeo.com/1054417102"
                                    responsive={true} // Added responsive prop
                                    autopause={false} // Added autopause prop
                                    autoplay={true}
                                    loop={true}
                                    controls={false}
                                    muted={true}
                                    style={{ width: '100%', height: '100%' }} // Added inline style
                                />
                            </Box>
                        </VStack>
                    </Container>
                </Box>
            </Box>

            <Box
                width="100%"
                height={{ base: '380px', md: '380px' }} // Different heights for different screen sizes
                backgroundImage="url('/src/assets/wave-divider-1.svg')"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                transform={{ base: 'rotate(-180deg)', md: 'rotate(-180deg)' }} // Different rotations for different screen sizes
            />

            {/* Client Logos Section */}
            <Box bg="white">
                <Container maxW="container.xl" mx="auto" bg="#white" pt={20} pb={20}>
                    <Box>
                        <Grid
                            templateColumns="repeat(8, 1fr)"
                            gap="4"
                            alignItems="center"
                        >
                            <GridItem rowSpan={2} colSpan={3} display="flex" alignItems="flex-start">
                                <Text alignSelf="flex-start" color="gray.800" fontSize="2xl" fontWeight="bold" textAlign="left">
                                    The World's biggest brands choose CreateTOTALLY
                                </Text>
                            </GridItem>
                            {[
                                "/src/assets/bacardi_logo.png",
                                "/src/assets/vitality-logo.svg",
                                "/src/assets/Anheuser-Busch_InBev.svg",
                                "/src/assets/googlelogo_clr_74x24px.svg",
                                "/src/assets/Logo_NIKE.png",
                                "/src/assets/miele.svg",
                                "/src/assets/patek-philippe-sa-1.svg",
                                "/src/assets/Allwyn-Logo.png",
                                "/src/assets/AGY_22_Logo_Doner_RGB.png",
                                "/src/assets/MSC_Cruises_Logo.png"
                            ].map((src, index) => (
                                <GridItem key={index} display="flex" alignItems="center" justifyContent="center">
                                    <Box lineHeight="1" mt="2" mb="2" pl="7" pr="7" width="100%" height="100%" position="relative" display="flex" alignItems="center" justifyContent="center">
                                        <Image
                                            src={src}
                                            alt={`Client ${index + 1}`}
                                            objectFit="contain"
                                            maxWidth="100%"
                                            maxHeight="100%"
                                            filter="grayscale(100%) brightness(0%)"
                                        />
                                    </Box>
                                </GridItem>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Box
                width="100%"
                height={{ base: '380px', md: '380px' }} // Different heights for different screen sizes
                backgroundImage="url('/src/assets/wave-divider-1.svg')"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                transform={{ base: 'rotate(0deg)', md: 'rotate(0deg)' }} // Different rotations for different screen sizes
            />

            <Box>
                {/* Built to scale your Figma and Adobe content */}
                <Container maxW="container.xl" mx="auto" pt={20} pb={36}>
                    <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<HiTemplate />} >Template & Content Creation</Tag>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        gap={8}
                        alignItems="flex-start"
                    >
                        <Box flex={{ base: "1 1 100%", md: "3 1 60%" }}>
                            <Box>
                                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">Figma & Adobe Workflows.<br />Fully Automated.<br />Zero Compromises.</Heading>
                                <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25} mb="6">Your team runs on Figma and Adobe. We make them faster. Our After Effects, InDesign, and Figma plugins let you set design rules, automate with precision, and keep full control. One click cuts hours of manual coding.</Text>
                                <List.Root color="gray.900" fontSize="xl" fontWeight="thin" gap="2" variant="plain" align="center">
                                    <List.Item>
                                        <List.Indicator asChild color="green.500">
                                            <LuCircleCheck />
                                        </List.Indicator>
                                        The tools you love – No switching. No proprietary software.
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator asChild color="green.500">
                                            <LuCircleCheck />
                                        </List.Indicator>
                                        Define your design rules – Set structure, logic, and automation controls.
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator asChild color="green.500">
                                            <LuCircleCheck />
                                        </List.Indicator>
                                        Drag, drop, automate – Prepare templates, analyse, and we handle the rest.
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator asChild color="green.500">
                                            <LuCircleCheck />
                                        </List.Indicator>
                                        Full creative control – Every native feature of Adobe and Figma stays intact.
                                    </List.Item>
                                </List.Root>
                            </Box>
                        </Box>
                        <Box flex={{ base: "1 1 100%", md: "2 1 40%" }}>
                            <Box
                                width="100%"
                                aspectRatio="4/5"
                                borderRadius="xl"
                                borderWidth="1px"
                                borderColor="gray.500"
                                overflow="hidden"
                                p="1.5"
                            >
                                <Box bg="white" borderRadius="xl" height="100%">
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                </Container>

                {/* ALL CHANNELS */}
                <Box>
                    <Container maxW="container.xl" mx="auto" pt={36} pb={36}>
                        <VStack gap={8} align="center">
                            <Box textAlign="center" maxW="4xl">
                                <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<PiRocketFill />}>Workflow & Automation</Tag>
                                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="center" lineHeight={1} mb="3">One workflow. Every channel.</Heading>
                                <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25} mb="6">Static, video, animated—whatever the format, CreateTOTALLY delivers. Our platform automates asset creation for every channel, built to spec every time.<br />Automated resizing. No reworking. No guesswork.</Text>
                            </Box>
                        </VStack>

                        <Box mt={4} width="100%">
                            <Flex
                                direction="row"
                                justify="space-between"
                                align="center"
                                position="relative"
                            >
                                {[
                                    { icon: IoCheckboxOutline, label: "Start with Figma & Adobe", subLabel: "Upload your design from Figma or Adobe—no special skills needed." },
                                    { icon: IoCheckboxOutline, label: "No-code Templating", subLabel: "Set up templates easily, without writing any code. Just click and customise." },
                                    { icon: IoCheckboxOutline, label: "Content Planning", subLabel: "Choose what you need—sizes, styles, and languages—so everything is just right." },
                                    { icon: IoCheckboxOutline, label: "Automate at Scale", subLabel: "The system quickly creates all your designs, perfectly formatted every time." },
                                    { icon: IoCheckboxOutline, label: "Approve Without the Back-and-Forth", subLabel: "Share for review in one place. Get feedback, make changes, and approve quickly." },
                                    { icon: IoCheckboxOutline, label: "Deliver Instantly", subLabel: "Send your files where they need to go—no extra steps, no renaming." },
                                    { icon: IoCheckboxOutline, label: "Track & Optimise", subLabel: "See what’s working, measure results, and improve designs over time." }
                                ].map((step, index) => (
                                    <Flex
                                        key={index}
                                        direction="column"
                                        align="center"
                                        flex={1}
                                        height="180px"
                                    >
                                        <Box
                                            position="absolute"
                                            top="30px"
                                            left="30px"
                                            right="30px"
                                            height="2px"
                                            bg="gray.300"
                                            zIndex={1}
                                        />
                                        <Box position="relative" width="100%" height="60px" display="flex" justifyContent="center" alignItems="center">
                                            <Circle
                                                size="60px"
                                                bg="brandFuchsia.500"
                                            >
                                                <step.icon color="white" size="24px" />
                                            </Circle>
                                        </Box>
                                        <Flex direction="column" align="center" justify="flex-start" flex={1} pt={2} textAlign="center">
                                            <Text
                                                fontWeight="medium"
                                                fontSize="md"
                                                color="gray.900"
                                                mb={1}
                                                lineHeight="1.2"
                                            >
                                                {step.label}
                                            </Text>
                                            {/* <Text 
                                                fontSize="xs" 
                                                color="gray.600"
                                                maxW="120px"
                                            >
                                                {step.subLabel}
                                            </Text> */}
                                        </Flex>
                                    </Flex>
                                ))}
                                {/* Connecting line */}
                                <Box
                                    position="absolute"
                                    top="30px"
                                    left="30px"
                                    right="30px"
                                    height="2px"
                                    bg="gray.200"
                                    zIndex={-1}
                                />
                            </Flex>
                        </Box>

                    </Container>
                </Box>

                {/* Assets Delivered Instantly */}
                <Box>
                    <Container maxW="container.xl" mx="auto" pt={36} pb={6}>
                        <Flex
                            direction={{ base: "column", md: "row" }}
                            justify="space-between"
                            align="center"
                            gap={{ base: 8, md: 16 }}
                        >
                            <Box flexBasis={{ base: "100%", md: "40%" }}>
                                <Box
                                    width="100%"
                                    aspectRatio="1/1"
                                    borderRadius="xl"
                                    borderWidth="1px"
                                    borderColor="gray.500"
                                    overflow="hidden"
                                    p="1.5"
                                >
                                    <Box bg="white" borderRadius="xl" height="100%">
                                    </Box>
                                </Box>
                            </Box>
                            <Box flexBasis={{ base: "100%", md: "55%" }}>
                                <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<PiRocketFill />}>Workflow & Automation</Tag>
                                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">How much money are you burning on repetitive work?</Heading>
                                <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25}>A single campaign means dozens of sizes, formats, and versions.<br />Your team spends 80% of their time on production, not strategy.<br />Edits? Last-minute changes? More delays. More costs.  </Text>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                <Box
                    width="100%"
                    height={{ base: '380px', md: '380px' }} // Different heights for different screen sizes
                    backgroundImage="url('/src/assets/wave-divider-2.svg')"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    transform={{ base: 'rotate(-180deg)', md: 'rotate(-180deg)' }} // Different rotations for different screen sizes
                />

                <Box bg="white">
                    <Container maxW="container.xl" mx="auto" pt={36} pb={36}>
                        <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<PiRocketFill />} >Workflow & Automation</Tag>
                        <Grid
                            templateColumns={{
                                base: "1fr",
                                md: "repeat(2, 1fr)"
                            }}
                            gap={1}>
                            <GridItem>
                                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">How It Works</Heading>
                                <Box
                                    width="90%"
                                    maxWidth="1152px"
                                    borderRadius="xl"
                                    borderWidth="1px"
                                    borderColor="gray.500"
                                    overflow="hidden"
                                    p="1.5"
                                >
                                    <Box bg="white" borderRadius="xl" overflow="hidden">
                                        <ReactPlayer
                                            url="/GreyGoose_1.mp4"
                                            width="100%"
                                            height="100%"
                                            borderRadius="xl"
                                            playing={true}
                                            loop={true}
                                            muted={true}
                                            playsinline={true}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        style: {
                                                            borderRadius: 'xl',
                                                        }
                                                    }
                                                }
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Box>
                                    <Text color="gray.900" fontSize="xl" fontWeight="thin" lineHeight={1.25}>Other platforms force you into their template builders. Or worse—make you pay for them to build templates for you.<br />We do neither.</Text>
                                    <List.Root color="gray.900" fontSize="lg" fontWeight="thin" gap="2" variant="plain" align="center">
                                        <List.Item>
                                            <List.Indicator asChild color="red.500">
                                                <LuCircleX />
                                            </List.Indicator>
                                            No switching tools. Use your existing Figma, After Effects, or InDesign files.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            No locked-in systems. Full control over every rule, logic, and design choice.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            No extra work. The templates you already have power everything.
                                        </List.Item>
                                    </List.Root>
                                    <Text color="gray.900" fontSize="xl" fontWeight="thin" lineHeight={1.25}>You own the process. We just make it faster.</Text>
                                    <Text color="gray.900" fontSize="xl" fontWeight="bold" lineHeight={1.25} mt="12" mb="6">Start with your own template.</Text>
                                    <List.Root color="gray.900" fontSize="lg" fontWeight="thin" gap="2" variant="plain" align="center">
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Connect any Figma, After Effects, or InDesign file.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Apply design rules, layouts, and logic as usual.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            No forced rebuilds. No restrictions. No “proprietary” nonsense.
                                        </List.Item>
                                    </List.Root>
                                    <Text color="gray.900" fontSize="3xl" fontWeight="thin" lineHeight={1.25} mt="12" mb="6">Drag, drop, and let AI automation take over.</Text>
                                    <List.Root color="gray.900" fontSize="lg" fontWeight="thin" gap="2" variant="plain" align="center">
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Drag and drop templates into the platform.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            One click of "Analyse" replaces **hours of manual setup**.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            We detect every element and design rule — so the system adapts like a designer would.
                                        </List.Item>
                                    </List.Root>
                                    <Text color="gray.900" fontSize="3xl" fontWeight="thin" lineHeight={1.25} mt="12" mb="6">Define what changes (and what doesn’t).</Text>
                                    <List.Root color="gray.900" fontSize="lg" fontWeight="thin" gap="2" variant="plain" align="center">
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Add text, translations, and media for dynamic versions.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Lock in usage rules to protect branding.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Every adaptation stays **true to your original design**.
                                        </List.Item>
                                    </List.Root>
                                    <Text color="gray.900" fontSize="3xl" fontWeight="thin" lineHeight={1.25} mt="12" mb="6">Scale instantly—without losing precision.</Text>
                                    <List.Root color="gray.900" fontSize="lg" fontWeight="thin" gap="2" variant="plain" align="center">
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Our automation **doesn’t guess**—it follows your logic.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Resize, reformat, and adapt across **any spec or channel**.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Every output is built in its native file**—not a weird export.</List.Item>
                                    </List.Root>
                                    <Text color="gray.900" fontSize="3xl" fontWeight="thin" lineHeight={1.25} mt="12" mb="6">Approve, adjust, and deploy.</Text>
                                    <List.Root color="gray.900" fontSize="lg" fontWeight="thin" gap="2" variant="plain" align="center">
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            OReview all versions in-platform.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Make quick edits without restarting.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Export final assets or open files—your choice.
                                        </List.Item>
                                    </List.Root>
                                    <Text color="gray.900" fontSize="3xl" fontWeight="thin" lineHeight={1.25} mt="12" mb="6">See everything, in real time.</Text>
                                    <List.Root color="gray.900" fontSize="lg" fontWeight="thin" gap="2" variant="plain" align="center">
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Track template usage, adaptation timelines, and performance.
                                        </List.Item>
                                        <List.Item>
                                            <List.Indicator asChild color="green.500">
                                                <LuCircleCheck />
                                            </List.Indicator>
                                            Get full visibility with custom dashboards.
                                        </List.Item>
                                    </List.Root>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>


                {/* Integrations Section */}
                <Box>
                    <Container maxW="container.xl" mx="auto" pt={12} pb={8} minH="100vh">
                        <Flex
                            direction={{ base: "column", md: "row" }}
                            gap={1}
                        >
                            <Box flex={{ base: "1 1 100%", md: "1 1 50%" }} position="relative" height="100vh" display="flex" alignItems="center">
                                <Box>
                                    <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<PiPlugsFill />} >Integrations</Tag>
                                    <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">
                                        Seamless integration<br />with{" "}
                                        <span style={{ display: 'inline-flex', alignItems: 'center', minWidth: '10ch' }}>
                                            <AnimatePresence mode="wait">
                                                <motion.span
                                                    key={hoveredIntegration || "default"}
                                                    initial={{
                                                        rotateX: 60,
                                                        translateY: '-30%',
                                                        opacity: 0
                                                    }}
                                                    animate={{
                                                        rotateX: 0,
                                                        translateY: '0%',
                                                        opacity: 1,
                                                        transition: {
                                                            type: "tween",
                                                            duration: 0.35,
                                                            ease: "easeOut"
                                                        }
                                                    }}
                                                    exit={{
                                                        rotateX: -60,
                                                        translateY: '30%',
                                                        opacity: 0,
                                                        transition: {
                                                            duration: 0.15
                                                        }
                                                    }}
                                                    style={{
                                                        display: 'inline-block',
                                                        color: hoveredIntegration
                                                            ? integrations.find(i => i.text === hoveredIntegration)?.colour || "#ff0000"
                                                            : "inherit",
                                                        transformOrigin: 'center center',
                                                        transformStyle: 'preserve-3d',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    {hoveredIntegration || "your tech stack"}
                                                </motion.span>
                                            </AnimatePresence>
                                        </span>
                                    </Heading>
                                    <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25}>Disconnected tools slow teams down. Our platform integrates with your existing systems- DAMs, workflow tools, task management, and BI platforms—to keep everything in sync.</Text>
                                </Box>
                            </Box>
                            <Box flex={{ base: "1 1 100%", md: "1 1 50%" }}>
                                <Flex
                                    flexWrap="wrap"
                                    justifyContent="space-between"
                                >
                                    {integrations.map(({ src, text }: Integration, index: number) => (
                                        <Box
                                            key={index}
                                            position="relative"
                                            width={{ base: "50%", sm: "33.33%", md: "25%" }}
                                            onMouseEnter={() => setHoveredIntegration(text)}
                                            onMouseLeave={() => setHoveredIntegration(null)}
                                        >
                                            <Box position="relative" width="120%" paddingBottom="calc(100% + 0rem)" >
                                                <Box position="absolute" top="0" left="0" right="0" bottom="0" rounded="md" bg="brandNeutral.500" display="flex" flexDirection="column" overflow="hidden" >
                                                    <Box position="relative" width="100%" paddingBottom="100%" >
                                                        <Box position="absolute" top="0" left="0" right="0" bottom="0" display="flex" alignItems="center" justifyContent="center" >
                                                            <Image src={src} alt={`Integration ${index + 1}`} objectFit="contain" maxWidth="50%" maxHeight="50%" />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </Flex>
                            </Box>
                        </Flex>
                    </Container>
                </Box>


                <Box>
                    {/* Effortless Execution */}
                    <Box bg="white" py={12} px={8}>
                        <Container maxW="container.xl" mx="auto" pt={36} pb={36}>
                            <Grid
                                templateRows="auto auto"
                            >
                                <Grid
                                    templateColumns={{
                                        base: "1fr",
                                        md: "repeat(2, 1fr)"
                                    }}
                                    gap={8}
                                    mb="-0.5px"
                                    ml="-0.5px"
                                    mr="-0.5px"
                                    border="sm"
                                    borderColor="gray.200"
                                    pl="8"
                                    pr="12"
                                    pt="28"
                                    pb="28"
                                    color="gray.300"
                                >
                                    <GridItem>
                                        <Box>
                                            <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<PiRocketFill />}>Workflow & Automation</Tag>
                                            <Text color="gray.900" fontSize="5xl" fontWeight="medium" textAlign="left" lineHeight={1}>
                                                Our customers cut production time by 50% - without losing creative control.
                                            </Text>
                                        </Box>
                                    </GridItem>
                                    {/* <GridItem>
                                        <VStack align="start" gap={4} justify="">
                                            <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.5}>
                                            How much money are you burning on repetitive work?
                                            </Text>
                                            <HStack>
                                                <Button variant="subtle" bg="brandFuchsia.500" color="white" fontWeight="bold" size="lg" as="a" href="#" target="_blank" rel="noopener noreferrer">Contact sales</Button>
                                                <Button variant="outline" size="lg" as="a" href="#" target="_blank" color="gray.900" rel="noopener noreferrer">Explore the product</Button>
                                            </HStack>
                                        </VStack>
                                    </GridItem> */}
                                </Grid>
                                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={0}>
                                    {[
                                        {
                                            image: "/src/assets/white-claw-hard-seltzer-logo-vector.svg",
                                            title: "White Claw Hard Seltzer",
                                            description: "55% reduction in production cost. 8x faster.",
                                            highlight: ["8x faster.", "55% reduction"]
                                        },
                                        {
                                            image: "/src/assets/Hasbro_logo.svg",
                                            title: "Hasbro",
                                            description: "Briefing to live in 3 weeks. Sold out in 3 markets.",
                                            highlight: "Briefing to live in 3 weeks."
                                        },
                                        {
                                            image: "/src/assets/Logo_NIKE.png",
                                            title: "Nike",
                                            description: "10x faster to brief, adapt and deliver retail films.",
                                            highlight: "10x faster"
                                        },
                                        {
                                            image: "/src/assets/TWS-LOGO_PMS485_200mmx200mm_V2.jpg",
                                            title: "The Wine Society",
                                            description: "38% reduction in new customer cost per acquisition.",
                                            highlight: "38% reduction"
                                        }
                                    ].map((item, index) => (
                                        <GridItem
                                            key={index}
                                            mx="-0.5px"
                                            mt="-0.5px"
                                            border="sm"
                                            borderColor="gray.200"
                                            pl="8"
                                            pr="4"
                                            pt="12"
                                            pb="10"
                                            color="gray.300"
                                        >
                                            <VStack key={index} align="start" gap={4} height="100%">
                                                <Text fontSize="xl" color="gray.600">
                                                    <Highlight
                                                        query={item.highlight}
                                                        styles={{ fontWeight: "black", color: "brandFuchsia.500" }}
                                                    >
                                                        {item.description}
                                                    </Highlight>
                                                </Text>
                                                <Box width="30%" flex="1" display="flex" alignItems="center">
                                                    <Image src={item.image} alt={item.title} />
                                                </Box>
                                            </VStack>
                                        </GridItem>
                                    ))}
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    {/* Questions & answers */}
                    <Box>
                        <Container maxW="container.xl" mx="auto" pt={36} pb={36}>
                            <VStack gap={8} align="center">
                                <Box textAlign="center">
                                    <Text color="gray.900" fontSize="5xl" fontWeight="medium" textAlign="center" lineHeight={1}>Questions & answers</Text>
                                </Box>
                                <Box>
                                    <AccordionRoot width="4xl" multiple defaultValue={["b"]}>
                                        {items.map((item, index) => (
                                            <AccordionItem color="gray.900" key={index} value={item.value}>
                                                <AccordionItemTrigger fontSize="xl" fontWeight="regular" mt="6" mb="6">{item.title}</AccordionItemTrigger>
                                                <AccordionItemContent fontSize="md" fontWeight="medium" mb="6">
                                                    <ReactMarkdown>{item.text}</ReactMarkdown>
                                                </AccordionItemContent>
                                            </AccordionItem>
                                        ))}
                                    </AccordionRoot>
                                </Box>
                            </VStack>
                        </Container>
                    </Box>




                    {/* Data + Insights */}
                    <Box>
                        <Container maxW="container.xl" mx="auto" pt={36} pb={36}>
                            <Grid
                                templateColumns={{
                                    base: "1fr",
                                    md: "1fr 2fr"
                                }}
                                gap={24}>
                                <GridItem>
                                    <Box>
                                        <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<BsBarChartFill />}>Performance & Insights</Tag>
                                        <Text color="gray.900" fontSize="6xl" fontWeight="bold" textAlign="left" lineHeight={1} mb={4}>Data that drives performance</Text>
                                        <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.5}>Track creative efficiency, optimize assets, and boost ROI with real-time analytics. Made-to-measure dashboards give you full visibility across the production process.</Text>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Box
                                        width="100%"
                                        maxWidth="1152px"
                                        height="100%"
                                        borderRadius="xl"
                                        borderWidth="1px"
                                        borderColor="gray.500"
                                        overflow="hidden"
                                        p="1.5"
                                    >
                                        <Box bg="white" borderRadius="xl">
                                            <Image
                                                src="/CreateTOTALLY-Reports-Campaign-performance-02-20-2025_09_33_PM.png"
                                                borderRadius="xl"
                                            />
                                        </Box>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Container>
                    </Box>


                    {/* Security */}
                    <Box bg="white">
                        <Container maxW="container.xl" mx="auto" py={36}>
                            <VStack gap={12} align="stretch">
                                <Box>
                                    <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<RiShieldFlashFill />}>Security</Tag>
                                    <Text color="gray.900" fontSize="6xl" fontWeight="bold" lineHeight={1} mb={4}>
                                        Secure and Enterprise-ready
                                    </Text>
                                    <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.5}>
                                        Meet security and operational requirements to deliver AI automation to market faster.
                                    </Text>
                                </Box>

                                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={16}>
                                    {[
                                        {
                                            icon: <MdSecurity size={36} />,
                                            title: "Secure",
                                            description: "Data is encrypted at rest and in transit. Control access to your data with Single Sign-On, Role-Based Access Control, and more."
                                        },
                                        {
                                            icon: <AiOutlineCheckCircle size={36} />,
                                            title: "Reliable",
                                            description: "Powering mission-critical applications of all sizes, with support SLAs and observability."
                                        },
                                        {
                                            icon: <FiCloud size={36} />,
                                            title: "Cloud-native",
                                            description: "Fully managed AWS cloud in a region of your choice."
                                        },
                                        {
                                            icon: <FaBalanceScale size={36} />,
                                            title: "Compliant",
                                            description: "SOC2 Type II certified, and GDPR-ready."
                                        }
                                    ].map((item, index) => (
                                        <VStack key={index} align="start" gap={4}>
                                            <Box
                                                bg="brandNeutral.400"
                                                borderRadius="md"
                                                p={4}
                                                fontSize="3xl"
                                                color="gray.900"
                                            >
                                                {item.icon}
                                            </Box>
                                            <Text fontSize="2xl" fontWeight="bold" color="gray.900">
                                                {item.title}
                                            </Text>
                                            <Text fontSize="md" color="gray.600">
                                                {item.description}
                                            </Text>
                                        </VStack>
                                    ))}
                                </Grid>
                            </VStack>
                        </Container>
                    </Box>

                    {/* Call to Action Section */}
                    <Box bg="#CA3FC0" py={12} px={8}>
                        <VStack spaceY={4} textAlign="center">
                            <Text fontSize="2xl" fontWeight="bold" color="white">
                                See exactly how much you’ll save.
                            </Text>
                            <Button colorScheme="whiteAlpha" size="lg">Book a demo today</Button>
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
