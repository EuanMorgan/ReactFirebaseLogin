import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
export default () => {
  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("A password reset email has been sent to you");
    } catch (error) {
      console.log(error);
      setError(`Failed to reset password.${error.message}`);
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 style={{ textAlign: "center", marginBottom: "4%" }}>
            Password reset
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>

            <Button type="submit" style={{ width: "100%" }} disabled={loading}>
              Reset password
            </Button>
          </Form>
          <div style={{ width: "100%", textAlign: "center", marginTop: "5%" }}>
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div style={{ width: "100%", textAlign: "center", marginTop: "2%" }}>
        Need an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};
