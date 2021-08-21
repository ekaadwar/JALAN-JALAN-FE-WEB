import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import AuthHeader from "../components/AuthHeader";
import AuthButton from "../components/AuthButton";

// import { FloatingLabel } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <AuthHeader />
      <section>
        <Container>
          <h1>Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <AuthButton />
            <p>don't have an account yet?</p>
            <Link to="/register">Click here to Sign Up</Link>
          </Form>
        </Container>
      </section>
    </>
  );
}
