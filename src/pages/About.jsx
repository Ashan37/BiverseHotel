import React from "react";
import Header from "../Components/Header/Header";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import Footer from "../Components/Footer/Footer";
import AboutHero from "../Components/heroslider/AboutHero";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about">
      <Container-fluid>
        <Header />
      </Container-fluid>

      <Container-fluid>
        <AboutHero />
      </Container-fluid>

      <Container className="content">
        <Row>
          <Col lg="6" md="12" sm="12">
            <h1 className="about-head">About Biverse Hotel</h1>
            <p className="para">
              At Biverse Hotel, we offer more than just a stay we provide an
              experience that celebrates inclusivity, comfort, and world-class
              hospitality. Located in Nugegoda, our hotel blends modern elegance
              with cultural richness, ensuring every guest feels at home.
            </p>
            <p className="para">
              Enjoy luxurious accommodations, exceptional dining experiences,
              and top-tier amenities, including a spa, fitness center, and
              infinity pool. Whether you’re here for business or leisure, our
              personalized service and welcoming atmosphere make your stay truly
              memorable.
            </p>
            <p className="para">
              With a strong commitment to sustainability and diversity, Biverse
              Hotel embraces guests from all backgrounds, creating a space where
              everyone belongs. Book your stay today and discover a world of
              comfort, culture, and connection.
            </p>
          </Col>

          <Col className="content-photo" lg='6' md='12' sm='12'>
          <img src="/src/assets/about/content.jpg" alt="Description" width="100%" />
          </Col>
        </Row>
      </Container>

      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
