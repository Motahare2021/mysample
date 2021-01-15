import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getThreat, saveThreat } from "../services/threatService";
import {Card} from "antd";
import { withTranslation } from "react-i18next";

class ThreatForm extends Form {
  state = {
    data: {
      title: "",
      affected_scope:"",
      threat_type: "",
      description: "",
      vulnerabilities: [],
      attack_patterns: [],
      occurrence_time: "",
      threat_score:""
    },
    errors: {}
  };

  // the idea behind joi is to define a schema which is a single object
  schema = {
    ID: Joi.string(),
    Title: Joi.string()
      .required()
      .label("Title"),
    Affected_scope: Joi.string()
        .required()
        .label("Affected_Scope"),
    Threat_type: Joi.string()
        .label("Threat_Type"),
    Description: Joi.string()
      .required()
      .label("Description"),
    Vulnerabilities: Joi.string()
        .required()
        .label("Vulnerabilities"),
    Attack_patterns: Joi.string()
        .required()
        .label("Attack_Patterns"),
    Occurrence_time: Joi.date()
        .required()
        .label("Occurrence_Time"),
    Threat_score:Joi.number()
        .required()
        .min(0)
        .max(100)
        .label("Threat_Score")
  };

  doSubmit = async () => {
    //call the server
    const fff = await saveThreat(this.state.data);
    this.props.history.push("/threats");
  };
  async populateThreats() {
    try {
      const threatId = this.props.match.params.id;
      console.log('----------------threatId--------------------')
      console.log(threatId)
      if (threatId === "new") return;
      const { data: threat } = await getThreat(threatId);
      this.setState({ data: this.mapToViewModel(threat) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }
  async componentDidMount() {
    await this.populateThreats();
  }
  mapToViewModel(threat) {
    return {
      Title: threat.title,
      Description: threat.description,
      Affected_scope: threat.affected_scope,
      Threat_type: threat.threat_type,
      Vulnerabilities: threat.vulnerabilities,
      Attack_patterns: threat.attack_patterns,
      Occurrence_time: threat.occurrence_time,
      Threat_score: threat.threat_score,
    };
  }
  render() {
    const { t } = this.props;
    return (
      <div>
         {/*<h1>Threat Form {match.params.id}</h1> */}
          <Card title={t('threat.threat') } bordered={false} className="cardStyle">

          <form onSubmit={this.handleSubmit}>
            {this.renderInput("Title", t('threat.title'))}
            {this.renderInput("Description", t('threat.description'))}
            {this.renderInput("Affected_scope", t('threat.affected_scope'))}
            {this.renderInput("Threat_type", t('threat.threat_type'))}
            {this.renderInput("Vulnerabilities", t('threat.vulnerabilities'))}
            {this.renderInput("Attack_patterns", t('threat.attack_patterns'))}
            {this.renderInput("Occurrence_time", t('threat.occurrence_time'))}
            {this.renderInput("Threat_score", t('threat.threat_score'))}

            {this.renderButton("submit")}
            <button
              className="btn btn-primary"
              onClick={() => this.props.history.push("/threats")}
            >
              return
            </button>
          </form>
          </Card>
        </div>
    );
  }
}

export default withTranslation()(ThreatForm);
