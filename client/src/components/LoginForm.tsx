import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/appHooks";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "https://activitea-be.herokuapp.com/api/v1/admin/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Container className="login__container">
      <Container className="login_wrapper">
        <h1 className="form_header">Admin Dashboard</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form_input"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              type="password"
              className="form_input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button
          className="form_btn"
          onClick={handleClick}
          variant="primary"
          type="submit"
        >
          Sign In
        </Button>
        {error && <span>Wrong credentials</span>}
      </Container>
    </Container>
  );
};

export default LoginForm;
