import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import './App.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";


function App() {
  return (
    <>
       <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/sign-in"} element={<SignIn/>}/>
        <Route path={"/profile"} element={<Profile/>}/>
       </Routes>
    </>
  );
}

export default App;
