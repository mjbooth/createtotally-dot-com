import { Box, Container, Flex, Stack, Image, Link } from '@chakra-ui/react';
export default function MainMenu() {

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={1000} width="100%" bg="white" boxShadow="0px 1px 1px rgba(0, 0, 0, 0.15), 0px 0px 0px inset rgba(161, 161, 170, .75)">
      <Container maxW="container.xl" mx="auto">
        <Flex justify="space-between" align="center" height="54px">
          <Stack direction="row" gap={6}>
            <Link href="https://www.createtotally.com/">
              <Image src="CreateTOTALLY_horizontal.png" alt="Logo" maxHeight="38px" />
            </Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
