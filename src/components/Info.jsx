import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Info({
  onValidateForm: handleValidateForm,
  validated = { validated },
  formRef,
}) {
  return (
    <div className="form-container mx-auto col-lg-7 d-flex flex-column justify-content-around p-4 pe-lg-5">
      <div>
        <h2 className="text-primary fs-3 fw-bold pt-lg-4">Personal Info</h2>
        <p className="text-tertiary" style={{ fontSize: "0.8rem" }}>
          Please provide your name, email address and phone number.
        </p>
      </div>

      <Form
        ref={formRef}
        noValidate
        validated={validated}
        onSubmit={handleValidateForm}
        className="d-flex flex-column gap-3"
      >
        <Form.Group controlId="name" className="grid-container">
          <Form.Label className="grid-label">Name</Form.Label>

          <Form.Control
            required
            type="text"
            placeholder="e.g. Stephen King"
            style={{ backgroundImage: "none" }}
            className="grid-input outline-none text-start"
          />
          <Form.Control.Feedback type="invalid" className="grid-validation">
            This field is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email" className="grid-container">
          <Form.Label className="grid-label">Email Address</Form.Label>

          <Form.Control
            required
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            style={{ backgroundImage: "none" }}
            className="grid-input outline-none text-start"
          />
          <Form.Control.Feedback type="invalid" className="grid-validation">
            enter a valid email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="phone" className="grid-container">
          <Form.Label className="grid-label">Phone Number</Form.Label>

          <Form.Control
            required
            type="tel"
            pattern="\+\d{1,3}\s?\d{10}"
            placeholder="e.g. +1 234567890"
            style={{ backgroundImage: "none" }}
            className="grid-input outline-none text-start mb-3"
          />
          <Form.Control.Feedback type="invalid" className="grid-validation">
            enter a valid number
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          size="lg"
          type="submit"
          className="text-white align-self-end mt-5 d-none d-lg-block"
        >
          Next Step
        </Button>
      </Form>
    </div>
  );
}

export default Info;
