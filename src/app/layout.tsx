import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LiquidProvider } from "@/contexts/liquid-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YT Services - Professional YouTube Growth Solutions",
  description: "Scale your YouTube channel with professional video editing, automation, and growth services. Trusted by 500+ creators.",
  keywords: ["youtube services", "video editing", "youtube automation", "thumbnail design", "youtube seo"],
  openGraph: {
    title: "YT Services - Professional YouTube Growth Solutions",
    description: "Scale your YouTube channel with professional video editing, automation, and growth services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <ThemeProvider defaultTheme="dark">
          <LiquidProvider>
            {children}
          </LiquidProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
