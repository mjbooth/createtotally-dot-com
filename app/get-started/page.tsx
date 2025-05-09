import { Box, Heading, Flex, VStack, Stack, Text } from "@chakra-ui/react"
import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
} from "@chakra-ui/react"

export default function TemplateContentCreation() {

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 6, md: 12 }} bg="gray.50">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="start"
        maxW="7xl"
        mx="auto"
        gap={16}
      >
        {/* Left Side: Text Content */}
        <VStack align="start" gap={6}>
          <Heading
            as="h1"
            fontSize={{ base: "lg", md: "3xl", lg: "5xl" }}
            fontWeight="black"
            lineHeight={{ base: "1.2", md: ".95" }}
            color="brandNavy.500"
            textAlign="left"
            maxW={{ base: "full", md: "6xl" }}
            pt={6}
          >
            Transform your creative workflow with CreateTOTALLY
          </Heading>
          <Text color="brandNavy.500" fontSize="lg" fontWeight="regular" lineHeight={1.5}>
            Join the teams saving 65% of their time through automated creative production. Book a personalised demo to see how we can streamline your process.
          </Text>
        </VStack>

        {/* Right Side: Form Placeholder */}
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="xs"
          p={8}
          w="full"
          maxW="md"
          color="brandNavy.500"
        >
          <Fieldset.Root size="lg" maxW="md" color="brandNavy.500">
            <Stack>
              <Fieldset.Legend color="brandNavy.500">Contact our sales team</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <Input
                  name="firstName"
                  placeholder="First name*"
                  _placeholder={{
                    color: 'brandNavy.500'
                  }}
                  _focusVisible={{
                    borderColor: 'brandFuchsia.500'
                  }}
                />
              </Field.Root>

              <Field.Root>
                <Input name="lastName" placeholder="Last name*"
                  _placeholder={{
                    color: 'brandNavy.500'
                  }}
                  _focusVisible={{
                    borderColor: 'brandFuchsia.500'
                  }}
                />
              </Field.Root>

              <Field.Root>
                <Input name="email" type="email" placeholder="Work email address*"
                  _placeholder={{
                    color: 'brandNavy.500'
                  }}
                  _focusVisible={{
                    borderColor: 'brandFuchsia.500'
                  }}
                />
              </Field.Root>

              <Field.Root>
                <Input name="title" placeholder="Job title*"
                  _placeholder={{
                    color: 'brandNavy.500'
                  }}
                  _focusVisible={{
                    borderColor: 'brandFuchsia.500'
                  }}
                />
              </Field.Root>

              <Field.Root>
                <Input name="companyName" placeholder="Company name*"
                  _placeholder={{
                    color: 'brandNavy.500'
                  }}
                  _focusVisible={{
                    borderColor: 'brandFuchsia.500'
                  }}
                />
              </Field.Root>

              <Field.Root>
                <Input name="companySize" placeholder="Company size*"
                  _placeholder={{
                    color: 'brandNavy.500'
                  }}
                  _focusVisible={{
                    borderColor: 'brandFuchsia.500'
                  }}
                />
              </Field.Root>

              <Field.Root>
                <NativeSelect.Root>
                  <NativeSelect.Field name="country" placeholder="Country"
                    _focusVisible={{
                      borderColor: 'brandFuchsia.500'
                    }}>
                    <For each={["United Kingdom", "Canada", "United States"]}>
                      {(item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      )}
                    </For>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>
            </Fieldset.Content>

            <Button colorPalette="brandFuchsia" type="submit" alignSelf="flex-start">
              Submit
            </Button>
          </Fieldset.Root>
        </Box>
      </Flex>
    </Box>
  );
}