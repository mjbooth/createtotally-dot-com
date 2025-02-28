import React, { useState } from 'react';
import { Box, Container, Flex, Stack, Button, Image, Text, Link, HStack, Separator } from '@chakra-ui/react';
import { HiMiniChevronDown } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import DropdownContent from './ui/DropdownContent';

interface MainMenuProps {
  onExpandChange: (isExpanded: boolean) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onExpandChange }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    { label: 'Platform', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Pricing', hasDropdown: false, href: '/pricing' },
    { label: 'Resources', hasDropdown: true },
  ];

  const handleMenuClick = (label: string) => {
    const newActiveMenu = activeMenu === label ? null : label;
    setActiveMenu(newActiveMenu);
    onExpandChange(newActiveMenu !== null);
  };

  const menuContent = {
    Platform: {
      column1: {
        title: "Platform",
        col: 2,
        links: [
          { label: "About CreateTOTALLY", href: "#" },
          { label: "All Features", href: "/all-features" },
          { label: "Latest Feature Releases", href: "#" }
        ],
      },
      column2: {
        title: "Features",
        col: 3,
        wrapAfter: 3,
        links: [
          { label: "Template & Content Creation", href: "/template-content-creation#", icon: "HiTemplate" },
          { label: "Libraries & Asset Management", href: "/libraries-asset-management", icon: "MdStorage" },
          { label: "Workflow & Automation", href: "/workflow-automation", icon: "PiRocketFill" },
          { label: "AI Innovation", href: "#", icon: "RiRobot2Fill" },
          { label: "Performance & Insights", href: "/performance-insights", icon: "BsBarChartFill" },
          { label: "Secure by Design", href: "#", icon: "RiShieldFlashFill" },
        ],
      },
      column3: {
        title: "Pricing Tiers",
        col: 3,
        links: [
          { label: "Studio", href: "#" },
          { label: "Powerhouse", href: "#" },
          { label: "Enterprise", href: "#" },
          { label: "Enterprise+", href: "#" },
        ],
      },
    },
    Solutions: {
      column1: {
        title: "Company Type",
        col: 2,
        links: [
          { label: "Brand Marketing", href: "#" },
          { label: "In-house Studio Team", href: "#" },
          { label: "Production Agency", href: "#" },
          { label: "Media & Performance", href: "#" },
        ],
      },
      column2: {
        title: "Industries",
        col: 2,
        links: [
          { label: "Retail", href: "#" },
          { label: "FMCG", href: "#" },
          { label: "Consumer Electronics", href: "#" },
          { label: "Finance", href: "#" },
          { label: "Travel & Hospitality", href: "#" },
        ],
      },
      column3: {
        title: "Integrations",
        col: 2,
        links: [
          { label: "Adobe Creative Cloud", href: "#" },
          { label: "Slack", href: "#" },
          { label: "Google Workspace", href: "#" },
        ],
      },
      column4: {
        title: "Case Studies",
        col: 2,
        links: [
          { label: "Adobe Creative Cloud", href: "#" },
          { label: "Slack", href: "#" },
          { label: "Google Workspace", href: "#" },
        ],
      },
    },
    Resources: {
      // Similar structure for Resources
    },
  };

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={1000} width="100%" bg="white" boxShadow="0px 1px 1px rgba(0, 0, 0, 0.15), 0px 0px 0px inset rgba(161, 161, 170, .75)">
      <Container maxW="container.xl" mx="auto">
        <Flex justify="space-between" align="center" height="54px">
          <Stack direction="row" gap={6}>
            <Link href="/">
              <Image src="CreateTOTALLY_horizontal.png" alt="Logo" maxHeight="38px" />
            </Link>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                p="0"
                gap="0"
                variant="plain"
                size="md"
                fontWeight="light"
                color="gray.900"
                onClick={() => item.hasDropdown ? handleMenuClick(item.label) : null}
                as={item.hasDropdown ? undefined : 'a'}
                href={item.hasDropdown ? undefined : item.href}
              >
                {item.label}
                {item.hasDropdown && (
                  <motion.div
                    animate={{ rotate: activeMenu === item.label ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ marginLeft: '5px', display: 'inline-block' }}
                  >
                    <HiMiniChevronDown />
                  </motion.div>
                )}
              </Button>
            ))}
          </Stack>
          <Stack direction="row">
            <Button variant="ghost">Contact sales</Button>
            <Button colorScheme="blue">Book a demo</Button>
          </Stack>
        </Flex>
      </Container>
      {activeMenu && (
        <Box
          position="absolute"
          left={0}
          right={0}
          top="54px"
          bg="white"
          zIndex={10}
        >
          <Container maxW="container.xl" py={8} fontWeight="light" color="gray.900">
            <DropdownContent activeMenu={activeMenu} menuContent={menuContent} />
          </Container>
          <Box bg="brandNeutral.300" pt="2" pb="2">
            <Container maxW="container.xl" fontWeight="light" fontSize=".8rem">
              <HStack gap={6}>
                <Text color="gray.600">Contact Sales</Text>
                <Separator orientation="vertical" height="4" />
                <Text color="gray.600">Request a Demo</Text>
              </HStack>
            </Container>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MainMenu;