import React, { useState, useEffect } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonAction from "./Buttons/ButtonAction";

import Header from './Header';
import Navbar from './MyNavbar';

const AddPatient = () => {
  // const [doctors, setDoctors] = useState();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/doctors`)
  //     .then((response) => response.data)
  //     .then((data) => setDoctors(data));
  // }, []);

  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    poids: "",
    taille: "",
    doctor_id: "1",
  });

  const [show, handleShow] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    const url = "http://localhost:5000/api/patients";
    axios
      .post(url, inputs)
      .then((res) => res.data)
      .catch((e) => {
        // eslint-disable-next-line no-alert
        alert(`Erreur lors de l'ajout du patient : ${e.name}`);
      });
  };

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />

      <div className="mainContent">
        <Navbar />
        <div className="content">
          <div>
            <Modal size="lg" show={show} centered>
              <Modal.Header closeButton>
                <Modal.Title>
                  Le patient {inputs.name} {inputs.lastname} a bien été ajouté !
                </Modal.Title>
              </Modal.Header>

              <Modal.Footer>
                <Link to="/patients">
                  <button type="button" className="ButtonAction Action">
                    Ok
                  </button>
                </Link>
              </Modal.Footer>
            </Modal>

            <section className="ContainerBody">
              <div className="Panel">
                <div className="col-md-4">
                  <h2 className="mb-5">Créer un patient</h2>
                </div>
              </div>

              <Form onSubmit={submitForm}>
                <Row>
                  <Col md={3}>
                    <Form.Group onChange={onChange}>
                      <Form.Label>Nom</Form.Label>
                      <Form.Control type="text" name="name" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group onChange={onChange}>
                      <Form.Label>Prénom</Form.Label>
                      <Form.Control type="text" name="lastname" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={2}>
                    <Form.Group onChange={onChange}>
                      <Form.Label>Poids</Form.Label>
                      <Form.Control type="text" name="poids" />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group onChange={onChange}>
                      <Form.Label>Taille</Form.Label>
                      <Form.Control type="text" name="taille" />
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

        </div>

      </div>


    
    </>
  );
};

export default AddPatient;
