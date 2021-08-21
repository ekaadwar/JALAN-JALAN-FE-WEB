import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Header = styled.div`
  //   background-color: red;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: #0ddb89;
  //   font-family: "Poppins", sans-serif;
`;

export default function AuthHeader() {
  return (
    <Container>
      <Header>JalanJalan</Header>
    </Container>
  );
}
