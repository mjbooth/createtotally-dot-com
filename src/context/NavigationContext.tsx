"use client";

import React, { createContext, useState, useCallback, ReactNode, useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';


type NavigationContextType = {
  isNavOpen: boolean;
  activeMenu: string | null;
  setActiveMenu: (isOpen: boolean, menu: string | null) => void;
  resetNav: () => void;
  closeNav: () => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeMenu, setActiveMenuState] = useState<string | null>(null);
  const pathname = usePathname();

  const setActiveMenu = useCallback((isOpen: boolean, menu: string | null) => {
    setIsNavOpen(isOpen);
    setActiveMenuState(menu);
  }, []);

  const resetNav = useCallback(() => {
    setIsNavOpen(false);
    setActiveMenuState(null);
  }, []);

  const closeNav = useCallback(() => {
    setIsNavOpen(false);
    setActiveMenuState(null);
  }, []);

  useEffect(() => {
    resetNav();
  }, [pathname, resetNav]);

  return (
    <NavigationContext.Provider value={{ isNavOpen, activeMenu, setActiveMenu, resetNav, closeNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export { NavigationContext };