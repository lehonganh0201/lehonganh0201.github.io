import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
const Footer = () => {
  return (
    <>
        <footer className='footer container-center'>
            <div className='width-page'>
                <div>
                    <ul className='footer-nav'>
                        <li>
                            <Link to={"/about-us"}>About Us</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                        <li>
                            <Link to={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link to={"/sign-up"}>Signup</Link>
                        </li>
                    </ul>
                    <p className='p-desc'>© Your Website 2023. All Rights Reserved.</p>
                    
                </div>
                <div className='footer-socials'>
                    <Link to={"/"}>Facebook</Link>
                    <Link to={"/"}>Twitter</Link>
                    <Link to={"/"}>Instargram</Link>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
