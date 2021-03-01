import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import RoomIcon from "@material-ui/icons/Room";
import DnsIcon from "@material-ui/icons/Dns";
import { Col, Container, Row } from "react-bootstrap";

function Content2() {
  return (
    <Container className="shadow mt-5 bg-white rounded">
      <Row>
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className="border-right flexIconWithText"
        >
          <div className=" text-danger mt-5 rounded-circle Icon">
            <PersonIcon className="mb-5 personIcon" />
          </div>
          <div className="mt-5 lengIconWithText">
            <h4 className="ml-5">90+</h4>
            <p className="ml-5">Users</p>
          </div>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className="border-right flexIconWithText"
        >
          <div className=" text-danger mt-5 rounded-circle Icon ml-4">
            <RoomIcon className="mb-5 locationIcon" />
          </div>
          <div className="mt-5 lengIconWithText">
            <h4 className="ml-5">30+</h4>
            <p className="ml-5">Locations</p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} className="flexIconWithText">
          <div className=" text-danger mt-5 rounded-circle Icon">
            <DnsIcon className="mb-5 serverIcon" />
          </div>
          <div className="mt-5 lengIconWithText">
            <h4 className="ml-5">50+</h4>
            <p className="ml-5">Servers</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Content2;
