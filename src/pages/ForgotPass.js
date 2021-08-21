import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import AuthButton from "../components/AuthButton";
import AuthHeader from "../components/AuthHeader";
import { ContentWrapper, FormAuth, MaxWidth, PAuth } from "../components/AuthStyles";
import AuthTitle from "../components/AuthTitle";

export default function ForgotPass() {
  return (
    <Container>
      <Row>
        <Col>
          <AuthHeader />
          <ContentWrapper>
            <MaxWidth>
              <AuthTitle title="Forgot Password" />
              <FormAuth>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Username" />
                </Form.Group>
                <AuthButton value="Send" isPrimary />
              </FormAuth>
              <PAuth>You’ll get message soon on your email</PAuth>
            </MaxWidth>
          </ContentWrapper>
        </Col>
      </Row>
    </Container>
  );
}
