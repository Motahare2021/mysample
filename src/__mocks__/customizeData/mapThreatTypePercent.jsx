import React, { Component } from "react";

export default function mapTTP(data) {
    let datanew=[]
    let maxkey;
    let maxvalue=-1
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            let value = Number(data[key])
            datanew.push({name:key, y: value})
            if(maxvalue < value){
                maxvalue=value;
                maxkey=key;

            }
            // let {maxvalue, maxkey} = maxvalue < value ? {value, key} : {maxvalue,maxkey}
        }
    }
    datanew = datanew.filter(item =>item.name!==maxkey);
    datanew.push({name:maxkey, y: Number(data[maxkey]),  sliced: true, selected: true})
    return datanew
}