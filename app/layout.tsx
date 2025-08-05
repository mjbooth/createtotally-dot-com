import type { Metadata } from "next";
import Script from 'next/script';
import { Provider } from "@/src/components/ui/provider"
import { NavigationProvider } from "@/src/context/NavigationContext";
import Footer from "@/src/components/Footer"
import ClientLayoutWrapper from "@/src/components/ClientLayoutWrapper";
import { BackgroundProvider } from '@/src/context/BackgroundContext';
import { GoogleTagManager } from '@next/third-parties/google'
import { OrganizationStructuredData } from '@/src/components/StructuredData';
import { getHomeCanonicalUrl } from "@/src/utils/canonical";

export const metadata: Metadata = {
  title: "Creative Automation for Figma & Adobe Teams | CreateTOTALLY",
  description: "Effortlessly scale creative production in Figma & Adobe. CreateTOTALLY powers high-velocity marketing with automated assets built for every channel.",
  metadataBase: new URL("https://www.createtotally.com/"),
  openGraph: {
    title: "CreateTOTALLY - NexGen AI Automation",
    description: "Effortlessly scale creative production in Figma & Adobe. CreateTOTALLY powers high-velocity marketing with automated assets built for every channel.",
    url: "https://www.createtotally.com/",
    siteName: "CreateTOTALLY",
    images: [
      {
        url: "/OpenGraph.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Automation for Figma & Adobe Teams | CreateTOTALLY",
    description: "Effortlessly scale creative production in Figma & Adobe. CreateTOTALLY powers high-velocity marketing with automated assets built for every channel.",
    images: ["/TwitterSummaryCard.jpg"],
  },
  alternates: {
    canonical: getHomeCanonicalUrl(), // Default canonical URL for the homepage
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ backgroundColor: '#FFFCFB' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://app.termly.io" />
        <link rel="dns-prefetch" href="https://eu-west-2.graphassets.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#853FCA" />
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `
          }}
        />
        <Script
          id="termly-cmp"
          strategy="lazyOnload"
          src="https://app.termly.io/resource-blocker/bc0c7928-3a7f-4ccc-863b-b4cbbdf922a7?autoBlock=on"
        />
        <GoogleTagManager gtmId="GTM-KPHRZB4" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            html { font-family: system-ui, -apple-system, sans-serif; }
            body { margin: 0; background-color: #FFFCFB; }
            
            /* Prevent layout shift for images */
            img { max-width: 100%; height: auto; }
            
            /* Critical layout styles */
            .container { max-width: 1152px; margin: 0 auto; padding: 0 1rem; }
            
            /* Prevent FOUC */
            .loading { visibility: hidden; }
            .loaded { visibility: visible; }
            
            /* Critical typography */
            h1, h2, h3 { margin: 0; line-height: 1.2; }
            
            @media (max-width: 768px) {
              .container { padding: 0 1rem; }
            }
          `
        }} />
        <OrganizationStructuredData />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPHRZB4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Provider>
          <NavigationProvider>
            <BackgroundProvider>
              <ClientLayoutWrapper>
                {children}
              </ClientLayoutWrapper>
              <Footer />
            </BackgroundProvider>
          </NavigationProvider>
        </Provider>
      </body>
    </html>
  );
}