import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

class Treatment extends Component {
  state = {
    traitements: [],
  };

  componentDidMount() {
    const url = "http://localhost:5000/api/treatments";
    const url2 = "http://localhost:5000/api/patients/:idPatient/drugs/:idDrug";

    axios
      .get(url2)
      .then((response) => response.data)
      .then((data) => this.setState({ traitements: data }));
  }

  render() {
    const { traitements } = this.state;

    return (
      <div>
        <div>Page Liste de traitements</div>
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
            {traitements.map((traitement) => (
              <tr>
                <td>{traitement.patient_id}</td>
                <td>{traitement.drug_id}</td>
                <td>{traitement.day_date}</td>
                <td>{traitement.hour_prise1}</td>
                <td>{traitement.check_prise1}</td>
                <td>{traitement.hour_prise2}</td>
                <td>{traitement.check_prise2}</td>
                <td>{traitement.hour_prise3}</td>
                <td>{traitement.check_prise3}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Treatment;
