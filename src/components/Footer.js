import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content6 from "./Content6";
import footerlogo from "../image/footerlogo.PNG";
function Footer() {
  return (
    <div className="footerColor" style={{ position: "relative" }}>
      <Container>
        <Content6 style={{ position: "absolute" }} />
        <Row>
          <Col xs={6} sm={6} md={3} lg={3}>
            <div className="row">
              <img src={footerlogo} alt="" />
            </div>
            <p>
              <br />
              <strong>LaslesVPN</strong> is a private virtual network that
              <br />
              has unique featuers and has high security.
            </p>
            <div className="row ">
              <div className="roundShape shadow"></div>
              <div className="roundShape shadow"></div>
              <div className="roundShape shadow"></div>
            </div>
            <p className="mt-3">@2020LaslesVPN</p>
          </Col>
          <Col xs={6} lg={3} sm={6} md={3}>
            <h4>Product</h4>
            <br />
            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Server</p>
            <p>Countries</p>
            <p>Blog</p>
          </Col>

          <Col xs={6} lg={3} sm={6} md={3}>
            <h4>Engage</h4>
            <br />
            <p>LaslesVPN?</p>
            <p>FAQ</p>
            <p>Tutorials</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </Col>
          <Col xs={6} lg={3} sm={6} md={3}>
            <h4>Earn Money</h4>
            <br />
            <p>Affiliate</p>
            <p>Become Partner</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
