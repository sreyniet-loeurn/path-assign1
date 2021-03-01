import React from "react";
import vpn from "../image/vpn.png";
import Content2 from "./Content2";
import Content3 from "./Content3";
import { Container, Row, Col } from "react-bootstrap";

function Content1() {
  return (
    <div>
      <Container className="">
        <Row className="mt-5 mb-5">
          <Col xs={12} lg={6}>
            <h3>
              Want anything to be <br></br>
              easy with LaslesVPN.
            </h3>
            <p className ="mt-3">
              Provide a network for all your needs with ease and fun using{" "}
              <strong>LaslesVPN</strong>
              discover intersting features from us.
            </p>

            <a
              href="#"
              class="btn btn-danger btn-lg mt-5 shadow-lg p-3 btnGetSart"
            >
              Get Started
            </a>
          </Col>
          <Col xs={12} lg={6} className="mt-5">
            <img src={vpn} alt="vpn" className="img1" width="100%" />
          </Col>
         
          <Content2 className="mt-5" />
          <Content3 className="mt-5" />
        </Row>
      </Container>
    </div>
  );
}

export default Content1;
