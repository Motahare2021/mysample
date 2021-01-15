import React, { Component } from "react";
export default function mapThreatCount(data) {
    let datalevel1=[]
    let datalevel2=[]
    data.map(obj=> {
        datalevel1.push({name: obj.month, y: obj.value, drilldown: obj.month})
        let days=[]
        for (let [key, value] of Object.entries(obj.day)) {
             // console.log(`${key}: ${value}`);
            days.push([key, value])
          }
        datalevel2.push({name: obj.month, id: obj.month, data: days})
    });
    return [
        [
            {
                name: "Month",
                colorByPoint: true,
                data:datalevel1
            }
        ],
         {
                series:datalevel2
            }
    ]
}