// /app/blog/page.tsx

import { getAllPages } from '@/lib/hygraph';
import { Box, Heading, Stack, Container, } from '@chakra-ui/react';
import { FeatureHeroSection } from '@/src/components/FeatureHeroSection';

export default async function PagesList() {
  const pages = await getAllPages();

  return (
    <Box>
      <Box bg="brandNeutral.500">
        <FeatureHeroSection
          featureGroup="Integrations"
          title="Blog for the creative automation world"
          subtitle=""
          features={[]}
        />

        <Container maxW="container.xl" mx="auto" pt={32} pb={20}>
          <Stack gap={6}>
            {pages.map((page) => (
              <Heading
                key={page.id}
                as="h2"
                color="brandNavy.500"
                fontSize="2xl"
                fontWeight="bold"
              >
                {page.title}
              </Heading>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}