import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zennith Developments | Premium Web Development Agency Jamaica",
    template: "%s | Zennith Developments"
  },
  description: "Professional web development agency in Jamaica specializing in custom websites, e-commerce solutions, and web applications. Transform your business with cutting-edge technology and exceptional design.",
  keywords: [
    "web development Jamaica",
    "website design Kingston",
    "e-commerce development Jamaica",
    "custom web applications",
    "Next.js development",
    "React development Jamaica",
    "professional website design",
    "Jamaica web developer",
    "mobile app development",
    "digital marketing Jamaica"
  ],
  authors: [{ name: "Zennith Developments", url: "https://zennithdevelopments.com" }],
  creator: "Zennith Developments",
  publisher: "Zennith Developments",
  metadataBase: new URL('https://zennithdevelopments.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zennithdevelopments.com",
    siteName: "Zennith Developments",
    title: "Zennith Developments | Premium Web Development Agency Jamaica",
    description: "Transform your business with professional web development. Custom websites, e-commerce, and applications built with modern technology. Trusted by 100+ Jamaican businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zennith Developments - Professional Web Development Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zennith Developments | Web Development Agency Jamaica",
    description: "Professional web development services in Jamaica. Custom websites, e-commerce, and applications that drive results.",
    images: ["/twitter-image.jpg"],
    creator: "@zennithdevelopments"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#0a2463',
    'msapplication-TileImage': '/ms-icon-144x144.png',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
