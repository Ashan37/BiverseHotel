import React from 'react'
import Header from '../Components/Header/Header'
import { Container, Row, Col} from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import Button from "react-bootstrap/Button";
import Footer from "../Components/Footer/Footer";
import HeroSlider from "../Components/heroslider/Heroslider";
import AboutHero from '../Components/heroslider/AboutHero';



export default function About() {
  return (
    <div className='about'>

      <Container-fluid>
        <Header/>
      </Container-fluid>
      <Container-fluid>
        <AboutHero/>
      </Container-fluid>
      <Container-fluid>
        <Footer/>
      </Container-fluid>
    </div>
  )
}
