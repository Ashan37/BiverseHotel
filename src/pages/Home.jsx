import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import Button from "react-bootstrap/Button";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroSlider from "../Components/heroslider/Heroslider";
import Accordion from "react-bootstrap/Accordion";

export default function Home() {
  return (
    <>
      <div className="home">
        <Container-fluid>
          <Header />
        </Container-fluid>

        <Container-fluid>
          <HeroSlider />
        </Container-fluid>

        <Container className="top">
          <Row className="top__head d-flex justify-content-center text-center">
            <Col xs="12">
              <h1>Biverse Hotel</h1>
            </Col>
          </Row>

          <Row className="content">
            <Col className="top__content" xs="12">
              <p className="top__content d-flex justify-content-center text-justify">
                Welcome to Biverse Hotel, a luxurious retreat offering
                world-class hospitality and comfort. Established in 2002, our
                hotel is situated in the heart of colombo 10, providing guests
                with a perfect blend of elegance and convenience. Whether you're
                here for business or leisure, Biverse Hotel ensures a memorable
                stay with top-tier facilities, including spacious and
                well-appointed rooms, fine dining restaurants, a
                state-of-the-art fitness center, a relaxing spa, and modern
                conference halls. Our prime location offers easy access to major
                attractions, shopping centers, and transportation hubs, making
                it an ideal choice for travelers. Experience warmth, luxury, and
                exceptional service at Biverse Hotel where your comfort is our
                priority.
              </p>
            </Col>
          </Row>
          <Row className="button-1">
            <Col>
              <Link to="/about">
                <Button variant="dark">Read More</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="middle">
          <Row className="middle_content justify-content-center align-items-center">
            <Col lg="4" md="6" sm="6">
              <div className="mid_content">
                <Link to="/dining" className="text-decoration-none">
                  <div className="middle_content_photos d-flex justify-content-center">
                    <img
                      src="/src/assets/home/dining1.jpg"
                      width="240px"
                      height="300px"
                    />
                  </div>
                  <div className="middle_content_description d-flex justify-content-center">
                    <h5>Dining</h5>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6" sm="6">
              <div className="mid_content">
                <Link to="/events" className="text-decoration-none">
                  <div className="middle_content_photos d-flex justify-content-center">
                    <img
                      src="/src/assets/home/event1.jpg"
                      width="240px"
                      height="300px"
                    />
                  </div>
                  <div className="middle_content_description d-flex justify-content-center">
                    <h5>Events</h5>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6" sm="6">
              <div className="mid_content">
                <Link to="/events" className="text-decoration-none">
                  <div className="middle_content_photos d-flex justify-content-center">
                    <img
                      src="/src/assets/home/offers1.jpg"
                      width="240px"
                      height="300px"
                    />
                  </div>
                  <div className="middle_content_description d-flex justify-content-center">
                    <h5>Offers</h5>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid className="bottom_section py-4 px-3">
          <Row className="justify-content-center text-center">
            <Col xs={12} md={10} lg={8}>
              <h1>Learn More About Biverse Hotel</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <Accordion className="accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How do I get to Biverse Hotel?
                  </Accordion.Header>
                  <Accordion.Body>
                    Biverse Hotel is easy to reach! We're conveniently located
                    in the heart of the city, just a short drive from the
                    airport and major transport hubs...
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What popular shopping places are close to Biverse Hotel?
                  </Accordion.Header>
                  <Accordion.Body>
                    Biverse Hotel is surrounded by some of the city's most
                    popular shopping destinations...
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    What are popular tourist attractions near Biverse Hotel?
                  </Accordion.Header>
                  <Accordion.Body>
                    Biverse Hotel is ideally located near some of the city's top
                    tourist attractions...
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>

        <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=delkanda,%20477%20High%20Level%20Rd,%20Nugegoda%2010250+(Biverse%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/collections/drones/">best drones</a>
        </iframe>

        <Container-fluid>
          <Footer />
        </Container-fluid>
      </div>
    </>
  );
}
