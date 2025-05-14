'use client'

import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import MainMenu from "@/src/components/MainMenu";
import { useNavigation } from "@/src/context/NavigationContext";

const ClientLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { isNavOpen, closeNav } = useNavigation();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                if (isNavOpen) {
                    closeNav();
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isNavOpen, closeNav]);

    return (
        <>
            <div ref={ref}>
                <MainMenu />
            </div>
            <Box
                mt="160px"
                position="relative"
            >
                <Box
                    position="fixed"
                    top="160px"
                    left={0}
                    right={0}
                    bottom={0}
                    width="100vw"
                    height="calc(100vh - 160px)"
                    zIndex={isNavOpen ? 999 : -1}
                    pointerEvents={isNavOpen ? "auto" : "none"}
                    bg={isNavOpen ? "rgba(244, 240, 235, 0.75)" : "transparent"}
                    backdropFilter={isNavOpen ? "blur(4px)" : "none"}
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