import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import { Link } from "react-router-dom";

export default class NextPill extends Component {
  state = {
    priseHour: "10",
    priseMinute: "00",
    idDrug: null,
    drug: {},
    checkPrise1: null,
  };
  componentDidMount() {
    const { match } = this.props;
    const idPatient = match.params.idPatient;

    axios(`http://localhost:5000/api/patients/${idPatient}/drugs`)
      .then((response) => response.data)
      .then((data) =>
        this.setState({
          priseHour: data[0] && data[0].hour_prise1,
          priseMinute: data[0] && data[0].minute_prise1,
          idDrug: data && data[0].drug_id,
          checkPrise1: data && data[0].check_prise1,
        })
      )
      .finally(() =>
        axios(`http://localhost:5000/api/drugs/${this.state.idDrug}`)
          .then((response) => response.data)
          .then((data) => this.setState({ drug: data[0] }))
      );
  }

  checkPrise = () => {
    const { match } = this.props;
    const idPatient = match.params.idPatient;
    const { idDrug } = this.state;

    axios
      .put(`http://localhost:5000/api/patients/${idPatient}/drugs/${idDrug}`, {
        check_prise1: "true",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { priseHour, priseMinute, drug, checkPrise1 } = this.state;

    const prise = priseHour + ":" + priseMinute;

    const fullTime = moment
      .utc(
        moment(prise, "HH:mm").diff(moment(moment().format("HH:mm"), "HH:mm"))
      )
      .format("HH:mm");

    if (priseHour === undefined) {
      return (
        <div>
          <p>Pas de prise</p>
          <Link to="/">Redirection</Link>
        </div>
      );
    }
    return (
      <div>
        <div className="heureNow">{moment().format("HH:mm")}</div>
        <div></div>
        <p>Prochaine prise</p>
        {priseMinute - moment().format("mm") <= 0 &&
        priseHour - moment().format("HH") <= 0 ? (
          <h1>Busted!</h1>
        ) : (
          <h1>Time Remaining: {fullTime}</h1>
        )}
        <p>{drug.DCI}</p>
        <p>{drug.posologie}</p>
        <button onClick={() => this.checkPrise()}>
          {checkPrise1 === "true"
            ? "J'ai déjà pris mon traitement"
            : "Je prends mon traitement"}
        </button>
      </div>
    );
  }
}
