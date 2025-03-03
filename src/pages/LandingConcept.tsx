import { useMemo, useState, useRef, useEffect } from 'react';
import { Container, Box, Text, Button, VStack, HStack, Image, Grid, GridItem, Highlight, Heading, List, Flex } from "@chakra-ui/react"
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "@/components/ui/accordion"
import { Tag } from "@/components/ui/tag"
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Vimeo from '@u-wave/react-vimeo';
import { HiTemplate } from "react-icons/hi";
import { PiRocketFill, PiPlugsFill } from "react-icons/pi";
import { LuCircleCheck } from "react-icons/lu";
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

const items = [
    {
        "value": "a",
        "title": "How does the automation actually work?",
        "text": "Think of CreateTOTALLY as your creative team’s **efficiency powerhouse**. This isn’t AI taking wild guesses, and it’s definitely not another rigid template system.\n\nInstead, we use **intelligent, rule-based automation** that adapts to your exact needs. Here’s the key: we **never** lock down your designs. Unlike other tools, you can **jump in, tweak, and adjust** as needed. No fixed layouts. No loss of creative control. Just **faster, smarter production at scale.**"
    },
    {
        "value": "b",
        "title": "What types of content does it automate?",
        "text": "Everything. **Yes, everything.**\n\nSocial ads, display banners, print, video, email—you name it, we automate it.\n\nNeed content localised? **Done.** Upload your own translations, or let our **built-in AI translation engine** handle the heavy lifting. No more manual copy-pasting. No more versioning nightmares. Just **high-speed, high-quality global campaigns.**"
    },
    {
        "value": "c",
        "title": "How does it fit within an in-house marketing team?",
        "text": "**We’re not here to replace designers—we’re here to free them up.**\n\nYour team is spending **80% of their time** on repetitive production work. That’s time stolen from strategy, storytelling, and the creative projects that actually move the needle.\n\nWith CreateTOTALLY, resizing, adapting, and duplicating assets happens **instantly**. Your team stays in control—only now, they can **focus on the creative work that actually matters.**"
    },
    {
        "value": "d",
        "title": "How much creative flexibility does it allow?",
        "text": "Automation **shouldn’t limit creativity.** And with CreateTOTALLY, it doesn’t.\n\nUnlike other tools that lock you into predefined templates, every output here is **100% editable.** Need to tweak a layout? No problem. Want to make a quick adjustment? Go ahead.\n\n**If you can do it in Adobe or Figma, you can do it here—just 10x faster.**"
    },
    {
        "value": "e",
        "title": "How complex is the implementation?",
        "text": "**Most teams are fully operational in 30 days.** No IT headaches, no endless onboarding.\n\nSome integrations are **plug-and-play**, while others need a quick mapping to fit into your existing workflow. Either way, our team guides you every step of the way.\n\nBottom line? **You’ll be automating creative production before your next big campaign launches.**"
    }
]

const LandingConcept = () => {
    const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentStep, setCurrentStep] = useState(0);

    const integrations = useMemo<Integration[]>(() => shuffleArray([
        { src: "/adroll.svg", text: "AdRoll", colour: "#00aeef" },
        { src: "/aem.svg", text: "AEM", colour: "rgb(238, 126, 55)" },
        { src: "/brandfolder.svg", text: "Brandfolder", colour: "rgb(110, 206, 241)" },
        { src: "/bynder.svg", text: "Bynder", colour: "#126dfe" },
        { src: "/drive.svg", text: "Google Drive", colour: "#4285f4" },
        { src: "/google-ads.svg", text: "Google Ads", colour: "#fbbc05" },
        { src: "/monday-logo-x2.png", text: "Monday.com", colour: "#6161FF" },
        { src: "/powerbi.svg", text: "Power BI", colour: "#f2c811" },
        { src: "/adobe-workfront.png", text: "Adobe Workfront", colour: "#ff0000" },
        { src: "/box.svg", text: "Box", colour: "#2486FC" },
        { src: "/click-up.svg", text: "ClickUp", colour: "rgba(250, 18, 227, 1)" },
        { src: "/aws-s3.svg", text: "Amazon S3", colour: "rgb(232, 146, 56)" },
        { src: "/Sitecore.svg", text: "Sitecore", colour: "#ff1f38" },
        { src: "/mark-gradient-blue-jira.svg", text: "Jira", colour: "#0146B3" },
        { src: "/YouTube.svg", text: "YouTube", colour: "#ff0000" },
        { src: "/Meta_Platforms_Inc_logo.svg", text: "Meta", colour: "#0082fb" }
    ]), []);

    const steps = [
        { icon: IoCheckboxOutline, label: "#1 Start with Figma & Adobe", subLabel: "Upload existing Figma and Adobe design files, prepared using our suite of plugins.", image: "/CreateTOTALLY-Master-templates-02-27-2025_04_27_PM.png" },
        { icon: IoCheckboxOutline, label: "#2 No-code Templating", subLabel: "Set up templates easily, without writing any code. Just click and customise.", image: "/pink.svg" },
        { icon: IoCheckboxOutline, label: "#3 Content Planning", subLabel: "Choose what you need—sizes, styles, and languages—so everything is just right.", image: "/CreateTOTALLY-Content-planning-02-27-2025_04_32_PM.png" },
        { icon: IoCheckboxOutline, label: "#4 Automate at Scale", subLabel: "The system quickly creates all your designs, perfectly formatted every time.", image: "/purple.svg" },
        { icon: IoCheckboxOutline, label: "#5 Approve Without the Back-and-Forth", subLabel: "Share for review in one place. Get feedback, make changes, and approve quickly.", image: "/CreateTOTALLY-Review-Danish-Master-Mar-1-Create-Soda-Figma--02-27-2025_04_49_PM.png" },
        { icon: IoCheckboxOutline, label: "#6 Deliver Instantly", subLabel: "Send your files where they need to go—no extra steps, no renaming.", image: "/blue.svg" },
        { icon: IoCheckboxOutline, label: "#7 Track & Optimise", subLabel: "See what's working, measure results, and improve designs over time.", image: "/CreateTOTALLY-Reports-Campaign-performance-02-20-2025_09_33_PM.png" }
    ];

    const lineRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: lineRef,
        offset: ["start center", "end center"]
    })

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

    // Add this line to use the togglePlay function
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('click', togglePlay);
            return () => video.removeEventListener('click', togglePlay);
        }
    }, []);

    const ParagraphWithPadding: React.FC<React.PropsWithChildren<{}>> = ({ children, ...props }) => (
        <Text as="p" mb={4} {...props}>
            {children}
        </Text>
    );

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(v => {
            const step = Math.floor(v * steps.length);
            setCurrentStep(Math.min(step, steps.length - 1));
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

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
                                Halve Your Creative Production Costs Instantly
                            </Heading>
                            <Text fontSize="2xl" color="gray.600" textAlign="center" maxW="3xl" lineHeight="1.2" fontWeight="light" pb="18">
                                If you make more than 10 print, video, or digital adapts per campaign, our AI automation technology can cut your production costs by 50%. <br />Without sacrificing creative control.
                            </Text>
                            <HStack gap={16}>
                                <Button colorScheme="blue" size="lg" variant="surface">Learn what automation can do for you</Button>
                            </HStack>
                            <Box
                                w="full"
                                maxW="6xl"
                                overflow="hidden"
                                borderRadius="lg"
                                borderWidth="1px"
                                borderColor="gray.900/10"
                                position="relative"
                                height="auto"
                                aspectRatio="16/9"
                            >
                                <Vimeo
                                    video="https://vimeo.com/1054417102"
                                    responsive={true}
                                    autopause={false}
                                    autoplay={false}
                                    loop={true}
                                    controls={true}
                                    muted={true}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </Box>
                        </VStack>
                    </Container>
                </Box>
            </Box>

            <Box
                width="100%"
                height={{ base: '380px', md: '380px' }} // Different heights for different screen sizes
                backgroundImage="url('/wave-divider-1.svg')"
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
                                    The World’s Biggest Brands Choose CreateTOTALLY
                                </Text>
                            </GridItem>
                            {[
                                "/bacardi_logo.png",
                                "/vitality-logo.svg",
                                "/Anheuser-Busch_InBev.svg",
                                "/googlelogo_clr_74x24px.svg",
                                "/Logo_NIKE.png",
                                "/miele.svg",
                                "/patek-philippe-sa-1.svg",
                                "/Allwyn-Logo.png",
                                "/AGY_22_Logo_Doner_RGB.png",
                                "/MSC_Cruises_Logo.png"
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
                backgroundImage="url('/wave-divider-1.svg')"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                transform={{ base: 'rotate(0deg)', md: 'rotate(0deg)' }} // Different rotations for different screen sizes
            />

            <Box>
                {/* Built to scale your Figma and Adobe content */}
                <Container maxW="container.xl" mx="auto" pt={4} pb={20}>
                    <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<HiTemplate />} >Template & Content Creation</Tag>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        gap={8}
                        alignItems="flex-start"
                    >
                        <Box flex={{ base: "1 1 100%", md: "3 1 60%" }}>
                            <Box>
                                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">Double Your Output.<br /> Zero Trade-offs.</Heading>
                                <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25} mb="6">Your team relies on Figma and Adobe—so we built automation that works with your native tools, not against them.</Text>
                                <List.Root color="gray.900" fontSize="xl" fontWeight="thin" gap="2" variant="plain" align="center">
                                    <List.Item>
                                        <List.Indicator asChild color="green.500">
                                            <LuCircleCheck />
                                        </List.Indicator>
                                        No switching. Keep your existing workflows. No proprietary software.
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator asChild color="green.500">
                                            <LuCircleCheck />
                                        </List.Indicator>
                                        Full creative control. Set design rules, automate, and approve—without losing the craft.
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator asChild color="green.500">
                                            <LuCircleCheck />
                                        </List.Indicator>
                                        One-click efficiency. Automate without coding. Handle thousands of assets in minutes.</List.Item>
                                </List.Root>
                            </Box>
                            <Button mt="16" colorScheme="blue" size="lg" variant="surface">Discover Your Brand’s Biggest Bottlenecks</Button>
                        </Box>
                        <Box flex={{ base: "1 1 100%", md: "2 1 40%" }}>
                            <Box
                                width="100%"
                                // aspectRatio="1/1"
                                borderRadius="xl"
                                overflow="hidden"
                                p="3"
                                borderWidth="1px"
                                borderColor="white"
                            >
                                <Image src="/AutomationSuite.svg" alt="All Channels" width="100%" />
                            </Box>
                        </Box>
                    </Flex>
                </Container>

                {/* ALL CHANNELS */}
                <Box>
                    <Box>
                        <Container maxW="container.xl" mx="auto" pt={36} pb={6}>
                            <VStack gap={16} align="center">
                                <Box textAlign="center" maxW="4xl">
                                    <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<PiRocketFill />}>Workflow & Automation</Tag>
                                    <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="center" lineHeight={1} mb="3">How It Works</Heading>
                                    <Text fontSize="xl" color="gray.600" mt={4}>
                                        Streamline your content creation process with our powerful automation tools.
                                    </Text>
                                </Box>
                                <Box w="full" position="relative" ref={lineRef}>
                                    <Flex justify="center">
                                        <Box maxWidth="1200px" width="100%" position="relative">
                                            <Flex>
                                                <Box width="35%" position="relative" pr={8}>
                                                    <Box
                                                        position="absolute"
                                                        right="31px"
                                                        top="8px"
                                                        bottom="8px"
                                                        width="2px"
                                                        bg="gray.200"
                                                        transform="translateX(50%)"
                                                    />
                                                    <motion.div
                                                        style={{
                                                            position: 'absolute',
                                                            right: '30px',
                                                            top: '8px',
                                                            bottom: '8px',
                                                            width: '2px',
                                                            background: '#CA3FC0',
                                                            transformOrigin: 'top',
                                                            scaleY: scrollYProgress,
                                                            transform: 'translateX(50%)',
                                                        }}
                                                    />

                                                    <VStack gap={24} align="stretch">
                                                        {steps.map((step, index) => (
                                                            <Flex key={index} align="center">
                                                                <Box flex="1" pr={4} textAlign="right">
                                                                    <Text fontWeight="bold" fontSize="md" color="gray.900" lineHeight="1.2">
                                                                        {step.label}
                                                                    </Text>
                                                                    <Text fontSize="md" color="gray.600" lineHeight="1.2">
                                                                        {step.subLabel}
                                                                    </Text>
                                                                </Box>
                                                                <Box
                                                                    flex="none"
                                                                    width="60px"
                                                                    height="60px"
                                                                    borderRadius="full"
                                                                    bg="brandFuchsia.500"
                                                                    display="flex"
                                                                    alignItems="center"
                                                                    justifyContent="center"
                                                                    zIndex={1}
                                                                    position="relative"
                                                                    left="30px"
                                                                >
                                                                    <step.icon color="white" size="24px" />
                                                                </Box>
                                                            </Flex>
                                                        ))}
                                                    </VStack>
                                                </Box>
                                                <Box width="65%" pl={8}>
                                                    {steps.map((step, index) => (
                                                        <Box
                                                            key={index}
                                                            width="100%"
                                                            aspectRatio="16/9"
                                                            borderRadius="xl"
                                                            borderWidth="1px"
                                                            borderColor="gray.500"
                                                            overflow="hidden"
                                                            p="1.5"
                                                            display={index === currentStep ? "block" : "none"}
                                                        >
                                                            <Image 
                                                                src={step.image} 
                                                                borderRadius="xl"
                                                                alt={step.label}
                                                            />
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </Box>
                            </VStack>
                        </Container>
                    </Box>
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

                                </Box>
                            </Box>
                            <Box flexBasis={{ base: "100%", md: "55%" }}>
                                <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<PiRocketFill />}>Workflow & Automation</Tag>
                                <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">How Much Are You Overpaying for Repetitive Work?</Heading>
                                <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25}>A single campaign requires dozens of sizes, formats, and versions. Your team is spending 80% of their time on production, not strategy. That’s time and budget lost—every single campaign.</Text>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                <Box
                    width="100%"
                    height={{ base: '380px', md: '380px' }} // Different heights for different screen sizes
                    backgroundImage="url('/wave-divider-2.svg')"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    transform={{ base: 'rotate(-180deg)', md: 'rotate(-180deg)' }} // Different rotations for different screen sizes
                />

                {/* Integrations Section */}
                <Box bg="white">
                    <Container maxW="container.xl" mx="auto" pt={32} pb={32}>
                        <Flex
                            direction={{ base: "column", md: "row" }}
                            gap={1}
                        >
                            <Box flex={{ base: "1 1 100%", md: "1 1 50%" }} position="relative" display="flex" alignItems="center">
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
                                    <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25}>Disconnected tools slow teams down. CreateTOTALLY integrates with your existing tech ensuring everything stays in sync.</Text>
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
                                                <Box position="absolute" top="0" left="0" right="0" bottom="0" rounded="md" bg="white" display="flex" flexDirection="column" overflow="hidden" >
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


                {/* Effortless Execution */}
                <Box>
                    <Box bg="white" py={12} px={8}>
                        <Container maxW="container.xl" mx="auto" pt={36} pb={36}>
                            <Grid templateRows="auto auto">
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
                                            <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">
                                                Our Customers Save Big. Here’s Proof.
                                            </Heading>
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={0}>
                                    {[
                                        {
                                            image: "/white-claw-hard-seltzer-logo-vector.svg",
                                            title: "White Claw Hard Seltzer",
                                            description: "55% reduction in production cost. 8x faster.",
                                            highlight: ["8x faster.", "55% reduction"]
                                        },
                                        {
                                            image: "/Hasbro_logo.svg",
                                            title: "Hasbro",
                                            description: "Briefing to live in 3 weeks. Sold out in 3 markets.",
                                            highlight: "Briefing to live in 3 weeks."
                                        },
                                        {
                                            image: "/Logo_NIKE.png",
                                            title: "Nike",
                                            description: "10x faster to brief, adapt and deliver retail films.",
                                            highlight: "10x faster"
                                        },
                                        {
                                            image: "/TWS-LOGO_PMS485_200mmx200mm_V2.jpg",
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
                                    <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">Questions & answers</Heading>
                                </Box>
                                <Box>
                                    <AccordionRoot width="4xl" multiple defaultValue={["b"]}>
                                        {items.map((item, index) => (
                                            <AccordionItem color="gray.900" key={index} value={item.value}>
                                                <AccordionItemTrigger fontSize="2xl" fontWeight="bold" mt="6" mb="6">{item.title}</AccordionItemTrigger>
                                                <AccordionItemContent fontSize="md" fontWeight="regular" mb="6">
                                                    <ReactMarkdown
                                                        components={{
                                                            p: (props) => <ParagraphWithPadding {...props} />
                                                        }}
                                                    >
                                                        {item.text}
                                                    </ReactMarkdown>
                                                </AccordionItemContent>
                                            </AccordionItem>
                                        ))}
                                    </AccordionRoot>
                                </Box>
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
export default LandingConcept;