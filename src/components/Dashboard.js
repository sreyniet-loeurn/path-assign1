import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import "../custom.css";
function Dashboard() {
  return (
    <div className="d-flex ">
      <Container>
        <h4 className ="mt-3 ml-3">Dashboard</h4>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item
            active
            href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
          >
            Library
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="text-end mt-3 mr-3" fluid={true}>
        <a
          href="https://www.wrappixel.com/templates/xtremeadmin/"
          class="btn btn-danger text-white"
          target="_blank"
        >
          Upgrade to Pro
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
