import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Creacionix AI",
    template: `%s | Creacionix AI`,
  },
  description: "Revolutionize your content creation with our AI-powered app.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creacionix-ai.vercel.app/",
    siteName: "Creacionix AI",
    title: "Creacionix AI",
    description: "Revolutionize your content creation with our AI-powered app.",
    images: [
      {
        url: 'https://creacionix-ai.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: "Creacionix AI",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Creacionix AI",
    description: "Revolutionize your content creation with our AI-powered app.",
    images: [
      {
        url: 'https://creacionix-ai.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: "Creacionix AI",
      },
    ],
    card: "summary_large_image",
    site: "@creacionix_ai",
    creator: "@lucascodev",
  },
  verification: {
    google: "https://creacionix-ai.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
