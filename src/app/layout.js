import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { original } from "@/lib/font";
import LenisProvider from "@/components/LenisProvider";
import { Toaster } from "react-hot-toast";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body
        className={`${original.className} antialiased`}
      >
        <Navbar />
        <LenisProvider>
          {children}
          <Toaster position="top-right" />
        </LenisProvider>
        <Footer />
      </body>
    </html>
  );
}
