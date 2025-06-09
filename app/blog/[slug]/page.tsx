import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/hygraph';
import { Box, Container, Heading, Image, Stack, Flex, Text, Button, Link } from "@chakra-ui/react";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt || 'Read the latest article.',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      images: post.coverImage?.url ? [{ url: post.coverImage.url }] : [],
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
                {post.title}
              </Heading>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box bg="brandNeutral.500" pb="4">
        <Box
          bg="brandNeutral.500"
          position="relative"
          pt={{ base: "0", md: "7.5rem" }}
          backgroundImage="url('/wave-FFFCFB-F4F0EB.svg')"
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
          <Container maxW="1152px" >
            <Box display="flex" justifyContent="center" alignItems="center" pt={{ base: 4, sm: 5 }}>
              <Stack
                gap={{ base: 4, sm: 5, md: 6 }}
                mx="auto"
                textAlign="center"
                alignItems="center"
                pb={{ base: "20", sm: "0", md: "0" }}
                width="100%"
              >
                {post.coverImage?.url && (
                  <Box as="figure" mb={16} overflow="hidden" borderRadius="md">
                    <Image
                      src={post.coverImage.url}
                      alt={post.title}
                      width="100%"
                      height="auto"
                      objectFit="cover"
                    />
                  </Box>
                )}
              </Stack>
            </Box>
          </Container>
        </Box>
        <Container maxW={{ base: "100%", md: "1152px" }} mx="auto" px={{ base: 4, md: 10 }} zIndex="9999">
          <Box
            maxW="3xl"
            mx="auto"
          >
            <Box
              className="prose"
              mx="auto"
              color="brandNavy.500"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
          </Box>
        </Container>
      </Box>
      <Box
        bg="brandNeutral.200"
        pb={{ base: "60px", md: "120px" }}
        backgroundImage="url('/wave-F4F0EB.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="top center"
        backgroundSize="100% auto"

      >
        <Container pt="16">
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
                Some form of a CTA
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
        </Container>
      </Box>
    </Box>


  );
}