import { Box, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box minH="60vh" display="flex" alignItems="center" justifyContent="center">
      <Spinner size="xl" color="brandFuchsia.500" />
    </Box>
  );
}
