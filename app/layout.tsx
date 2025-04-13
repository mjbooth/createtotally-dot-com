import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"

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
        <link rel="icon" href="public/fav.ico" type="image/x-icon" />
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}