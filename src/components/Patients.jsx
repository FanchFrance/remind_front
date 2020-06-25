import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

class Patients extends Component {
  state = {
    patients: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/patients")
      .then((response) => response.data)
      .then((data) => this.setState({ patients: data }));
  }

  render() {
    const { patients } = this.state;

    return (
      <div>
        <div>Page Liste de patients</div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Lastname</th>
              <th>Name</th>
              <th>Poids</th>
              <th>Taille</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr>
                <td>{patient.id}</td>
                <td>{patient.lastname}</td>
                <td>{patient.name}</td>
                <td>{patient.poids}</td>
                <td>{patient.taille}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Patients;
