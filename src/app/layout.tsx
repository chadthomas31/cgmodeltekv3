import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import "../styles/cgmodeltek_slider_user.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Link from "next/link";
import Image from "next/image";
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
          {/* Floating top menu (transparent, no boxes) */}
          <nav className="fixed top-0 inset-x-0 z-50">
            <div className="w-full px-2 sm:px-3 lg:px-4 py-3">
              <div className="flex items-center gap-6 text-sm font-medium text-white drop-shadow">
                <Link href="/" className="flex items-center gap-3">
                  <Image src="/images/logo/fulllogo_nobuffer.png" alt="CG Model Tek" width={520} height={104} priority className="h-28 w-auto object-contain" />
                </Link>
                <div className="ml-auto flex items-center gap-6">
                  <Link href="/" className="hover:underline underline-offset-4">Home</Link>
                  <Link href="/about" className="hover:underline underline-offset-4">About</Link>
                  <Link href="/services" className="hover:underline underline-offset-4">Services</Link>
                  <Link href="/industries" className="hover:underline underline-offset-4">Industries</Link>
                  <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
                  <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="min-h-[70dvh] pt-36">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
