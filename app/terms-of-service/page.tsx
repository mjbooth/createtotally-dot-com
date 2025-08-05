import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { Box, Container, Heading } from '@chakra-ui/react';
import { getStaticPageCanonicalUrl } from '@/src/utils/canonical';

export const metadata = {
  title: 'Terms of Service | CreateTOTALLY',
  description: 'Read the CreateTOTALLY Terms of Service. Understand your rights, responsibilities, and our legal guidelines.',
  alternates: {
    canonical: getStaticPageCanonicalUrl('terms-of-service'),
  },
  openGraph: {
    title: 'Terms of Service | CreateTOTALLY',
    description: 'Understand your rights, responsibilities, and our legal guidelines.',
    url: getStaticPageCanonicalUrl('terms-of-service'),
    siteName: 'CreateTOTALLY',
    type: 'website',
    images: [
      {
        url: "/OpenGraph.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | CreateTOTALLY',
    description: 'Understand your rights, responsibilities, and our legal guidelines.',
    images: ["/TwitterSummaryCard.jpg"],
  },
};

export const dynamic = 'force-static';

export default async function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), 'public', 'terms-of-service.md');
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const html = marked(markdown);

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
            Terms of service
          </Heading>
        </Container>
      </Box>
      <Container maxW="3xl" py="16">
        <Box
          className="prose"
          mx="auto"
          color="brandNavy.500"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Box>
  );
}