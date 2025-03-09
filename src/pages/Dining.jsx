import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import DiningHero from "../Components/heroslider/DiningHero";

export default function Dining() {
  return (
    <div className="diningpage">
      <Container-fluid>
        <Header />
      </Container-fluid>

      <Container-fluid>
        <DiningHero />
      </Container-fluid>
      <Container className="content">
        <Row className="px-5">
          <Col lg="12" md="12" sm="12" className=" px-5">
            <h1 className="dining-head d-flex justify-content-center">Dining At Our Place</h1>
            <p className="para">
              Indulge in a delightful culinary experience with our diverse
              dining options, where flavors from around the world meet fresh,
              high-quality ingredients. Whether you're craving a gourmet meal, a
              casual bite, or a refreshing beverage, our selection of
              restaurants, cafés, and bars offers something to satisfy every
              palate. Enjoy elegant fine dining, cozy comfort food, or exotic
              international dishes, all prepared by skilled chefs dedicated to
              excellence. With inviting ambiance, exceptional service, and a
              menu crafted to delight, every dining experience promises to be a
              memorable one. Savor every bite and elevate your mealtime moments
              with us.
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
