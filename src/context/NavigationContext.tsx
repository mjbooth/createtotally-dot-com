"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type NavigationContextType = {
  isNavOpen: boolean;
  toggleNav: () => void;
  closeNav: () => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return (
    <NavigationContext.Provider value={{ isNavOpen, toggleNav, closeNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};