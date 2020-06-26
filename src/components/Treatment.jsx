import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

class Treatment extends Component {
  state = {
    traitements: [],
  };

  componentDidMount() {
    const { match } = this.props;
    console.log(match);
    const idPatient = match.params.id;
    const url = `http://localhost:5000/api/patients/${idPatient}/drugs`;

    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => this.setState({ traitements: data }));
  }

  render() {
    const { traitements } = this.state;

    console.log(traitements);

    return (
      <div>
        <div className="title">
          <h2>Page Liste de traitements</h2>
        </div>
        <Table>
          <thead>
            <tr>
              <th># patient</th>
              <th># médicaments</th>
              <th>Jour</th>
              <th>Prise 1</th>
              <th>Check 1</th>
              <th>Prise 2</th>
              <th>Check 2</th>
              <th>Prise 3</th>
              <th>Check 3</th>
            </tr>
          </thead>
          <tbody>
            {traitements.length > 0 ? (
              traitements.map((traitement) => (
                <tr>
                  <td>{traitement.patient_id}</td>
                  <td>{traitement.drug_id}</td>
                  <td>{traitement.day_date}</td>
                  <td>
                    {traitement.hour_prise1}:{traitement.minute_prise1}
                  </td>
                  <td>{traitement.check_prise1}</td>
                  <td>
                    {traitement.hour_prise2}:{traitement.minute_prise2}
                  </td>
                  <td>{traitement.check_prise2}</td>
                  <td>
                    {traitement.hour_prise3}:{traitement.minute_prise3}
                  </td>
                  <td>{traitement.check_prise3}</td>
                </tr>
              ))
            ) : (
              <div>Pas de traitements</div>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Treatment;
