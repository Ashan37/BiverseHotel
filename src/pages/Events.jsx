import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import EventsHero from "../Components/heroslider/EventsHero";
import {Container,Row,Col} from 'react-bootstrap';
import "../styles/events.css";

export default function Events() {
  return (
    <div>
      <Container-fluid>
        <Header/>
      </Container-fluid>

      <Container-fluid>
        <EventsHero />
      </Container-fluid>

      <Container className="content">
        <Row className="px-5">
          <Col lg="12" md="12" sm="12" className=" px-5">
            <h1 className="dining-head d-flex justify-content-center">
              Events At Our Place
            </h1>
            <p className="para">
              Celebrate life's most special moments at Biverse Hotel! Whether
              it's a dreamy wedding, a lively birthday bash, or an electrifying
              DJ party, our stunning venues and top-notch services set the
              perfect stage for unforgettable celebrations. With stylish décor,
              delicious catering, and expert event planning, we bring your
              vision to life while you focus on making memories. Let the music
              play, the laughter flow, and the good times roll at Biverse Hotel 
              where every occasion becomes extraordinary. Book your event
              with us today!
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="middle_content">
        <Row className="middle_content_top g-3">
          {" "}
          {[
            { src: "src/assets/events/wedding.jpg", name: "Weddings" },
            { src: "src/assets/events/djparty.jpg", name: "Dj Nights" },
            { src: "src/assets/events/birthdayparty.jpg", name: "Birthday Parties" },
          ].map(
            (
              place,
              index 
            ) => (
              <Col key={index} className="px-2" lg="4" md="12" sm="12" xs="12">
                <div className="mid_content_top">
                  <div className="middle_content_top_photo d-flex justify-content-center">
                    <img
                      src={place.src}
                      className="img-fluid rounded"
                      alt={place.name}
                      style={{ height: "500px", width: "350px" }}
                    />
                  </div>
                  <div className="middle_content_top_description d-flex justify-content-center">
                    <h1>{place.name}</h1>
                  </div>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>

      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
