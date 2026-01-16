import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.exportersindia.com"),

  title: {
    default:
      "ExportersIndia - B2B Business Marketplace for Manufacturers, Exporters & Suppliers",
    template: "%s | ExportersIndia",
  },

  description:
    "Exporters India - Largest searchable B2B Marketplace of manufacturers exporters Suppliers and importers, Manufacturers Directory, Indian Exporters, Export Import Directory, Exporters Directory, Buy Sell offers from India & foreign Countries",

  keywords: [
    "indian exporters",
    "exporters india",
    "india business directory",
    "B2B Marketplace",
    "Export Directory",
    "Import Directory",
    "indian importers",
    "manufacturers directory",
    "B2B Marketplace India",
    "indian service providers",
    "manufacturers in india",
    "Buy Offers",
    "Sell Offers",
    "Suppliers",
    "Buyers",
    "Sellers",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ExportersIndia",
    title:
      "ExportersIndia - B2B Business Marketplace for Manufacturers, Exporters & Suppliers",
    description:
      "Exporters India - Largest searchable B2B Marketplace of manufacturers exporters Suppliers and importers, Manufacturers Directory, Indian Exporters, Export Import Directory, Exporters Directory, Buy Sell",
    url: "/",
    images: [
      {
        url: "https://static.exportersindia.com/ei_images/svg_icon/ei-logo.svg",
        width: 1200,
        height: 630,
        alt: "ExportersIndia Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ExportersIndia - B2B Business Marketplace for Manufacturers, Exporters & Suppliers",
    description:
      "Exporters India - Largest searchable B2B Marketplace of manufacturers exporters Suppliers and importers, Manufacturers Directory, Indian Exporters, Export Import Directory, Exporters Directory, Buy Sell",
    images: [
      "https://static.exportersindia.com/ei_images/svg_icon/ei-logo.svg",
    ],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  themeColor: "#ffffff",

  other: {
    "facebook-domain-verification": "rzvxw0i11pxtk4hlpwohwpu24qf5t6",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
