import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Row, Col } from "react-bootstrap";
import AuthHeader from "../components/AuthHeader";
import AuthTitle from "../components/AuthTitle";
import GeneralButton from "../components/GeneralButton";
import { ContentWrapper, MaxWidth, FormAuth, PAuth, Hr } from "../components/AuthStyles";

export default function Register() {
  return (
    <Container>
      {/* <Row>
        <Col sm={8}>1</Col>
        <Col sm={4}>2</Col>
      </Row> */}

      <Row>
        <Col>
          <AuthHeader />
          <ContentWrapper>
            <MaxWidth>
              <AuthTitle title="Register" />
              <FormAuth>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <GeneralButton value="Sign Up" isPrimary />
              </FormAuth>
              <Hr />
              <PAuth>Already have an Account?</PAuth>
              <Link to="/login">
                <GeneralButton value="Sign In" />
              </Link>
            </MaxWidth>
          </ContentWrapper>
        </Col>
      </Row>
    </Container>
  );
}
