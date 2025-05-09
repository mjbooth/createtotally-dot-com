import { Box, Flex, Text, Container, VStack, Link } from '@chakra-ui/react';

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
        <Box width="100%" bgColor="brandNavy.900">
            <Container maxW="container.xl" mx="auto" p={{ base: 5, md: 12 }}>
                <VStack gap={5} alignItems="initial">
                    {<Flex
                        flexWrap="wrap"
                        direction={{ base: 'column', md: 'row' }}
                        alignItems="start"
                        justifyContent="space-between"
                    >
                        {footerData.map((data, index) => (
                            <Flex key={index} direction="column" pb="5">
                                <Text
                                    fontWeight={700}
                                    pb="1"
                                >
                                    {data.label}
                                </Text>
                                <Flex direction={{ base: 'row', md: 'column' }}>
                                    {data.links.map((link, index) => (
                                        <Link
                                            key={index}
                                            mt={1}
                                            mb={1}
                                            fontSize={{ base: 'sm', sm: 'md' }}
                                            href="#"
                                            mr={{ base: 1, sm: 2, md: 0 }}
                                            color="gray.500"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>}
                    <Flex alignItems="center">
                        <Text color="gray.500" fontSize="0.875rem">
                            &copy; CreateTOTALLY 2024. All rights reserved.
                        </Text>
                    </Flex>
                </VStack>
            </Container>
        </Box>
    );
};

export default Footer;