import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Container, Box, Text, Button, VStack, HStack, Image, Grid, GridItem, Highlight } from "@chakra-ui/react"
import { Tag } from "@/components/ui/tag"
import { DotLottiePlayer } from '@dotlottie/react-player';
import { motion, AnimatePresence } from 'framer-motion';
import Vimeo from '@u-wave/react-vimeo';
import { HiTemplate } from "react-icons/hi";
import { BsBarChartFill } from "react-icons/bs";
import { RiRobot2Fill, RiShieldFlashFill } from "react-icons/ri";
import { PiRocketFill, PiPlugsFill } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiCloud } from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";

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
                            py={16}
                            gap={12}
                            align="center"
                            w="full"
                            pb="30"
                        >
                            <Text
                                fontSize="8xl" 
                                fontWeight="black" 
                                lineHeight=".95" 
                                color='gray.800' 
                                textAlign="center" 
                                maxW="4xl" 
                            >
                                Automate without compromise. Keep Adobe, keep Figma, keep control.
                            </Text>
                            <Text fontSize="3xl" color="gray.600" textAlign="center" maxW="3xl" lineHeight="1.2" fontWeight="light">
                                Most automation forces you to ditch Adobe, break Figma workflows, and compromise on creativity. We fixed that.
                            </Text>
                            <HStack gap={6}>
                                <Button colorScheme="blue" size="lg" variant="surface">Get Started</Button>
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

            <Box bg="white">
                {/* Client Logos Section */}
                <Container maxW="container.xl" mx="auto" bg="#white" pt={36} pb={36}>
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


            <Box>
                {/* Built to scale your Figma and Adobe content */}
                <Box>
                    <Container maxW="container.xl" mx="auto" pt={36} pb={36}>
                        <Grid
                            templateColumns={{
                                base: "1fr",
                                md: "repeat(2, 1fr)"
                            }}
                            gap={1}>
                            <GridItem>
                                <Box>
                                    <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<HiTemplate />} >Template & Content Creation</Tag>
                                    <Text color="gray.900" fontSize="6xl" fontWeight="bold" textAlign="left" lineHeight={1}>Built to scale your Figma and Adobe content
                                    </Text>
                                    <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.5}>40 million creators work in Figma and Adobe Creative Cloud. We enhance these platforms instead of forcing teams to switch tools.</Text>
                                </Box>
                            </GridItem>
                            <GridItem></GridItem>
                        </Grid>
                    </Container>
                </Box>

                {/* Assets Delivered Instantly */}
                <Box>
                    <Container maxW="container.xl" mx="auto" pt={36} pb={36}>
                        <Grid
                            templateColumns={{
                                base: "1fr",
                                md: "repeat(2, 1fr)"
                            }}
                            gap={1}>
                            <GridItem>
                                <Box>
                                    <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<HiTemplate />} >Template & Content Creation</Tag>
                                    <Text color="gray.900" fontSize="6xl" fontWeight="bold" textAlign="left" lineHeight={1}>Creative assets delivered instantly
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>



                {/* Integrations Section */}
                <Box>
                    <Container maxW="container.xl" mx="auto" pt={12} pb={8} minH="100vh">
                        <Grid
                            templateColumns={{
                                base: "1fr",
                                md: "repeat(2, 1fr)"
                            }}
                            gap={1}>
                            <GridItem position="relative" height="100vh">
                                <Box
                                    position="sticky"
                                    top="50%"
                                    transform="translateY(-50%)"
                                >
                                    <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<PiPlugsFill />} >Integrations</Tag>
                                    <Text
                                        color="gray.900"
                                        fontSize="6xl"
                                        fontWeight="bold"
                                        textAlign="left"
                                        mb={8}
                                        lineHeight={1}
                                    >
                                        Seamless integration with{" "}
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
                                    </Text>


                                </Box>
                            </GridItem>
                            <GridItem>
                                <Box
                                    pt="22vh"
                                    pb="22vh"
                                >
                                    <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.5}>Disconnected tools slow teams down. Our platform integrates with your existing systems- DAMs, workflow tools, task management, and BI platforms—to keep everything in sync.</Text>
                                </Box>
                                <Box>
                                    <Grid
                                        templateColumns={{
                                            base: "repeat(2, 1fr)",
                                            sm: "repeat(3, 1fr)",
                                            md: "repeat(4, 1fr)",
                                        }}
                                        gap={0}>
                                        {integrations.map(({ src, text }: Integration, index: number) => (
                                            <GridItem
                                                key={index}
                                                position="relative"
                                                display="flex"
                                                flexDirection="column"
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
                                            </GridItem>
                                        ))}
                                    </Grid>
                                </Box>
                            </GridItem>
                        </Grid>
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
                                            <Text color="gray.900" fontSize="6xl" fontWeight="bold" textAlign="left" lineHeight={1}>
                                                Effortless campaign execution
                                            </Text>
                                        </Box>
                                    </GridItem>
                                    <GridItem>
                                        <VStack align="start" gap={4} justify="">
                                            <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.5}>
                                                Scaling creative teams is expensive and slow. Hiring takes months. Workloads fluctuate. We help you deliver campaigns at any scale, without worrying about capacity constraints.
                                            </Text>
                                            <HStack>
                                                <Button variant="subtle" bg="brandFuchsia.500" color="white" fontWeight="bold" size="lg" as="a" href="#" target="_blank" rel="noopener noreferrer">Contact sales</Button>
                                                <Button variant="outline" size="lg" as="a" href="#" target="_blank" color="gray.900" rel="noopener noreferrer">Explore the product</Button>
                                            </HStack>
                                        </VStack>
                                    </GridItem>
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

                    {/* AI */}
                    <Box>
                        <Container maxW="container.xl" mx="auto" pt={36} pb={36}>
                            <VStack gap={8} align="center">
                                <Box textAlign="center">
                                    <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<RiRobot2Fill />} >AI Innovation</Tag>
                                    <Text color="gray.900" fontSize="6xl" fontWeight="bold" textAlign="center" lineHeight={1}>AI proof your production process</Text>
                                    <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.5}>Discover how AI and creativity blend seamlessly throughout CreateTOTALLY.</Text>
                                </Box>
                                <HStack gap="6">
                                    <Button
                                        borderRadius="4xl"
                                        variant={selectedFeature === 'Translation' ? "solid" : "outline"}
                                        size="lg"
                                        color={selectedFeature === 'Translation' ? "white" : "gray.900"}
                                        bg={selectedFeature === 'Translation' ? "gray.900" : "transparent"}
                                        fontWeight="bold"
                                        onClick={() => setSelectedFeature('Translation')}
                                    >
                                        Translation
                                    </Button>
                                    <Button
                                        borderRadius="4xl"
                                        variant={selectedFeature === 'Quality Control' ? "solid" : "outline"}
                                        size="lg"
                                        color={selectedFeature === 'Quality Control' ? "white" : "gray.900"}
                                        bg={selectedFeature === 'Quality Control' ? "gray.900" : "transparent"}
                                        fontWeight="bold"
                                        onClick={() => setSelectedFeature('Quality Control')}
                                    >
                                        Quality Control
                                    </Button>
                                    <Button
                                        borderRadius="4xl"
                                        variant={selectedFeature === 'Auto-Adapt' ? "solid" : "outline"}
                                        size="lg"
                                        color={selectedFeature === 'Auto-Adapt' ? "white" : "gray.900"}
                                        bg={selectedFeature === 'Auto-Adapt' ? "gray.900" : "transparent"}
                                        fontWeight="bold"
                                        onClick={() => setSelectedFeature('Auto-Adapt')}
                                    >
                                        Auto-Adapt
                                    </Button>
                                </HStack>
                                <Box
                                    width="100%"
                                    maxWidth="1152px"
                                    height="720px"
                                    borderRadius="xl"
                                    borderWidth="1px"
                                    borderColor="gray.500"
                                    overflow="hidden"
                                    p="1.5"
                                >
                                    <Image
                                        src={featureImages[selectedFeature]}
                                        alt={`AI ${selectedFeature} feature`}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                        borderRadius="xl"
                                    />
                                </Box>
                            </VStack>
                        </Container>
                    </Box>

                    {/* DATA + Insights */}
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
                                            <DotLottiePlayer
                                                src="https://lottie.host/b964c8f0-dc96-425f-83cb-e62eee8e7e7e/wIQcbXxkr1.lottie"
                                                loop
                                                autoplay
                                            />
                                            <DotLottiePlayer src="https://lottie.host/6e08e0f2-8320-4c2b-978a-034174bbabbf/9dET2qVq0K.lottie"
                                                background="#F4F0EB"
                                                loop
                                                autoplay>
                                            </DotLottiePlayer>
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
                                Data that drives performance
                            </Text>
                            <Button colorScheme="whiteAlpha" size="lg">Book a Demo</Button>
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
