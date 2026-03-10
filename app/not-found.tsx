import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | CreateTOTALLY',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <Box minH="60vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="ctContainer">
        <Stack gap="6" textAlign="center" alignItems="center">
          <Heading as="h1" fontSize={{ base: '4xl', md: '6xl' }} color="brandNavy.500">
            404
          </Heading>
          <Text fontSize="xl" color="gray.600">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </Text>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              backgroundColor: '#CA3FC0',
              color: '#FFFCFB',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Back to Home
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
