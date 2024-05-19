import React from 'react'
import Header from '../../common/Header/Header'
import Banner from '../Banner/Banner'
import Footer from '../../common/Footer/Footer'

const Contact = () => {
    const showBanner = <div className="width-page">
        <h1>Contact Start Bootstrap</h1>
        <div className="contact-form">
            <input type="text" placeholder="Email Address"/>
            <button className="btn btn-primary">Contact</button>
        </div>
    </div>
  return (
    <div>
      <Header/>
      <Banner show={showBanner}/>
      <Footer/>
    </div>
  )
}

export default Contact
