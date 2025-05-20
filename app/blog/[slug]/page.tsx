import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/hygraph';
import { Box, Container, Heading, Image } from "@chakra-ui/react";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
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

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Box as="main" py={8} pt="40">
      <Container maxW="4xl" mx="auto" py={16} color="brandNavy.500">
        <Heading
          as="h1"
          size="4xl"
          fontWeight="extrabold"
          textAlign="center"
          lineHeight="1.1"
          mb={12}
        >
          {post.title}
        </Heading>
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
        <Box
          className="prose"
          mx="auto"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </Container>
    </Box>
  );
}