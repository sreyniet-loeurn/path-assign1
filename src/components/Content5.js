import React from "react";
import { Container } from "react-bootstrap";
import support from "../image/support.PNG";
function Content5() {
  return (
    <Container className="text-center mt-5 content5">
      <h3>
        Huge Global Network
        <br />
        <br />
        of Fast VPN
      </h3>
      <br></br>
      <p>
        See <strong>LaslesVPN</strong> partner
      </p>
      <div>
        <img
          src={support}
          alt=""
          className="mt-5 text-center netImg"
          width="100%"
        />
      </div>
      <br />
      <br />
      <br />
    </Container>
  );
}

export default Content5;
