'use client';

import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box minH="60vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="ctContainer">
        <Stack gap="6" textAlign="center" alignItems="center">
          <Heading as="h1" fontSize={{ base: '4xl', md: '6xl' }} color="brandNavy.500">
            Something went wrong
          </Heading>
          <Text fontSize="xl" color="gray.600">
            An unexpected error occurred. Please try again.
          </Text>
          <button
            onClick={() => reset()}
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              backgroundColor: '#CA3FC0',
              color: '#FFFCFB',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
            }}
          >
            Try again
          </button>
        </Stack>
      </Container>
    </Box>
  );
}
