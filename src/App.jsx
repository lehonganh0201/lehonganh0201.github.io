import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
