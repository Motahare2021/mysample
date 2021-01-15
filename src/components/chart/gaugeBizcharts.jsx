import React from "react";
import { Chart, Axis, Coord, Geom, Guide, Shape } from "bizcharts";
import "./bizchratTheme.css"


const { Html, Arc } = Guide;
const strokeColor = (percent) => {
    const color = [
        "#FFFFFF",
        "#0181EE",
        "#1BD309",
        "#FFFF00",
        "#FF7B08",
        "#BD0000",
        "#6B0000"
    ];
    return (
        ((percent >= 0 && percent < 20) && color[0]) ||
        ((percent >= 20 && percent < 35) && color[1]) ||
        ((percent >= 35 && percent < 50) && color[2]) ||
        ((percent >= 50 && percent < 65) && color[3]) ||
        ((percent >= 65 && percent < 75) && color[4]) ||
        ((percent >= 75 && percent < 90) && color[5]) ||
        ((percent >= 90 && percent < 100) && color[6])
    );
};
Shape.registerShape("point", "pointer", {
    drawShape(cfg, group) {
        let point = cfg.points[0];
        point = this.parsePoint(point);
        const center = this.parsePoint({
            x: 0,
            y: 0
        });
        group.addShape("line", {
            attrs: {
                x1: center.x,
                y1: center.y,
                x2: point.x,
                y2: point.y,
                stroke: cfg.color,
                lineWidth: 5,
                lineCap: "round"
            }
        });
        return group.addShape("circle", {
            attrs: {
                x: center.x,
                y: center.y,
                r: 12,
                stroke: cfg.color,
                lineWidth: 4.5,
                fill: "#fff"
            }
        });
    }
});

const color = [
    "#FFFFFF",
    "#0181EE",
    "#1BD309",
    "#FFFF00",
    "#FF7B08",
    "#BD0000",
    "#6B0000"
];
const cols = {
    value: {
        min: 0,
        max: 100,
        tickInterval: 10,
        nice: false
    }
};

class GaugeBizcharts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineWidth: 25
        };
    }

    render() {
        const { height, inputvalue } = this.props;
        const { lineWidth } = this.state;
        const val = inputvalue / 10;
        return (
            <div className="bizBackground">
                <Chart height={height} data={[{ value: inputvalue }]} scale={cols} padding={[10, 0, 0, 0]} forceFit>
                    <Coord type="polar" startAngle={-9 / 8 * Math.PI} endAngle={1 / 8 * Math.PI} radius={0.75} />
                    <Axis
                        name="value"
                        zIndex={2}
                        line={null}
                        label={{
                            offset: -20,
                            textStyle: {
                                fontSize: 18,
                                fill: "#CBCBCB",
                                textAlign: "center",
                                textBaseline: "middle"
                            }
                        }}
                        tickLine={{
                            length: -24,
                            stroke: "#fff",
                            strokeOpacity: 1
                        }}
                    />
                    <Axis name="1" visible={false} />
                    <Geom
                        type="point"
                        position="value*1"
                        shape="pointer"
                        color={strokeColor(inputvalue)}
                        active={false}
                        style={{ stroke: "#fff", lineWidth: 1 }}
                    />
                    <Guide>
                        <Arc
                            zIndex={0}
                            start={[0, 0.965]}
                            end={[100, 0.965]}
                            style={{
                                stroke: "rgba(0, 0, 0, 0.09)",
                                lineWidth
                            }}
                        />
                        {
                            val < 2 &&
                            <Arc
                                zIndex={1}
                                start={[0, 0.965]}
                                end={[inputvalue, 0.965]}
                                style={{
                                    stroke: color[0],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            val >= 2 &&
                            <Arc
                                zIndex={1}
                                start={[0, 0.965]}
                                end={[20, 0.965]}
                                style={{
                                    stroke: color[0],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            val >= 3.5 &&
                            <Arc
                                zIndex={1}
                                start={[20, 0.965]}
                                end={[35, 0.965]}
                                style={{
                                    stroke: color[1],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            val >= 5 &&
                            <Arc
                                zIndex={1}
                                start={[35, 0.965]}
                                end={[50, 0.965]}
                                style={{
                                    stroke: color[2],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            val >= 6.5 &&
                            <Arc
                                zIndex={1}
                                start={[50, 0.965]}
                                end={[65, 0.965]}
                                style={{
                                    stroke: color[3],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            val >= 7.5 &&
                            <Arc
                                zIndex={1}
                                start={[65, 0.965]}
                                end={[75, 0.965]}
                                style={{
                                    stroke: color[4],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            val >= 9 &&
                            <Arc
                                zIndex={1}
                                start={[75, 0.965]}
                                end={[90, 0.965]}
                                style={{
                                    stroke: color[5],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            (val >= 2 && val < 3.5) &&
                            <Arc
                                zIndex={1}
                                start={[20, 0.965]}
                                end={[inputvalue, 0.965]}
                                style={{
                                    stroke: color[1],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            (val >= 3.5 && val < 5) &&
                            <Arc
                                zIndex={1}
                                start={[35, 0.965]}
                                end={[inputvalue, 0.965]}
                                style={{
                                    stroke: color[2],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            (val >= 5 && val < 6.5) &&
                            <Arc
                                zIndex={1}
                                start={[50, 0.965]}
                                end={[inputvalue, 0.965]}
                                style={{
                                    stroke: color[3],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            (val >= 6.5 && val < 7.5) &&
                            <Arc
                                zIndex={1}
                                start={[65, 0.965]}
                                end={[inputvalue, 0.965]}
                                style={{
                                    stroke: color[4],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            (val >= 7.5 && val < 9) &&
                            <Arc
                                zIndex={1}
                                start={[75, 0.965]}
                                end={[inputvalue, 0.965]}
                                style={{
                                    stroke: color[5],
                                    lineWidth
                                }}
                            />
                        }
                        {
                            (val >= 9) &&
                            <Arc
                                zIndex={1}
                                start={[90, 0.965]}
                                end={[inputvalue, 0.965]}
                                style={{
                                    stroke: color[6],
                                    lineWidth
                                }}
                            />
                        }

                    <Html
                        position={["50%", "90%"]}
                        html={() => (
                            `<div style="width: 200px;text-align: center;font-size: 12px!important;">
                             <p style="font-size: 3em;margin: 0;color: white">${inputvalue}</p>
                            </div>`
                        )}
                    />
                </Guide>
            </Chart>
            </div>
        );
    }
}

export default GaugeBizcharts;