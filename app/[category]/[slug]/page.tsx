import { notFound } from 'next/navigation';
import { getPostByCategoryAndSlug } from '@/lib/hygraph';
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import IntegrationLayout from '@/src/components/layouts/IntegrationLayout';


export default async function BlogPage(context: { params: Promise<{ slug: string; category: string }> }) {
  const resolvedParams = await context.params;
  const { slug, category } = resolvedParams;

  let post;
  try {
    post = await getPostByCategoryAndSlug(category, slug);
    if (!post) {
      notFound();
    }
  } catch (err) {
    throw err;
  }

  if (category === 'integrations') {
    return <IntegrationLayout post={post} />;
  }

  return (
    <Box bg="brandNeutral.200" pt={{ base: "20", sm: "0", md: "40" }}>
      <Box bg="brandNeutral.200">
        <Container maxW="1152px" mb={{ base: "60px", sm: "80px", md: "16" }} px={{ base: 4, sm: 6, md: 8 }} display="flex" justifyContent="center" alignItems="center" pt={{ base: 4, sm: 5 }}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "80px" }}
            fontWeight="900"
            lineHeight={{ base: 1.2, md: 1 }}
            color="brandNavy.500"
            textAlign="center"
            letterSpacing="tight"
            mb="0"
            width="100%"
          >
            {post.title}
          </Heading>
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
          <Container maxW="1152px" display="flex" justifyContent="center" alignItems="center" pt={{ base: 4, sm: 5 }}>
            {post.coverImage?.url && (
              <Box as="figure" mb={16} overflow="hidden" borderRadius="md">
                <Image
                  src={post.coverImage.url}
                  alt={post.title}
                  width={1152}
                  height={600}
                  objectFit="cover"
                />
              </Box>
            )}
          </Container>
        </Box>
        <Container maxW="3xl" mx="auto" px={{ base: 4, md: 10 }} zIndex="9999">
          {post.content?.html ? (
            <Box
              className="prose"
              mx="auto"
              color="brandNavy.500"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
          ) : (
            <Text
              mx="auto"
              color="brandNavy.500"
              fontSize={{ base: "md", md: "lg" }}
              textAlign="center"
              py={10}
            >
              Content coming soon
            </Text>
          )}
        </Container>
      </Box>
    </Box>
  );
}