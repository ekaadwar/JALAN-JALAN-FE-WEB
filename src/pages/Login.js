import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContentWrapper, MaxWidth, FormAuth, PAuth, Hr } from "../components/AuthStyles";

import AuthHeader from "../components/AuthHeader";
import GeneralButton from "../components/GeneralButton";
import AuthTitle from "../components/AuthTitle";

// import { FloatingLabel } from "react-bootstrap";

export default function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <AuthHeader />
          <ContentWrapper>
            <MaxWidth>
              <AuthTitle title="Login" />
              <FormAuth>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </FormAuth>
              <Link to="/">
                <GeneralButton value="Sign In" isPrimary />
              </Link>
              <PAuth>Did you forgot your password?</PAuth>
              <PAuth>
                <Link to="/forgotPass">Tap here for reset</Link>
              </PAuth>
              <Hr />
              <PAuth>don't have an account yet?</PAuth>
              <PAuth>
                <Link to="/register">Click here to Sign Up</Link>
              </PAuth>
            </MaxWidth>
          </ContentWrapper>
        </Col>
      </Row>
    </Container>
  );
}
