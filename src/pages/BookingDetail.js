import React from "react";
import styled from "styled-components";

import { Col, Container, Row } from "react-bootstrap";
import {
  CardCst,
  Section,
  SectionJustify,
  TextCity,
  TextDetail,
  TextLabel,
} from "../components/GeneralStyled";

import garudaIndonesia from "../assets/img/airPlane/garudaIndonesia.png";
import qrCode from "../assets/img/qrCode/qrCode.png";

import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";

import { BsThreeDotsVertical as DotOption } from "react-icons/bs";
import { FaPlaneDeparture as Plane } from "react-icons/fa";

const Card = styled(CardCst)`
  max-width: 800px;
  width: 100%;
  height: 550px;
  padding: 50px;
`;

const ColBooking = styled(Col)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SectionBooking = styled(Section)`
  background-color: #0ddb89;
  height: 100vh;
  padding-top: 60px;
`;

export default function BookingDetail() {
  return (
    <>
      <MainNavbar />
      <SectionBooking>
        <Container>
          <div className="d-flex flex-row justify-content-center">
            <Card className="d-flex flex-column justify-content-around">
              <SectionJustify>
                <TextCity>Booking Pass</TextCity>
                <DotOption color="#0ddb89" />
              </SectionJustify>
              <Row className="align-items-center">
                <Col xs={7} className="border-right-0 border-secondary">
                  <Row>
                    <ColBooking xs={4} className="">
                      <img src={garudaIndonesia} alt="Garuda Indonesia" />
                    </ColBooking>
                    <ColBooking xs={8} className="">
                      <SectionJustify>
                        <TextCity>IDN</TextCity>
                        <Plane colBookingor="#979797" />
                        <TextCity>JPN</TextCity>
                      </SectionJustify>
                    </ColBooking>
                  </Row>
                  <Row>
                    <ColBooking xs={6} className="">
                      <TextDetail>code</TextDetail>
                      <TextLabel>AB-11</TextLabel>
                    </ColBooking>
                    <ColBooking xs={6} className="">
                      <TextDetail>Class</TextDetail>
                      <TextLabel>Economy</TextLabel>
                    </ColBooking>
                  </Row>
                  <Row>
                    <ColBooking xs={6} className="">
                      <TextDetail>Terminal</TextDetail>
                      <TextLabel>A</TextLabel>
                    </ColBooking>
                    <ColBooking xs={6} className="">
                      <TextDetail>Gate</TextDetail>
                      <TextLabel>221</TextLabel>
                    </ColBooking>
                  </Row>
                  <Row>
                    <ColBooking xs={12} className="">
                      <TextDetail>Departure</TextDetail>
                      <TextLabel>Monday, 20 July 20 - 12:33</TextLabel>
                    </ColBooking>
                  </Row>
                </Col>
                <Col xs={5} className="d-flex justify-content-center">
                  <img src={qrCode} alt="Invite Aku Dong" />
                </Col>
              </Row>
            </Card>
          </div>
        </Container>
      </SectionBooking>

      <Footer />
    </>
  );
}
