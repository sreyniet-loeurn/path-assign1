import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StorageIcon from '@material-ui/icons/Storage';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function SaleSummaryAndFeed() {
    return (
        <Container fluid ={true}>
        <Row>
            <Col md ={2}></Col>
        <Col md ={6}>
            <div class="card">
                <div class="card-body">
                    <div class="d-md-flex align-items-center">
                        <div>
                            <h4 class="card-title">Sales Summary</h4>
                            <h5 class="card-subtitle">Overview of Latest Month</h5>
                        </div>
                        <div class="ms-auto d-flex no-block align-items-center">
                            <ul class="list-inline font-12 dl m-r-15 m-b-0">
                                <li class="list-inline-item text-info"><FiberManualRecordRoundedIcon /> Iphone
                                </li>
                                <li class="list-inline-item text-primary"><FiberManualRecordRoundedIcon className ="text-primary"  />  Ipad
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="campaign ct-charts"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
        <Col md ={4}>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Feeds</h4>
                    <div class="feed-widget">
                        <ul class="list-style-none feed-body m-0 p-b-20">
                            <li class="feed-item">
                                <div class="feed-icon bg-primary"><NotificationsNoneIcon /></div> You have 4
                                pending tasks. <span class="ms-auto font-12 text-muted">Just Now</span>
                            </li>
                            <li class="feed-item">
                                <div class="feed-icon bg-success"><StorageIcon /></div> Server #1
                                overloaded.<span class="ms-auto font-12 text-muted">2 Hours ago</span>
                            </li>
                            <li class="feed-item">
                                <div class="feed-icon bg-warning"><ShoppingCartIcon /></div> New
                                order received.<span class="ms-auto font-12 text-muted">31 May</span>
                            </li>
                            <li class="feed-item">
                                <div class="feed-icon bg-danger"><PersonOutlineIcon /></div> New user
                                registered.<span class="ms-auto font-12 text-muted">30 May</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
    </Container>
    )
}

export default SaleSummaryAndFeed
