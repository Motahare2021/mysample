import React, {Component} from "react";
import { Row, Card} from "antd";
import TableAnt from "../components/table/tableAnt";
import { withTranslation } from "react-i18next";
import MockMetaAlertCount from"../__mocks__/metaalertCount"
import MapMetaAlertCount from "../__mocks__/customizeData/mapThreatCount"
import BarHighchartWithDrilldown from "../components/chart/barHighchartWithDrilldown"
import MockMetaAlertData from "../__mocks__/metaAlerts";
import "./dashboard.css";

class RisksPage extends Component {
    state = {
        metaAlertsdata:MockMetaAlertData,
        metaAlertCount:MapMetaAlertCount(MockMetaAlertCount),
    };
    render() {
        const { t } = this.props;
        return(
            <div className="page-content">
                <Row >
                        <Card title={t('dashboard.metaAlertTableTitle')} bordered={false} className="cardStyle">
                            <TableAnt data={this.state.metaAlertsdata} />
                        </Card>
                </Row>
                <br/>
                <Row>
                    <Card title={t('dashboard.metaAlertCount')} bordered={false} className="cardStyle" >
                        {/*<BarBizcharts data={this.state.data}/>*/}
                        <BarHighchartWithDrilldown  major={this.state.metaAlertCount[0]} minor={this.state.metaAlertCount[1]}/>

                    </Card>
                </Row>
            </div>
        );
    }
}

export default withTranslation()(RisksPage);
