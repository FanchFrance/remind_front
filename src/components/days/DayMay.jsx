import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, ButtonGroup, Pagination} from 'react-bootstrap';


import Header from '../Header';
import Navbar from '../MyNavbar';

import '../styles/treatments.css';


function DayMay () {

  return (
    <>
    <Header />
    <div className="mainContent">
        <Navbar />
        <div className="content">
      <div className="container">
        <div className="header">
          <div className="date">
          <Pagination>

            <Pagination.Prev />
            <Pagination.Item>Juin</Pagination.Item>
            <Pagination.Next />
          </Pagination>
          <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Ellipsis />
              <Pagination.Item>{25}</Pagination.Item>
              <Pagination.Item active>{26}</Pagination.Item>
              <Pagination.Item>{27}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
          <div className="patient">
            <div className="patientName">Marlon Brando</div>
            <Link>
              <div className="linkModify">modifier le traitement</div>
            </Link>
          </div>
        </div>
      <div className="hoursTable">
        <div className="squareContainer">
          <div className="hour">00h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">01h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">02h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">03h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">04h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">05h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
      </div>
      <div className="hoursTable">
      <div className="squareContainer">
          <div className="hour">06h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">07h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">08h00</div>
          <div className="priseOk">Modopart 200mg</div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">09h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">10h00</div>
          <div className="prise"></div>
          <div className="symptome">Migraine</div>
        </div>
        <div className="squareContainer">
          <div className="hour">11h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
      </div>
      <div className="hoursTable">
      <div className="squareContainer">
          <div className="hour">12h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">13h00</div>
          <div className="priseOk">Modopart 200mg</div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">14h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">15h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">16h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">17h00</div>
          <div className="priseKo">Modopart 200mg Retard:00:36</div>
          <div className="symptome"></div>
        </div>
      </div>
      <div className="hoursTable">
      <div className="squareContainer">
          <div className="hour">18h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">19h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">20h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">21h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">22h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
        <div className="squareContainer">
          <div className="hour">23h00</div>
          <div className="prise"></div>
          <div className="symptome"></div>
        </div>
      </div>
      </div>
        </div>

      </div>


    </>
  )};

export default DayMay;