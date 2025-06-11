import { notFound } from 'next/navigation';
import { getIntegrationBySlug } from '@/lib/hygraph';
import { Box, Container, Heading, Image, Stack, Text, Flex, Icon, Link, List } from "@chakra-ui/react";
import { Metadata } from 'next';
import { ImCross } from "react-icons/im";

interface TextNode {
    text?: string;
    bold?: boolean;
    type?: string;
    href?: string;
    openInNewTab?: boolean;
    children?: TextNode[];
}

interface ContentNode {
    type: string;
    children: TextNode[];
}

interface HygraphContent {
    raw?: {
        children?: ContentNode[];
    };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug;
    const integration = await getIntegrationBySlug(slug);

    if (!integration) {
        return {
            title: 'Integration Not Found',
            description: 'The requested integration could not be found.',
        };
    }

    const { seoOverride } = integration;

    return {
        title: seoOverride?.title || integration.title,
        description: seoOverride?.description || integration.subtitle,
        openGraph: {
            title: seoOverride?.title || integration.title,
            description: seoOverride?.description || integration.subtitle,
            images: seoOverride?.image?.url ? [{ url: seoOverride.image.url }] :
                integration.coverImage?.url ? [{ url: integration.coverImage.url }] : [],
        },
    };
}

function renderHygraphContent(content: HygraphContent) {

    if (!content || !content.raw || !content.raw.children) {
        return null;
    }


    return content.raw.children.map((node: ContentNode, index: number) => {
        switch (node.type) {
            case 'heading-one':
                return <Heading as="h1" size="2xl" mt={8} mb={4} key={index}>{node.children[0].text}</Heading>;
            case 'heading-two':
                return <Heading
                    as="h2"
                    color="brandNavy.500"
                    fontSize="4xl"
                    fontWeight="bold"
                    lineHeight="1.2"
                    mb="8"
                    mt="16"
                    key={index}>{node.children[0].text}
                </Heading>;
            case 'paragraph':
                return (
                    <Text mb={4} key={index}>
                        {node.children.map((child, childIndex) => renderTextWithFormatting(child, childIndex))}
                    </Text>
                );
            case 'bulleted-list':
                return (
                    <List.Root key={index}>
                        {node.children?.map((listItem, listItemIndex) => (
                            <List.Item key={listItemIndex}>
                                {listItem.children?.map((listItemChild, childIndex) => 
                                    listItemChild.type === 'list-item-child' 
                                        ? listItemChild.children?.map((child, grandChildIndex) => 
                                            renderTextWithFormatting(child, grandChildIndex)
                                          )
                                        : renderTextWithFormatting(listItemChild, childIndex)
                                )}
                            </List.Item>
                        ))}
                    </List.Root>
                );
            default:
                return null;
        }
    });
}


function renderTextWithFormatting(child: { text?: string; bold?: boolean; type?: string; href?: string; openInNewTab?: boolean; children?: Array<{ text?: string; bold?: boolean }> }, index: number) {
    if (child.type === 'link') {
        return (
            <Link
                href={child.href || '#'}
                key={index}
                target={child.openInNewTab ? "_blank" : undefined}
                rel={child.openInNewTab ? "noopener noreferrer" : undefined}
                color="blue.500"
                textDecoration="underline"
            >
                {child.children?.map((linkChild, linkChildIndex) => 
                    linkChild.bold ? <strong key={linkChildIndex}>{linkChild.text}</strong> : linkChild.text
                )}
            </Link>
        );
    }
    if (child.bold) {
        return <strong key={index}>{child.text}</strong>;
    }
    return child.text || '';
}

export default async function IntegrationPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const integration = await getIntegrationBySlug(slug);

    if (!integration) {
        notFound();
    }

    return (
        <Box bg="brandNeutral.200" pt={{ base: "20", sm: "0", md: "40" }}>
            <Box bg="brandNeutral.200">
                <Container maxW={{ base: "100%", md: "1152px" }} mx="auto" px={{ base: 4, md: 10 }} zIndex="9999">
                    <Box display="flex" justifyContent="center" alignItems="center" pt={{ base: 4, sm: 5 }}>
                        <Stack
                            gap={{ base: 4, sm: 5, md: 6 }}
                            mx="auto"
                            textAlign="center"
                            alignItems="center"
                            pb={{ base: "20", sm: "0", md: "0" }}
                            width="100%"
                        >
                            <Flex gap="16" justifyContent="center" alignItems="center" width="100%" my="4" align="center">
                                {integration.icon?.url && (
                                    <Box width="36">
                                        <Image src={integration.icon.url} objectFit="contain" alt={integration.title} />
                                    </Box>
                                )}
                                {integration.icon?.url && (
                                    <Icon size="2xl" color="brandNavy.500">
                                        <ImCross />
                                    </Icon>
                                )}
                                {integration.icon?.url && (
                                    <Box width="36">
                                        <Image src="/CreateTOTALLY_Icon.svg" objectFit="contain" alt="CreateTOTALLY Logo" />
                                    </Box>
                                )}
                            </Flex >
                            <Heading
                                as="h1"
                                fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "7xl" }}
                                fontWeight="900"
                                lineHeight={{ base: 1.2, md: 1 }}
                                color="brandNavy.500"
                                textAlign="center"
                                letterSpacing="tight"
                                mb="0"
                            >
                                {integration.title}
                            </Heading>
                            {integration.subtitle && (
                                <Text fontSize="xl" color="brandNavy.500" mb={6} maxW="3xl">{integration.subtitle}</Text>
                            )}
                        </Stack>
                    </Box>
                </Container>
            </Box>

            <Box pb="4" bg="brandNeutral.500">
                <Box
                    position="relative"
                    pt={{ base: "0", md: "7.5rem" }}
                    backgroundImage="url('/wave-FFFCFB.svg')"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center top"
                    backgroundSize="100% auto"
                    css={{
                        transform: 'scaleX(-1)',
                        '& > *': {
                            transform: 'scaleX(-1)'
                        }
                    }}
                >
                    <Container maxW={{ base: "100%", md: "1152px" }} mx="auto" px={{ base: 4, md: 10 }} zIndex="9999">
                        <Box maxW="3xl" mx="auto" >
                            <Box
                                className="prose"
                                mx="auto"
                                color="brandNavy.500"
                            >
                                {integration.content && integration.content.raw ? (
                                    renderHygraphContent(integration.content as HygraphContent)
                                ) : (
                                    <Text>No content available</Text>
                                )}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Box
                bg="brandNeutral.200"
                pb={{ base: "60px", md: "360px" }}
                backgroundImage="url('/wave-F4F0EB.svg')"
                backgroundRepeat="no-repeat"
                backgroundPosition="top center"
                backgroundSize="100% auto"
            >
                {/* You can add a CTA here if needed, similar to the blog post page */}
            </Box>
        </Box>
    );
}