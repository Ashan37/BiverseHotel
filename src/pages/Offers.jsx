import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import OffersHero from '../Components/heroslider/OffersHero'

export default function Offers() {
  return (
    <div>
      <Container-fluid>
        <Header/>
      </Container-fluid>

      <Container-fluid>
        <OffersHero/>
      </Container-fluid>

      <Container-fluid>
        <Footer/>
      </Container-fluid>
    </div>
  )
}
