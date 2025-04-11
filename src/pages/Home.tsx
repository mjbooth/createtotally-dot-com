import { useMemo, useState, useRef, useEffect } from 'react';
import { Container, Box, Text, Button, VStack, HStack, Image, SimpleGrid, Grid, GridItem, Highlight, Heading, List, Flex, useBreakpointValue, Link, Icon } from "@chakra-ui/react"
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "@/components/ui/accordion"
import { Tag } from "@/components/ui/tag"
import { motion, useScroll, AnimatePresence, useTransform } from 'framer-motion';
import Vimeo from '@u-wave/react-vimeo';
import { HiTemplate } from "react-icons/hi";
import { PiRocketFill, PiPlugsFill } from "react-icons/pi";
import { LuCircleCheck } from "react-icons/lu";
import ReactMarkdown from 'react-markdown';
import { IoCheckboxOutline } from "react-icons/io5";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const handleAccordionChange = (details: { value: string[] }) => {
        setExpandedItems(details.value);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (stepsRef.current && imageContainerRef.current) {
                const stepsRect = stepsRef.current.getBoundingClientRect();
                const stepHeight = stepsRect.height / steps.length;
                const scrollPosition = window.scrollY - stepsRect.top + window.innerHeight / 2;
                const newStep = Math.min(
                    Math.max(Math.floor(scrollPosition / stepHeight), 0),
                    steps.length - 1
                );
                setCurrentStep(newStep);

                // Check if the last step is in the middle of the viewport
                const lastStepTop = stepsRect.top + stepHeight * (steps.length - 1);
                if (lastStepTop <= window.innerHeight / 2) {
                    imageContainerRef.current.style.position = 'absolute';
                    imageContainerRef.current.style.top = `${lastStepTop - window.innerHeight / 2}px`;
                } else {
                    imageContainerRef.current.style.position = 'sticky';
                    imageContainerRef.current.style.top = '0';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const integrations = useMemo<Integration[]>(() => {
        const allIntegrations = [
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
        ];
        return shuffleArray(allIntegrations).slice(0, 15);
    }, []);

    const steps = [
        { icon: IoCheckboxOutline, label: "#1 Start with Figma & Adobe", subLabel: "Upload existing Figma and Adobe design files, prepared using our suite of plugins.", image: "/FigmaPlugin.jpg" },
        { icon: IoCheckboxOutline, label: "#2 No-code Templating", subLabel: "Set up templates easily, without writing any code. Just click and customise.", image: "/TemplateDesigner.jpg" },
        { icon: IoCheckboxOutline, label: "#3 Content Planning", subLabel: "Choose what you need: sizes, styles, and languages ensuring every adapt is perfect.", image: "/CreateTOTALLY-Content-planning-02-27-2025_04_32_PM.png" },
        // { icon: IoCheckboxOutline, label: "#4 Automate at Scale", subLabel: "The system quickly creates all your designs, perfectly formatted every time.", image: "/purple.svg" },
        { icon: IoCheckboxOutline, label: "#4 Approve Without the Back-and-Forth", subLabel: "Share for review in one place. Get feedback, make changes, and approve quickly.", image: "/TaskNotification.jpg" },
        // { icon: IoCheckboxOutline, label: "#6 Deliver Instantly", subLabel: "Send your files where they need to go—no extra steps, no renaming.", image: "/blue.svg" },
        { icon: IoCheckboxOutline, label: "#5 Track & Optimise", subLabel: "See what's working, measure results, and improve designs over time.", image: "/CreateTOTALLY-Reports-Campaign-performance-02-20-2025_09_33_PM.png" }
    ];

    const lineRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: lineRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
        const unsubscribe = scrollYProgress.on("change", (v) => {
            const step = Math.floor(v * steps.length);
            setCurrentStep(Math.min(step, steps.length - 1));
        });
        return () => unsubscribe();
    }, [scrollYProgress, steps.length]);

    const subheadingFontSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });
    const h1FontSize = useBreakpointValue({ base: "4xl", md: "6xl", lg: "8xl" });
    const h2FontSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "5xl" });
    const h3FontSize = useBreakpointValue({ base: "xl", md: "2xl", lg: "2xl" });
    const h4FontSize = useBreakpointValue({ base: "lg", md: "2xl", lg: "3xl" });

    return (
        <Box bg="brandNeutral.500">
            <Box pt={{ base: "24px", md: "54px" }}>
                <Box bg="#F4F0EB" w="full" minH="100vh">
                    <Container maxW="container.xl" mx="auto">
                        {/* Hero Section */}
                        <VStack
                            pt={{ base: 8, md: 16 }}
                            gap={{ base: 6, md: 12 }}
                            align="center"
                            w="full"
                        >
                            <Heading
                                as="h1"
                                fontSize={h1FontSize}
                                fontWeight="black"
                                lineHeight={{ base: "1.2", md: ".95" }}
                                color='#001e44'
                                textAlign="center"
                                maxW={{ base: "full", md: "6xl" }}
                                pt={{ base: 6, md: "12" }}
                            >
                                Cut Creative Production Costs by 65%, Instantly.
                            </Heading>
                            <Text
                                fontSize={subheadingFontSize}
                                color="#001e44"
                                textAlign="center"
                                maxW={{ base: "full", md: "3xl" }}
                                lineHeight="1.2"
                                pb={{ base: 3, md: "18" }}
                            >
                                If you make more than 10 print, video, or digital adapts per campaign, our AI automation technology can cut your production costs by 65%. <br />Without sacrificing creative control.
                            </Text>
                            <HStack gap={{ base: 4, md: 16 }} flexDirection={{ base: "column", md: "row" }}>
                            <Button bg="#001e44" size="lg" variant="surface" width={{ base: "full", md: "auto" }}>
                                <Link href="mailto:info@createtotally.com?subject=I%27d%20like%20a%20free%201%3A1%20strategy%20call" color="white">Book a Free 1:1 Strategy Call →</Link>
                            </Button>
                            </HStack>
                            {/* Video container */}
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
                height={{ base: '90px', md: '380px' }}
                backgroundImage="url('/wave-divider-1.svg')"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                transform={{ base: 'rotate(-180deg)', md: 'rotate(-180deg)' }}
            />

            {/* Client Logos Section */}
            <Box bg="white">
                <Container maxW="container.xl" mx="auto" bg="white" py={{ base: 10, md: 20 }}>
                    <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={{ base: 8, lg: 12 }}>
                        <GridItem>
                            <Heading
                                as="h3"
                                fontSize={h3FontSize}
                                fontWeight="bold"
                                textAlign={{ base: "center", lg: "left" }}
                                color='#001e44'
                            >The World's Biggest Brands Choose CreateTOTALLY
                            </Heading>
                        </GridItem>
                        <GridItem>
                            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} gap={{ base: 8, md: 8 }} >
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
                                    <Box key={index} display="flex" alignItems="center" justifyContent="center" pl={{ base: 6 }} pr={{ base: 6 }}>
                                        <Image
                                            src={src}
                                            alt={`Client ${index + 1}`}
                                            objectFit="contain"
                                            maxWidth="100%"
                                            maxHeight="60px"
                                            filter="grayscale(100%) brightness(0%)"
                                        />
                                    </Box>
                                ))}
                            </SimpleGrid>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>

            <Box
                width="100%"
                height={{ base: '90px', md: '380px' }} // Different heights for different screen sizes
                backgroundImage="url('/wave-divider-1.svg')"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                transform={{ base: 'rotate(0deg)', md: 'rotate(0deg)' }} // Different rotations for different screen sizes
            />

            <Box>
                {/* Built to scale your Figma and Adobe content */}
                <Container maxW="container.xl" mx="auto" pb={{ base: 8, md: 16 }}>

                    <Flex
                        direction={{ base: "column", lg: "row" }}
                        gap={{ base: 6, md: 8 }}
                        alignItems="center"
                    >
                        <Box flex={{ base: "1 1 100%", lg: "1 1 50%" }}>
                            <Box>
                            <Box
                                flexBasis={{ base: "100%", md: "55%" }}
                                order={{ base: 1, lg: 2 }}  // Change order on mobile
                                textAlign={{ base: "center", md: "left" }}
                            >
                                <Tag
                                    variant="solid"
                                    size={{ base: "md", md: "lg" }}
                                    bg="brandFuchsia.100"
                                    color="brandFuchsia.600"
                                    mb={{ base: 2, md: 3 }}
                                    startElement={<HiTemplate />}>Template & Content Creation</Tag>
                                </Box>
                                <Box textAlign={{ base: "center", md: "left" }}>
                                </Box>
                                <Heading
                                    as="h2"
                                    fontSize={h2FontSize}
                                    fontWeight="black"
                                    lineHeight={{ base: "1.2", md: ".95" }}
                                    color='#001e44'
                                    textAlign={{ base: "center", lg: "left" }}
                                    mb={{ base: 3, md: 4 }}
                                >
                                    Double Your Output.<br /> Zero Trade-offs.
                                </Heading>
                                <Text color="gray.900" fontSize={{ base: "lg", md: "xl" }} lineHeight={1.25} mb={{ base: 4, md: 6 }} textAlign={{ base: "center", lg: "left" }}>
                                    Your team relies on Figma and Adobe - so, we built automation that works with your native tools, not against them.
                                </Text>
                                <List.Root color="gray.900" fontSize={{ base: "md", md: "lg", lg: "xl" }} gap={{ base: 1, md: 2 }} variant="plain" >
                                    {[
                                        "No switching to proproetary software. Keep your existing workflows.",
                                        "Full creative control. Set design rules, automate, and approve—without losing the craft.",
                                        "One-click efficiency. Automate without coding. Handle thousands of assets in minutes."
                                    ].map((item, index) => (
                                        <List.Item key={index}>
                                            <List.Indicator asChild color="green.500">
                                                <Icon as={LuCircleCheck} />
                                            </List.Indicator>
                                            {item}
                                        </List.Item>
                                    ))}
                                </List.Root>
                            </Box>
                            {/* <Button mt={{ base: 8, md: 12 }} colorScheme="blue" size={{ base: "md", md: "lg" }} variant="surface" width={{ base: "full", md: "auto" }}>
                                Book a creative asset audit →
                            </Button>                         */}
                        </Box>
                        <Box flex={{ base: "1 1 100%", lg: "1 1 50%" }} mt={{ base: 8, lg: 0 }}>
                            <Box
                                width="100%"
                                overflow="hidden"
                            >
                                <Image src="/AutomationSuite.svg" alt="All Channels" width="100%" />
                            </Box>
                        </Box>
                    </Flex>
                </Container>

                {/* ALL CHANNELS */}

                <Box
                    width="100%"
                    height={{ base: '90px', md: '380px' }} // Different heights for different screen sizes
                    backgroundImage="url('/wave-divider-4.svg')"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    transform={{ base: 'rotate(0deg)', md: 'rotate(0deg)' }} // Different rotations for different screen sizes
                />

                <Box bg="white">
                    <Box>
                        <Container maxW="container.xl" mx="auto" pb={6}>
                            <VStack gap={16} align="center">
                                <Box textAlign="center" maxW="4xl">
                                    <Tag
                                        variant="solid"
                                        size={{ base: "md", md: "lg" }}
                                        bg="brandFuchsia.100"
                                        color="brandFuchsia.600"
                                        mb={{ base: 2, md: 3 }} 
                                        startElement={<PiRocketFill />}>
                                        Workflow & Automation
                                    </Tag>
                                    <Heading
                                        as="h2"
                                        fontSize={h2FontSize}
                                        fontWeight="black"
                                        lineHeight={{ base: "1.2", md: ".95" }}
                                        color='#001e44'
                                        textAlign={{ base: "center" }}
                                        mb={{ base: 3, md: 4 }}
                                    >
                                        How It Works
                                    </Heading>
                                    <Text fontSize={{ base: "lg", md: "xl" }} color="gray.900" mt={4}>
                                        Streamline your content creation process with our powerful automation tools.
                                    </Text>
                                </Box>
                                <Box w="full" ref={lineRef} position="relative">
                                    <Flex justify="center" direction={{ base: "column", md: "row" }}>
                                        <Box maxWidth="1200px" width="100%" position="relative">
                                            <Flex direction={{ base: "column", md: "row" }}>
                                                <Box width={{ base: "100%", md: "35%" }} position="relative" pr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
                                                    <Box
                                                        display={{ base: "none", md: "block" }}
                                                        position="absolute"
                                                        right="31px"
                                                        top="8px"
                                                        bottom="8px"
                                                        width="2px"
                                                        bg="gray.200"
                                                        transform="translateX(50%)"
                                                    />
                                                    {/* Progress line */}
                                                    <Box display={{ base: "none", md: "block" }}>
                                                        <motion.div
                                                            style={{
                                                                position: 'absolute',
                                                                right: '31px',
                                                                top: '8px',
                                                                bottom: '8px',
                                                                width: '2px',
                                                                background: '#CA3FC0',
                                                                transformOrigin: 'top',
                                                                transform: 'translateX(50%)',
                                                                height: lineHeight
                                                            }}
                                                        />
                                                    </Box>
                                                    <VStack gap={{ base: 12, md: 36 }} align="stretch">
                                                        {steps.map((step, index) => (
                                                            <Flex key={index} align="center" id={`step-${index}`}>
                                                                <Box flex="1" pr={4} textAlign={{ base: "left", md: "right" }}>
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
                                                                    display={{ base: "none", md: "flex" }}
                                                                    alignItems="center"
                                                                    justifyContent="center"
                                                                    zIndex={1}
                                                                    position="relative"
                                                                    left={{ base: 0, md: "30px" }}
                                                                >
                                                                    <Box display={{ base: "none", md: "block" }}>
                                                                        <step.icon color="white" size="24px" />
                                                                    </Box>
                                                                </Box>
                                                            </Flex>
                                                        ))}
                                                    </VStack>
                                                </Box>

                                                <Box width={{ base: "100%", md: "65%" }} pl={{ base: 0, md: 8 }} position="relative" height="auto">
                                                    <Box
                                                        ref={imageContainerRef}
                                                        position={{ base: "relative", md: "sticky" }}
                                                        top="100px"
                                                        width="100%"
                                                        height="0"
                                                        paddingBottom="56.25%" // This maintains the 16:9 aspect ratio
                                                        display="flex"
                                                        alignItems="center"
                                                        justifyContent="center"
                                                    >
                                                        <Box
                                                            position="absolute"
                                                            top="0"
                                                            left="0"
                                                            right="0"
                                                            bottom="0"
                                                            overflow="hidden"
                                                            borderRadius="xl"
                                                            display={{ base: "none", md: "block" }}
                                                        >
                                                            {steps.map((step, index) => (
                                                                <Image
                                                                    key={index}
                                                                    src={step.image}
                                                                    alt={step.label}
                                                                    position="absolute"
                                                                    top="0"
                                                                    left="0"
                                                                    width="100%"
                                                                    height="100%"
                                                                    objectFit="cover"
                                                                    opacity={index === currentStep ? 1 : 0}
                                                                    transition="opacity 0.3s ease-in-out"
                                                                    display={{ base: "none", md: "block" }}
                                                                />
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                </Box>

                                            </Flex>
                                        </Box>
                                    </Flex>
                                </Box>
                            </VStack>
                        </Container>
                    </Box>
                </Box>

                <Box
                    width="100%"
                    height={{ base: '90px', md: '450px' }} // Different heights for different screen sizes
                    backgroundImage="url('/wave-divider-3.svg')"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    transform={{ base: 'rotate(0deg)', md: 'rotate(0deg)' }} // Different rotations for different screen sizes
                />


                {/* Assets Delivered Instantly */}
                <Box>
                    <Container maxW="container.xl" mx="auto" py={{ base: 16, md: 24, lg: 24 }}>
                        <Flex
                            direction={{ base: "column", lg: "row" }}
                            justify="space-between"
                            align={{ base: "center", lg: "flex-start" }}
                            gap={{ base: 8, md: 12, lg: 16 }}
                        >
                            <Box
                                flexBasis={{ base: "100%", lg: "40%" }}
                                mb={{ base: 8, lg: 0 }}
                                order={{ base: 2, lg: 1 }}  // Change order on mobile
                            >                                <Box
                                width="100%"
                                maxWidth={{ base: "300px", md: "400px", lg: "100%" }}
                                overflow="hidden"
                                p={{ base: 1, md: 1.5 }}
                            >
                                    <DotLottieReact
                                        src="https://lottie.host/64a75798-d0a2-401c-81f7-f5ad58f10bfd/nA9e1sZCcn.lottie"
                                        loop
                                        autoplay
                                    />
                                </Box>
                            </Box>
                            <Box
                                flexBasis={{ base: "100%", md: "55%" }}
                                order={{ base: 1, lg: 2 }}  // Change order on mobile
                            >
                                <Tag
                                    variant="solid"
                                    size={{ base: "md", md: "lg" }}
                                    bg="brandFuchsia.100"
                                    color="brandFuchsia.600"
                                    mb={{ base: 2, md: 3 }} 
                                    startElement={<PiRocketFill />}
                                >
                                    Workflow & Automation
                                </Tag>
                                <Heading
                                    as="h2"
                                    fontSize={h2FontSize}
                                    fontWeight="black"
                                    lineHeight={{ base: "1.2", md: ".95" }}
                                    color='#001e44'
                                    textAlign={{ base: "center", lg: "left" }}
                                    mb={{ base: 3, md: 4 }}
                                >
                                    How Much Are You Overpaying for Repetitive Work?
                                </Heading>
                                <Text
                                    color='#001e44'
                                    fontSize={{ base: "lg", md: "xl" }}
                                    lineHeight={1.5}
                                    textAlign={{ base: "center", lg: "left" }}
                                    mb={{ base: 6, md: 8 }}
                                >
                                    A single campaign requires dozens of sizes, formats, and versions. Your team is spending 80% of their time on production, not strategy. That’s time and budget lost, on every single campaign.
                                </Text>
                                <Flex justify={{ base: "center", lg: "flex-start" }}>
                                    <Button bg="#001e44"
                                        size={{ base: "md", md: "lg" }}
                                        variant="surface"
                                    >
                                        <Link href="mailto:info@createtotally.com?subject=Schedule%20a%20content%20audit" color="white">Schedule a content audit →</Link>
                                    </Button>
                                </Flex>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                <Box
                    width="100%"
                    height={{ base: '90px', md: '380px' }} // Different heights for different screen sizes
                    backgroundImage="url('/wave-divider-2.svg')"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    transform={{ base: 'rotate(-180deg)', md: 'rotate(-180deg)' }} // Different rotations for different screen sizes
                />

                {/* Integrations Section */}
                <Box bg="white">
                    <Container maxW="container.xl" mx="auto" py={{ base: 16, md: 32 }}>
                        <Flex
                            direction={{ base: "column", lg: "row" }}
                            gap={{ base: 8, lg: 12 }}
                        >
                            <Box flex={{ base: "1 1 100%", lg: "1 1 50%" }} position="relative" display="flex" alignItems="flex-start">
                                <Box>
                                    <Tag 
                                        variant="solid"
                                        size={{ base: "md", md: "lg" }}
                                        bg="brandFuchsia.100"
                                        color="brandFuchsia.600"
                                        mb={{ base: 2, md: 3 }} 
                                        startElement={<PiPlugsFill />}>Integrations</Tag>
                                    <Heading
                                        as="h2"
                                        fontSize={h2FontSize}
                                        fontWeight="black"
                                        lineHeight={{ base: "1.2", md: ".95" }}
                                        color='#001e44'
                                        textAlign="left"
                                        mb={{ base: 3, md: 4 }}
                                    >
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
                                    <Text
                                        color='#001e44'
                                        fontSize={{ base: "lg", md: "xl" }}
                                        maxW="xl"
                                        lineHeight={1.5}
                                        mt={4}
                                    >
                                        Disconnected tools slow teams down. CreateTOTALLY integrates with your existing tech, ensuring everything stays in sync.
                                    </Text>
                                </Box>
                            </Box>
                            <Box flex={{ base: "1 1 100%", lg: "1 1 50%" }}>
                                <Flex
                                    flexWrap="wrap"
                                    justifyContent="space-between"
                                    mt={{ base: 8, lg: 0 }}
                                >
                                    {integrations.map(({ src, text }: Integration, index: number) => (
                                        <Box
                                            key={index}
                                            position="relative"
                                            width={{ base: "33.33%", sm: "25%", md: "20%" }}
                                            p={2}
                                            onMouseEnter={() => setHoveredIntegration(text)}
                                            onMouseLeave={() => setHoveredIntegration(null)}
                                        >
                                            <Box
                                                position="relative"
                                                width="100%"
                                                paddingBottom="100%"
                                                rounded="md"
                                                bg="white"
                                            >
                                                <Box
                                                    position="absolute"
                                                    top="0"
                                                    left="0"
                                                    right="0"
                                                    bottom="0"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`Integration ${index + 1}`}
                                                        objectFit="contain"
                                                        maxWidth="70%"
                                                        maxHeight="70%"
                                                    />
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
                <Box bg="white" py={{ base: 8, md: 12 }} px={{ base: 4, md: 8 }}>
                    <Container maxW="container.xl" mx="auto" py={{ base: 16, md: 36 }} >
                        <VStack gap={{ base: 0 }}>
                            <Box w="full" textAlign={{ base: "center", md: "left" }} pb={{ base: 8, md: 12 }}>
                                <Tag 
                                    variant="solid"
                                    size={{ base: "md", md: "lg" }}
                                    bg="brandFuchsia.100"
                                    color="brandFuchsia.600"
                                    mb={{ base: 2, md: 3 }}                                     
                                    startElement={<PiRocketFill />}
                                >
                                    Workflow & Automation</Tag>
                                <Heading
                                    as="h2"
                                    fontSize={h2FontSize}
                                    fontWeight="black"
                                    lineHeight={{ base: "1.2", md: ".95" }}
                                    color='#001e44'
                                    mb={{ base: 3, md: 4 }}
                                >
                                    Our Customers Save Big. Here's Proof.
                                </Heading>
                            </Box>
                            <Grid
                                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
                                w="full"
                                mb="-0.5px"
                                ml="-0.5px"
                                mr="-0.5px"
                            >
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
                                        image: "/tws.jpeg",
                                        title: "The Wine Society",
                                        description: "38% reduction in new customer cost per acquisition.",
                                        highlight: "38% reduction"
                                    }
                                ].map((item, index) => (
                                    <GridItem
                                        key={index}
                                        p={{ base: 5, md: 8 }}
                                        mx="-0.5px"
                                        mt="-0.5px"
                                        border="sm"
                                        borderColor="gray.200"
                                        lineHeight={{ base: "1.2", md: "lg" }}
                                    >
                                        <VStack align="start" gap={4} height="100%">
                                            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
                                                <Highlight
                                                    query={item.highlight}
                                                    styles={{
                                                        fontWeight: "black",
                                                        color: "brandFuchsia.500",
                                                        wordBreak: "break-word",
                                                        whiteSpace: "normal",
                                                    }}
                                                >
                                                    {item.description}
                                                </Highlight>
                                            </Text>
                                            <Box width="50%" maxWidth="150px" flex="1" display="flex" alignItems="center">
                                                <Image src={item.image} alt={item.title} objectFit="contain" />
                                            </Box>
                                        </VStack>
                                    </GridItem>
                                ))}
                            </Grid>
                        </VStack>
                    </Container>
                </Box>

                {/* Questions & answers */}
                <Box>
                    <Box bg="brandNeutral.500" py={{ base: 12, md: 24 }}>
                        <Container maxW="container.xl" mx="auto">
                            <VStack gap={{ base: 6, md: 10 }} align="stretch">
                                <Box textAlign={{ base: "center", md: "left" }}>
                                    <Heading
                                        as="h2"
                                        fontSize={h2FontSize}
                                        fontWeight="black"
                                        lineHeight={{ base: "1.2", md: ".95" }}
                                        color='#001e44'
                                        mb={{ base: 3, md: 4 }}
                                    >
                                        Questions & Answers
                                    </Heading>
                                </Box>
                                <Box width="100%">
                                    <AccordionRoot
                                        width="100%"
                                        multiple
                                        value={expandedItems}
                                        onValueChange={handleAccordionChange}
                                    >
                                        {items.map((item, index) => {
                                            return (
                                                <AccordionItem
                                                    color="gray.900"
                                                    key={index}
                                                    value={item.value}
                                                >
                                                    <AccordionItemTrigger
                                                        as="h4"
                                                        fontSize={h4FontSize}
                                                        fontWeight="bold"
                                                        color='#001e44'
                                                        py={4}
                                                        pr={4}
                                                        onClick={() => {
                                                            const newExpandedItems = expandedItems.includes(item.value)
                                                                ? expandedItems.filter(v => v !== item.value)
                                                                : [...expandedItems, item.value];
                                                            setExpandedItems(newExpandedItems);
                                                        }}
                                                    >
                                                        {item.title}
                                                    </AccordionItemTrigger>
                                                    <AccordionItemContent
                                                        fontSize={{ base: "md", md: "lg" }}
                                                        fontWeight="regular"
                                                        color='#001e44'
                                                        pb={4}
                                                    >
                                                        {expandedItems.includes(item.value) && (
                                                            item.text ? (
                                                                <ReactMarkdown
                                                                    components={{
                                                                        p: (props) => <ParagraphWithPadding {...props} />
                                                                    }}
                                                                >
                                                                    {item.text}
                                                                </ReactMarkdown>
                                                            ) : (
                                                                <p>No content available</p>
                                                            )
                                                        )}
                                                    </AccordionItemContent>
                                                </AccordionItem>
                                            );
                                        })}
                                    </AccordionRoot>
                                </Box>
                            </VStack>
                        </Container>
                    </Box>

                    {/* Call to Action Section */}
                    {/* <Box bg="#CA3FC0" py={12} px={8}>
                        <VStack spaceY={4} textAlign="center">
                            <Text fontSize="2xl" fontWeight="bold" color="white">
                                See exactly how much you’ll save.
                            </Text>
                        </VStack>
                    </Box> */}
                </Box>
            </Box>
        </Box>
    );
}
export default LandingConcept;