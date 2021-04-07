import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const logoutHandler = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      console.log(error);
      setError("Failed to logout");
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 style={{ textAlign: "center", marginBottom: "4%" }}>Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update profile
          </Link>
        </Card.Body>
      </Card>
      <div style={{ width: "100%", textAlign: "center", marginTop: "2%" }}>
        <Button variant="link" onClick={logoutHandler}>
          Log out
        </Button>
      </div>
    </>
  );
}
