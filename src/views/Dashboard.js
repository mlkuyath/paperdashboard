/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboardLast180DaysChart,
  dashboardLast90DaysChart,
  dashboardLast30DaysChart,
  dashboardLastWeekChart
} from "variables/charts.js";
import { userData } from 'data/userdata.js'
import { totalViews , viewsInPastWeek, viewsInPastMonth, viewsPast3Months, viewsPast6Months } from 'data/dataquery.js'

class Dashboard extends React.Component {
  render() {
 
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Views (all-time)</p>
                        <CardTitle tag="p">{totalViews.all}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Views (Past 180 Days)</p>
                        <CardTitle tag="p">{totalViews.past6months}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Views (Past 90 Days)</p>
                        <CardTitle tag="p">{totalViews.past3months}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Views (Past Month)</p>
                        <CardTitle tag="p">{totalViews.pastmonth}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                  </div>
                </CardFooter>
              </Card>
            </Col>
 
       
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Views (Last 180 Days)</CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardLast180DaysChart.data}
                    options={dashboardLast180DaysChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Views (Last 90 Days)</CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardLast90DaysChart.data}
                    options={dashboardLast90DaysChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                
                  <hr />
                  <div className="card-stats">
          
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Views (Last 30 Days)</CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardLast30DaysChart.data}
                    options={dashboardLast30DaysChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                
                  <hr />
                  <div className="card-stats">
                
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Views (Last 7 Days)</CardTitle>
                 
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardLastWeekChart.data}
                    options={dashboardLastWeekChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                
                  <hr />
                  <div className="card-stats">
                  
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
