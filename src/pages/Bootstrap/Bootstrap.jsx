import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../common/Header/Header'
import Banner from '../../components/Banner/Banner'
import Testimonials from '../../components/Testimonials/Testimonials'
import Footer from '../../common/Footer/Footer'

const Bootstrap = () => {
    const showBanner =
        <div className="width-page">
          <h1>Generate more leads with a professional landing page!</h1>
        </div>

    const showRegister =
        <div className="width-page">
            <h1>Ready to get started? Sign up now!</h1>
            <Link to={"/sign-up"}>
                <button className="btn btn-primary">Register</button>
            </Link>
        </div>


  return (
    <div>
       <Header/>
       <Banner show={showBanner}/>
       <section className="features container-center">
        <div className="width-page">
          <div className="feature-item">
            <h1 className="h1-title">Fully Responsive</h1>
            <p className="p-desc">
              This theme will look great on any device, no matter the size!
            </p>
          </div>
          <div className="feature-item">
            <h1 className="h1-title">Bootstrap 5 Ready</h1>
            <p className="p-desc">
              Featuring the latest build of the new Bootstrap 5 framework!
            </p>
          </div>
          <div className="feature-item">
            <h1 className="h1-title">Easy to Use</h1>
            <p className="p-desc">
              Ready to use with your own content, or customize the source files!
            </p>
          </div>
        </div>
      </section>

      <section className="show-case">
        <div className="show-case-item">
          <div className="show-case-content">
            <h1 className="h1-title">Fully Responsive Design</h1>
            <p className="p-desc">
              When you use a theme created by Start Bootstrap, you know that the
              theme will look great on any device, whether it's a phone, tablet,
              or desktop the page will behave responsively!
            </p>
          </div>
          <div className="show-case-img">
            <img src="https://start-bootstrap-ten.vercel.app/assets/bg-showcase-1-DKDWhlFr.jpg" />
          </div>
        </div>
        <div className="show-case-item">
          <div className="show-case-img">
            <img src="https://start-bootstrap-ten.vercel.app/assets/bg-showcase-2-C7T817Rj.jpg" />
          </div>
          <div className="show-case-content">
            <h1 className="h1-title">Updated For Bootstrap 5</h1>
            <p className="p-desc">
            Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!
            </p>
          </div>
        </div>
        <div className="show-case-item">
          <div className="show-case-content">
            <h1 className="h1-title">Easy to Use & Customize</h1>
            <p className="p-desc">
            Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!
            </p>
          </div>
          <div className="show-case-img">
            <img src="https://start-bootstrap-ten.vercel.app/assets/bg-showcase-3-fvuC94nJ.jpg" />
          </div>
        </div>
      </section>
      <Testimonials/>
      <Banner show={showRegister}/>
      <Footer/>
    </div>
  )
}

export default Bootstrap
