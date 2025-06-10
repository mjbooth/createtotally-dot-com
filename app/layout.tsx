import type { Metadata } from "next";
import { Provider } from "@/src/components/ui/provider"
import { NavigationProvider } from "@/src/context/NavigationContext";
import Footer from "@/src/components/Footer"
import ClientLayoutWrapper from "@/src/components/ClientLayoutWrapper";
import { BackgroundProvider } from '@/src/context/BackgroundContext';

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
    description: "Effortlessly scale creative production in Figma & Adobe. CreateTOTALLY powers high-velocity marketing with automated assets built for every channel.",
    images: ["/FigmaPlugin.jpg"],
  },
  alternates: {
    canonical: "https://www.createtotally.com/",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ backgroundColor: '#FFFCFB' }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPHRZB4');`
          }}
        ></script>
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