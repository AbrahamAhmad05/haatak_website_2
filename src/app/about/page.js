import AboutHero from '@/components/about/AboutHero'
import AboutThirdSection from '@/components/about/AboutThirdSection'
import JoinJourneySection from '@/components/about/JoinJourneySection'
import LastSection from '@/components/about/LastSection'
import OurMissionSection from '@/components/about/OurMissionSection'
import OurWinsSection from '@/components/about/OurWinsSection'
import PolicySection from '@/components/about/PolicySection'
import AboutSecondSection from '@/components/about/SecondSection'
import SpecialitySection from '@/components/about/SpecialitySection'
import WhoWeAreSection from '@/components/about/WhoWeAreSection'
import React from 'react'

function About() {
    return (
        <main>
            <AboutHero />
            <AboutSecondSection />
            <AboutThirdSection />
            <OurMissionSection />
            <PolicySection />
            <SpecialitySection />
            <WhoWeAreSection />
            <OurWinsSection />
            <JoinJourneySection />
            <LastSection />
        </main>
    )
}

export default About