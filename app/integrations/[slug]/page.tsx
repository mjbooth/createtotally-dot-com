import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';
import { getPageBySlug, getAllPages } from '@/lib/hygraph';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    return {
      title: 'Integration Not Found',
    };
  }

  return {
    title: `${page.title} + CreateTOTALLY`,
    description: page.subtitle || `Integration details for ${page.title}`,
  };
}

export default async function IntegrationPage({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <Box>
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Integrations"
          title={`${page.title} + CreateTOTALLY`}
          subtitle={page.subtitle || ''}
          features={[]}
        />
        
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
          {page.subtitle && (
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
          )}
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
          <Box
            className="prose"
            mx="auto"
            dangerouslySetInnerHTML={{ __html: page.content.html }}
          />
        </Container>
      </Box>
    </Box>
  );
}