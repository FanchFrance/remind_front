import React, { useState, useEffect } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonAction from "./Buttons/ButtonAction";

const AddPatient = () => {
  const [doctors, setDoctors] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/doctors`)
      .then((response) => response.data)
      .then((data) => setDoctors(data));
  }, []);

  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    poids: "",
    taille: "",
    doctor_id: "",
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
    <div>
      <Modal size="lg" show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Le patient {inputs.name} {inputs.lastname} a bien été ajouté !
          </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Link to="/">
            <button type="button" className="ButtonAction Action">
              Ok
            </button>
          </Link>
        </Modal.Footer>
      </Modal>

      <section className="ContainerBody">
        <div className="Panel">
          <div className="col-md-4">
            <h2 className="mb-5">Ajouter un patient</h2>
          </div>
          <div className="ActionPanel col-md-8">
            <Link to="/">
              <ButtonAction name="Retour" display="Return" />
            </Link>
          </div>
        </div>

        <Form onSubmit={submitForm}>
          <Form.Group onChange={onChange}>
            <Form.Label>Nom du patient</Form.Label>
            <Form.Control type="text" name="name" />
          </Form.Group>
          <Form.Group onChange={onChange}>
            <Form.Label>Prénom du patient</Form.Label>
            <Form.Control type="text" name="lastname" />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group onChange={onChange}>
                <Form.Label>Poids</Form.Label>
                <Form.Control type="text" name="poids" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group onChange={onChange}>
                <Form.Label>Taille</Form.Label>
                <Form.Control type="text" name="taille" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {doctors && (
              <Col>
                <Form.Group>
                  <Form.Label>Tout les docteurs</Form.Label>
                  <Form.Control
                    name="doctor_id"
                    as="select"
                    onChange={onChange}
                  >
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {`${doctor.name} ${doctor.lastname}`}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            )}
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

export default AddPatient;
