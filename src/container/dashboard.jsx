import React, { Component } from "react";
import { Card, Col, Divider, Row } from "antd";

import GaugeBizcharts from "../components/chart/gaugeBizcharts";
import PieHighcharts from "../components/chart/pieHighcharts";
import RadarBizcharts from "../components/chart/radarBizcharts";
import BarHighchartWithDrilldown from "../components/chart/barHighchartWithDrilldown"
import TLP from "../components/chart/tlp";
import TableAnt from "../components/table/tableAnt";
import { withTranslation } from "react-i18next";

import { getThreats } from "../services/threatService";


import MapPestelFactor from "../__mocks__/customizeData/mapPestelFactor";
import MapThreatTypePercent from "../__mocks__/customizeData/mapThreatTypePercent";
import MapThreatCount from "../__mocks__/customizeData/mapThreatCount"
import MockBarData from "../__mocks__/threatCount";
import MapThreatCount2 from "../__mocks__/customizeData/mapThreatCount2"
import MockBarData2 from "../__mocks__/threatCount2";
import MockThreatTypePercent from "../__mocks__/threatTypePercent";
import MockRadarData from "../__mocks__/isacPestel";
import MockThreatData from "../__mocks__/threat"
import MockSA from"../__mocks__/sa"
import "./dashboard.css";

class Dashboard extends Component {
  state = {
    threatsdata:MockThreatData,
    //threatscount:MapThreatCount(MockBarData),
    threatscount:MapThreatCount2(MockBarData2),
    threatTypePercent:MapThreatTypePercent(MockThreatTypePercent ),
    pestalFactor:MapPestelFactor(MockRadarData),
    sa:MockSA.sa

  };

  async componentDidMount() {
      // this.setState({threatsdata: MockThreatData} );
      // this.setState( {threatscount:await MapThreatCount(MockBarData)});
      // this.setState({threatTypePercent:await MapThreatTypePercent(MockThreatTypePercent )});
      // this.setState({pestalFactor:await MapPestelFactor(MockRadarData )});

    // const {data} = await getThreats();
    // if (data.length === 0)
    //   this.setState({ threatsdata: MockThreatData });
    // else
    //   this.setState( {threatsdata: data} );
    //
    // const { threatscount} = await getThreats();
    // this.setState(MapThreatCount(threatscount) );
    // if (this.state.threatscount.length === 0)
    //   this.setState( MapThreatCount(MockBarData));
    //
    // const { threatTypePercent} = await getThreats();
    // this.setState(MapThreatTypePercent(threatTypePercent));
    // if (this.state.threatTypePercent.length === 0)
    //   this.setState(MapThreatTypePercent(MockThreatTypePercent ));
    //
    // const { pestalFactor} = await getThreats();
    // this.setState(MapPestelFactor(pestalFactor));
    // if (this.state.pestalFactor.length === 0)
    //   this.setState(MapPestelFactor(MockRadarData ));
  }
  render() {
    const { t } = this.props;
    return (
      <div className="page-content">
        <Row>
          <Row gutter={8} type="flex" justify="space-between">
            <Col span={12}>
              <Card title={t('dashboard.radarTitle')} bordered={false} className="cardStyle">
                <RadarBizcharts data={this.state.pestalFactor} height={200}/>
              </Card>
            </Col>
            <Col span={12}>
              {/*<Row  style={{MarginTop:"0px"}}>*/}
              {/*<Col span={18}>*/}
                <Card title={t('dashboard.sa')} bordered={false} className="cardStyle" >
                  <GaugeBizcharts height={200} inputvalue={this.state.sa} />
                </Card>
              {/*</Col>*/}
              {/*<Col span={6}>*/}
              {/*  <Card  title={t('dashboard.tlp')}  bordered={false} className="cardStyle">*/}

              {/*      <TLP width="60" height="205" />*/}
              {/*  </Card>*/}
              {/*</Col>*/}
              {/*</Row>*/}
            </Col>

          </Row>
          <br/>
          <Row >
            <Card title={t('dashboard.threatTableTitle')} bordered={false} className="cardStyle">
              <TableAnt data={this.state.threatsdata} />
            </Card>
          </Row>
          {/*<Row className="threat-list padding-side-20 component-background box-shadow">*/}
          {/*  <Table*/}
          {/*      size="small"*/}
          {/*      bordered*/}
          {/*      dataSource={this.state.dataSource}*/}
          {/*      rowKey="id"*/}
          {/*      columns={this.state.columns}*/}
          {/*      pagination={{ pageSize: 10 }}*/}
          {/*      scroll={{ x: 1300, y:240 }}*/}
          {/*  />*/}
          {/*  <br />*/}
          {/*</Row>*/}
          <Row
            gutter={16}
            type="flex"
            justify="space-between"
            className="up-status"
          >
            <Col span={8} className="text-center" style={{ marginBottom: 20 }}>
              <Card title={t('dashboard.threatsOccurencePercent')} bordered={false} className="cardStyle" >
                 <PieHighcharts data= {this.state.threatTypePercent}/>
              </Card>
            </Col>
            <Col span={16} className="text-center">
              <Card  title={t('dashboard.threatsCount')} bordered={false} className="cardStyle">
                <BarHighchartWithDrilldown major={this.state.threatscount[0]} minor={this.state.threatscount[1]}/>

              </Card>
            </Col>
          </Row>
          {/*<Row*/}
          {/*  gutter={16}*/}
          {/*  type="flex"*/}
          {/*  justify="space-between"*/}
          {/*  className="up-status"*/}
          {/*>*/}
          {/*  <Col span={20} offset={2}>*/}
          {/*    <Card bordered={false} className="cardStyle">*/}
          {/*      /!*title="تعداد کل فراهشدارها برحسب زمان"*!/*/}
          {/*      /!*<BarBizcharts data={this.state.data}/>*!/*/}
          {/*      <BarInteractiveHighcharts  major={mapThreatCount(barData)[0]} minor={mapThreatCount(barData)[1]}/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}
        </Row>
      </div>
    );
  }
}

export default withTranslation()(Dashboard); //export default Dashboard;
