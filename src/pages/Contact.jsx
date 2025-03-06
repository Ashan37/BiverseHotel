import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import Footer from "../Components/Footer/Footer";
import ContactHero from "../Components/heroslider/ContacHero";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contactpage">
      <Container-fluid>
        <Header />
      </Container-fluid>

      <Container-fluid>
        <ContactHero />
      </Container-fluid>

      <Container className="content">
        <Row className="px-5">
          <Col lg="6" md="12" sm="12" className="px-5">
            <h1 className="about-head">Contact Us</h1>
            <p className="para">
              We'd love to hear from you! Wheher you have a question about
              reservations, amenities, or anything else, our friendly team is
              here to help. Feel free to reach out via phone, email, or visit us
              in person. We look forward to making your stay unforgettable!
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="middle_content">
        <div className="middle_content__contacts">

          <Row className="contact_content justify-content-center px-5">
            <Col lg="4" md="6" sm="12" className="contacts px-5">
              <h1>The Biverse Hotel</h1>
              <div className="item">
                <p>
                  <i class="ri-hotel-line"></i>
                  21/3,d Road,Colombo 10,Sri Lanka
                </p>
                <p>
                  <i class="ri-phone-fill"></i>Phone: 011-0897631
                </p>
                <p>
                  <i class="ri-mail-fill"></i>Email: biversehotel@gmail.com
                </p>
              </div>
            </Col>

            <Col lg="4" md="6" sm="12" className="contacts px-5">
              <h1>For Food & Beverage</h1>
              <p>
                <i class="ri-phone-fill"></i>Phone: 011-4545999
              </p>
              <p>
                <i class="ri-mail-fill"></i>Email:
                biversefoodbeverage@gmail.com
              </p>
            </Col>

            <Col lg="4" md="6" sm="12" className="contacts px-5">
              <h1>For Events </h1>
              <p>
                <i class="ri-phone-fill"></i>Phone: 011-5454666
              </p>
              <p>
                <i class="ri-mail-fill"></i>Email: biverseevents@gmail.com
              </p>
            </Col>
          </Row>
        </div>

        <Row className="contact_content justify-content-center px-5">
          <Col lg="4" md="4" sm="12" className="contacts px-5">
            <h1>Our Sales Team</h1>
            <h4>Keshan De Silva</h4>
            <p>
              <i class="ri-phone-fill"></i>Phone: 077-4565753
            </p>
            <p>
              <i class="ri-mail-fill"></i>Email: keshandesilva@gmail.com
            </p>
          </Col>
          <Col lg="8" md="4" sm="12" className="contacts px-5">
            <h1>Our Sales Team</h1>
            <h4>Dulith Ranasinghe</h4>
            <p>
              <i class="ri-phone-fill"></i>Phone: 077-8282822
            </p>
            <p>
              <i class="ri-mail-fill"></i>Email: dulithranasinghe@gmail.com
            </p>
          </Col>
        </Row>
      </Container>

      <Container-fluid>
        <Row className="map">
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
        </Row>
      </Container-fluid>

      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
