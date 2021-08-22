import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";

export default function Explore() {
  return (
    <>
      <MainNavbar />
      <Container>
        <Row>
          <Col>Ini Halaman Explore</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
