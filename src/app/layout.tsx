import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "True Detective - Licensed Private Detective Warsaw | Detective Agency",
  description: "Warsaw-based licensed detective agency (license 0007982). Comprehensive detective services: surveillance, infidelity investigation, background checks. Professional, discreet and legal.",
  alternates: {
    canonical: "https://truedetective.pl",
  },
  openGraph: {
    title: "True Detective - Licensed Private Detective Warsaw | Detective Agency",
    description: "Warsaw-based licensed detective agency. Professional, discreet, legal. Call: 22 180 00 95",
    url: "https://truedetective.pl",
    siteName: "True Detective",
    locale: "en_GB",
    type: "website",
    images: [{ url: "https://truedetective.pl/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "True Detective - Licensed Private Detective Warsaw",
    description: "Warsaw-based licensed detective agency. Professional, discreet, legal.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
