import IntegrationCategoryLayout from '@/src/components/layouts/IntegrationCategoryLayout';
console.log('🧭 Entering CategoryPage function...');

export const dynamic = 'force-dynamic';

import { getPostsByCategory } from '@/lib/hygraph';
import Link from 'next/link';
import { Box, Heading, Text, Container, Image, SimpleGrid, Stack, Flex, Icon } from '@chakra-ui/react';
import { MdArticle } from "react-icons/md";
type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  coverImage?: {
    url: string;
  };
};

// DefaultLayout wraps the current JSX content for all other categories
function DefaultLayout({ posts, category }: { posts: Post[]; category: string }) {
  return (
    <Box bg="brandNeutral.200" pt={{ base: "20", sm: "0", md: "40" }}>
      <Box bg="brandNeutral.200">
        <Container maxW="1152px" mb={{ base: "60px", sm: "80px", md: "16" }} px={{ base: 4, sm: 6, md: 8 }}>
          <Box display="flex" justifyContent="center" alignItems="center" pt={{ base: 4, sm: 5 }}>
            <Stack
              gap={{ base: 4, sm: 5, md: 6 }}
              mx="auto"
              textAlign="center"
              alignItems="center"
              pb={{ base: "20", sm: "0", md: "0" }}
              width="100%"
            >
              <Flex
                bg="brandPurple.600"
                px={{ base: 2, sm: 3 }}
                py={{ base: 1, sm: 2 }}
                borderRadius="lg"
                gap={{ base: 2, sm: 3 }}
                alignItems="center"
                flexWrap="wrap"
                justifyContent="center"
              >
                <Icon
                  boxSize={{ base: "18px", sm: "24px" }}
                  color="brandNeutral.500"
                >
                  <MdArticle />
                </Icon>

                <Text
                  fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="brandNeutral.500"
                  lineHeight="160%"
                >
                  The Edit
                </Text>
              </Flex>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "80px" }}
                fontWeight="900"
                lineHeight={{ base: 1.2, md: 1 }}
                color="brandNavy.500"
                textAlign="center"
                letterSpacing="tight"
                mb="0"
              >
                Explore what we&apos;re learning, building, and sharing.
              </Heading>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box
        bg="brandNeutral.500"
        position="relative"
        pb={{ base: "60px", md: "120px" }}
        backgroundImage="url('/bg-top-footer.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="top center"
        backgroundSize="100% auto"
      >
        <Container maxW={{ base: "100%", md: "1152px" }} mx="auto" px={{ base: 4, md: 0 }} zIndex="9999">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap="3">
            {posts.map((post) => (
              <Box
                key={post.id}
                borderRadius="1rem"
                bg="brandNeutral.200"
                p={10}
                boxShadow="realistic"
              >
                <Link href={`/${category}/${post.slug}`}>
                  {post.coverImage?.url && (
                    <Box as="figure" width="100%" position="relative" mb={4}>
                      <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        borderRadius="md"
                      />
                    </Box>
                  )}
                  <Heading
                    as="h2"
                    color="brandNavy.500"
                    fontSize="2xl"
                    fontWeight="bold"
                    textAlign="left"
                    lineHeight={1.2}
                    mb={4}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {post.title}
                  </Heading>
                </Link>
                {post.excerpt && (
                  <Text color="gray.600" fontSize="md" mb={4}>
                    {post.excerpt}
                  </Text>
                )}
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        bg="brandNeutral.200"
        pb={{ base: "60px", md: "360x" }}
        backgroundImage="url('/wave-F4F0EB.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="top center"
        backgroundSize="100% auto"
      >
        {/* <Container
            pt="7.5rem"
          >
            <Box
              px={4}
            >
              <Flex
                maxW="3xl"
                mx="auto"
                bg="brandNavy.500"
                borderRadius="xxl"
                boxShadow="realistic"
                textAlign="center"
                p="15"
                gap="15"
                direction="column"
                alignItems="center"
              >
                <Text
                  fontSize={{ base: "xl", md: "3xl", lg: "3rem" }}
                  fontWeight="bold"
                  color="brandNeutral.500"
                  lineHeight="100%"
                  letterSpacing="tight"
                >
                  Some form of a headline
                </Text>
                <Link href="/get-started">
                  <Button
                    py="6"
                    px="10"
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    variant="solid"
                    colorPalette="brandFuchsia"
                    rounded="full"
                  >
                    Click here
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Container> */}
      </Box>
    </Box>
  );
}

const categoryLayouts: Record<string, React.FC<{ posts: Post[]; category: string }>> = {
  integrations: IntegrationCategoryLayout,
};

export default async function CategoryPage(context: { params: Promise<{ category: string }> }) {
  const { category } = await context.params;
  console.log('✅ Successfully accessed params.category:', category);

  let posts = [];
  try {
    if (!category) throw new Error('Cannot fetch posts: category is empty');
    posts = await getPostsByCategory(category);
    if (!Array.isArray(posts)) throw new Error('getPostsByCategory did not return an array');
    console.log(`📄 Retrieved ${posts.length} posts for category "${category}"`);
  } catch (err) {
    console.error(`🔥 ERROR fetching posts for category "${category}":`, err);
    throw err;
  }

  console.log('🚦 Rendering CategoryPage for category:', category);
  const Layout = categoryLayouts[category] || DefaultLayout;
  return <Layout posts={posts} category={category} />;
}
