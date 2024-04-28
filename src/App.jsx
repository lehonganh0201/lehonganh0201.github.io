import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from './pages/Contact/Contact'
import Home from "./pages/Home/Home";
import AboutUs from './pages/AboutUs/AboutUs'
import { Route, Routes, Link, NavLink } from "react-router-dom";
import './App.scss'
import 'bootstrap/dist/css/bootstrap.css';
function App() {


  return (
    <>
      {/* <nav>
        <ul>
          <li><NavLink to="/" className={activeNav}>Home</NavLink></li>
          <li><NavLink to="/contact" className={activeNav}>Contact</NavLink></li>
          <li><NavLink to="/about-us" className={activeNav}>AboutUs</NavLink></li>
        </ul> */}

        {/* <br/> <br/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/sign-up" element={<Register/>}/>
        </Routes>
      {/* </nav> */}
    </>
  );
}

export default App;
