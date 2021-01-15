import React, { Component } from "react";
import TableAnt from "../components/table/tableAnt";
import { withTranslation } from "react-i18next";
import MockThreatCount from"../__mocks__/threatCount"
import MapThreatCount from "../__mocks__/customizeData/mapThreatCount"
import BarHighchartWithDrilldown from "../components/chart/barHighchartWithDrilldown"
import MockThreatsData from "../__mocks__/threat";
import { Card, Row,Button} from "antd";
import {Link} from "react-router-dom";

import "./dashboard.css";

class ThreatPage extends Component {
    state = {
        threatsdata:MockThreatsData,
        threatsCount:MapThreatCount(MockThreatCount),
        };
    enterLoading(){
        console.log("clicked!!!!!!!!!!")
    }
    render() {
        const { t } = this.props;
        return(

            <div className="page-content">
                <Row >
                    <Card bordered={false} className="cardStyle">
                        <Link
                            to="/threats/new"
                            className="btn btn-primary"
                        >
                           {t('threat.new')}
                        </Link>
                    </Card>
                    <Card title={t('dashboard.threatstableTitleInThreatsPage')} bordered={false} className="cardStyle">
                        <TableAnt data={this.state.threatsdata} />
                    </Card>
                </Row>
                <br/>
                <Row>
                    <Card title={t('dashboard.threatsCount')} bordered={false} className="cardStyle" >
                        <BarHighchartWithDrilldown  major={this.state.threatsCount[0]} minor={this.state.threatsCount[1]}/>

                    </Card>
                </Row>
            </div>
        );
    }
}
export default withTranslation()(ThreatPage);