import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google"; // Added Inter
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranamya Jain - Applied AI Solutions | Creative Portfolio",
  description: "Crafting Clarity-First AI solutions for Human-Centric Workflows Worldwide. Specializing in GenAI, RAG pipelines, and AI automation.",
  keywords: ["Applied AI", "GenAI", "AI Consulting", "AI Automation", "RAG Pipelines", "ComfyUI", "n8n", "AI Solutions", "Machine Learning", "Pranamya Jain"],
  authors: [{ name: "Pranamya Jain" }],
  creator: "Pranamya Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pranamya.tech",
    title: "Pranamya Jain - Applied AI Solutions",
    description: "Crafting Clarity-First AI solutions for Human-Centric Workflows Worldwide",
    siteName: "Pranamya Jain Portfolio",
    images: [
      {
        url: "/pranamya-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Pranamya Jain - Applied AI Solutions",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased min-h-full text-gray-900 bg-gray-200`}
      >
        <div className="fixed top-0 w-full h-screen -z-10">
          <iframe
            src="https://my.spline.design/flowingribbon-TlkEaNrvCCNZuJBNJN3LXpRF"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Spline 3D Background"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
