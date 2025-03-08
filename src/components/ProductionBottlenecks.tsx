// src/components/ProductionBottlenecks.tsx
'use client';

import React from 'react';
import { Container, Box, Text, Button, Image, Heading, List, Flex } from "@chakra-ui/react"
import { HiTemplate } from "react-icons/hi";
import { LuCircleCheck } from "react-icons/lu";
import { Tag } from "@/components/ui/tag"

export default function ProductionBottlenecks() {
  return (
    <Box>
      <Container maxW="container.xl" mx="auto" pt={4} pb={20}>
        <Tag variant="solid" size="lg" bg="brandFuchsia.100" color="brandFuchsia.600" mb="3" startElement={<HiTemplate />} >Template & Content Creation</Tag>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={8}
          alignItems="flex-start"
        >
          <Box flex={{ base: "1 1 100%", md: "3 1 60%" }}>
            <Box>
              <Heading color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">Double Your Output.<br /> Zero Trade-offs.</Heading>
              <Text color="gray.900" fontSize="2xl" fontWeight="thin" lineHeight={1.25} mb="6">Your team relies on Figma and Adobe—so we built automation that works with your native tools, not against them.</Text>
              <List.Root color="gray.900" fontSize="xl" fontWeight="thin" gap="2" variant="plain" align="center">
                <List.Item>
                  <List.Indicator asChild color="green.500">
                    <LuCircleCheck />
                  </List.Indicator>
                  No switching. Keep your existing workflows. No proprietary software.
                </List.Item>
                <List.Item>
                  <List.Indicator asChild color="green.500">
                    <LuCircleCheck />
                  </List.Indicator>
                  Full creative control. Set design rules, automate, and approve—without losing the craft.
                </List.Item>
                <List.Item>
                  <List.Indicator asChild color="green.500">
                    <LuCircleCheck />
                  </List.Indicator>
                  One-click efficiency. Automate without coding. Handle thousands of assets in minutes.</List.Item>
              </List.Root>
            </Box>
            <Button mt="16" colorScheme="blue" size="lg" variant="surface">Discover Your Brand’s Biggest Bottlenecks</Button>
          </Box>
          <Box flex={{ base: "1 1 100%", md: "2 1 40%" }}>
            <Box
              width="100%"
              overflow="hidden"
            >
              <Image src="/AutomationSuite.svg" alt="All Channels" width="100%" />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};  