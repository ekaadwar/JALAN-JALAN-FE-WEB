import React from "react";
import styled from "styled-components";

export default function AuthTitle({ title = "Page Title" }) {
  const Title = styled.h2`
    font-size: 28px;
    font-weight: bold;
    align-self: flex-start;
    margin: 30px 0;
  `;
  return <Title>{title}</Title>;
}
