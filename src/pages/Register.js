import React from "react";
import { Link } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import AuthHeader from "../components/AuthHeader";
import AuthTitle from "../components/AuthTitle";
import AuthButton from "../components/AuthButton";

import styled from "styled-components";

const ContentWrapper = styled.section`
  height: 90vh;
  width: 100%;
  //   background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MaxWidth = styled.section`
  width: 100%;
  max-width: 500px;
`;

const FormAuth = styled.form`
  //   background-color: coral;
  width: 100%;
`;

const PAuth = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;

  //   background-color: grey;
`;

const Hr = styled.hr`
  margin-top: 30px;
  padding: 0;
`;

export default function Register() {
  return (
    <Container>
      <AuthHeader />
      <section className="test">Hello</section>
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
            <AuthButton value="Sign Up" isPrimary />
          </FormAuth>
          <Hr />
          <PAuth>Already have an Account?</PAuth>
          <Link to="/login">
            <AuthButton value="Sign In" />
          </Link>
        </MaxWidth>
      </ContentWrapper>
    </Container>
  );
}
