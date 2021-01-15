import React, { Component } from "react";
import {Chart,Geom,Axis,Tooltip, Coord, Legend} from "bizcharts";
import DataSet from "@antv/data-set";
import "./bizchratTheme.css";

class PieBizcharts extends Component {
  render() {
    const { DataView } = DataSet;
    const { data } = this.props;
    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "value",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val =>
          (val = `${Number(Math.round(val * 100 + "e2") + "e-2")}%`)
      }
    };
    return (
      <div className="bizBackground">
        <Chart
          // height={window.innerHeight}
          height={300}
          data={dv}
          scale={cols}
          // padding={[80, 100,80, 80]}
          padding="auto"
          forceFit
          onGetG2Instance={chart => {
            setTimeout(() => {
              const geom = chart.get("geoms")[0];
              const items = geom.get("data");
              geom.setSelected(items[1]);
            }, 2000);
          }}
          onPlotClick={ev => {
            console.log(ev);
          }}
        >
          <Coord type="theta" radius={0.9} />
          <Axis name="percent" />
          <Legend
            position="right"
            offsetY={-window.innerHeight / 2 + 120}
            offsetX={0}
          />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = `${Number(
                  Math.round(percent * 100 + "e2") + "e-2"
                )}%`;
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
            {/*<Label*/}
            {/*    content="percent"*/}
            {/*    formatter={(val, item) => {*/}
            {/*        return item.point.item + ": " + val;*/}
            {/*    }}*/}
            {/*    // offset={-40}*/}
            {/*    // textStyle={{*/}
            {/*    //     rotate: 0,*/}
            {/*    //     textAlign: "center",*/}
            {/*    //     shadowBlur: 2,*/}
            {/*    //     shadowColor: "rgba(0, 0, 0, .45)"*/}
            {/*    // }}*/}
            {/*/>*/}
          </Geom>
        </Chart>
      </div>
    );
  }
}
export default PieBizcharts;
