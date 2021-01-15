
import Highcharts from 'highcharts'
import React ,{Component} from "react";
import Theme from "./theme"
class LineHighcharts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input:this.props,
            series:[{
                name: 'Installation',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }]
        }
    }

    highChartsRender() {
        let chart;
        const options = {
            chart: {
                renderTo: 'container_line'
            },
            title: {
                text: 'تعداد کل تهدیدها بر حسب زمان'
            },

            // subtitle: {
            //     text: 'Source: thesolarfoundation.com'
            // },

            yAxis: {
                title: {
                    text: 'Number of Threats'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
            series: this.state.series,
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            },
            credits: {
                enabled: false
            },
        }
        Highcharts.theme =Theme();
        Highcharts.setOptions(Highcharts.theme);
        chart = Highcharts.chart(options);
        chart.update({
            series: this.state.input
        });
    }
    componentDidMount() {
        this.highChartsRender();
    }
    render() {
        return(
            <div id="container_line">
            </div>
        )}
}
export default LineHighcharts