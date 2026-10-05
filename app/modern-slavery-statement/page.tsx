import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { Box, Container, Heading } from '@chakra-ui/react';
import { sanitizeHtml } from '@/src/utils/sanitize';
import { getStaticPageCanonicalUrl } from '@/src/utils/canonical';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Modern Slavery & Human Trafficking Statement | CreateTOTALLY',
  description: 'Read the CreateTOTALLY Modern Slavery & Human Trafficking Statement. Our commitment to preventing modern slavery and human trafficking.',
  alternates: {
    canonical: getStaticPageCanonicalUrl('modern-slavery-statement'),
  },
  openGraph: {
    title: 'Modern Slavery & Human Trafficking Statement | CreateTOTALLY',
    description: 'Our commitment to preventing modern slavery and human trafficking.',
    url: getStaticPageCanonicalUrl('modern-slavery-statement'),
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
    title: 'Modern Slavery & Human Trafficking Statement | CreateTOTALLY',
    description: 'Our commitment to preventing modern slavery and human trafficking.',
    images: ["/TwitterSummaryCard.jpg"],
  },
};

export default async function ModernSlaveryStatementPage() {
  const filePath = path.join(process.cwd(), 'public', 'modern-slavery-statement.md');
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const html = marked(markdown);

  return (
    <Box bg="brandNeutral.200" pt={{ base: "20", sm: "0", md: "40" }}>
      <Box bg="brandNeutral.200">
        <Container maxW="1152px" mb={{ base: "60px", sm: "80px", md: "16" }} px={{ base: 4, sm: 6, md: 8 }} display="flex" justifyContent="center" alignItems="center" pt={{ base: 4, sm: 5 }}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "56px" }}
            fontWeight="900"
            lineHeight={{ base: 1.2, md: 1 }}
            color="brandNavy.500"
            textAlign="center"
            letterSpacing="tight"
            mb="0"
            width="100%"
          >
            Modern Slavery & Human Trafficking Statement
          </Heading>
        </Container>
      </Box>
      <Container maxW="3xl" py="16">
        <Box
          className="prose"
          mx="auto"
          color="brandNavy.500"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(html as string) }}
        />
      </Container>
    </Box>
  );
}