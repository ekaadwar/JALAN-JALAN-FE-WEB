import React from "react";
import { Image } from "react-bootstrap";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";
import styled from "styled-components";

import japanSunset from "../assets/img/general/japanSunset.png";
import japanHouse from "../assets/img/general/japanHouse.png";

const Jumbotron = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding-top: 60px;
  min-height: 100vh;
`;

const ImagePrimary = styled(Image)`
  margin-top: 300px;
  width: 60%;
`;

const ImageSecondary = styled(Image)`
  // display: block;
  width: 30%;
`;

export default function BgJumbotron() {
  return (
    <Jumbotron>
      <ImagePrimary src={japanSunset} />
      <ImageSecondary src={japanHouse} />
    </Jumbotron>
  );
}
