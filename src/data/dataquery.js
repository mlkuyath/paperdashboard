import { userData } from './userdata.js';

export let totalViews = {
    pastweek: 0,
    pastmonth: 0,
    past3months: 0,
    past6months: 0,
    all: 0
}

export let viewsInPastWeek = [0, 0, 0, 0, 0, 0, 0];
export let viewsInPastMonth = [0, 0, 0, 0, 0];
export let viewsPast3Months = [0, 0, 0, 0, 0, 0];
export let viewsPast6Months = [0, 0, 0, 0, 0, 0];

let today = new Date();
const DAY_LENGTH = 86400000;

userData.forEach((item) => {
    totalViews.all += item.View
    let eventDate = new Date(item["Event Date"])
    let timeBetween = today.getTime() - eventDate.getTime()


    if (timeBetween <= 7*DAY_LENGTH) {
        totalViews.pastweek += item.View
        switch(Math.floor(timeBetween/DAY_LENGTH)) {                  
            case 0: viewsInPastWeek[6] += item.View
            break;
            case 1: viewsInPastWeek[5] += item.View
            break;
            case 2: viewsInPastWeek[4] += item.View
            break;
            case 3: viewsInPastWeek[3] += item.View
            break;
            case 4: viewsInPastWeek[2] += item.View
            break;
            case 5: viewsInPastWeek[1] += item.View
            break;
            case 6: viewsInPastWeek[0] += item.View
            break;
            case 7: viewsInPastWeek[0] += item.View
            break;
            default: break;
        }
    } 
    if (timeBetween <= 30*DAY_LENGTH) {
        totalViews.pastmonth += item.View
        switch(Math.floor(timeBetween/(6*DAY_LENGTH))) {                  
            case 0: viewsInPastMonth[4] += item.View
            break;
            case 1: viewsInPastMonth[3] += item.View
            break;
            case 2: viewsInPastMonth[2] += item.View
            break;
            case 3: viewsInPastMonth[1] += item.View
            break;
            case 4: viewsInPastMonth[0] += item.View
            break;
            case 5: viewsInPastMonth[0] += item.View
            break;
            default: break;
        }
    } 
    if (timeBetween <= 90*DAY_LENGTH) {
        totalViews.past3months += item.View
        switch(Math.floor(timeBetween/(15*DAY_LENGTH))) {                  
            case 0: viewsPast3Months[5] += item.View
            break;
            case 1: viewsPast3Months[4] += item.View
            break;
            case 2: viewsPast3Months[3] += item.View
            break;
            case 3: viewsPast3Months[2] += item.View
            break;
            case 4: viewsPast3Months[1] += item.View
            break;
            case 5: viewsPast3Months[0] += item.View
            break;
            case 6: viewsPast3Months[0] += item.View
            break;
            default: break;
        }
    }   
    if (timeBetween <= 180*DAY_LENGTH) {
        totalViews.past6months += item.View
        switch(Math.floor(timeBetween/(30*DAY_LENGTH))) {                  
            case 0: viewsPast6Months[5] += item.View
            break;
            case 1: viewsPast6Months[4] += item.View
            break;
            case 2: viewsPast6Months[3] += item.View
            break;
            case 3: viewsPast6Months[2] += item.View
            break;
            case 4: viewsPast6Months[1] += item.View
            break;
            case 5: viewsPast6Months[0] += item.View
            break;
            case 6: viewsPast6Months[0] += item.View
            break;
            default: break;
        }
    }   
   
});

