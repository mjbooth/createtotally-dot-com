import React from 'react';
import {
  Box,
  Stack,
  Grid,
  GridItem,
  Heading,
  Button,
  Flex,
  Separator,
  HStack
} from '@chakra-ui/react';
import * as GoIcons from "react-icons/go";
import * as HiIcons from "react-icons/hi";
import * as PiIcons from "react-icons/pi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as TbIcons from"react-icons/tb";
import * as FaIcons from"react-icons/fa";
import { IconType } from 'react-icons';
import * as SiIcons from 'react-icons/si';
import NextLink from 'next/link';

interface MenuContent {
  [key: string]: {
    title: string;
    links: Array<{ label: string; href: string; icon?: string }>;
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

  const renderIcon = (iconName?: string) => {
    if (!iconName) return null;
  
    const prefix = iconName.slice(0, 2);
    let IconComponent: IconType | undefined;
  
    switch (prefix) {
      case 'Go':
        IconComponent = GoIcons[iconName as keyof typeof GoIcons];
        break;
      case 'Hi':
        IconComponent = HiIcons[iconName as keyof typeof HiIcons];
        break;
      case 'Pi':
        IconComponent = PiIcons[iconName as keyof typeof PiIcons];
        break;
      case 'Md':
        IconComponent = MdIcons[iconName as keyof typeof MdIcons];
        break;
      case 'Ri':
        IconComponent = RiIcons[iconName as keyof typeof RiIcons];
        break;
      case 'Bs':
        IconComponent = BsIcons[iconName as keyof typeof BsIcons];
        break;
      case 'Tb':
        IconComponent = TbIcons[iconName as keyof typeof TbIcons];
        break;
      case 'Si':
        IconComponent = SiIcons[iconName as keyof typeof SiIcons];
        break;
        case 'Fa':
          IconComponent = FaIcons[iconName as keyof typeof FaIcons];
          break;
      default:
        console.warn(`Unknown icon prefix for "${iconName}"`);
        return null;
    }
  
    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found in ${prefix}Icons`);
      return null;
    }
  
    return <IconComponent />;
  };

  return (
    <Grid templateColumns="repeat(8, 1fr)" gap={16}>
      {Object.entries(content).map(([key, column]) => (
        <GridItem key={key} colSpan={column.col || 1}>
          <Box fontSize="14px">
            <Heading color="brandPurple.600" as="h3" size="md" mb={4} textTransform="normal" fontSize="md" fontWeight="700">
              {column.title}
            </Heading>
            <Separator size="xs" borderColor="white" />
            <Flex mt={2}>
              <Stack gap={2} flex={1}>
                {column.links.slice(0, column.wrapAfter || column.links.length).map((link, index) => (
                  <Button asChild key={index} _hover={{ color: "brandNavy.500", bg: "brandPurple.50" }} >
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
                ))}
              </Stack>
              {column.wrapAfter && column.col && column.col > 1 && (
                <Stack gap={2} flex={1}>
                  {column.links.slice(column.wrapAfter).map((link, index) => (
                    <Button asChild key={index + (column.wrapAfter ?? 0)} _hover={{ color: "brandNavy.500", bg: "brandPurple.50" }} >
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
                  ))}
                </Stack>
              )}
            </Flex>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default DropdownContent;