import React from 'react';
import './UserForm.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './UserForm.css';

const UserForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="contact-us">
      <div className="contact-form container py-5 px-5 ">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div>
            <h2 className=" text-center text-uppercase">SENCHOLA UNIVERSITY</h2>
            <h5 className="text-center font-weight-bold text-capitalize">
              USER FORM
            </h5>
          </div>
          <br />
          <br />
          <Row className="mb-5 ">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-5">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Education Qualification</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>--Select your Degree--</option>
                <option value="1">Btech CSE</option>
                <option value="2">Btech IT</option>
                <option value="3">Btech AI</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Father Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Father name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-5">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your number"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom06">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-5">
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Date of Birth (DOB)</Form.Label>
              <Form.Control type="date" placeholder="YYYY-MM-DD" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid DOB.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Education Qualification</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>--Select your Batch--</option>
                <option value="1">Batch-A</option>
                <option value="2">Batch-B</option>
                <option value="3">Batch-C</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-5">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Your Domain</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>--Select your Domain--</option>
                <option value="1">Frontend</option>
                <option value="2">Backend</option>
                <option value="3">Video Editing</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Upload KYC Documents</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Row>
          <Row className="mb-5">
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Upload Resume</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Row>

          <div className="d-grid gap-2 col-6 mx-auto">
            <Button
              style={{ borderRadius: '25px' }}
              variant="success"
              size="lg"
            >
              REGISTER
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
