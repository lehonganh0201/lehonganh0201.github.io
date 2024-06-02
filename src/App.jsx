import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './common/NavBar';
import Equations from './components/Equations';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import Equation from './components/Equation';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/equations' element=<Equations/>/>
        <Route path='/' element=<Home/>/>
        <Route path='/equation' element=<Equation/>/>
        <Route path='/profile' element=<Profile/>/>
      </Routes>
    </div>
  );
};

export default App;
