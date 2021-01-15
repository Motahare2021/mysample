import React, { Component } from "react";

export default function MapPestelFactor(data) {
    let datanew=[]
    for (var key in data) {
        if (data.hasOwnProperty(key))
            datanew.push({item:key, value: Number(data[key])})
    }
    return datanew
}