import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Components/Header/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import Footer from '../Components/Footer/Footer';


export default function Contact() {
  return (
    <div>
      <Container-fluid>
        <Header />
      </Container-fluid>

         <Container-fluid>
              <Footer />
            </Container-fluid>

    </div>
  )
}
