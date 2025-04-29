import type { Metadata } from "next";
import { Provider } from "@/src/components/ui/provider"
import Footer from "@/src/components/Footer"
import { Box } from "@chakra-ui/react"
import ClientLayoutWrapper from "@/src/components/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: "CreateTOTALLY - NexGen AI Automation",
  description: "Creative Automation for Performance Teams",
  metadataBase: new URL("https://www.createtotally.com/"),
  openGraph: {
    title: "CreateTOTALLY - NexGen AI Automation",
    description: "Creative Automation for Performance Teams",
    url: "https://www.createtotally.com/",
    siteName: "CreateTOTALLY",
    images: [
      {
        url: "/FigmaPlugin.jpg", // Ensure this exists in public/
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreateTOTALLY - NexGen AI Automation",
    description: "Creative Automation for Performance Teams",
    images: ["/FigmaPlugin.jpg"],
  },
  alternates: {
    canonical: "https://www.createtotally.com/",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Provider>
          <Box bg="white">
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}