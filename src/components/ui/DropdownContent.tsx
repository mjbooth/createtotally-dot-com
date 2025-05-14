import React from 'react';
import { Box, Stack, Heading, Button, Flex, HStack } from '@chakra-ui/react';
import { renderIcon } from '@/src/utils/iconUtils';
import NextLink from 'next/link';

interface MenuContent {
  [key: string]: {
    title: string;
    links: Array<{ label: string; href: string; icon?: string; visible?: boolean; }>;
    col?: number;
    wrapAfter?: number;
  };
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
    <Flex flexWrap="wrap" gap={20} p={20}>
      {Object.entries(content).map(([key, column]) => (
        <Box key={key}>
          <Box fontSize="14px">
            <Heading color="brandNavy.500" as="h3" size="md" m={0} textTransform="normal" fontSize="md" fontWeight="700">
              {column.title}
            </Heading>
            <Flex mt={2}>
              <Stack gap={1} flex={1} overflowY="hidden">
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
                    >
                      <NextLink href={link.href} style={{ 
                        display: 'flex',
                        width: '100%',
                        textAlign: 'left',
                        justifyContent: 'flex-start',
                        alignItems: 'center' }}>
                        <HStack gap={2}>
                          {renderIcon(link.icon)}
                          <Box as="span">{link.label}</Box>
                        </HStack>
                      </NextLink>
                    </Button>
                  )
                ))}
              </Stack>
            </Flex>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default DropdownContent;