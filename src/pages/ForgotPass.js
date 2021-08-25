import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import GeneralButton from "../components/GeneralButton";
import AuthHeader from "../components/AuthHeader";
import {
  ContentWrapper,
  FormAuth,
  MaxWidth,
  PAuth,
} from "../components/AuthStyles";
import AuthTitle from "../components/AuthTitle";

export default function ForgotPass() {
  return (
    <Container>
      <Row>
        <Col>
          <ContentWrapper>
            <MaxWidth>
              <AuthTitle title="Forgot Password" />
              <FormAuth>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Username" />
                </Form.Group>
                <GeneralButton value="Send" isPrimary />
              </FormAuth>
              <PAuth>You’ll get message soon on your email</PAuth>
            </MaxWidth>
          </ContentWrapper>
        </Col>
      </Row>
    </Container>
  );
}
