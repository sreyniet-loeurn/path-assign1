import React from "react";
import Admin from "./Admin";
import Sidebar from "./Sidebar";
// import { Container, Breadcrumb } from "react-bootstrap";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Card,
  Form,
  FormGroup,
  Button,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Profile = () => {
  return (
    <>
      <Admin />
      <Sidebar />

      {/* Breadcrumb  */}
      <div className="d-flex ">
        <Container>
          <h4 className="mt-3 ml-3">Page Profile</h4>
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

      {/* Profile  */}

      <Container fluid={true}>
        <div class="page-wrapper">
          <Row>
            <Col md={2}></Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <center class="m-t-30">
                    {" "}
                    <Image
                      src="imgAdmin/5.jpg"
                      class="rounded-circle"
                      width="150"
                    />
                    <Card.Title>Hanna Gover</Card.Title>
                    <Card.Subtitle>Accoubts Manager Amix corp</Card.Subtitle>
                    <div class="row text-center justify-content-md-center">
                      <div class="col-4">
                        <a href="javascript:void(0)" class="link">
                          <i class="icon-people"></i>
                          <font class="font-medium">254</font>
                        </a>
                      </div>
                      <div class="col-4">
                        <a href="javascript:void(0)" class="link">
                          <i class="icon-picture"></i>
                          <font class="font-medium">54</font>
                        </a>
                      </div>
                    </div>
                  </center>
                </Card.Body>
                <div>
                  <hr />
                </div>
                <div class="card-body">
                  {" "}
                  <small class="text-muted">Email address </small>
                  <h6>hannagover@gmail.com</h6>{" "}
                  <small class="text-muted p-t-30 db">Phone</small>
                  <h6>+91 654 784 547</h6>{" "}
                  <small class="text-muted p-t-30 db">Address</small>
                  <h6>71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                  <div class="map-box">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508"
                      width="100%"
                      height="150"
                      frameborder="0"
                      style={{ border: "0" }}
                      allowfullscreen
                    ></iframe>
                  </div>{" "}
                  <small class="text-muted p-t-30 db">Social Profile</small>
                  <br />
                  <button className="btn btn-circle btn-secondary p-2 m-1">
                    <FacebookIcon className="mr-5 mb-5" />
                  </button>
                  <button class="btn btn-circle btn-secondary p-2 ">
                    <TwitterIcon className="mb-5" />
                  </button>
                  <button class="btn btn-circle btn-secondary p-2 m-1">
                    <YouTubeIcon className="mb-5" />
                  </button>
                </div>
              </Card>
            </Col>
            <Col md={7}>
              <Card>
                <Card.Body>
                  <Form class="form-horizontal form-material mx-2">
                    <FormGroup>
                      <label class="col-md-12">Full Name</label>
                      <div class="col-md-12">
                        <input
                          type="text"
                          placeholder="Johnathan Doe"
                          class="form-control form-control-line"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <label for="example-email" class="col-md-12">
                        Email
                      </label>
                      <div class="col-md-12">
                        <input
                          type="email"
                          placeholder="johnathan@admin.com"
                          class="form-control form-control-line"
                          name="example-email"
                          id="example-email"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <label class="col-md-12">Password</label>
                      <div class="col-md-12">
                        <input
                          type="password"
                          value="password"
                          class="form-control form-control-line"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <label class="col-md-12">Phone No</label>
                      <div class="col-md-12">
                        <input
                          type="text"
                          placeholder="123 456 7890"
                          class="form-control form-control-line"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <label class="col-md-12">Message</label>
                      <div class="col-md-12">
                        <textarea
                          rows="5"
                          class="form-control form-control-line"
                        ></textarea>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <label class="col-sm-12">Select Country</label>
                      <div class="col-sm-12">
                        <select class="form-select shadow-none form-control">
                          <option>London</option>
                          <option>India</option>
                          <option>Usa</option>
                          <option>Canada</option>
                          <option>Thailand</option>
                        </select>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div class="col-sm-12">
                        <button class="btn btn-success mt-3 text-white">
                          Update Profile
                        </button>
                      </div>
                    </FormGroup>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Profile;
