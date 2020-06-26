import React from 'react';

import Header from './Header';
import Navbar from './MyNavbar';

import './styles/patients.css';

const Patient = () => {

  return(
    <>
      <Header />
      <div className="mainContent">
        <Navbar />
        <div className="content">

        </div>

      </div>
    </>

    )
  }
  
  
  export default Patient;