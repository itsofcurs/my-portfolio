import type { Metadata, Viewport } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/layout/Preloader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Rohan Ankush Jadhav — AI & Data Science Engineer",
  description:
    "Portfolio of Rohan Ankush Jadhav. AI & Data Science Engineer building intelligent systems that solve real-world problems at scale.",
  keywords: [
    "AI Engineer",
    "Data Science",
    "Machine Learning",
    "Portfolio",
    "Rohan Ankush Jadhav",
  ],
  authors: [{ name: "Rohan Ankush Jadhav" }],
  openGraph: {
    title: "Rohan Ankush Jadhav — AI & Data Science Engineer",
    description:
      "Building intelligent systems that solve real-world problems at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Preloader />
        <Navbar />
        <main className="pl-0 pb-[80px] lg:pl-[80px] lg:pb-0 w-full">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
