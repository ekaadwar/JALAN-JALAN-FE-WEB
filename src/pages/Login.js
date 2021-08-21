import React from "react";
import { Container, Form, Button } from "react-bootstrap";

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
            {process.env.PRIMARY_COLOR}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <AuthButton />
          </Form>
        </Container>
      </section>
    </>
  );
}
