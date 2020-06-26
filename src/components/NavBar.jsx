import React from 'react';
import { Link } from 'react-router-dom';

import './styles/home.css';

const NavBar = () => {

  return(
    <>
      <div className="headr">
        <Link to="/Patients">Mes Patients</Link>
        <Link to="AddPatient">Creer un Patient</Link>
        <Link to="Patient">Trouver un Patient</Link>
        <Link to="TreatmentTracker">Tracker un traitement</Link>
        <Link to="TreatMentPut">Modifier un traitement</Link>
        <Link to=""></Link>
        <Link to="DOctor">Mon Profil</Link>

      </div>
    </>

    )
  }
  
  
  export default NavBar;