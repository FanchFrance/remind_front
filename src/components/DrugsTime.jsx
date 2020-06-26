import React, { useState, useEffect } from "react";
import { Modal, Form, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonAction from "./Buttons/ButtonAction";

const AddPatient = () => {
  // const [inputs, setInputs] = useState({
  //   name: "",
  //   lastname: "",
  //   poids: "",
  //   taille: "",
  //   doctor_id: "1",
  // });

  // const [show, handleShow] = useState(false);

  // const submitForm = (event) => {
  //   event.preventDefault();
  //   const url = "http://localhost:5000/api/patients";
  //   axios
  //     .post(url, inputs)
  //     .then((res) => res.data)
  //     .catch((e) => {
  //       // eslint-disable-next-line no-alert
  //       alert(`Erreur lors de l'ajout du patient : ${e.name}`);
  //     });
  // };

  // const onChange = (e) => {
  //   setInputs({
  //     ...inputs,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div>
      <ListGroup className="mb-2" horizontal="lg">
        <ListGroup.Item variant="primary">Modopar 30mg</ListGroup.Item>
        <ListGroup.Item>09:00</ListGroup.Item>
      </ListGroup>

      <ListGroup className="mb-2" horizontal="lg">
        <ListGroup.Item variant="primary">Modopar 60mg</ListGroup.Item>
        <ListGroup.Item>12:00</ListGroup.Item>
      </ListGroup>

      <ListGroup className="mb-2" horizontal="lg">
        <ListGroup.Item variant="primary">Modopar 30mg</ListGroup.Item>
        <ListGroup.Item>15:00</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AddPatient;
