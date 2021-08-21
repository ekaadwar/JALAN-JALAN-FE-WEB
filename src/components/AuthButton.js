import React from "react";
import styled from "styled-components";

// const { PRIMARY_COLOR: COLOR } = process.env;

export default function AuthButton() {
  const AuthButton = styled.button`
    background-color: #0ddb89;
    border-width: 0;
    height: 40px;
    border-radius: 5px;
    width: 100%;
    font-weight: bold;
    color: white;
    box-shadow: 0 5px 5px rgba(13, 219, 137, 0.5);
  `;

  return <AuthButton>Sign In</AuthButton>;
}
