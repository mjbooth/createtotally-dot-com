'use client'

import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import MainMenu from "@/components/MainMenu";
import { usePathname } from 'next/navigation';

const ClientLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setDropdownOpen(false);
    }, [pathname]);

    const handleSetDropdownOpen = (open: boolean) => {
        setDropdownOpen(open);
    };

    return (
        <>
            <MainMenu setDropdownOpen={handleSetDropdownOpen} isDropdownOpen={isDropdownOpen} />
            <Box
                pt="72px"
                position="relative"
            >
                <Box
                    position="fixed"
                    top="72px"
                    left={0}
                    right={0}
                    bottom={0}
                    width="100vw"
                    height="calc(100vh - 72px)"
                    zIndex={isDropdownOpen ? 999 : -1}
                    pointerEvents={isDropdownOpen ? "auto" : "none"}
                    bg={isDropdownOpen ? "rgba(244, 240, 235, 0.75)" : "transparent"}
                    backdropFilter={isDropdownOpen ? "blur(4px)" : "none"}
                    transition="all 0.3s ease"
                />
                <Box position="relative" zIndex={2}>
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default ClientLayoutWrapper;