import Highcharts from "highcharts";
import React, { Component } from "react";
import Theme from "./theme";

import addDrilldownModule from 'highcharts/modules/drilldown';
import applyExporting from 'highcharts/modules/exporting';
import applyOffline from 'highcharts/modules/offline-exporting';
import applyDrilldown from 'highcharts/modules/drilldown';

applyDrilldown(Highcharts);
applyExporting(Highcharts);
applyOffline(Highcharts);
addDrilldownModule(Highcharts)

class BarHighchartWithDrilldown extends Component {

    constructor( props) {
        super( props);
        this.state = {
            major:props.major,
            minor:props.minor,
            series: [{
                name: 'months',
                colorByPoint: true,
                data: [{
                    name: 'Farvardin',
                    y: 5,
                    drilldown: 'farvardin'
                }]
            }],
            drilldown: {
                series: [
                    {
                        id: 'farvardin',
                        name: 'weeks',
                        data: [{
                            name: 'week1',
                            y: 4,
                            drilldown: 'week1_days'
                        },
                            {
                                name: 'week2',
                                y: 7,
                                drilldown: 'week2_days'
                            },
                            {
                                name: 'week3',
                                y: 5,
                                drilldown: 'week3_days'
                            },
                            {
                                name: 'week4',
                                y: 2,
                                drilldown: 'week5_days'
                            },
                            {
                                name: 'week5',
                                y: 1,
                                drilldown: 'week5_days'
                            }
                        ]
                    },
                    {
                        id: 'week1_days',
                        name:'Days',
                        data: [
                            {name: "One", y:1, drilldown: 'day1_hours'},
                            {name: "two", y:2, drilldown: 'day2_hours'},
                            {name: "three", y:0, drilldown: 'day3_hours'},
                            {name: "four", y:6, drilldown: 'day4_hours'}
                        ]
                    },
                    {

                        id: 'day1_hours',
                        name:'Hours',
                        data: [
                            {name: "1", y:1},
                            {name: "2", y:2},
                            {name: "3", y:0},
                            {name: "4", y:5}
                        ]
                    },
                    {

                        id: 'day2',
                        data: [1, 2, 3]
                    },
                    {

                        id: 'day3',
                        data: [1, 2, 3]
                    }]
            }
        };
    }

    highChartsRender() {
        let chart;
        const options = {
            chart: {
                type: "column",
                renderTo: "container_interactive"
            },
            title: {
                text: ''
            },
            // subtitle: {
            //     text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            // },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total umber of threats'
                }

            },
            legend: {
                enabled: true
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                        // format: '{point.y:.1f}%'
                    }
                }
            },

            tooltip: {
                // headerFormat: '<span style="font-size:12px">{series.name}: </span>',
                headerFormat: '<span style="font-size:12px"/>',
                pointFormat: '<span style="color:{"#FFF"}">{point.name}</span><br/><span style="color:{"#FFF"}">{point.y}</span> '
            },

            series: this.state.series,
            drilldown:this.state.drilldown,
            credits: {
                enabled: false
            }
        };
        let expBtnVisible = true;
        Highcharts.theme = Theme();
        Highcharts.setOptions(Highcharts.theme);
        chart = new Highcharts.chart(options);

        chart.update({
            series: this.state.major,
            drilldown:this.state.minor
        });

        chart.reflow();
        // chart.reflowNow = function(){
        //     this.containerHeight = this.options.chart.height || window.window.HighchartsAdapter.adapterRun(this.renderTo, 'height');
        //     this.containerWidth = this.options.chart.width || window.window.HighchartsAdapter.adapterRun(this.renderTo, 'width');
        //     this.setSize(this.containerWidth, this.containerHeight, false);
        //     this.hasUserSize = null;
        // }
        // chart.setSize(this.width(), this.height(), true);
        // window.addEventListener("container_interactive", function() {
        //     Highcharts.charts[0].update({
        //         exporting: {
        //             buttons: {
        //                 contextButton: {
        //                     enabled: expBtnVisible ? false : true
        //                 }
        //             }
        //         }
        //     })
        //     expBtnVisible = !expBtnVisible;
        // })
    }

    componentDidMount() {
        this.highChartsRender();

    }
    render() {

        return <div id="container_interactive"></div>;
    }
}
export default BarHighchartWithDrilldown;
