import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <p>
        <Link to="/login">Login?</Link>
      </p>
      <p>
        <Link to="/register">Register?</Link>
      </p>
    </Container>
  );
}
