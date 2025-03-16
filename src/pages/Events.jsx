import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import EventsHero from '../Components/heroslider/EventsHero'

export default function Events() {
  return (
    <div>
      <Container-fluid>
        <Header />
      </Container-fluid>

      <Container-fluid>
        <EventsHero />
      </Container-fluid>
      <Container-fluid>
              <Footer />
            </Container-fluid>
    </div>
  )
}

