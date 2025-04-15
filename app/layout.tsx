import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"
import MainMenu from "@/components/MainMenu";
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "CreateTOTALLY",
  description: "Creative Automation for Performance Teams",
  metadataBase: new URL("https://createtotally.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CreateTOTALLY | Total Content Automation</title>
      </head>
      <body>
        <Provider>
          <MainMenu />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}