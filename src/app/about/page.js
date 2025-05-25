import AboutHero from '@/components/about/AboutHero'
import AboutThirdSection from '@/components/about/AboutThirdSection'
import AboutSecondSection from '@/components/about/SecondSection'
import React from 'react'

function About() {
    return (
        <main>
            <AboutHero />
            <AboutSecondSection />
            <AboutThirdSection />
        </main>
    )
}

export default About