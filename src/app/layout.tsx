import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { SiteBackground } from "@/components/sections/SiteBackground";
import Footer from "@/components/(layout)/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CG Model Tek LLC",
    template: "%s | CG Model Tek LLC",
  },
  description: "Industrial precision machining and automation.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CG Model Tek LLC",
    title: "CG Model Tek LLC",
    description: "Industrial precision machining and automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CG Model Tek LLC",
    description: "Industrial precision machining and automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased min-h-dvh bg-background text-foreground bg-schematic bg-schematic-vignette`}>
        <SiteBackground />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="min-h-[70dvh]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
