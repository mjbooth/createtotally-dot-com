import { Box, Container, Heading, Image, Stack, Text, Flex, Icon } from "@chakra-ui/react";
import { Metadata } from 'next';
import { ImCross } from "react-icons/im";
import { getIntegrationBySlug } from '@/lib/hygraph/index';


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


type Post = {
  title: string;
  excerpt?: string;
  coverImage: {
    url: string;
  };
  content: {
    html: string;
  };
};

export default function IntegrationPage({ post, category }: { post: Post; category: string }) {
    console.log('🧭 IntegrationPage loaded with post:', post);
    console.log('🧭 IntegrationPage loaded with category:', category);
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
                                <Box width="36">
                                    <Image src={post.coverImage.url} objectFit="contain" alt={post.title} />
                                </Box>
                                <Icon size="2xl" color="brandNavy.500">
                                    <ImCross />
                                </Icon>
                                <Box width="36">
                                    <Image src="/CreateTOTALLY_Icon.svg" objectFit="contain" alt="CreateTOTALLY Logo" />
                                </Box>
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
                                {post.title}
                            </Heading>
                            <Text fontSize="xl" color="brandNavy.500" mb={6} maxW="3xl">{post.excerpt}</Text>
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
                        <Box maxW="3xl" mx="auto">
                            <Box
                                className="prose"
                                mx="auto"
                                color="brandNavy.500"
                                dangerouslySetInnerHTML={{ __html: post.content.html }}
                            />
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
            </Box>
        </Box>
    );
}