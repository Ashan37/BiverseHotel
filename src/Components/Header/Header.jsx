import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'remixicon/fonts/remixicon.css';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#"><i class="ri-hotel-line"></i>BiverseHotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About US</Nav.Link>
            <Nav.Link href="/contact">Contacts</Nav.Link>

            <NavDropdown title="Show" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/dining">Dining</NavDropdown.Item>
              <NavDropdown.Item href="/wedding&events">Wedding & Events</NavDropdown.Item>
              <NavDropdown.Item href="/offers">Offers</NavDropdown.Item>
            </NavDropdown>
  
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;