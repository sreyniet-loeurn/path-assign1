import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ProvideManyFeature() {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6} sm={12} md={6} xl={6}>
          <img src="image/secondImg.png" alt="" className="handImg" />
        </Col>
        <Col className="mt-5" lg={6} xs={12} sm={12} md={6} xl={6}>
          <h2>
            We Provide Many <br />
            Features You Can Use
          </h2>
          <br />
          <p>
            You can explore the features that we provide with fun and
            <br />
            have their own functions each feature.
          </p>
          <Col>
            <p>
              <CheckCircleIcon className="text-success mr-3" /> Powerfdivl onpne
              protection.
            </p>
            <p>
              <CheckCircleIcon className="text-success mr-3" /> Internet without
              borders.
            </p>
            <p>
              <CheckCircleIcon className="text-success mr-3" /> Supercharged VPN
            </p>
            <p>
              <CheckCircleIcon className="text-success mr-3" /> No specific time
              limits.
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default ProvideManyFeature;
