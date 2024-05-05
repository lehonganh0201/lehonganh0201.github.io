import React from 'react'
import Header from '../../common/Header/Header'
import Features from '../../components/Features/Features'
import Testimonials from '../../components/Testimonials/Testimonials'
import Footer from '../../common/Footer/Footer'
import Banner from '../../components/Banner/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
