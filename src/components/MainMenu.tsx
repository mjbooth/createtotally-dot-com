"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Container, Flex, Stack, Button, Image, Link, Popover, Portal, Icon, useBreakpointValue } from '@chakra-ui/react';
import { HiMiniChevronDown } from 'react-icons/hi2';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import DropdownContent from '@/src/components/ui/DropdownContent';
import { useNavigation } from "@/src/context/NavigationContext";
import { usePathname } from 'next/navigation';
import { useBackground } from '@/src/context/BackgroundContext';
import { HiMenuAlt3 } from 'react-icons/hi';
import { VscClose } from 'react-icons/vsc';

const MainMenu: React.FC = () => {
  const { isNavOpen, activeMenu, setActiveMenu, resetNav } = useNavigation();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const navHeight = 160;
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const { backgroundColor } = useBackground();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < lastScrollY.current) {
      setHidden(false);
    } else if (latest > navHeight && latest > lastScrollY.current) {
      setHidden(true);
    }
    lastScrollY.current = latest;
  });

  const navVariants = {
    visible: { y: 0 },
    hidden: { y: -navHeight },
  };

  const menuItems = [
    { label: 'Platform', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Pricing', hasDropdown: false, href: '/pricing' },
    { label: 'Resources', hasDropdown: true },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(false, null);
  }, [pathname, setActiveMenu]);

  useEffect(() => {
    resetNav();
  }, [pathname, resetNav]);

  const handleMenuClick = useCallback((label: string) => {
    if (activeMenu === label) {
      setActiveMenu(false, null);
    } else {
      setActiveMenu(true, label);
    }
  }, [activeMenu, setActiveMenu]);

  const handleClose = useCallback(() => {
    setActiveMenu(false, null);
  }, [setActiveMenu]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => {
      return !prev;
    });
    if (isNavOpen) {
      resetNav();
    }
  }, [isNavOpen, resetNav]);

  const menuContent = {
    Platform: {
      column1: {
        title: "Platform",
        col: 2,
        visible: true,
        links: [
          { label: "Figma Automation", href: "/platform/figma-creative-automation", icon: "SiFigma" },
          { label: "InDesign Automation", href: "/platform/adobe-indesign-automation", icon: "SiAdobeindesign" },
          { label: "After Effects Automation", href: "/platform/adobe-after-effects-automation", icon: "SiAdobeaftereffects" },
          { label: "Photoshop Automation", href: "#", icon: "SiAdobephotoshop", visible: false },
          { label: "Illustrator Automation", href: "#", icon: "SiAdobeillustrator", visible: false },
          { label: "HTML Automation", href: "#", icon: "SiHtml5", visible: false },

        ],
      },
      column2: {
        title: "Features",
        col: 2,
        visible: true,
        links: [
          { label: "Easy Templating", href: "/features/easy-templating", icon: "FaPencilRuler" },
          { label: "Content Creation", href: "/features/content-creation", icon: "BiSolidImageAdd", visible: false },
          { label: "Creative Automation", href: "/features/creative-automation", icon: "FaBolt" },
          { label: "Workflow Automation", href: "/features/workflow-automation", icon: "MdAccountTree" },
          { label: "Libraries & Asset Management", href: "/features/libraries-and-asset-management", icon: "RiFunctionAddFill" },
          { label: "Performance & Insights", href: "/features/performance-insights", icon: "BiSolidBarChartAlt2", visible: false },
          { label: "Secure by Design", href: "#", icon: "RiShieldFlashFill", visible: false },
          { label: "All Features", href: "/features/all-features", icon: "TbCirclePlusFilled", visible: false },
        ],
      },
      column3: {
        title: "Pricing",
        col: 2,
        visible: true,
        links: [
          { label: "Overview", href: "/pricing", icon: "MdViewInAr" },
          { label: "Ways to Engage", href: "/pricing#ways-to-engage", icon: "TiStarFullOutline" },
          { label: "Compare Models", href: "/pricing#compare", icon: "MdCompareArrows" },
        ],
      },
    },
    Solutions: {
      column1: {
        title: "Teams",
        col: 2,
        visible: false,
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
        visible: false,
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
        visible: true,
        links: [
          { label: "Adobe Workfront", href: "/integrations/adobe-workfront" },
          { label: "Monday.com", href: "/integrations/monday-com" },
          { label: "Google Drive", href: "/integrations/google-drive" },
        ],
      },
      column4: {
        title: "Success Stories",
        col: 2,
        links: [
          { label: "Hasbro Transformers", href: "#" },
          { label: "Miele", href: "/blog/miele-x-createtotally" },
          { label: "The Wine Society", href: "/blog/the-wine-society-x-createtotally#" },
          { label: "Patek Philippe", href: "#" },
        ],
      },
    },
    Resources: {
      column1: {
        title: "Knowledge Base",
        col: 2,
        links: [
          { label: "Blog", href: "/blog" },
        ],
      },
      column2: {
        title: "Case Studies",
        col: 2,
        links: [
          { label: "Hasbro Transformers", href: "#" },
          { label: "Miele", href: "/blog/miele-x-createtotally" },
          { label: "The Wine Society", href: "/blog/the-wine-society-x-createtotally#" },
          { label: "Patek Philippe", href: "#" },
        ],
      },
    },
  };


  return (
    <motion.div
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      variants={navVariants}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        width="100%"
        display="flex"
        alignItems="center"
        height={{ base: "80px", md: "160px" }}
        style={{
          backgroundColor: backgroundColor
        }}
      >
        <Container maxW="1200px" px="24px">
          <Flex justify="space-between" align="center" width="100%">
            <Link href="/">
              <Image src="/CreateTOTALLY_horizontal.png" alt="Logo" maxHeight={{ base: "30px", md: "47.447px" }} />
            </Link>

            {isMobile ? (
              // Mobile Menu Button
              <Button onClick={toggleMobileMenu} variant="ghost" color="brandNavy.500">
                <Icon as={isMobileMenuOpen ? VscClose : HiMenuAlt3} boxSize={6} color="brandNavy.500" />
              </Button>
            ) : (
              // Desktop Menu


              <Stack direction="row" gap={6} align="center" display={{ base: "none", md: "flex" }}>
                {menuItems.map((item) => (
                  item.hasDropdown ? (
                    <Popover.Root
                      key={item.label}
                      size="sm"
                      open={isNavOpen && activeMenu === item.label}
                      onOpenChange={(open) => {
                        if (!open) handleClose();
                      }}
                    >
                      <Popover.Trigger asChild>
                        <Button
                          size="md"
                          variant="plain"
                          color="brandNavy.500"
                          fontSize="1rem"
                          onClick={() => handleMenuClick(item.label)}
                          _hover={{
                            color: "#CA3FC0"
                          }}
                        >
                          {item.label}
                          <motion.div
                            animate={{ rotate: isNavOpen && activeMenu === item.label ? 180 : 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            style={{ marginLeft: '5px', display: 'inline-block' }}
                          >
                            <HiMiniChevronDown />
                          </motion.div>
                        </Button>
                      </Popover.Trigger>
                      <Portal>
                        <Popover.Positioner>
                          <Popover.Content
                            css={{ "--popover-bg": "#EDE6DE" }}
                            width="auto"
                            maxWidth="1200px"
                            shadow="realistic"
                            borderRadius="40px"
                          >
                            <Popover.Body color="brandNavy.500">
                              <DropdownContent activeMenu={item.label} menuContent={menuContent} />
                            </Popover.Body>
                          </Popover.Content>
                        </Popover.Positioner>
                      </Portal>
                    </Popover.Root>
                  ) : (
                    <Link key={item.label} href={item.href}>
                      <Button
                        size="md"
                        variant="plain"
                        color="brandNavy.500"
                        fontSize="1rem"
                        _hover={{
                          color: "#CA3FC0"
                        }}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  )
                ))}
                <Link href="/get-started">
                  <Button variant="solid" fontWeight="600" colorPalette="brandFuchsia" rounded="full" px="5" py="2">Get started →</Button>
                </Link>
              </Stack>
            )}
          </Flex>
        </Container>
      </Box>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <Box
          position="fixed"
          top="80px"
          left={0}
          right={0}
          bottom={0}
          bg={backgroundColor}
          zIndex={999}
          overflowY="auto"
        >
          <Container maxW="1200px" px="24px">
            <Stack gap={4} py={4}>

              {menuItems.map((item) => (
                <Box key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <Button
                        width="100%"
                        bg="transparent"
                        justifyContent="space-between"
                        borderRadius={0}
                        onClick={() => handleMenuClick(item.label)}
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: isNavOpen && activeMenu === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                        >
                          <HiMiniChevronDown />
                        </motion.div>
                      </Button>
                      {isNavOpen && activeMenu === item.label && (
                        <Box mt={2}>
                          <DropdownContent activeMenu={item.label} menuContent={menuContent} />
                        </Box>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} width="100%">
                      <Button
                        width="100%"
                        bg="transparent"
                        justifyContent="space-between"
                      >{item.label}</Button>
                    </Link>
                  )}
                </Box>
              ))}

              <Link href="/get-started" width="100%">
                <Button width="100%" variant="solid" colorPalette="brandFuchsia" rounded="full">
                  Get started →
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>
      )
      }
    </motion.div >
  );
};

export default MainMenu;