import React, { useState, useEffect } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonAction from "./Buttons/ButtonAction";

const TreatmentAdd = () => {
  // const [doctors, setDoctors] = useState();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/doctors`)
  //     .then((response) => response.data)
  //     .then((data) => setDoctors(data));
  // }, []);

  const [inputs, setInputs] = useState({
    patient_id: "",
    drug_id: "",
    hour_prise1: "",
    hour_prise2: "",
    hour_prise3: "",
  });

  const [show, handleShow] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    const url = "localhost:5000/api/patients/:idPatient/drugs/:idDrug";
    axios
      .post(url, inputs)
      .then((res) => res.data)
      .catch((e) => {
        alert(`Erreur lors de l'ajout du traitement : ${e.name}`);
      });
  };

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Modal size="lg" show={show} centered>
        <Modal.Footer>
          <Link to="/treatment">
            <button type="button" className="ButtonAction Action">
              Ok
            </button>
          </Link>
        </Modal.Footer>
      </Modal>

      <section className="ContainerBody">
        <div className="Panel">
          <div className="col-md-4">
            <h2 className="mb-5">Ajouter un traitement</h2>
          </div>
        </div>

        <Form onSubmit={submitForm}>
          <Row>
            <Col md={3}>
              <Form.Group onChange={onChange}>
                <Form.Label>patient</Form.Label>
                <Form.Control type="text" name="patient" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group onChange={onChange}>
                <Form.Label>drug</Form.Label>
                <Form.Control type="text" name="drug" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group onChange={onChange}>
                <Form.Label>Prise1</Form.Label>
                <Form.Control type="text" name="prise1" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={2}>
              <Form.Group onChange={onChange}>
                <Form.Label>Prise2</Form.Label>
                <Form.Control type="text" name="prise2" />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group onChange={onChange}>
                <Form.Label>Prise3</Form.Label>
                <Form.Control type="text" name="prise3" />
              </Form.Group>
            </Col>
          </Row>
          <button
            className="ButtonAction Action"
            type="submit"
            onClick={() => handleShow(true)}
          >
            Créer
          </button>
        </Form>
      </section>
    </div>
  );
};

export default TreatmentAdd;

/* import React from "react";
import axios from "axios";
import { Button, Form, Col, Row, Dropdown } from "react-bootstrap";

import "./style.css";

const TreatmentAdd = () => {

    const treatState = {
        patient:"",
        drug:"",
        prise1:"",
        prise2:"",
        prise3:"",
  };
  
  const [treatment, setTreatment] = useState(false);


  const formSubmit = (event) => {
    url = "localhost:5000/api/patients/:idPatient/drugs/:idDrug"
    axios
    .post(url, treatState)
    .then((res) => setTreatment)(
        {
      patient: patient_id,
      drug: drug_id,
      prise1: hour_prise1,
      prise2: hour_prise2,
      prise3: hour_prise3,
    });
  };
 



  return (
    <>
      <div className="BlocAdd">Ajouter un traitement</div>
      <Form className="AddTreat">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Selectionner traitement</Form.Label>
          <Form.Control as="select">
            <option>Modopar 100 mg gellule</option>
            <option>Modopar 200 mg gellule</option>
            <option>Modopar 100 mg comprimé</option>
            <option>Modopar 100 mg comprimé</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Horaire de prise 1</Form.Label>
          <Form.Control
            type="time"
            name="time"
            placeholder="hrs:mins"
            pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
            class="inputs time"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Horaire de prise 2</Form.Label>
          <Form.Control
            type="time"
            name="time"
            placeholder="hrs:mins"
            pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
            class="inputs time"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Horaire de prise 3</Form.Label>
          <Form.Control
            type="time"
            name="time"
            placeholder="hrs:mins"
            pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
            class="inputs time"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ajouter ce traitement
        </Button>
      </Form>
    </>
  );
};

export default TreatmentAdd;
 */
