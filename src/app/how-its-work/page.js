import OurWinsSection from '@/components/about/OurWinsSection'
import DownloadAppSection from '@/components/howItsWork/DownloadAppSection'
import DownloadStepsSection from '@/components/howItsWork/DownloadStepsSection'
import HeroSection from '@/components/howItsWork/HowHeroSection'
import WhyItFeelsEffortless from '@/components/howItsWork/WhyItFeelsEffortless'

function HowItsWork() {
    return (
        <main>
            <HeroSection />
            <DownloadAppSection />
            <DownloadStepsSection />
            <WhyItFeelsEffortless />
            <OurWinsSection />
        </main>
    )
}

export default HowItsWork