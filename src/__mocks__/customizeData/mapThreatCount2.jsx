import React from "react";

export default function mapThreatCount2(data) {
    let level1 =[]
    let level2=[]

    let months=[]
    data.map(obj=> {
        months.push({name: obj.month, y: obj.value, drilldown: obj.month})

        let weeks=[]
        obj.weeks.map(week=> {
            weeks.push({name: week.week, y: week.value, drilldown:week.week})

            let days=[]
            week.days.map(day=> {
                days.push({name: day.day, y: day.value, drilldown: day.day})

                let hours=[]
                for (let [key, value] of Object.entries(day.hours)) {
                    // console.log(`${key}: ${value}`);
                    hours.push([key, value])
                }
                level2.push({name: 'Hours', id: day.day, data:hours})

            })
            level2.push({name: 'Days', id: week.week, data:days})
        })
        level2.push({name: 'Weeks', id: obj.month, data:weeks})
    });
    level1.push({name: 'Months',colorByPoint: true , data:months})
    return [
        level1,
        {series:level2}
    ]
}