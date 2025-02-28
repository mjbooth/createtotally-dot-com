import { Button, Card, For, Stack, Box, Container } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"

const PricingPage = () => {
  return (
    <Box bg="brandNeutral.500" pt="54px">
      <Container maxW="container.xl" mx="auto">
        <Box height="100vh">
        <Stack gap="4" direction="row" wrap="wrap">
          <For each={["subtle", "outline", "elevated"]}>
            {(variant) => (
              <Card.Root width="320px" variant={variant} key={variant}>
                <Card.Body gap="2">
                  <Avatar
                    src="https://picsum.photos/200/300"
                    name="Nue Camp"
                    size="lg"
                    shape="rounded"
                  />
                  <Card.Title mb="2">Nue Camp</Card.Title>
                  <Card.Description>
                    This is the card body. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button variant="outline">View</Button>
                  <Button>Join</Button>
                </Card.Footer>
              </Card.Root>
            )}
          </For>
        </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default PricingPage