import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "./Header";

import "./styles/patients.css";

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
      <div className="containpat">
        <Header />
        <div className="title">
          <h2>Mes patients</h2>
          <Link to="/add-patient">Ajouter un patient</Link>
        </div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Lastname</th>
              <th>Name</th>
              <th>Poids</th>
              <th>Taille</th>
              <th>Traitements</th>
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
                <td>
                  <Link to={`/patients/${patient.id}/drugs`}>Voir</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Patients;
