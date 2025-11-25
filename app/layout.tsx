import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "anjana784 — 3D Web Engineer",
  description: "Building digital worlds with math, shaders, and code.",
  metadataBase: new URL("https://anjana784.dev"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  openGraph: {
    title: "anjana784 — 3D Web Engineer",
    description: "Building digital worlds with math, shaders, and code.",
    url: "https://anjana784.dev",
    siteName: "anjana784",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://anjana784.dev/anjana784-logo.png",
        width: 1200,
        height: 630,
        alt: "anjana784 — 3D Web Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "anjana784 — 3D Web Engineer",
    description: "Building digital worlds with math, shaders, and code.",
    creator: "@anjana784",
    images: ["https://anjana784.dev/anjana784-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
