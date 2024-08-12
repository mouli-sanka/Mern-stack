/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';

const App = () => {
  const [activePage, setActivePage] = useState(1);
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [registrationDetails, setRegistrationDetails] = useState({ name: '', email: '', password: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationDetails({ ...registrationDetails, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', loginDetails);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', registrationDetails);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <h2>Login</h2>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={loginDetails.email}
                onChange={handleLoginChange}
              />
            </Form.Group>

            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={loginDetails.password}
                onChange={handleLoginChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h2>Register</h2>
          <Form onSubmit={handleRegistrationSubmit}>
            <Form.Group controlId="registerName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={registrationDetails.name}
                onChange={handleRegistrationChange}
              />
            </Form.Group>

            <Form.Group controlId="registerEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={registrationDetails.email}
                onChange={handleRegistrationChange}
              />
            </Form.Group>

            <Form.Group controlId="registerPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={registrationDetails.password}
                onChange={handleRegistrationChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>

    </Container>
  );
};

export default App;
