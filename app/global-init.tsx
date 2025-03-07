'use client';

import { useEffect } from 'react';
import ReactGA from "react-ga4";
import { usePathname, useSearchParams } from 'next/navigation';

export function GlobalInitialization() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Initialize GA4 with your measurement ID
    ReactGA.initialize("G-CKBFQLY6S2");
    
    // Track initial page view
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    ReactGA.send({ hitType: "pageview", page: url });
  }, []); // Run only once on mount

  // Track page views on route changes
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    ReactGA.send({ hitType: "pageview", page: url });
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
}