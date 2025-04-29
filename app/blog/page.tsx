// /app/blog/page.tsx

import { getAllPosts } from '@/lib/hygraph';
import Link from 'next/link';
import { Box, Heading, Stack, Text, Container, Image } from '@chakra-ui/react';
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Box>
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Resources"
          title="Blog for the creative automation world"
          subtitle=""
          features={[]}
        />
        
        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>

          <Stack
            gap={10}
            direction="row"
            flexWrap="wrap"
            justify="space-between"
          >
            {posts.map((post) => (
              <Box
                key={post.id}
                borderWidth="0"
                borderRadius="md"
                bg="white"
                p={6}
                width={{ base: '100%', md: '48%', lg: '30%' }}
              >
                <Link href={`/blog/${post.slug}`}>
                {post.coverImage?.url && (
                    <Box as="figure" width="100%" position="relative" mb={4}>
                      <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        width="100%"
                        height="200px"
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
                <Text color="gray.400" fontSize="sm">
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </Text>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}