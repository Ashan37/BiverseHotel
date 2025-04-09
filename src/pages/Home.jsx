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
import Accordion from 'react-bootstrap/Accordion';

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
            <Col lg='4' md='6' sm='6'>
            <div className="middle_content_photos d-flex justify-content-center">
              <img
                src="/src/assets/home/dining1.jpg"
                width="240px"
                height="300px"
              />
              </div>
              <div className="middle_content_description d-flex justify-content-center">
                <Link to="/dining" className="text-decoration-none"><h5>Dining</h5></Link>
              </div>
            </Col>
            <Col lg='4' md='6' sm='6'>
            <div className="middle_content_photos d-flex justify-content-center">
              <img
                src="/src/assets/home/event1.jpg"
                width="240px"
                height="300px"
              />
              </div>
              <div className="middle_content_description d-flex justify-content-center">
                <Link to="/events" className="text-decoration-none"><h5>Events</h5></Link>
              </div>
            </Col>
            <Col lg='4' md='6' sm='6'>
            <div className="middle_content_photos d-flex justify-content-center">
              <img
                src="/src/assets/home/offers1.jpg"
                width="240px"
                height="300px"
              />
              </div>
              <div className="middle_content_description d-flex justify-content-center">
              <Link to="/events" className="text-decoration-none"><h5>Offers</h5></Link>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="bottom_section">
          <Row>
            <h1 className="d-flex justify-content-center">Learn More About Biverse Hotel</h1>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
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
