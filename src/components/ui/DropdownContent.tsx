import React from 'react';
import { Box, Heading, Link as ChakraLink, Flex, HStack, Icon, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

interface MenuLink {
    label: string;
    href: string;
    icon?: React.ElementType;
    visible?: boolean;
    style?: React.CSSProperties;
}

interface MenuColumn {
    title: string;
    links: MenuLink[];
    col?: number;
    wrapAfter?: number;
    visible?: boolean;
    style?: React.CSSProperties;
}

interface MenuContent {
    [key: string]: MenuColumn;
}

interface DropdownContentProps {
    activeMenu: string;
    menuContent: {
        [key: string]: MenuContent;
    };
}

const DropdownContent: React.FC<DropdownContentProps> = ({ activeMenu, menuContent }) => {
    const content = menuContent[activeMenu];

    if (!content) return null;

    return (
        <Flex flexWrap="wrap" gap={{ base: 4, md: 20 }} p={{ base: 4, md: 20 }} direction={{ base: "column", md: "row" }}>
            {Object.entries(content).map(([key, column]) => (
                column.visible !== false && (
                    <Box key={key} width={{ base: "100%", md: "auto" }} {...(column.style as React.ComponentProps<typeof Box>)}>
                        <Box fontSize="md">
                            <Heading color="brandNavy.500" as="h3" size="md" m={0} textTransform="normal" fontSize="md" fontWeight="700">
                                {column.title}
                            </Heading>
                            <VStack mt={2} align="stretch" gap={1}>
                                {column.links.map((link, index) => (
                                    link.visible !== false && (
                                        <ChakraLink
                                            as={NextLink}
                                            href={link.href}
                                            key={index}
                                            color="brandNavy.500"
                                            bg="transparent"
                                            border="none"
                                            _hover={{
                                                color: "brandFuchsia.500",
                                                bg: "transparent",
                                                textDecoration: "none"
                                            }}
                                            _focus={{
                                                boxShadow: "none",
                                                outline: "none"
                                            }}
                                            transition="all 0.2s ease"
                                            whiteSpace="nowrap"
                                            overflow="hidden"
                                            textOverflow="ellipsis"
                                            px="0"
                                            display="flex"
                                            width="100%"
                                            textAlign="left"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            py="3"
                                        >
                                            <HStack gap={2}>
                                                {link.icon && (
                                                    <Icon
                                                        as={link.icon}
                                                        boxSize="1.25rem"
                                                        color="currentColor"
                                                    />
                                                )}
                                                <Box as="span">{link.label}</Box>
                                            </HStack>
                                        </ChakraLink>
                                    )
                                ))}
                            </VStack>
                        </Box>
                    </Box>
                )
            ))}
        </Flex>
    );
};

export default DropdownContent;