import OurWinsSection from '@/components/about/OurWinsSection'
import DownloadAppSection from '@/components/howItsWork/DownloadAppSection'
import DownloadStepsSection from '@/components/howItsWork/DownloadStepsSection'
import HeroSection from '@/components/howItsWork/HowHeroSection'
import WhyItFeelsEffortless from '@/components/howItsWork/WhyItFeelsEffortless'

export const metadata = {
  title: 'How Haatak Works | Easy Digital Gold Savings Explained',
  description: 'No paperwork. No queues. Start saving gold from ₹10 daily—powered by secure vaults and intuitive design.',
  keywords: 'how to invest in gold app, gold SIP explained, gold savings guide, app onboarding steps, 24K gold buy process, haatak gold workflow, paperless gold investment, save gold daily, secure gold purchase, instant SIP start, easy gold platform, digital savings simplified, buy gold step-by-step, user-friendly gold app, gold app how-to',
}

function HowItsWork() {
    return (
        <main>
            <HeroSection />
            <DownloadAppSection />
            <DownloadStepsSection />
            <WhyItFeelsEffortless />
            {/* <OurWinsSection /> */}
        </main>
    )
}

export default HowItsWork