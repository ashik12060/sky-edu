import React from 'react'
import Header from '../component/shared/Header/Header'
import Hero from '../component/Hero/Hero'
import HeroBanner from '../component/HeroBanner/HeroBanner'
import HeroTwo from '../component/Hero/HeroTwo'
import Testimonial from '../component/Testimonial/Testimonial'
import IndustryPartnerships from '../component/IndustryPartnerships/IndustryPartnerships'
import FreeConsultation from '../component/FreeConsultation/FreeConsultation'
import Footer from '../component/shared/Footer/Footer'

const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <HeroBanner />
    <HeroTwo />
    <Testimonial />
    <IndustryPartnerships />
    <FreeConsultation />
    <Footer />

    </>
  )
}

export default Home