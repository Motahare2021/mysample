import React ,{Component} from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
import Theme from "./theme"


class GaugeHighcharts extends Component {
// back #1e1e2f  #1e1e4f ---card  #525f7f  side
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Speed',
                data: [57],
                tooltip: {
                    valueSuffix: ' km/h'
                }
            }]
        }
    }
// Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);
        }
    }

    highChartsRender() {
        const options = {
            chart: {
                type: 'gauge',
                renderTo: 'container_gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'نمودار گیج '
            },

            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#FFF'],
                            [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#333'],
                            [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

// the value axis
            yAxis: {
                min: 0,
                max: 100,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'km/h'
                },
                plotBands: [{
                    from: 0,
                    to: 25,
                    color: '#fff' // white
                }, {
                    from: 25,
                    to: 50,
                    color: '#00FF00' // green
                }, {
                    from: 50,
                    to: 75,
                    color: '#FFBF00' // amber
                }, {
                    from: 75,
                    to: 100,
                    color: '#F5222D' // red
                }]
            },
            series: this.state.series,
            credits: {
                enabled: false
            },
        }
        Highcharts.theme =Theme();
        Highcharts.setOptions(Highcharts.theme);
        Highcharts.chart(options);

    }
    componentDidMount() {
        this.highChartsRender();
    }
    render() {
        return(
            <div id="container_gauge">

            </div>
        )}
}
export default GaugeHighcharts