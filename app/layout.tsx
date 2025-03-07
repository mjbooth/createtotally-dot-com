import { Providers } from './providers';
import { GlobalInitialization } from './global-init';
import '../src/App.css'; // Adjust path if needed
import MainMenu from "../src/components/MainMenu";
import Footer from "../src/components/Footer";
import { Box } from "@chakra-ui/react";
import LayoutClient from './layout-client';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CreateTOTALLY - Design Automation Platform',
  description: 'Automate your design workflow with CreateTOTALLY. Save time and reduce costs with our powerful design automation platform.',
  keywords: 'design automation, workflow automation, creative automation',
  openGraph: {
    title: 'CreateTOTALLY - Design Automation Platform',
    description: 'Automate your design workflow with CreateTOTALLY',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CreateTOTALLY',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <GlobalInitialization />
        <Providers>
          <LayoutClient>
            <Box position="relative">
              <MainMenu />
              <Box position="relative" zIndex="0">
                {children}
              </Box>
              <Footer />
            </Box>
          </LayoutClient>
        </Providers>
      </body>
    </html>
  );
}