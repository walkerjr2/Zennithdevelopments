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
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#0a2463" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#0a2463" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
