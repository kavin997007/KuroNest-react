import React from 'react'
import Header from '../../components/LayoutComponent/Header/Header'
import Hero from '../../components/UIComponents/About/AboutHero/Hero'
import AboutCompanyStory from '../../components/UIComponents/About/AboutCompanyStory/CompanyStory'
import MissionVision from '../../components/UIComponents/About/AboutMissionVision/MissionVision'
import WhyChooseUs from '../../components/UIComponents/About/AboutWhyChooseUs/WhyChooseUs'
import Services from '../../components/UIComponents/About/AboutServices/Services'
import Review from '../../components/UIComponents/About/AboutReviews/Review'
import FAQ from '../../components/UIComponents/About/AboutFAQ/FAQ'

const About = () => {
  return (
    <div>
      <Hero/>
      <AboutCompanyStory/>
      <MissionVision/>
      <WhyChooseUs/>
      <Services/>
      <Review/>
      <FAQ/>
    </div>
  )
}

export default About
