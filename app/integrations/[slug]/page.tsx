import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/hygraph';
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }


  return {
    title: page.title,
    description: page.subtitle || 'Read the latest content.',
    openGraph: {
      title: page.title,
      description: page.subtitle || '',
      images: page.coverImage?.url ? [{ url: page.coverImage.url }] : [],
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <Box as="main" py={8} bg="gray.50">
      <Container maxW="4xl" mx="auto" py={16} color="brandNavy.500">
        {page.icon?.url && (
          <Box as="figure" mb={6} overflow="hidden" borderRadius="md">
            <Image
              src={page.icon.url}
              alt={page.title}
              w={['8%']}
              h="auto"
              objectFit="cover"
              mx="auto"
            />
          </Box>
        )}
        <Heading
          as="h1"
          size="5xl"
          fontWeight="extrabold"
          textAlign="center"
          lineHeight="1.1"
          mb={3}
          color="brandNavy.500"
        >
          {page.title} + CreateTOTALLY
        </Heading>
        <Text
          fontSize="md"
          color="brandNavy.500"
          mb={12}
          textAlign="center"
          maxW="3xl"
          mx="auto"
        >
          {page.subtitle}
        </Text>
        <Box>
          {page.coverImage?.url && (
            <Box as="figure" mb={16} overflow="hidden" borderRadius="md">
              <Image
                src={page.coverImage.url}
                alt={page.title}
                width="100%"
                height="auto"
                objectFit="cover"
              />
            </Box>
          )}
        </Box>
        <Box
          className="prose"
          mx="auto"
          dangerouslySetInnerHTML={{ __html: page.content.html }}
        />
      </Container>
    </Box>
  );
}