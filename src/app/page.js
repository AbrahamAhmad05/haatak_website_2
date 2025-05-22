import Image from "next/image";
import { Geist, Geist_Mono,  } from "next/font/google";
import localFont from 'next/font/local'
import HeroSection from "@/components/home/HeroSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import VaultSection from "@/components/home/VaultSection";
import AppPreviewSection from "@/components/home/AppPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ReferSection from "@/components/home/ReferSection";
import FAQSection from "@/components/home/FAQSection";
import { original } from "@/lib/font";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const original = localFont({
//   src: '../styles/fonts/original/TTF/Original-Regular.ttf',
//   variable: "--font-original",
//   weight: '700'
// })
// const gilroy = localFont({
//   src: '../styles/fonts/gilroy/Gilroy-Regular.ttf',
//   variable: "--font-gilroy",
//   weight: '700'
// })
// const gotham = localFont({
//   src: '../styles/fonts/gotham/gotham-font/GOTHAM-MEDIUM.ttf',
//   variable: "--font-gotham",
//   weight: '700'
// })

// const originalSurfer = Original_Surfer({
//   variable: "--original-surfer",
//   weight: '400',
//   subsets: ["latin"],
// })

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div
      className={`${original.className}`}
    >
      <main className="">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <VaultSection />
        <AppPreviewSection />
        <TestimonialsSection />
        <ReferSection />
        <FAQSection />
      </main>
      
    </div>
  );
}
