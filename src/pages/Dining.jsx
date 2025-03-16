import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import DiningHero from "../Components/heroslider/DiningHero";
import "../styles/dining.css";

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
            <h1 className="dining-head d-flex justify-content-center">
              Dining At Our Place
            </h1>
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
      <Container className="middle_content">
      <Row className="middle_content_top g-3"> {/* Adds spacing between columns */}
        {
        [
          {src:"src/assets/dining/inhotel.jpg", name:"Tango Hotel"},
          {src:"src/assets/dining/coffee.jpg", name:"Coffee Shop"},
          {src:"src/assets/dining/bar.jpg", name:"Hest  Bar"}
          
        ]
        .map((place, index) => ( // Adjust number of images
          <Col key={index} className="px-2" lg="4" md="12" sm="12" xs="12">
            <div className="mid_content_top">
              <div className="middle_content_top_photo d-flex justify-content-center">
                <img 
                  src={place.src}
                  className="img-fluid rounded" 
                  alt={place.name}
                  style={{height:"500px",width:"350px"}}
                 
                />
              </div>
              <div className="middle_content_top_description d-flex justify-content-center">
                <h1>{place.name}</h1>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>

      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
