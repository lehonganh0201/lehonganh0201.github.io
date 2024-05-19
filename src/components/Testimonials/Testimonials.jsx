import React from 'react'
import './Testimonials.scss'
const Testimonials  = () => {
  return (
    <>
        <section className='testimonials container-center'>
            <div className='width-page'>
                <h1 className='h1-title'>
                    What people are saying...
                </h1>
                <div className='testimonials-container'>
                    <div className='testimonial-item'>
                        <div className='avatar'>
                            <img src='https://start-bootstrap-ten.vercel.app/assets/testimonials-1-CNxFrjqD.jpg'/>
                        </div>
                        <h3>Margaret E.</h3>
                        <p>"This is fantastic! Thanks so much guys!"</p>
                    </div>
                    <div className='testimonial-item'>
                        <div className='avatar'>
                            <img src='https://start-bootstrap-ten.vercel.app/assets/testimonials-2-Ui5WBQGD.jpg'/>
                        </div>
                        <h3>Fred S.</h3>
                        <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                    </div>
                    <div className='testimonial-item'>
                        <div className='avatar'>
                            <img src='https://start-bootstrap-ten.vercel.app/assets/testimonials-3-CdIuPdtQ.jpg'/>
                        </div>
                        <h3>Sarah W.</h3>
                        <p>"Thanks so much for making these free resources available to us!"</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials 