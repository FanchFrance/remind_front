import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import moment from "moment";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles/NextPill.css";

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
      <div className="nextPillContainer">
        <div className="heureNow">{moment().format("HH:mm")}</div>
        <div></div>
        {priseMinute - moment().format("mm") <= 0 &&
        priseHour - moment().format("HH") <= 0 ? (
          <h1>C'est l'heure de la prise</h1>
        ) : (
          <h1>Temps restant avant la prise: {fullTime}</h1>
        )}

        <ListGroup className="mb-2" horizontal="lg">
          <ListGroup.Item variant="primary">{drug.DCI}</ListGroup.Item>
          <ListGroup.Item>{drug.posologie}</ListGroup.Item>
        </ListGroup>

        {/* <button onClick={() => this.checkPrise()}>
          {checkPrise1 === "true"
            ? "Je prends mon traitement"
            : "Je prends mon traitement"}
        </button> */}
        <Button onClick={() => this.checkPrise()} variant="success">
          {" "}
          {checkPrise1 === "true"
            ? "Je prends mon traitement"
            : "Je prends mon traitement"}{" "}
        </Button>
        <Link to="/symptoms">
          <Button variant="warning">Symptomes</Button>
        </Link>
      </div>
    );
  }
}
