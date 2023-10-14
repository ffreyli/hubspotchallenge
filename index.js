import axios from 'axios';
import moment from 'moment';
moment().format("YYYY-MM-DD");


(async () => {
    const res = await axios.get(`https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=1694f8ea17181cea2872454b04df`)

    const partners = res.data.partners;

    let dateCounts = {};
    let highestCount = 0;
    let earliestDate;

    partners.forEach((partner) => {
        partner.availableDates.forEach((date) => {
            
            var day = moment(date, "YYYY-MM-DD").toISOString();
            //let day = date;
            
            if (dateCounts[day] === undefined) {
                dateCounts[day] = 1;
            } else {
                dateCounts[day]++;
            }
        })
    })

    let keys = Object.keys(dateCounts);

    keys.forEach((key) => {
        let countSum = dateCounts[key];
        let dayTwoCount = dateCounts[moment(key).add(1, 'd').toISOString()];

        if(dayTwoCount !== null) {
            countSum = countSum + dayTwoCount;
        }
        if(countSum > highestCount) {
            highestCount = countSum;
            earliestDate = key;
        } else if (countSum === highestCount) {
            if(earliestDate) {
                if(moment(key).isBefore(moment(earliestDate))) {
                    earliestDate = key;
                }
            }
            
        }
    })

    console.log(partners);
    console.log(dateCounts);
    console.log(keys);
    console.log(highestCount);
    console.log(earliestDate);

    //console.log(moment(keys[0], "ddd MMM DD YYYY HH:mm:ss ").add(1, 'd'));


    /*
How to get highest two days:
1. convert keys to moment.js dates
2. total count of two consecutive days = current date total + (current date + 1) total
3. Loop through all keys, find the greatest total number of 2 days
4. In case of multiple dates with the same number of partners, pick the earlier date. If there are no two days in a row when any partners can make it, return null

    */
    // 1) get most common day period (50)
    // 2) get most common day + headcount [{ mostCommonDay: '2017-05-27', headCountForDay: 47 }]
    // 3) apply to all countries
    // 4) Make an array of objects like so: [{ mostCommonDay: '2017-05-27', headCountForDay: 47 }]
})()

