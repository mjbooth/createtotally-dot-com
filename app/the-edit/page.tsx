import { getAllBlogPosts } from '@/lib/hygraph';
import Link from 'next/link';
import { Box, Heading, Text, Container, Image, SimpleGrid, Stack, Flex, Icon } from '@chakra-ui/react';

export default async function BlogPage() {
	try {
		const posts = await getAllBlogPosts();

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
										<svg viewBox="0 0 63.4 80">
											<path d="M48.4,59.8c.6,0,1.2.5,1.2,1.2s-.5,1.2-1.2,1.2H7.3c-.6,0-1.2-.5-1.2-1.2s.5-1.2,1.2-1.2h41.1ZM48.4,48.1h0c.3,0,.6.1.9.3.2.2.4.5.4.8s-.1.6-.4.8c-.2.2-.5.3-.9.3H7.3c-.6,0-1.1-.5-1.1-1.2s.5-1.2,1.1-1.2h41.1ZM48.4,36.4h0c.3,0,.6.1.9.3.2.2.4.5.4.8s-.1.6-.4.8c-.2.2-.5.3-.9.3H7.3c-.6,0-1.1-.5-1.1-1.2s.5-1.2,1.1-1.2h41.1ZM48.4,24.7h0c.3,0,.6.1.9.3.2.2.4.5.4.8s-.1.6-.4.8c-.2.2-.5.3-.9.3H7.3c-.6,0-1.1-.5-1.1-1.2s.5-1.2,1.1-1.2h41.1ZM48.4,13h0c.3,0,.6.1.9.3.2.2.4.5.4.8s-.1.6-.4.8c-.2.2-.5.3-.9.3H7.3c-.6,0-1.1-.5-1.1-1.2s.5-1.2,1.1-1.2h41.1ZM55.7,6.8H0s0,73.2,0,73.2h55.7V6.8h0ZM7.7,4.4h49.2c.3,0,.6.1.8.3.2.2.3.5.3.8v67.6h5.4V0H7.7v4.4ZM48.4,71.5c.3,0,.6.1.9.3.2.2.4.5.4.8s-.1.6-.4.8c-.2.2-.5.3-.9.3H7.3c-.6,0-1.1-.5-1.1-1.2s.5-1.2,1.1-1.2h41.1Z" />
										</svg>
									</Icon>

									<Text
										fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
										fontWeight="bold"
										color="brandNeutral.500"
										lineHeight="160%"
									>
										The Edit
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
									Explore what we&apos;re learning, building, and sharing.
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
						<SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap="3">
							{posts.map((post) => (
								<Box
									key={post.id}
									borderRadius="1rem"
									bg="brandNeutral.200"
									p={10}
									boxShadow="realistic"
								>
									<Link href={`/${post.postType}/${post.slug}`}>
										{post.coverImage?.url && (
											<Box as="figure" width="100%" position="relative" mb={4}>
												<Image
													src={post.coverImage.url}
													alt={post.title}
													width="100%"
													height="100%"
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
											{post.title}
										</Heading>
									</Link>
									{post.excerpt && (
										<Text color="gray.600" fontSize="md" mb={4}>
											{post.excerpt}
										</Text>
									)}
									<Text color="gray.400" fontSize="sm">
										{new Date(post.publishedAt).toLocaleDateString(undefined, {
											year: 'numeric',
											month: 'short',
											day: 'numeric',
										})}
									</Text>
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
					{/* <Container
            pt="7.5rem"
          >
            <Box
              px={4}
            >
              <Flex
                maxW="3xl"
                mx="auto"
                bg="brandNavy.500"
                borderRadius="xxl"
                boxShadow="realistic"
                textAlign="center"
                p="15"
                gap="15"
                direction="column"
                alignItems="center"
              >
                <Text
                  fontSize={{ base: "xl", md: "3xl", lg: "3rem" }}
                  fontWeight="bold"
                  color="brandNeutral.500"
                  lineHeight="100%"
                  letterSpacing="tight"
                >
                  Some form of a headline
                </Text>
                <Link href="/get-started">
                  <Button
                    py="6"
                    px="10"
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    variant="solid"
                    colorPalette="brandFuchsia"
                    rounded="full"
                  >
                    Click here
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Container> */}
				</Box>
			</Box>
		);
	} catch (error) {
		console.error('Error in BlogPage:', error);
		return (
			<Box>
				<Heading>Error</Heading>
				<Text>An error occurred while fetching blog posts. Please try again later.</Text>
			</Box>
		);
	}
}