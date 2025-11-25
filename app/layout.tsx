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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "anjana784",
  url: "https://anjana784.dev",
  image: "https://anjana784.dev/anjana784-logo.png",
  description: "Building digital worlds with math, shaders, and code.",
  jobTitle: "3D Web Engineer",
  knowsAbout: [
    "Three.js",
    "WebGL",
    "WebGPU",
    "GLSL shaders",
    "Computer Graphics",
    "Real-time Rendering",
    "3D Mathematics",
  ],
  sameAs: [
    "https://github.com/anjana784",
    "https://linkedin.com/in/anjana784",
    "https://twitter.com/anjana784",
    "https://instagram.com/anjana784official",
    "https://web.facebook.com/anjana784.dev",
    "https://tiktok.com/@anjana784official",
    "https://blog.anjana784.dev",
  ],
  email: "hello@anjana784.dev",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
