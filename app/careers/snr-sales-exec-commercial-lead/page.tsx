import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { Box, Container, Flex, Heading, Text, VStack, Link } from '@chakra-ui/react';
import { sanitizeHtml } from '@/src/utils/sanitize';
import { getStaticPageCanonicalUrl } from '@/src/utils/canonical';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Senior Sales Executive / Commercial Lead | CreateTOTALLY',
  description:
    'Join CreateTOTALLY as our first Senior Sales Executive / Commercial Lead. London-based hybrid role with uncapped commission. Build the revenue engine for a next-gen marketing automation platform.',
  alternates: {
    canonical: getStaticPageCanonicalUrl('careers/commercial-lead'),
  },
  openGraph: {
    title: 'Senior Sales Executive / Commercial Lead | CreateTOTALLY',
    description:
      'Join CreateTOTALLY as our first Senior Sales Executive / Commercial Lead. London-based hybrid role with uncapped commission.',
    url: getStaticPageCanonicalUrl('careers/commercial-lead'),
    siteName: 'CreateTOTALLY',
    type: 'website',
    images: [
      {
        url: '/OpenGraph.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Sales Executive / Commercial Lead | CreateTOTALLY',
    description:
      'Join CreateTOTALLY as our first Senior Sales Executive / Commercial Lead. London-based hybrid role with uncapped commission.',
    images: ['/TwitterSummaryCard.jpg'],
  },
};

const APPLY_HREF = '#apply';

const sidebar_details = [
  { label: 'Base salary', value: '\u00A360,000 \u2013 \u00A370,000' },
  { label: 'Commission', value: 'Uncapped, paid monthly or quarterly' },
  { label: 'Equity', value: 'Available' },
  { label: 'Location', value: 'London (Hybrid) \u2014 Soho' },
  { label: 'Type', value: 'Full-time, Individual Contributor' },
  { label: 'Reports to', value: 'CEO' },
];

const applyLinkStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'brandNavy.500',
  color: 'white',
  px: 6,
  py: 3,
  borderRadius: 'lg',
  fontWeight: '700',
  fontSize: 'md',
  textDecoration: 'none',
  _hover: { bg: 'brandNavy.300', textDecoration: 'none' },
  _focusVisible: { outline: '2px solid', outlineColor: 'brandNavy.300', outlineOffset: '2px' },
  transition: 'background 0.2s',
} as const;

export default async function CommercialLeadPage() {
  const filePath = path.join(process.cwd(), 'public', 'careers', 'commercial-lead.md');
  const rawMarkdown = fs.readFileSync(filePath, 'utf-8');

  // Strip the metadata block (Location/Salary/etc between first two ---) since the sidebar shows these
  // Also strip the H1 title since we render it separately for mobile ordering
  const markdown = rawMarkdown
    .replace(/\n---\n+\*\*Location:\*\*[\s\S]*?\n---\n/, '\n')
    .replace(/^# .+\n/, '');
  let html = marked(markdown) as string;

  // Add anchor target to the closing "To apply" paragraph
  html = html.replace('<em>To apply,', '<em id="apply">To apply,');

  return (
    <Box bg="brandNeutral.200" pt={{ base: '20', md: '40' }}>
      <Container maxW="1152px" px={{ base: 4, sm: 6, md: 8 }} py={{ base: 6, md: 12 }}>
        {/* Headline */}
        <Heading
          as="h1"
          color="brandNavy.500"
          fontSize={{ base: '4xl', sm: '5xl', md: '5xl', lg: '6xl' }}
          fontWeight="800"
          lineHeight={1.1}
          letterSpacing="tight"
          mb={{ base: 6, lg: 8 }}
        >
          Senior Sales Executive / Commercial Lead
        </Heading>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 0, lg: 16 }}
          align="start"
        >
          {/* Main content */}
          <Box flex={1} minW={0} order={{ base: 3, lg: 1 }}>
            <Box
              className="prose"
              color="brandNavy.500"
              css={{
                '& table': { display: 'block', overflowX: 'auto' },
                '& h2': { marginTop: 0 },
              }}
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(html as string) }}
            />
          </Box>

          {/* Sidebar */}
          <Box
            as="aside"
            aria-label="Job details and application"
            w={{ base: '100%', lg: '320px' }}
            flexShrink={0}
            position={{ base: 'relative', lg: 'sticky' }}
            top={{ lg: '120px' }}
            alignSelf="start"
            order={{ base: 1, lg: 2 }}
            mb={{ base: 8, lg: 0 }}
          >
            <VStack gap={6} align="stretch">
              {/* Details card — on mobile: order 2 (after headline). On desktop: above apply button */}
              <Box
                bg="white"
                borderRadius="xl"
                p={6}
                borderWidth="1px"
                borderColor="brandNeutral.600"
              >
                <VStack gap={4} align="stretch">
                  {sidebar_details.map((item) => (
                    <Box key={item.label}>
                      <Text
                        fontSize="xs"
                        fontWeight="600"
                        color="brandNavy.500"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        mb={1}
                        opacity={0.6}
                      >
                        {item.label}
                      </Text>
                      <Text fontSize="sm" color="brandNavy.500" fontWeight="500">
                        {item.value}
                      </Text>
                    </Box>
                  ))}
                </VStack>
              </Box>

              {/* Apply CTA — on mobile: order 3 (after details card) */}
              <Link href={APPLY_HREF} {...applyLinkStyles}>
                Apply now
              </Link>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
