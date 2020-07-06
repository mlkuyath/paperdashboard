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
import Select from 'react-select';
import { Line } from "react-chartjs-2";
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
import { totalViews } from 'data/dataquery.js'
import DrImage from 'data/DrFauci.jpg'
import { chartOptions, groupedOptions, formatGroupLabel} from 'data/selectchart.js'


function ChartHeader(props) {
  if(props.value == 7){ return (
  <CardHeader>
    <CardTitle tag="h5">Views (Last 7 Days)</CardTitle>
  </CardHeader>
    )
  } else if(props.value == 30) { return (
  <CardHeader>
    <CardTitle tag="h5">Views (Last 30 Days)</CardTitle>
  </CardHeader>
    ) 
  } else if(props.value == 90) { return (
    <CardHeader>
      <CardTitle tag="h5">Views (Last 90 Days)</CardTitle>
    </CardHeader>
    )
  } else if(props.value == 180) { return (
    <CardHeader>
      <CardTitle tag="h5">Views (Last 180 Days)</CardTitle>
    </CardHeader>
    )
  }
}  
function LineChart(props) {
  return (
    <CardBody>
      <Line
        data={props.data}
        options={props.options}
        width={400}
        height={100}
      />
    </CardBody>
  )
}
function ChartType1(props) {
  
  if(props.value == 7) {
    return <LineChart data={dashboardLastWeekChart.data} options={dashboardLastWeekChart.options} />
     } else return <div></div>
} 
function ChartType2(props) {
  
  if(props.value == 30) { 
    return <LineChart data={dashboardLast30DaysChart.data} options={dashboardLast30DaysChart.options} />
     } else return <div></div>
} 

function ChartType3(props) {
  
  if(props.value == 90) {
    return <LineChart data={dashboardLast90DaysChart.data} options={dashboardLast90DaysChart.options} />
     } else return <div></div>
  }
function ChartType4(props) {

  if(props.value == 180) {
    return <LineChart data={dashboardLast180DaysChart.data} options={dashboardLast180DaysChart.options} />
      } else return <div></div>
  }
class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {chart: 7};
  }
  
  handleChange = (selectedOption) => { 
    console.log(selectedOption)
    this.setState({chart: selectedOption.value})
  }
  
  render() {
    return (
      <>
        <div className="content">
          <Row>
           
            <h3 marginLeft='50'>Dr. Scott Fauci</h3>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <ChartHeader value={this.state.chart} />
                <ChartType1 value={this.state.chart} />
                <ChartType2 value={this.state.chart} />
                <ChartType3 value={this.state.chart} />
                <ChartType4 value={this.state.chart} />
                <CardFooter>
                  <hr />
                  <div className="stats">
                  <Select
                    defaultValue={chartOptions[0]}
                    onChange={this.handleChange}
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                  />
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
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
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Views (Past 7 Days)</p>
                        <CardTitle tag="p">{totalViews.pastweek}</CardTitle>
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
                        <p className="card-category">Total Views (Past 30 Days)</p>
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
        
          
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
