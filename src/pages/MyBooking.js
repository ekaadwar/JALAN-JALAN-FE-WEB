import React, { Component } from "react";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCardBox";

import { Col, Row } from "react-bootstrap";
import { FaPlaneDeparture } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import {
  Button as ButtonStyled,
  CardCst,
  Section,
  SectionJustify,
  TextCity,
  TextDetail,
  TextLabel,
} from "../components/GeneralStyled";

const Button = styled(ButtonStyled)`
  padding: 5px 15px;
  border-radius: 15px;
  color: #fff;
`;

const Card = styled(CardCst)`
  width: 100%;
  heigth: auto;
  padding: 30px;
`;

const Heading = styled.div`
  height: 600px;
  display: flex;
  padding: 50px;
`;
const Parent = styled.div`
  background-color: #f5f6fa;
  min-height: 100vh;
`;

const RightBox = styled.div`
  width: 80%;
  height: 500px;
  margin-top: 30px;
  padding-left: 50px;
`;

const CardData = [
  {
    status: "Waiting for Payment",
    colorStatus: "#FF7F23",
  },
  {
    status: "Eticket issued",
    colorStatus: "#4FCF4D",
  },
];

export default class MyBooking extends Component {
  render() {
    return (
      <Parent>
        <Heading>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <ProfileCard />
            </div>
            <RightBox>
              <Card className="shadow mb-3">
                <TextLabel style={{ color: "#0ddb89" }}>MY BOOKING</TextLabel>
                <SectionJustify>
                  <TextCity>My Booking</TextCity>
                  <TextLabel style={{ color: "#0ddb89" }}>
                    Order History
                  </TextLabel>
                </SectionJustify>
              </Card>

              {CardData.map((v) => (
                <Card className="shadow  mb-3">
                  <Row className="border-bottom mb-3">
                    <Col>
                      <TextLabel className="mb-3">
                        Monday, 20 July 20 - 12:33
                      </TextLabel>
                      <Section className="mb-3">
                        <TextCity>IDN</TextCity>
                        <FaPlaneDeparture className="mx-5" />
                        <TextCity>JPN</TextCity>
                      </Section>
                      <TextDetail style={{ color: "#979797" }} className="mb-3">
                        Garuda Indonesia, AB-221
                      </TextDetail>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <SectionJustify className="h-100">
                        <TextDetail style={{ color: "#7A7A7A" }}>
                          Status
                        </TextDetail>
                        <Button style={{ backgroundColor: `${v.colorStatus}` }}>
                          <TextDetail style={{ color: "#fff" }}>
                            {v.status}
                          </TextDetail>
                        </Button>
                      </SectionJustify>
                    </Col>
                    <Col xs={8}>
                      <Section className="h-100 justify-content-end">
                        <TextLabel style={{ color: "#0ddb89" }}>
                          View Detail
                        </TextLabel>
                        <FiChevronDown color="#0ddb89" />
                      </Section>
                    </Col>
                  </Row>
                </Card>
              ))}
            </RightBox>
          </div>
        </Heading>
      </Parent>
    );
  }
}
