
import Highcharts from 'highcharts'
import React ,{Component} from "react";
import * as highchartsMore from 'highcharts/highcharts-more'
import Theme from "./theme";
highchartsMore(Highcharts)

class RadarHighcharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input:this.props,
            series: [{
                name: 'Allocated Budget',
                data: [43000, 19000, 60000, 35000, 17000, 10000],
                pointPlacement: 'on'
            }, {
                name: 'Actual Spending',
                data: [50000, 39000, 42000, 31000, 26000, 14000],
                pointPlacement: 'on'
            }],
        }
    }

    highChartsRender() {
        let chart;
        const options = {
            chart: {
                polar: true,
                type: 'line',
                renderTo: 'container_radarhigh'
            },
            accessibility: {
                description: 'A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.'
            },
            title: {
                text: 'نمودار عنکبوتی',
                x:-80
            },
            pane: {
                size: '80%',
                "startAngle": 45
            },

            xAxis: {
                categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                    'Information Technology', 'Administration'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },
            // legend: {
            //     align: 'right',
            //     verticalAlign: 'middle'
            // },
            series: this.state.series,
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 300
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom'
                        },
                        pane: {
                            size: '70%'
                        }
                    }
                }]
            },
            credits: {
                enabled: false
            },
        }
        Highcharts.theme = Theme();
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
            <div id="container_radarhigh">
            </div>
        )}
}
export default RadarHighcharts