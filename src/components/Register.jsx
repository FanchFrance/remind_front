import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import './styles/home.css';


const Register = () => {

  const [inputs, setInputs] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    siret:''
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      
      <div className="headr">
        <h2>Ouvrir un compte sur REMIND</h2>
      </div>


      <Form className="register">
      
           <Form.Group onChange={onChange}>
              <Form.Control type="text" name="firstname" placeholder="votre prénom *" />
            </Form.Group>

            <Form.Group onChange={onChange}>
              <Form.Control type="text" name="name" placeholder="votre nom *" />
            </Form.Group>

            <Form.Group onChange={onChange}>
              <Form.Control type="email" name="email" placeholder="votre email *" />
            </Form.Group>

            <Form.Group onChange={onChange}>
              <Form.Control
                type="password"
                name="password"
                placeholder="créez un mot de passe *"
              />
            </Form.Group>

            <Form.Group onChange={onChange}>
              <Form.Control type="text" name="siret" placeholder="votre siret *" />
            </Form.Group>

          <Link to="/patients">
            <button
              className="btton"
            >M'enregistrer</button>
          </Link>
      </Form>
    
    </div>
  )
};

export default Register;