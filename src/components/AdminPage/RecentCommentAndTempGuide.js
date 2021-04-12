
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
const RecentCommentAndTempGuide = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={1} xl={2}></Col>
                <Col md={5} xl={5} sm={12}>
          <div className="chartAndFeed">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Recent Comments</h4>
                        </div>
                        <div class="comment-widgets scrollable">
                            <div class="d-flex flex-row comment-row m-t-0">
                                <div class="p-2"><img src="imgAdmin/1.jpg" alt="user" width="50"
                                    class="rounded-circle"></img></div>
                                <div class="comment-text w-100">
                                    <h6 class="font-medium">James Anderson</h6>
                                    <span class="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing
                                        and type setting industry. </span>
                                    <div class="comment-footer">
                                        <span className="text-muted  float-right mr-3">April 14, 2021</span> <span
                                            class="label label-rounded label-primary">Pending</span> <span
                                                class="action-icons">
                                            <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                            <a href="javascript:void(0)"><i class="ti-check"></i></a>
                                            <a href="javascript:void(0)"><i class="ti-heart"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-row comment-row mt-4">
                                <div class="p-2"><img src="imgAdmin/4.jpg" alt="user" width="50"
                                    class="rounded-circle"></img></div>
                                <div class="comment-text active w-100">
                                    <h6 class="font-medium">Michael Jorden</h6>
                                    <span class="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing
                                            and type setting industry. </span>
                                    <div class="comment-footer ">
                                        <span class="text-muted float-right mr-3">April 14, 2021</span>
                                        <span class="label label-success label-rounded">Approved</span>
                                        <span class="action-icons active">
                                            <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                            <a href="javascript:void(0)"><i class="icon-close"></i></a>
                                            <a href="javascript:void(0)"><i class="ti-heart text-danger"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-row comment-row mt-4">
                                <div class="p-2"><img src="imgAdmin/5.jpg" alt="user" width="50"
                                    class="rounded-circle"></img></div>
                                <div class="comment-text w-100 mb-4">
                                    <h6 class="font-medium">Johnathan Doeting</h6>
                                    <span class="m-3 d-block">Lorem Ipsum is simply dummy text of the printing
                                            and type setting industry. </span>
                                    <div class="comment-footer">
                                        <span class="text-muted float-right mr-3">April 14, 2021</span>
                                        <span class="label label-rounded label-danger mb-3">Rejected</span>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                {/* <Col md={1} ></Col> */}
                <Col md={6} xl={5} sm={12}>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Temp Guide</h4>
                            <div class="d-flex align-items-center flex-row m-t-30">
                                <div class="display-5 text-info"><img src="imgAdmin/bigClound.PNG"></img>
                                    <span>73<sup>°</sup></span></div>
                                <div class="m-l-10">
                                    <h3 class="m-b-0">Saturday</h3><small>Ahmedabad, India</small>
                                </div>
                            </div>
                            <table class="table no-border mini-table m-t-20">
                                <tbody>
                                    <tr>
                                        <td class="text-muted">Wind</td>
                                        <td class="font-medium">ESE 17 mph</td>
                                    </tr>
                                    <tr>
                                        <td class="text-muted">Humidity</td>
                                        <td class="font-medium">83%</td>
                                    </tr>
                                    <tr>
                                        <td class="text-muted">Pressure</td>
                                        <td class="font-medium">28.56 in</td>
                                    </tr>
                                    <tr>
                                        <td class="text-muted">Cloud Cover</td>
                                        <td class="font-medium">78%</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul class="row list-style-none text-center m-t-30">
                                <li class="col-3">
                                    <h4 class="text-info"><WbSunnyIcon /></h4>
                                    <span class="d-block text-muted">09:30</span>
                                    <h3 class="m-t-5">70<sup>°</sup></h3>
                                </li>
                                <li class="col-3">
                                    <h4 class="text-info"><img src="imgAdmin/firstCloud.PNG"></img></h4>
                                    <span class="d-block text-muted">11:30</span>
                                    <h3 class="m-t-5">72<sup>°</sup></h3>
                                </li>
                                <li class="col-3">
                                    <h4 class="text-info"><img src="imgAdmin/secondCloud.PNG"></img></h4>
                                    <span class="d-block text-muted">13:30</span>
                                    <h3 class="m-t-5">75<sup>°</sup></h3>
                                </li>
                                <li class="col-3">
                                    <h4 class="text-info"><img src="imgAdmin/thirdCloud.PNG"></img></h4>
                                    <span class="d-block text-muted">15:30</span>
                                    <h3 class="m-t-5">76<sup>°</sup></h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default RecentCommentAndTempGuide
