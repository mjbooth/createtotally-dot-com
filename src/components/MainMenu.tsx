"use client";

import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Stack, Button, Image, Text, Link, HStack, Separator } from '@chakra-ui/react';
import { HiMiniChevronDown } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import DropdownContent from './ui/DropdownContent';
import { useNavigation } from "@/src/context/NavigationContext";
import { usePathname } from 'next/navigation';

const MainMenu: React.FC = () => {
  const { isNavOpen, toggleNav, closeNav } = useNavigation();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

useEffect(() => {
  if (!isNavOpen && activeMenu !== null) {
    console.log("Nav closed — resetting activeMenu");
    setActiveMenu(null);
  }
}, [isNavOpen, activeMenu]);

  useEffect(() => {
    console.log("Route changed to:", pathname);
    if (isNavOpen) {
      console.log("Closing nav due to route change");
      closeNav();
    }
  }, [pathname]);

  const menuItems = [
    { label: 'Platform', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Pricing', hasDropdown: false, href: '/pricing' },
    { label: 'Resources', hasDropdown: true },
  ];


  const handleMenuClick = (label: string) => {
    const newActiveMenu = activeMenu === label ? null : label;
    setActiveMenu(newActiveMenu);
    if (newActiveMenu) {
      if (!isNavOpen) toggleNav();
    } else {
      closeNav();
    }
  };

  const menuContent = {
    Platform: {
      column1: {
        title: "Platform",
        col: 2,
        links: [
          { label: "Figma Automation", href: "/figma-creative-automation", icon: "SiFigma" },
          { label: "InDesign Automation", href: "/adobe-indesign-automation", icon: "SiAdobeindesign" },
          { label: "After Effects Automation", href: "/adobe-after-effects-automation", icon: "SiAdobeaftereffects" },
          { label: "Photoshop Automation", href: "#", icon: "SiAdobephotoshop" },
          { label: "Illustrator Automation", href: "#", icon: "SiAdobeillustrator" },
          { label: "HTML Automation", href: "#", icon: "SiHtml5" },
          
        ],
      },
      column2: {
        title: "Features",
        col: 4,
        wrapAfter: 4,
        links: [
          { label: "Easy Templating", href: "/template-content-creation", icon: "HiTemplate" },
          { label: "Content Creation", href: "/template-content-creation", icon: "HiTemplate" },
          { label: "Creative Automation", href: "/creative-automation", icon: "PiRocketFill" },
          { label: "Workflow Automation", href: "/workflow-automation", icon: "TbArrowsShuffle" },
          { label: "Libraries & Asset Management", href: "/libraries-asset-management", icon: "MdStorage" },
          { label: "Performance & Insights", href: "/performance-insights", icon: "BsBarChartFill" },
          { label: "Secure by Design", href: "#", icon: "RiShieldFlashFill" },
          { label: "All Features", href: "/all-features", icon: "FaPlus"},
        ],
      },
      column3: {
        title: "Pricing Tiers",
        col: 2,
        links: [
          { label: "Studio", href: "#" },
          { label: "Powerhouse", href: "#" },
          { label: "Enterprise", href: "#" },
        ],
      },
    },
    Solutions: {
      column1: {
        title: "Teams",
        col: 2,
        links: [
          { label: "Brand Marketing", href: "#" },
          { label: "In-house Studio Team", href: "#" },
          { label: "Creative", href: "#" },
          { label: "Production", href: "#" },
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
          { label: "Professional Services", href: "#" },
          { label: "Travel & Hospitality", href: "#" },
        ],
      },
      column3: {
        title: "Integrations",
        col: 2,
        links: [
          { label: "Adobe Workfront", href: "/integrations/adobe-workfront" },
          { label: "Monday.com", href: "/integrations/monday-com" },
          { label: "Box.com", href: "#" },
          { label: "Google Drive", href: "/integrations/google-drive" },
          { label: "View all integrations", href: "/integrations" },
        ],
      },
      column4: {
        title: "Success Stories",
        col: 2,
        links: [
          { label: "Hasbro Transformers", href: "#" },
          { label: "The Wine Society", href: "#" },
          { label: "Miele", href: "#" },
          { label: "Patek Philippe", href: "#" },
          { label: "Doner", href: "#" },
        ],
      },
    },
    Resources: {
      column1: {
        title: "Knowledge Base",
        col: 2,
        links: [
          { label: "About Us", href: "#" },
          { label: "What's New", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Media & Performance", href: "#" },
        ],
      },
      column2: {
        title: "Case Studies",
        col: 2,
        links: [
          { label: "About Us", href: "#" },
          { label: "What's New", href: "#" },
          { label: "Blog", href: "/blog" },
          { label: "Media & Performance", href: "#" },
        ],
      },
    },
  };

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={1000} width="100%" bg="white" boxShadow="0px 1px 1px rgba(0, 0, 0, 0.15), 0px 0px 0px inset rgba(161, 161, 170, .75)">
      <Container maxW="container.xl" mx="auto">
        <Flex justify="space-between" align="center" pt={4} pb={4} >
          <Stack direction="row" gap={6}>
            <Link href="/">
              <Image src="/CreateTOTALLY_horizontal.png" alt="Logo" maxHeight="38px" />
            </Link>
            {menuItems.map((item) => (
              item.hasDropdown ? (
                <Button
                  key={item.label}
                  p="0"
                  gap="0"
                  variant="plain"
                  size="md"
                  fontWeight="light"
                  color="brandNavy.500"
                  onClick={() => handleMenuClick(item.label)}
                >
                  {item.label}
                  <motion.div
                    animate={{ rotate: activeMenu === item.label ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    style={{ marginLeft: '5px', display: 'inline-block' }}
                  >
                    <HiMiniChevronDown />
                  </motion.div>
                </Button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  p="0"
                  variant="plain"
                  fontWeight="light"
                  color="brandNavy.500"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="plain"
                    size="md"
                    fontWeight="light"
                    color="brandNavy.500"
                  >
                    {item.label}
                  </Button>
                </Link>
              )
            ))}
          </Stack>
          <Stack direction="row">
            <Link href="/get-started">
              <Button variant="solid" colorPalette="brandFuchsia" rounded="full" >Get started →</Button>
            </Link>
          </Stack>
        </Flex>
      </Container>
      {isNavOpen && activeMenu && (
        <Box
          position="absolute"
          left={0}
          right={0}
          top="72px"
          bg="white"
          zIndex={10}
          boxShadow="inset 0 1px 0 rgba(0, 0, 0, 0.15)"
        >
          <Container maxW="container.xl" py={8} fontWeight="light" color="gray.900">
            <DropdownContent activeMenu={activeMenu} menuContent={menuContent} />
          </Container>
          <Box bg="brandPurple.600" pt="2" pb="2">
            <Container maxW="container.xl" fontWeight="bold" fontSize=".8rem">
              <HStack gap={6}>
                <Text color="brandNeutral.500">Contact Sales</Text>
                <Separator orientation="vertical" height="4" colorPalette="white" />
                <Text color="brandNeutral.500">Get started</Text>
              </HStack>
            </Container>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MainMenu;