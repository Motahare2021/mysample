import React, {Component} from "react";
import {getThreats, saveThreat} from "../services/threatService";
import {getListOfSiems} from "../services/threatService";
import RadarBizcharts from "../components/chart/radarBizcharts";
import { Row,Card, Col, Input, Button, Icon } from 'antd';
import GaugeBizcharts from "../components/chart/gaugeBizcharts";
import { withTranslation } from "react-i18next";
import "./dashboard.css"
import TableAnt from "../components/table/tableAnt";
import MockSiemThreatsData from "../__mocks__/siemThreats";
import MockSiemSA from "../__mocks__/siemSA";
import MapPestelFactor from "../__mocks__/customizeData/mapPestelFactor";
import MockRadarData from "../__mocks__/siemPestel";
import MocklistOfSiems from "../__mocks__/listOfSiems";
import Form from "../components/common/form";
import Joi from "joi-browser";

class SAPage extends (Component, Form) {
    state = {
        data: {
            title: ""
        },
        errors: {},
        threatsdata:MockSiemThreatsData,
        sa:MockSiemSA.sa,
        pestalFactor:MapPestelFactor(MockRadarData),
        listOfSiems: MocklistOfSiems
    };
    schema = {
        ID: Joi.string(),
        Title: Joi.string()
            .required()
            .label("Title")
    };
    async componentDidMount() {
        // const { data: listOfSiems } = await getListOfSiems();
        // this.setState({ listOfSiems });
    }
    doSubmit = async () => {
        //call the server

        // const { data: pestalFactor } = await getListOfSiems();
        // const { data: sa } = await getListOfSiems();
        // const { data: threatsdata } = await getListOfSiems();

        // this.setState({ pestalFactor });
        // this.setState({ sa });
        // this.setState({ threatsdata });
    };
        render() {
            const { t } = this.props;
            // const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);

            return(
                <div className="page-content">
                    <Row >
                        <Row>
                            <Card  bordered={false} title="جستجو" className="cardStyle">
                            {/*<WrappedAdvancedSearchForm />*/}
                                <form onSubmit={this.handleSubmit}>
                                    {/*{this.renderInput("Title", t('threat.title'))}*/}
                                    {this.renderSelect("siems", t('threat.title'),[{id:"1", name:"siem1"},{id:"2", name:"siem2"}])}
                                    {this.renderButton("search")}
                                </form>
                            </Card>
                        </Row>
                    <br/>
                        <Row  gutter={16} type="flex" justify="space-between" className="up-status">

                            <Col span={12} className="text-center" >
                                <Card  bordered={false} title={t('siem.radarTitle')} className="cardStyle" >
                                    <RadarBizcharts  height={200} data={this.state.pestalFactor} />
                                </Card>
                            </Col>
                            <Col span={12} className="text-center" >
                                <Card  bordered={false} title={t('siem.gaugeTitle')} className="cardStyle" >
                                    <GaugeBizcharts height={200}  inputvalue={this.state.sa} />
                                </Card>
                            </Col>

                        </Row>
                        <br/>
                        <Row >
                            <Card title={t('siem.tableTitle')} bordered={false} className="cardStyle">
                                <TableAnt data={this.state.threatsdata} />
                            </Card>
                        </Row>
                    </Row>
                </div>
            )
        }
    }

export default withTranslation()(SAPage);
