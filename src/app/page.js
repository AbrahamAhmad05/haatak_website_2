import HeroSection from "@/components/home/HeroSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import VaultSection from "@/components/home/VaultSection";
import AppPreviewSection from "@/components/home/AppPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ReferSection from "@/components/home/ReferSection";
import FAQSection from "@/components/home/FAQSection";
import { original } from "@/lib/font";

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
