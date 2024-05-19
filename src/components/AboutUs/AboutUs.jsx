import React from 'react'
import Header from '../../common/Header/Header'
import Banner from '../Banner/Banner'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../../common/Footer/Footer'

const AboutUs = () => {
    const showBanner = <div className="width-page">
        <h1>About Us</h1>
    </div>

  return (
    <div>
      <Header/>
      <Banner show={showBanner}/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default AboutUs
