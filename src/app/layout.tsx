import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeTransitionProvider } from "@/components/ThemeTransitionWave";
import NeonCursorTrail from "@/components/NeonCursorTrail";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luu Thanh Danh — AI Engineer & ML Researcher",
  description:
    "Personal portfolio of Luu Thanh Danh — AI Engineer specializing in deep learning, computer vision, and multimodal AI systems. Published at Springer CCIS & ECCV.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Multimodal AI",
    "HCMUS",
    "Portfolio",
  ],
  openGraph: {
    title: "Luu Thanh Danh — AI Engineer",
    description: "AI Engineer & ML Researcher at HCMUS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ThemeTransitionProvider>
            <NeonCursorTrail />
            <Navbar />
            {children}
          </ThemeTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
