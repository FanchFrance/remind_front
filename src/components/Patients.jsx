import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from './Header';
import Navbar from './MyNavbar';

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
        <div className="mainContent">
          <Navbar />
          <div className="content">
          <div className="title">
          <h2>Mes patients</h2>
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
                  <Link to={`/patients/${patient.id}/drun`}>Voir</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
        </div>
      </div>
        
    );
  }
}
export default Patients;
