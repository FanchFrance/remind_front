import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'; 

import './styles/home.css';

const MyNavbar = () => {

  return(
    <>
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home"></Nav.Link>
        <Nav.Link href="/home"></Nav.Link>
        <Nav.Link href="/home"></Nav.Link>
        <Nav.Link href="/home"></Nav.Link>
        <Nav.Link href="/home"></Nav.Link>
        <Nav.Link href="/home"></Nav.Link>
        <Nav.Link href="/Patients">Mes Patients</Nav.Link>
        <Nav.Link href="/add-patient">Creer un Patient</Nav.Link>
        <Nav.Link href="/patient/tracker">Tracker un traitement</Nav.Link>
        <Nav.Link href="/add-treatment">Ajouter un traitement</Nav.Link>
        <Nav.Link href="/TreatmentPut">Modifier un traitement</Nav.Link>
        <Nav.Link href="/home"></Nav.Link>
        <Nav.Link href="/home"></Nav.Link>
        <Nav.Link href="/home"></Nav.Link>
        <Nav.Link href="Doctor">Mon Compte</Nav.Link>
        <Nav.Link eventKey="disabled" disabled></Nav.Link>
      </Nav>
    </>

    )
  }
  
  
  export default MyNavbar;