import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkStyle, NavHeader } from "./GeneralStyles";

const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // font-weight: bold;
  // font-size: 20px;
  // color: #0ddb89;

  // background-color: coral;
`;

export default function AuthHeader() {
  return (
    <Container>
      <Link style={LinkStyle} to="/">
        <Header>
          <div style={NavHeader}>JalanJalan</div>
        </Header>
      </Link>
    </Container>
  );
}
