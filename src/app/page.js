import HeroSection from "@/components/home/HeroSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import VaultSection from "@/components/home/VaultSection";
import AppPreviewSection from "@/components/home/AppPreviewSection";
import ReferSection from "@/components/home/ReferSection";
import FAQSection from "@/components/home/FAQSection";
import { original } from "@/lib/font";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata = {
  title: 'Haatak – Save in 24K Digital Gold | Trusted Gold Saving App',
  description: 'Start your gold saving journey with Haatak. Save, gift, and grow real 24K digital gold starting at just ₹10. Secure. Insured. RBI-compliant storage.',
  keywords: 'about haatak, fintech gold startup India, digital gold team, gold vision mission, secure wealth  builder, empowering gold savers, RBI registered partner, India’s gold investment story, fintech innovation India, saving made simple, haatak brand values, transparent gold savings, gold for all, inclusive finance India, smart wealth platform',
  alternates: {
    canonical: 'https://www.haatak.com/',  // Explicit trailing slash
  },
}

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
