import React from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'
import { MdLightMode } from 'react-icons/md'
const NavBar = () => {
  return (
    <nav className='navbar navbar-light bg-light shadow'>
      <div className='container'>
        <Link to="/" className='navbar-brand'>
          <img
            src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOkovCW2aAvYuF6tEJdo0Kue319MmHawVgRy0UBKmBbYAf6wyo'
            alt='Logo'
            className='logo'
          />
        </Link>
        <div className='nav-links'>
          <Link to='/bootstrap'>Bootstrap</Link>
          <Link to='/todo'>Todo App</Link>
          <Link to='/login'>Login</Link>

          <Link to='/darkmode'><MdLightMode/></Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
