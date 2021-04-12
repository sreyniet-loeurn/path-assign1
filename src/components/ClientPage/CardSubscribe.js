import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

function CardSubscribe() {
  return (
    <div className="shadow-lg p-5 bg-body content6">
      <Container>
        <Row>
          <Col xs={12} lg={8} md={8} className="ml-5 ">
            <h4 className="contentSub">
              <strong>
                Subscribe Now For<br></br>Get Special Features!
              </strong>
            </h4>
            <p className="text-secondary contentSub">
              Let's subscribe with us and find the fun.
            </p>
          </Col>
          <Col xs={12} lg={2} md={2} className="ml-3">
            <br></br>
            <Button className="shadow-lg btnSub" variant="danger">
              Subscribe Now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardSubscribe;
