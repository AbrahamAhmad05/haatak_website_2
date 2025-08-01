import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { original } from "@/lib/font";
import LenisProvider from "@/components/LenisProvider";
import { Toaster } from "react-hot-toast";
import FloatingQRCode from "@/components/FloatingQRCode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const font_original = original({

// })

export const metadata = {
  title: "Haatak - Buy 24K Gold",
  description: "Making gold investment accessible, secure, and effortless for everyone.",
  metadataBase: new URL('https://www.haatak.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest'
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${original.className} antialiased`}
      >
        <Navbar />
        <LenisProvider>
          {children}
          <Toaster position="top-right" />
          <FloatingQRCode />
        </LenisProvider>
        <Footer />
      </body>
    </html>
  );
}
