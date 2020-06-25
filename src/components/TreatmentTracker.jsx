import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TreatmentSquare from './TreatmentSquare';

import './treatmentStyle.css';


function TreatmentTracker () {

  return (
      <div className="container">
        <div className="header">
          <div className="date">25/06/2020</div>
          <div className="patient">
            <div className="patientName">Marlon Brando</div>
            <div className="linkModify">Modifier le Traitement</div>
          </div>
        </div>
      <div className="trackertable">
        <TreatmentSquare />
      </div>

      </div>
  )};

export default TreatmentTracker;