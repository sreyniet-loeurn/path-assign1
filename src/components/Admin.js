import React from "react";
import { Navbar, Nav, Col,Form } from "react-bootstrap";
import '../Admin.css'
function Admin() {
  return (

           
    <Navbar collapseOnSelect expand="lg" bg="dark">
      <Navbar.Brand href="#home">
        <img src="imgAdmin/logo-light-icon.png" alt="logo" />
      </Navbar.Brand>
      <Navbar.Brand href="#home">
        <img src="imgAdmin/extreme-light.png" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
               
          <Nav.Link>
          </Nav.Link>
        </Nav>
        <Nav>
    
          <Nav.Link>
         
          </Nav.Link>
          <Nav.Link>
            
              <img src="imgAdmin/1.jpg" alt="" className ="img-1"/>
            
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar> 
  );
}

export default Admin;
