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
import { API_BASE_URL } from '@/config'
import axios from 'axios'
import React from 'react'

export const metadata = {
  title: 'About Haatak | Simplifying Digital Gold Investment',
  description: 'Discover Haatak’s mission to make gold investment easy, secure, and accessible. Learn about our tech-backed, user-first approach.',
  keywords: 'about haatak, fintech gold startup India, digital gold team, gold vision mission, secure wealth builder, empowering gold savers, RBI registered partner, India’s gold investment story, fintech innovation India, saving made simple, haatak brand values, transparent gold savings, gold for all, inclusive finance India, smart wealth platform',
}

async function About() {
    const fetchOurWins = await fetch(`${API_BASE_URL}/our-wins`);
    // const ourWinsData = await fetchOurWins.json();
    // console.log("error", ourWinsData);
    return (
        <main className=''>
            <AboutHero />
            <AboutSecondSection />
            <AboutThirdSection />
            <OurMissionSection />
            <PolicySection />
            <SpecialitySection />
            <WhoWeAreSection />
            {/* <OurWinsSection ourWins={ourWinsData} /> */}
            <JoinJourneySection />
            <LastSection />
        </main>
    )
}

export default About