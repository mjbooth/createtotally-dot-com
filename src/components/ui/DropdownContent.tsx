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
import * as TbIcons from"react-icons/tb";
import { IconType } from 'react-icons';

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