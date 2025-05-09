// /app/blog/page.tsx

import { getAllPages } from '@/lib/hygraph';
import { Box, Heading, SimpleGrid, Image, Link, Container, Text } from '@chakra-ui/react';
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';

export default async function PagesList() {
  const pages = await getAllPages();

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

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
            {pages.map((page) => (
              <Box
                key={page.id}
                borderWidth="0"
                borderRadius="md"
                bg="white"
                p={6}
              >
                <Link href={`/integrations/${page.slug}`}>
                  {page.coverImage?.url && (
                    <Box as="figure" width="100%" position="relative" mb={4}>
                      <Image
                        src={page.icon?.url}
                        alt={page.title}
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
                    {page.title}
                  </Heading>
                </Link>
                {page.subtitle && (
                  <Text color="gray.600" fontSize="md" mb={4}>
                    {page.subtitle}
                  </Text>
                )}
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}