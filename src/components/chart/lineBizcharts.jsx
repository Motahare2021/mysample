import React from "react";
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";

class LineBizcharts extends React.Component {
    render() {
        const {data} = this.props
        const cols = {
            value: {
                min: 0
            },
            item: {
                range: [0, 1]
            }
        };
        return (
            <div>
                <Chart height={400} data={data} scale={cols} forceFit>
                    <Axis name="item" />
                    <Axis name="value" />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <Geom type="line" position="item*value" size={2} />
                    <Geom
                        type="point"
                        position="item*value"
                        size={4}
                        shape={"circle"}
                        style={{
                            stroke: "#fff",
                            lineWidth: 1
                        }}
                    />
                </Chart>
            </div>
        );
    }
}

export default LineBizcharts
