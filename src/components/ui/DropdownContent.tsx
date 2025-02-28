import React from 'react';
import {
  Box,
  Stack,
  Grid,
  GridItem,
  Heading,
  Link,
  Flex,
  Separator
} from '@chakra-ui/react';
import * as GoIcons from "react-icons/go";
import * as HiIcons from "react-icons/hi";
import * as PiIcons from "react-icons/pi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

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
    let IconComponent;

    switch (prefix) {
      case 'Go':
        IconComponent = (GoIcons as any)[iconName];
        break;
      case 'Hi':
        IconComponent = (HiIcons as any)[iconName];
        break;
      case 'Pi':
        IconComponent = (PiIcons as any)[iconName];
        break;
      case 'Md':
        IconComponent = (MdIcons as any)[iconName];
        break;
      case 'Ri':
        IconComponent = (RiIcons as any)[iconName];
          break;
      case 'Bs':
        IconComponent = (BsIcons as any)[iconName];
          break;
      // Add more cases for other icon libraries as needed
      default:
        console.warn(`Unknown icon prefix: ${prefix}`);
        return null;
    }

    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <Grid templateColumns="repeat(8, 1fr)" gap={16}>
      {Object.entries(content).map(([key, column]) => (
        <GridItem key={key} colSpan={column.col || 1}>
          <Box fontSize="14px">
            <Heading color="gray.900" as="h3" size="md" mb={2} textTransform="uppercase" fontSize="14px">
              {column.title}
            </Heading>
            <Separator size="xs" borderColor="gray.400" />
            <Flex mt={2}>
              <Stack gap={5} pl={1} flex={1}>
                {column.links.slice(0, column.wrapAfter || column.links.length).map((link, index) => (
                  <Link color="gray.900" key={index} href={link.href}>
                    {renderIcon(link.icon)}
                    {link.label}
                  </Link>
                ))}
              </Stack>
              {column.wrapAfter && column.col && column.col > 1 && (
                <Stack gap={5} pl={1} flex={1}>
                  {column.links.slice(column.wrapAfter).map((link, index) => (
                    <Link color="gray.900" key={index + (column.wrapAfter ?? 0)} href={link.href}>
                    {renderIcon(link.icon)}
                    {link.label}
                    </Link>
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