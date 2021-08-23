import React from "react";

import { Row, Col, Container } from "react-bootstrap";

import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import CardFilter from "../components/CardFilter";
import CardAirList from "../components/CardAirList";
import {
  SectionData,
  SectionContent,
  SectionHori,
  TextLabel,
  TextCity,
  TextDetail,
  SectionBody,
} from "../components/GeneralStyled";

import { BsArrowLeftRight, BsDot, BsArrowUpDown } from "react-icons/bs";

const TopSectionStyles = {
  minHeight: 226,
  paddingTop: 50,
  backgroundColor: `#0ddb89`,
  borderBottomRightRadius: 30,
  borderBottomLeftRadius: 30,
  display: "flex",
};

export default function SearchResult() {
  return (
    <>
      <MainNavbar />
      <div style={TopSectionStyles}>
        <Container>
          <Row style={{ height: "100%" }}>
            <Col className="d-flex align-items-center justify-content-center justify-content-md-between">
              <SectionData>
                {/* <PictureWrapper className="d-none d-md-inline-block" /> */}
                <SectionContent style={{ color: `#034026` }}>
                  <SectionHori>
                    <TextLabel style={{ color: "#034026" }}>From</TextLabel>
                    <TextLabel style={{ color: "#034026" }}>To</TextLabel>
                  </SectionHori>
                  <SectionHori>
                    <TextCity style={{ color: "#034026" }}>
                      Medan (IDN)
                    </TextCity>
                    <BsArrowLeftRight />
                    <TextCity style={{ color: "#034026" }}>
                      Medan Tokyo (JPN)
                    </TextCity>
                  </SectionHori>
                  <SectionHori>
                    <TextDetail style={{ color: "#034026" }}>
                      Monday, 20 July 20
                    </TextDetail>
                    <BsDot />
                    <TextDetail style={{ color: "#034026" }}>
                      6 Passenger
                    </TextDetail>
                    <BsDot />
                    <TextDetail style={{ color: "#034026" }}>
                      Economy
                    </TextDetail>
                  </SectionHori>
                </SectionContent>
              </SectionData>
              <span className="d-none d-md-block">
                <TextCity>Change Search</TextCity>
              </span>
            </Col>
          </Row>
        </Container>
      </div>

      <SectionBody>
        <Container>
          <Row className="d-flex flex-column flex-md-row">
            <Col md={3}>
              <CardFilter />
            </Col>
            <Col md={9}>
              <CardAirList />
            </Col>
          </Row>
        </Container>
      </SectionBody>

      <Footer />
    </>
  );
}
