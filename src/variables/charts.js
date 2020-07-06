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

import { viewsInPastWeek, viewsInPastMonth, viewsPast3Months, viewsPast6Months } from 'data/dataquery.js'

let today = new Date();
const DAY_LENGTH = 86400000

let xlabelsLast180Days = []
let xlabelsLast90Days = []
let xlabelsLast30Days = []
let xlabelsLast7Days = []

for(let i=0; i<7; i++) {
  xlabelsLast180Days[2*i] = new Date(today.getTime() - (180-(30*i))*DAY_LENGTH)
  if(i>0) {
    xlabelsLast180Days[(2*i)-1] = new Date((xlabelsLast180Days[2*i].getTime() - DAY_LENGTH))
  }
}
for(let i=0; i<7; i++) {
  xlabelsLast90Days[2*i] = new Date(today.getTime() - (90-(15*i))*DAY_LENGTH)
  if(i>0) {
    xlabelsLast90Days[(2*i)-1] = new Date((xlabelsLast90Days[2*i].getTime() - DAY_LENGTH))
  }
}
for(let i=0; i<6; i++) {
  xlabelsLast30Days[2*i] = new Date(today.getTime() - (30-(6*i))*DAY_LENGTH)
  if(i>0) {
    xlabelsLast30Days[(2*i)-1] = new Date((xlabelsLast30Days[2*i].getTime() - DAY_LENGTH))
  }
}
for(let i=0; i<7; i++) {
  xlabelsLast7Days[i] = new Date(today.getTime() - (6-i)*DAY_LENGTH)
}

export const dashboardLast180DaysChart = {
  data: {
    labels: [
      xlabelsLast180Days[0].getMonth() + 1 + "/" + xlabelsLast180Days[0].getDate() + " - " + (xlabelsLast180Days[1].getMonth() + 1) + "/" + xlabelsLast180Days[1].getDate(),
      xlabelsLast180Days[2].getMonth() + 1 + "/" + xlabelsLast180Days[2].getDate() + " - " + (xlabelsLast180Days[3].getMonth() + 1) + "/" + xlabelsLast180Days[3].getDate(),
      xlabelsLast180Days[4].getMonth() + 1 + "/" + xlabelsLast180Days[4].getDate() + " - " + (xlabelsLast180Days[5].getMonth() + 1) + "/" + xlabelsLast180Days[5].getDate(),
      xlabelsLast180Days[6].getMonth() + 1 + "/" + xlabelsLast180Days[6].getDate() + " - " + (xlabelsLast180Days[7].getMonth() + 1) + "/" + xlabelsLast180Days[7].getDate(),
      xlabelsLast180Days[8].getMonth() + 1 + "/" + xlabelsLast180Days[8].getDate() + " - " + (xlabelsLast180Days[9].getMonth() + 1) + "/" + xlabelsLast180Days[9].getDate(),
      xlabelsLast180Days[10].getMonth() + 1 + "/" + xlabelsLast180Days[10].getDate() + " - " + (xlabelsLast180Days[12].getMonth() + 1) + "/" + xlabelsLast180Days[12].getDate(),
    ],
    datasets: [
      {
        data: viewsPast6Months,
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
  },
};

export const dashboardLast90DaysChart = {
  data: {
    labels: [
      xlabelsLast90Days[0].getMonth() + 1 + "/" + xlabelsLast90Days[0].getDate() + " - " + (xlabelsLast90Days[1].getMonth() + 1) + "/" + xlabelsLast90Days[1].getDate(),
      xlabelsLast90Days[2].getMonth() + 1 + "/" + xlabelsLast90Days[2].getDate() + " - " + (xlabelsLast90Days[3].getMonth() + 1) + "/" + xlabelsLast90Days[3].getDate(),
      xlabelsLast90Days[4].getMonth() + 1 + "/" + xlabelsLast90Days[4].getDate() + " - " + (xlabelsLast90Days[5].getMonth() + 1) + "/" + xlabelsLast90Days[5].getDate(),
      xlabelsLast90Days[6].getMonth() + 1 + "/" + xlabelsLast90Days[6].getDate() + " - " + (xlabelsLast90Days[7].getMonth() + 1) + "/" + xlabelsLast90Days[7].getDate(),
      xlabelsLast90Days[8].getMonth() + 1 + "/" + xlabelsLast90Days[8].getDate() + " - " + (xlabelsLast90Days[9].getMonth() + 1) + "/" + xlabelsLast90Days[9].getDate(),
      xlabelsLast90Days[10].getMonth() + 1 + "/" + xlabelsLast90Days[10].getDate() + " - " + (xlabelsLast90Days[12].getMonth() + 1) + "/" + xlabelsLast90Days[12].getDate(),
    ],
    datasets: [
      {
        data: viewsPast3Months,
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 0
        }
      }]
    },
    legend: {
      display: false,
      position: "top",
    },
  },
};


export const dashboardLast30DaysChart = {
  data: {
    labels: [
      xlabelsLast30Days[0].getMonth() + 1 + "/" + xlabelsLast30Days[0].getDate() + " - " + (xlabelsLast30Days[1].getMonth() + 1) + "/" + xlabelsLast30Days[1].getDate(),
      xlabelsLast30Days[2].getMonth() + 1 + "/" + xlabelsLast30Days[2].getDate() + " - " + (xlabelsLast30Days[3].getMonth() + 1) + "/" + xlabelsLast30Days[3].getDate(),
      xlabelsLast30Days[4].getMonth() + 1 + "/" + xlabelsLast30Days[4].getDate() + " - " + (xlabelsLast30Days[5].getMonth() + 1) + "/" + xlabelsLast30Days[5].getDate(),
      xlabelsLast30Days[6].getMonth() + 1 + "/" + xlabelsLast30Days[6].getDate() + " - " + (xlabelsLast30Days[7].getMonth() + 1) + "/" + xlabelsLast30Days[7].getDate(),
      xlabelsLast30Days[8].getMonth() + 1 + "/" + xlabelsLast30Days[8].getDate() + " - " + (xlabelsLast30Days[10].getMonth() + 1) + "/" + xlabelsLast30Days[10].getDate()
    ],
    datasets: [
      {
        data: viewsInPastMonth,
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
  },
};

console.log(viewsInPastWeek)

export const dashboardLastWeekChart = {
  data: {
    labels: [
      xlabelsLast7Days[0].getMonth() + 1 + "/" + xlabelsLast7Days[0].getDate(),
      xlabelsLast7Days[1].getMonth() + 1 + "/" + xlabelsLast7Days[1].getDate() ,
      xlabelsLast7Days[2].getMonth() + 1 + "/" + xlabelsLast7Days[2].getDate() ,
      xlabelsLast7Days[3].getMonth() + 1 + "/" + xlabelsLast7Days[3].getDate() ,
      xlabelsLast7Days[4].getMonth() + 1 + "/" + xlabelsLast7Days[4].getDate() ,
      xlabelsLast7Days[5].getMonth() + 1 + "/" + xlabelsLast7Days[5].getDate() ,
      xlabelsLast7Days[6].getMonth() + 1 + "/" + xlabelsLast7Days[6].getDate() ,
    ],
    datasets: [
      {
        data: viewsInPastWeek,
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 5
          
        }
      }]
    },
    legend: {
      display: false,
      position: "top",
    },
  },
};


