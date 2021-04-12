import React from 'react'

import { Container, Row, Col, Breadcrumb,Card } from 'react-bootstrap'
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StorageIcon from '@material-ui/icons/Storage';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Line } from 'react-chartjs-2';
import '../../AdminStyle/scss/custom.scss';

function Dashboard() {

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
      {

        data: [0, 5, 6, 8, 25, 9, 8, 24],
        borderColor: '#87cefa',
        backgroundColor: ['rgba(173,216,230,0.3)'],
        pointBackgroundColor: '#20b2aa'

      },
      {
        data: [0, 3, 1, 2, 8, 1, 5, 1],
        backgroundColor: ['rgba(196,58,205,0.2)'],
        borderColor: `#8a2be2`,
        pointBackgroundColor: `#8a2be2`,
      },


    ]
  };

  const options = {

    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 30,
          stepSize: 10,
          userCallback(value) {
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);
            value = value.join('.');
            return `${value}k`;

          },
        },
      }],
    },
    tooltips: {
      displayColors: false,
      backgroundColor: 'rgb(0,0,255)',
      callbacks: {
        title: function (tooltipItems, data) {
          return '';
        },
        label: function (tooltipItem, data) {
          return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        }
      }
    },

    legend: {
      display: false,
    },

  };

  return (

    <Container fluid={true}>
      {/* Breadcrumb  */}
      <div className="chartAndFeed">

      <Row>
        <Col xl ={2} md ={1} ></Col>
        <Col xl ={8} xs ={7} md ={9} sm ={10}>
          <h4 className="mt-3 ml-3 textBread">Dashboard</h4>
          <Breadcrumb className="">
            <Breadcrumb.Item href="#" className ="textBread">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href="" className ="textBread">
              Library
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col xl ={2} xs ={5} md ={2} sm ={2} className="mt-4 " >
          <a
            href="https://www.wrappixel.com/templates/xtremeadmin/"
            class="btn btn-danger text-white btnUpgradebreadcrumb"
            target="_blank"
          >
            Upgrade to Pro
          </a>
        </Col>
      </Row>
</div>
      {/*End  Breadcrumb  */}

 {/* Sale sumary  */}
      <Row>
        <Col md={1} xl={2}></Col>
        <Col md={7} sm={12} xl={6}>
          <div className="chartAndFeed">
          <Card className ="Card-sale-sumary">
              <div>
                <Card.Body>
                  <div className="d-md-flex align-items-center">
                    <div>
                      <Card.Title>Sales Summary</Card.Title>
                      <Card.Subtitle>Overview of Latest Month</Card.Subtitle>
                    </div>
                    <div className="ms-auto ml-auto d-flex no-block align-items-center">
                      <ul className="list-inline font-12 dl m-r-15 m-b-0">
                        <li className="list-inline-item text-info"><FiberManualRecordRoundedIcon /> Iphone
                                </li>
                        <li className="list-inline-item text-primary"><FiberManualRecordRoundedIcon className="text-primary" />  Ipad
                                </li>
                      </ul>
                    </div>
                  </div>

                  <div className="campaign ct-charts mt-1">
                    <Line data={data} options={options} height ="122"/>
                  </div>

                </Card.Body>
              </div>
            </Card>
            </div>

        </Col>
        <Col md={4} xl={4} sm={12}>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Feeds</h4>
              <div class="feed-widget">
                <ul class="list-style-none feed-body m-0 p-b-20">
                  <li class="feed-item">
                    <div class="feed-icon bg-primary"><NotificationsNoneIcon className ="mt-2" /></div> You have 4
                                pending tasks. <span class="ml-auto font-12 text-muted">Just Now</span>
                  </li>
                  <li class="feed-item">
                    <div class="feed-icon bg-success"><StorageIcon className ="mt-2" /></div> Server #1
                                overloaded.<span class="ml-auto font-12 text-muted">2 Hours ago</span>
                  </li>
                  <li class="feed-item">
                    <div class="feed-icon bg-warning"><ShoppingCartIcon className ="mt-2"  /></div> New
                                order received.<span class="ml-auto font-12 text-muted">31 May</span>
                  </li>
                  <li class="feed-item">
                    <div class="feed-icon bg-danger"><PersonOutlineIcon className ="mt-2" /></div> New user
                                registered.<span class="ml-auto font-12 text-muted">30 May</span>
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

export default Dashboard;
