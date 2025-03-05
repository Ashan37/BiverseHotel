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
    <div>
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

      <Container>
        <Row className="justify-content-center px-5">
          <Col lg="4" md="6" sm="12" className="contacts px-5">
            <h1>The Biverse Hotel</h1>
            <p>
              <i class="ri-hotel-line"></i>
              221/3, Barmen Road, Colombo 10, Sri Lanka
            </p>
            <p>
              <i class="ri-phone-fill"></i>Phone: 011-0897631
            </p>
            <p>
              <i class="ri-mail-fill"></i>Email: biversehotel@gmail.com
            </p>
          </Col>

          <Col lg="4" md="6" sm="12" className="contacts px-5">
            <h1>For Food & Beverage</h1>
            <p>
              <i class="ri-phone-fill"></i>Phone: 011-4545999
            </p>
            <p>
              <i class="ri-mail-fill"></i>Email: biversefoodandbeverage@gmail.com
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
      </Container>

      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
