import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="container-center header">
                <div className="width-page">
                    <Link to={"/"}>
                        <h1>Start Bootstrap</h1>
                    </Link>
                    <Link to={"/login"}>
                        {localStorage.getItem("login") !== null ? <button className="btn btn-primary">Login</button> : <p>Hi, I'm Hồng Anh</p>}
                    </Link>
                </div>
        </header>
    </>
  )
}

export default Header
