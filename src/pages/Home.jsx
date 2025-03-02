import React from "react";
import "../styles/home.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div className="home">
      <Container className="top">
        <Row className="top__head d-flex justify-content-center text-center">
          <Col xs="12">
            <h1>Biverse Hotel</h1>
          </Col>
        </Row>

        <Row>
          <Col className="top__content" xs='12'>
            <p className="top__content d-flex justify-content-center text-justify">
              Welcome to Biverse Hotel, a luxurious retreat offering
              world-class hospitality and comfort. Established in 2002, our
              hotel is situated in the heart of colombo 10, providing
              guests with a perfect blend of elegance and convenience. Whether
              you're here for business or leisure, Biverse Hotel ensures a
              memorable stay with top-tier facilities, including spacious and
              well-appointed rooms, fine dining restaurants, a state-of-the-art
              fitness center, a relaxing spa, and modern conference halls. Our
              prime location offers easy access to major attractions, shopping
              centers, and transportation hubs, making it an ideal choice for
              travelers. Experience warmth, luxury, and exceptional service at
              Biverse Hotel where your comfort is our priority.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Link to='/about'>
          <Button variant="dark">Read More</Button>
          </Link>   
          </Col>
        </Row>
      </Container>
    </div>
  );
}
