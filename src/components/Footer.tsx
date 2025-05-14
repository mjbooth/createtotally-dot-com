import { Box, Flex, Text, Container, Link, Image } from '@chakra-ui/react';

const footerData = [
    {
        label: 'Product',
        links: [
            { label: "Figma Automation", href: "/figma-creative-automation", icon: "SiFigma" },
            { label: "InDesign Automation", href: "#", icon: "SiAdobeindesign" },
            { label: "After Effects Automation", href: "#", icon: "SiAdobeaftereffects" },
            { label: "Photoshop Automation", href: "#", icon: "SiAdobephotoshop" },
            { label: "Illustrator Automation", href: "#", icon: "SiAdobeillustrator" },
            { label: "HTML Automation", href: "#", icon: "SiHtml5" },
            { label: "Template & Content Creation", href: "/template-content-creation", icon: "HiTemplate" },
            { label: "Creative Automation", href: "/creative-automation", icon: "PiRocketFill" },
            { label: "Workflow Automation", href: "/workflow-automation", icon: "TbArrowsShuffle" },
            { label: "Libraries & Asset Management", href: "/libraries-asset-management", icon: "MdStorage" },
            { label: "Performance & Insights", href: "/performance-insights", icon: "BsBarChartFill" },
            { label: "Secure by Design", href: "#", icon: "RiShieldFlashFill" },
            { label: "All Features", href: "/all-features", icon: "FaPlus" }
        ]
    },
    {
        label: 'Use cases',
        href: '#',
        links: [
            { label: "Brand Marketing", href: "#" },
            { label: "In-house Studio Team", href: "#" },
            { label: "Creative", href: "#" },
            { label: "Production", href: "#" },
            { label: "Media & Performance", href: "#" },
            { label: "Retail", href: "#" },
            { label: "FMCG", href: "#" },
            { label: "Consumer Electronics", href: "#" },
            { label: "Professional Services", href: "#" },
            { label: "Travel & Hospitality", href: "#" }
        ]
    },
    {
        label: 'Integrations',
        href: '#',
        links: [
            { label: "Adobe Workfront", href: "/integrations/adobe-workfront" },
            { label: "Monday.com", href: "/integrations/monday-com" },
            { label: "Box.com", href: "#" },
            { label: "Google Drive", href: "/integrations/google-drive" }
        ]
    }
];

const Footer = () => {
    return (
        <Box bgColor="brandNeutral.200">
            <Container maxW="FullWidth" px={{ base: 4, md: 0 }} py="28">
                <Flex 
                    direction={{ base: 'column', md: 'row' }} 
                    justifyContent={{ base: 'center', md: 'space-between' }} 
                    alignItems={{ base: 'center', md: 'flex-start' }}
                >
                    {/* Logo column */}
                    <Box 
                        flex={{ base: '1 1 100%', md: '0 0 auto' }} 
                        mb={{ base: 8, md: 0 }}
                        textAlign={{ base: 'center', md: 'left' }}
                    >
                        <Image 
                            src="/CreateTOTALLY_FBIcon.png" 
                            alt="CreateTOTALLY Logo" 
                            width="150px" 
                            height="auto" 
                            display="inline-block"
                        />
                    </Box>

                    {/* Footer data columns */}
                    <Flex 
                        flexWrap="wrap"
                        direction={{ base: 'column', md: 'row' }}
                        alignItems={{ base: 'center', md: 'flex-start' }}
                        justifyContent={{ base: 'center', md: 'flex-end' }}
                        flex="1"
                        gap="10"
                        textAlign={{ base: 'center', md: 'left' }}
                    >
                        {footerData.map((data, index) => (
                            <Flex 
                                key={index} 
                                direction="column" 
                                pb="5" 
                                flex={{ base: '1 1 100%', md: '0 0 auto' }} 
                                ml={{ md: 8 }}
                                alignItems={{ base: 'center', md: 'flex-start' }}
                            >
                                <Text
                                    fontWeight={700}
                                    pb="1"
                                    color="#09090B"
                                >
                                    {data.label}
                                </Text>
                                <Flex 
                                    direction="column"
                                    alignItems={{ base: 'center', md: 'flex-start' }}
                                >
                                    {data.links.map((link, index) => (
                                        <Link
                                            key={index}
                                            mt={1}
                                            mb={1}
                                            fontSize={{ base: 'sm', sm: 'md' }}
                                            href={link.href}
                                            mr={{ base: 0, md: 2 }}
                                            color="gray.500"
                                            textAlign={{ base: 'center', md: 'left' }}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
                <Flex 
                    py="10" 
                    px="3" 
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent={{ base: 'center', md: 'space-between' }}
                    alignItems={{ base: 'center', md: 'flex-end' }}
                    flexWrap="wrap" 
                    gap="9"
                >
                    <Flex 
                        flex="1" 
                        direction={{ base: 'column', md: 'row' }}
                        alignItems={{ base: 'center', md: 'flex-start' }}
                        justifyContent={{ base: 'center', md: 'space-between' }}
                        textAlign={{ base: 'center', md: 'left' }}
                        width="100%"
                    >
                        <Text color="gray.500" mb={{ base: '4', md: '0' }}>
                            &copy; 2025 CreateTOTALLY. All rights reserved.
                        </Text>
                        <Flex 
                            gap={{ base: '2', md: '4' }} 
                            flexWrap="wrap" 
                            justifyContent={{ base: 'center', md: 'flex-start' }}
                            direction={{ base: 'column', md: 'row' }}
                            alignItems="center"
                        >
                            <Link color="gray.500" href="#">Terms of Service</Link>
                            <Link color="gray.500" href="#">Privacy Policy</Link>
                            <Link color="gray.500" href="#">Consent Preferences</Link>
                        </Flex>
                    </Flex>
                    <Box mt={{ base: '6', md: '0' }}>
                        <Image src="/SOC-2-Type-II.png" alt="SOC 2 Type II" height="60px" />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;