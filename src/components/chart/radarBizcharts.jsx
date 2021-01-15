import React from "react";
import {    Chart, Geom, Axis,Tooltip,Coord,} from "bizcharts";
import DataSet from "@antv/data-set";
import "./bizchratTheme.css"

class RadarBizcharts extends React.Component {
    render() {
        const { DataView } = DataSet;
        const {data,height} = this.props ;
        const dv = new DataView().source(data);
        dv.transform({
            type: "fold",
            // fields: ["value1", "value2"],
            fields: ["value"],
            key: "user",
            value: "score" // value
        });
        const cols = {
            score: {
                min: 0,
                max: 100
            }
        };
        return (
            <div className="bizBackground">
                <Chart
                    // height={window.innerHeight}
                    height={height}
                    data={dv}
                    // padding={[20, 20, 95, 20]}
                    padding="auto"
                    scale={cols}
                    forceFit
                >
                    <Coord type="polar" radius={0.8} />
                    <Axis
                        name="item"

                        label={{
                            autoRotate: true,
                            textStyle: {
                                fill: "#FFF",
                                fontSize: 14
                            }
                        }}
                        line={null}
                        tickLine={null}
                        grid={{
                            lineStyle: {
                                lineDash: null
                            },
                            hideFirstLine: false
                        }}
                    />
                    <Tooltip />
                    <Axis
                        name="score"
                        line={null}
                        tickLine={null}
                        label={{
                            textStyle: {
                                fontSize: '12',
                                fill: "#FFF",
                            }
                        }}
                        grid={{
                            type: "polygon",
                            lineStyle: {
                                lineDash: null
                            },
                            alternateColor: "rgba(0, 0, 0, 0.04)"
                        }}
                    />
                    {/*<Legend name="user" marker="circle" offset={30} />*/}
                    <Geom type="area" position="item*score" color="user" />
                    <Geom type="line" position="item*score" color="user" size={2} />
                    <Geom
                        type="point"
                        position="item*score"
                        color="user"
                        shape="circle"
                        size={4}
                        style={{
                            stroke: "#fff",
                            lineWidth: 1,
                            fillOpacity: 1
                        }}
                    />
                </Chart>
            </div>
        );
    }
}
export default RadarBizcharts
