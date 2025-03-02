import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Home from '../../pages/Home'
import Footer from '../Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import Heroslider from '../heroslider/Heroslider'





export default function Layout() {
  return (
    <Router>
    <div>
      <Header/>
      <Heroslider/>
      <Home/>
      <Footer/>
    </div>
  </Router>
    
  )
}
