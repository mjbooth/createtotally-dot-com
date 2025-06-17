import React from 'react';
import { Box, Heading, Button, Flex, HStack, Icon, VStack } from '@chakra-ui/react';
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
                    <Button
                      asChild
                      key={index}
                      color="brandNavy.500"
                      bg="transparent"
                      _hover={{ color: "brandFuchsia.500", bg: "transparent", fontWeight: "500" }}
                      _active={{ color: "brandFuchsia.700", bg: "brandPurple.100" }}
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      px="0"
                      justifyContent="flex-start"
                    >
                      <NextLink href={link.href} style={{
                        display: 'flex',
                        width: '100%',
                        textAlign: 'left',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                      }}>
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
                      </NextLink>
                    </Button>
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