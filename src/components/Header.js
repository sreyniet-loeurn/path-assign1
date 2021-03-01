import React from "react";
import biglogo from "../image/biglogo.PNG";
import {
  Container,
  Nav,
  Navbar,
  
} from "react-bootstrap";
function Header() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img src={biglogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Nav Link :: */}
          <Nav className="mr-auto">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>Testimonials</Nav.Link>
            <Nav.Link>Help</Nav.Link>
          </Nav>
          <Nav>
            {/* Right Menu :: */}
            <Nav.Link>
              <strong>Sign In</strong>
            </Nav.Link>
            <Nav.Link>
              <button
                className="shadow btn btn-outline-danger rounded-pill "
                style={{ width: 150 }}
              >
                Sign Up
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
