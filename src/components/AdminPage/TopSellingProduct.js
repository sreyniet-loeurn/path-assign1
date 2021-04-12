import React from "react";
import { Col, Row, Container } from "react-bootstrap";

// import '../page.css'

function TopSellingProduct() {
  return (
    <div>
      <Container fluid={true}>
        <Row>
          <Col xl={2}  md ={1}></Col>
          <Col xl={10} md ={11} sm ={12}>
          <div className="chartAndFeed">

            <div class="card">
              <div class="card-body">
                <div class="d-md-flex">
                  <div>
                    <h4 class="card-title">Top Selling Products</h4>
                    <h5 class="card-subtitle">Overview of Top Selling Items</h5>
                  </div>
                  <div class="ml-auto">
                    <div class="dl">
                      <select class="form-select shadow-none">
                        <option value="0" selected>
                          Monthly
                        </option>
                        <option value="1">Daily</option>
                        <option value="2">Weekly</option>
                        <option value="3">Yearly</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table v-middle">
                  <thead>
                    <tr class="bg-light">
                      <th class="border-top-0">Products</th>
                      <th class="border-top-0">License</th>
                      <th class="border-top-0">Support Agent</th>
                      <th class="border-top-0">Technology</th>
                      <th class="border-top-0">Tickets</th>
                      <th class="border-top-0">Sales</th>
                      <th class="border-top-0">Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex">
                          <div>
                            <a class="btn btn-circle d-flex  btn-info text-white">
                              EA
                            </a>
                          </div>
                          <div class="">
                            <h4 class="m-b-0 font-16 ml-2">Elite Admin</h4>
                          </div>
                        </div>
                      </td>
                      <td>Single Use</td>
                      <td>John Doe</td>
                      <td>
                        <label class="label bg-danger text-white p-1">
                          Angular
                        </label>
                      </td>
                      <td>46</td>
                      <td>356</td>
                      <td>
                        <h5 class="m-b-0">$2850.06</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="m-r-10">
                            <a class="btn btn-circle d-flex bg-warning text-white">
                              MA
                            </a>
                          </div>
                          <div class="">
                            <h4 class="m-b-0 font-16 ml-2">Monster Admin</h4>
                          </div>
                        </div>
                      </td>
                      <td>Single Use</td>
                      <td>Venessa Fern</td>
                      <td>
                        <label class="label label-info">Vue Js</label>
                      </td>
                      <td>46</td>
                      <td>356</td>
                      <td>
                        <h5 class="m-b-0">$2850.06</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div className="m-r-10 ">
                            <a class="btn btn-circle d-flex btn-success text-white">
                              MP
                            </a>
                          </div>
                          <div class="">
                            <h4 class="m-b-0 font-16 ml-2">
                              Material Pro Admin
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td>Single Use</td>
                      <td>John Doe</td>
                      <td>
                        <label class="label label-success">Bootstrap</label>
                      </td>
                      <td>46</td>
                      <td>356</td>
                      <td>
                        <h5 class="m-b-0">$2850.06</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="m-r-10">
                            <a
                              class="btn btn-circle d-flex text-white"
                              style={{ backgroundColor: "purple" }}
                            >
                              AA
                            </a>
                          </div>
                          <div class="">
                            <h4 class="m-b-0 font-16 ml-2 ">Ample Admin</h4>
                          </div>
                        </div>
                      </td>
                      <td>Single Use</td>
                      <td>John Doe</td>
                      <td>
                        <label class="label label-purple">React</label>
                      </td>
                      <td>46</td>
                      <td>356</td>
                      <td>
                        <h5 class="m-b-0">$2850.06</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopSellingProduct;
