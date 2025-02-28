import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'




export default function Layout() {
  return (
    <Router>
    <div>
      <Header/>
      <Footer />
    </div>
  </Router>
    
  )
}
