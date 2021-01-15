import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";

class Speedometer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="chart">
        <ReactSpeedometer
          value={35}
          // minValue={0}
          maxValue={100}
          segments={5}
          // forceRender='false'
          // width={}
          // heigh={}
          // fluidWidth='false'
          needleColor="black"
          startColor="yellow"
          endColor="red"
          // needleTransition='easeQuadInOut'
          // needleTransitionDuration={500}
          // ringWidth={60}
          // textColor='#666'
          // valueFormat=''
          // currentValueText=''
          segmentColors={[
            "#bf616a",
            "#d08770",
            "#ebcb8b",
            "#a3be8c",
            "#b48ead"
          ]}
        />
      </div>
    );
  }
}

export default Speedometer;
