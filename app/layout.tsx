import type { Metadata } from "next";
import { Provider } from "@/src/components/ui/provider"
import { NavigationProvider } from "@/src/context/NavigationContext";
import Footer from "@/src/components/Footer"
import ClientLayoutWrapper from "@/src/components/ClientLayoutWrapper";
import { BackgroundProvider } from '@/src/context/BackgroundContext';
import { GoogleTagManager } from '@next/third-parties/google'

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
    canonical: undefined, // Will be set dynamically in page-level components or middleware
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ backgroundColor: '#FFFCFB' }}>
      <head>
        <script src="https://app.termly.io/resource-blocker/bc0c7928-3a7f-4ccc-863b-b4cbbdf922a7?autoBlock=on"></script>
        <GoogleTagManager gtmId="GTM-KPHRZB4" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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