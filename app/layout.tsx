import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Provider } from "@/src/components/ui/provider"
import { NavigationProvider } from "@/src/context/NavigationContext";
import Footer from "@/src/components/Footer"
import ClientLayoutWrapper from "@/src/components/ClientLayoutWrapper";
import { BackgroundProvider } from '@/src/context/BackgroundContext';
import { GoogleTagManager } from '@next/third-parties/google'
import { OrganizationStructuredData } from '@/src/components/StructuredData';
import { getHomeCanonicalUrl } from "@/src/utils/canonical";
import { getConsentInitScript } from "@/src/lib/consent";
import CookieBanner from "@/src/components/CookieBanner";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

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
    <html lang="en" suppressHydrationWarning className={inter.variable} style={{ backgroundColor: '#FFFCFB' }}>
      <head>
        {/* Consent Mode v2 defaults — MUST run synchronously before GTM */}
        <script
          id="consent-mode-init"
          dangerouslySetInnerHTML={{ __html: getConsentInitScript() }}
        />
        <GoogleTagManager gtmId="GTM-KPHRZB4" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          <CookieBanner />
        </Provider>
      </body>
    </html>
  );
}