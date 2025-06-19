import Link from 'next/link';
import { Box, Heading, Text, Container, Image, SimpleGrid, Stack, Flex, Icon } from '@chakra-ui/react';
import type { Post } from '@/src/types/hygraph';

export default function IntegrationCategoryLayout({
  posts,
  category,
}: {
  posts: Post[];
  category: string;
}) {
  return (
    <Box bg="brandNeutral.200" pt={{ base: "20", sm: "0", md: "40" }}>
      <Box bg="brandNeutral.200">
        <Container maxW="1152px" mb={{ base: "60px", sm: "80px", md: "16" }} px={{ base: 4, sm: 6, md: 8 }}>
          <Box display="flex" justifyContent="center" alignItems="center" pt={{ base: 4, sm: 5 }}>
            <Stack
              gap={{ base: 4, sm: 5, md: 6 }}
              mx="auto"
              textAlign="center"
              alignItems="center"
              pb={{ base: "20", sm: "0", md: "0" }}
              width="100%"
            >
              <Flex
                bg="brandPurple.600"
                px={{ base: 2, sm: 3 }}
                py={{ base: 1, sm: 2 }}
                borderRadius="lg"
                gap={{ base: 2, sm: 3 }}
                alignItems="center"
                flexWrap="wrap"
                justifyContent="center"
              >
                <Icon
                  boxSize={{ base: "18px", sm: "24px" }}
                  fill="brandNeutral.500"
                >
                  <svg viewBox="0 0 93.8 93.8">
                    <path d="M92.9,5.3l-10.3,10.3,1.9,1.8c4.7,4.7,4.7,12.3,0,16.9l-10.2,10.2,1.9,1.9c1.2,1.2,1.2,3.2,0,4.4-1.2,1.2-3.2,1.2-4.4,0l-4.2-4.2-20.6-20.6-4.2-4.2c-.6-.6-.9-1.4-.9-2.2s.3-1.6.9-2.2c1.2-1.2,3.2-1.2,4.4,0l1.9,1.9,10.2-10.2h0c4.7-4.7,12.2-4.7,16.9,0l1.8,1.9L88.4.9c1.2-1.2,3.2-1.2,4.4,0,1.2,1.2,1.2,3.2,0,4.4h0ZM50.8,50.8l-10.4,10.4-7.8-7.8,10.4-10.4h0c1.2-1.2,1.2-3.2,0-4.4s-3.2-1.2-4.4,0l-10.4,10.4-2-1.9-4.2-4.2c-.6-.6-1.4-.9-2.2-.9s-1.6.3-2.2.9c-1.2,1.2-1.2,3.2,0,4.4l1.9,1.9-10.2,10.2c-4.7,4.7-4.7,12.2,0,16.9l1.9,1.8L.9,88.4c-1.2,1.2-1.2,3.2,0,4.4,1.2,1.2,3.2,1.2,4.4,0l10.3-10.3,1.8,1.9c4.7,4.7,12.3,4.7,16.9,0l10.2-10.2,1.9,1.9c.6.6,1.4.9,2.2.9.8,0,1.6-.3,2.2-.9.6-.6.9-1.4.9-2.2s-.3-1.6-.9-2.2l-4.2-4.2-1.9-2,10.4-10.4h0c1.2-1.2,1.2-3.2,0-4.4-1.2-1.2-3.2-1.2-4.4,0h0Z" />
                  </svg>
                </Icon>

                <Text
                  fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="brandNeutral.500"
                  lineHeight="160%"
                >
                  Integrations
                </Text>
              </Flex>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "80px" }}
                fontWeight="900"
                lineHeight={{ base: 1.2, md: 1 }}
                color="brandNavy.500"
                textAlign="center"
                letterSpacing="tight"
                mb="0"
              >
                Connect your creative stack with powerful integrations
              </Heading>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box
        bg="brandNeutral.500"
        position="relative"
        pb={{ base: "60px", md: "120px" }}
        backgroundImage="url('/bg-top-footer.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="top center"
        backgroundSize="100% auto"
      >
        <Container maxW={{ base: "100%", md: "1152px" }} mx="auto" px={{ base: 4, md: 0 }} zIndex="9999">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="3">
            {posts.map((post) => (
              <Box
                key={post.id}
                borderRadius="1rem"
                bg="brandNeutral.200"
                p={10}
                boxShadow="realistic"
              >
                <Link href={`/${category}/${post.slug}`}>
                  {post.coverImage?.url && (
                    <Box as="figure" width="100%" position="relative" mb={4} boxSize={{ base: "100%", md: "12" }}>
                      <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        width="100%"
                        height="100%"
                        objectFit="fit"
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
                    {post.integrationThirdParty}
                  </Heading>
                </Link>
                {post.title && (
                  <Text color="gray.600" fontSize="md" mb={4}>
                    {post.title}.
                  </Text>
                )}
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        bg="brandNeutral.200"
        pb={{ base: "60px", md: "360x" }}
        backgroundImage="url('/wave-F4F0EB.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="top center"
        backgroundSize="100% auto"
      >
      </Box>
    </Box>
  );
}
