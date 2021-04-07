import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
export default () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();

    signUp(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 style={{ textAlign: "center", marginBottom: "4%" }}>Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Form.Group id="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" required ref={passwordConfirmRef} />
            </Form.Group>
            <Button type="submit" style={{ width: "100%" }}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div style={{ width: "100%", textAlign: "center", marginTop: "2%" }}>
        Already have an account? Login
      </div>
    </>
  );
};
