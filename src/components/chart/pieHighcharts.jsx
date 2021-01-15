import Highcharts from "highcharts";
import React, { Component } from "react";
import Theme from "./theme";
class PieHighcharts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input:this.props,
      series: [
        {
          name: "Percent",
          colorByPoint: true,
          data: []
        }
      ]
    };
  }

  highChartsRender() {
    let chart;
    const options = {
      chart: {
        // plotBackgroundColor: '#525f7f',
        // plotBorderWidth: 1,
        // plotShadow: true,
        type: "pie",
        renderTo: "container_pies"
        // ,backgroundColor: {
        //     linearGradient: [0, 0, 500, 500],
        //     stops: [
        //         [0, 'rgb(255, 255, 255)'],
        //         [1, 'rgb(240, 240, 255)']
        //     ]
        // },
        // borderWidth: 2
      },
      title: {
        text: ""
      },
      // legend:{
      //   align: 'right',
      //   verticalAlign:'middle',
      //   width: 200,
      //   itemWidth: 100
      // },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: this.state.series,
      credits: {
        enabled: false
      }
    };
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

    return <div id="container_pies"></div>;
  }
}
export default PieHighcharts;
