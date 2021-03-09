import React from 'react'
import Admin from './Admin'
import Sidebar from './Sidebar'
import {Breadcrumb,Container,Row,Col} from 'react-bootstrap'

function Blank() {
    return (
        <>
            <Admin />
            <Sidebar />
           
      {/* Breadcrumb  */}
      <div className="d-flex ">
        <Container>
          <h4 className="mt-3 ml-3">Starter Page</h4>
          <Breadcrumb className="">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href="">
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

      <Container fluid ={true}>
                <Row>
                    <Col lg ={2}></Col>
                    <Col lg ={10} style = {{height:'690px'}} >
                        <div class="card">
                            <div class="card-body">
                                This is some text within a card block.
                            </div>
                        </div>
                    </Col>
                </Row>
            
            </Container>
        </>
    )
}

export default Blank
