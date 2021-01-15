
import Highcharts from 'highcharts'
import React ,{Component} from "react";
import Theme from "./theme"
class BarHighcharts extends Component {
// back #1e1e2f  #1e1e4f ---card  #525f7f  side
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                type: 'column',
                colorByPoint: true,
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                showInLegend: false
            }]
        }
    }

    highChartsRender() {
        const options = {
            chart: {
                renderTo: 'container_bar'
            },
                title: {
                    text: 'Chart.update'
                },

                subtitle: {
                    text: 'Plain'
                },

                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
            <div id="container_bar">
            </div>
        )}
}
export default BarHighcharts