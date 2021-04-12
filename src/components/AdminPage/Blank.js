import React from 'react'
import NavbarAdmin from './NavbarAdmin'
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap'

function Blank() {
  return (
    <>
      <NavbarAdmin />


      <Container fluid={true}>

        {/* Breadcrumb  */}
        <div className="chartAndFeed">
          <Row>
            <Col xl={2} md={1}></Col>
            <Col xl={8} xs={7} md={9} sm={10} >
              <h4 className="mt-3 ml-3">Starter Page</h4>
              <Breadcrumb className="">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active href="">
                  Library
            </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col lg={2} xs={5} md={2} sm={2} className="mt-4 " >
              <a
                href="https://www.wrappixel.com/templates/xtremeadmin/"
                class="btn btn-danger text-white breadcrumpBtn"
                target="_blank"
              >
                Upgrade to Pro
          </a>
            </Col>
          </Row>
        </div>
        {/*End  Breadcrumb  */}

        <Row>
          <Col xl={2} md={1} ></Col>
          <Col xl={10} md={11} sm={12} style={{ height: '690px' }} >
            <div className="chartAndFeed">

              <div class="card">
                <div class="card-body">
                  This is some text within a card block.
                            </div>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Blank
