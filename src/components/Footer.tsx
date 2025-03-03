import { Flex, Text, Container, VStack } from '@chakra-ui/react';

// const footerData = [
//     {
//         label: 'New to CreateTOTALLY',
//         links: [
//             { label: 'Product overview', href: '#' },
//             { label: 'All features', href: '#' },
//             { label: 'Latest feature release', href: '#' },
//             { label: 'Pricing', href: '#' },
//             { label: 'Starter plan', href: '#' },
//             { label: 'Advanced plan', href: '#' },
//             { label: 'Enterprise', href: '#' },
//             { label: 'App integrations', href: '#' },
//             { label: 'AI work management', href: '#' },
//             { label: 'Project management', href: '#' },
//             { label: 'Resource management', href: '#' },
//             { label: 'Photography', href: '#' }
//         ]
//     },
//     {
//         label: 'Use cases',
//         href: '#',
//         links: [
//             { label: 'Campaign management', href: '#'},
//             { label: 'Content calendar', href: '#'},
//             { label: 'Creative production', href: '#'},
//             { label: 'Goal management', href: '#'},
//             { label: 'New hire onboarding', href: '#'},
//             { label: 'Organizational planning', href: '#'},
//             { label: 'Product launches', href: '#'},
//             { label: 'Resource planning', href: '#'},
//             { label: 'Strategic planning', href: '#'},
//             { label: 'Project intake', href: '#'},
//             { label: 'All use cases', href: '#'},
//         ]
//     },
//     {
//         label: 'Solutions',
//         href: '#',
//         links: [
//             { label: 'Marketing', href: '#' },
//             { label: 'Operations', href: '#' },
//             { label: 'IT', href: '#' },
//             { label: 'Product', href: '#' },
//             { label: 'Sales', href: '#' },
//             { label: 'Healthcare', href: '#' },
//             { label: 'Retail', href: '#' },
//             { label: 'Education', href: '#' },
//             { label: 'Nonprofit', href: '#' },
//             { label: 'All teams', href: '#' }
//         ]
//     },
//     {
//         label: 'Resourcse',
//         href: '#',
//         links: [
//             { label: 'Help Center', href: '#' },
//             { label: 'Get support', href: '#' },
//             { label: 'CreateTOTALLY Academy', href: '#' },
//             { label: 'Certifications', href: '#' },
//             { label: 'Forum', href: '#' },
//             { label: 'Resource hub', href: '#' },
//             { label: 'Project templates', href: '#' },
//             { label: 'Events', href: '#' },
//             { label: 'Customer Success', href: '#' },
//             { label: 'Developers and API', href: '#' },
//             { label: 'Partners', href: '#' },
//             { label: 'Sitemap', href: '#' }
//         ]
//     }
// ];

const Footer = () => {
    return (
        <Container maxW="container.xl" mx="auto" p={{ base: 5, md: 10 }}>
            <VStack gap={5} alignItems="initial">
                {/* <Flex
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
                </Flex> */}
                <Flex alignItems="center">
                    <Text color="gray.500" fontSize="0.875rem">
                        &copy; CreateTOTALLY 2024. All rights reserved.
                    </Text>
                </Flex>
            </VStack>
        </Container>
    );
};

export default Footer;