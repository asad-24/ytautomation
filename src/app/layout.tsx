import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LiquidProvider } from "@/contexts/liquid-context";
import { WebVitals } from "@/components/web-vitals";
import ErrorBoundary from "@/components/error-boundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: "YT Services - Professional YouTube Growth Solutions",
    template: "%s | YT Services"
  },
  description: "Scale your YouTube channel with professional video editing, automation, and growth services. Trusted by 500+ creators.",
  keywords: ["youtube services", "video editing", "youtube automation", "thumbnail design", "youtube seo"],
  authors: [{ name: "YT Services Team" }],
  creator: "YT Services",
  publisher: "YT Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ytservices.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "YT Services - Professional YouTube Growth Solutions",
    description: "Scale your YouTube channel with professional video editing, automation, and growth services.",
    url: "https://ytservices.com",
    siteName: "YT Services",
    images: [
      {
        url: "/og-image.jpg", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "YT Services - Professional YouTube Growth Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YT Services - Professional YouTube Growth Solutions",
    description: "Scale your YouTube channel with professional video editing, automation, and growth services.",
    images: ["/og-image.jpg"],
    creator: "@ytservices", // Replace with your Twitter handle
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
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/geist/v1/4Xa_oEBAKrwcP38vdt51.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <ThemeProvider defaultTheme="dark">
          <LiquidProvider>
            <WebVitals />
            {children}
          </LiquidProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
