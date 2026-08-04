import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const siteDescription =
  "सफेदपोश यानि कि मामूली वेतन पर खटने वाले बुद्धिजीवियों के भी सम्मान और रोज़ी-रोटी की लड़ाई।";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hamaramorcha.com"),
  title: {
    default: "हमारा मोर्चा",
    template: "%s | हमारा मोर्चा",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "hi_IN",
    siteName: "हमारा मोर्चा",
    title: "हमारा मोर्चा",
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "हमारा मोर्चा",
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className="antialiased">
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
