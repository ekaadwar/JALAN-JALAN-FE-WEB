import React from "react";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCardBox";
import GeneralButton from "../components/GeneralButton";

import { Col, Row } from "react-bootstrap";
import { FiChevronRight } from "react-icons/fi";

import {
  CardCst,
  Input,
  Section,
  TextCity,
  TextDetail,
  TextLabel,
} from "../components/GeneralStyled";

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

const Label = styled(TextDetail)`
  color: #9b96ab;
`;

export default class Profile extends React.Component {
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
                <TextLabel style={{ color: "#0ddb89" }}>PROFILE</TextLabel>
                <TextCity style={{ fontSize: 24 }}>Profile</TextCity>
                <form style={{ marginTop: 30 }}>
                  <Row>
                    <Col>
                      <TextLabel className="mb-3">Contact</TextLabel>
                      <Label className="mb-2">Email</Label>
                      <Input
                        className="mb-3"
                        type="email"
                        placeholder="flightbooking@jalanjalan.com"
                      />
                      <Label className="mb-2">Phone Number</Label>
                      <Input
                        className="mb-3"
                        type="text"
                        placeholder="+628211234567"
                      />
                      <Section className="d-flex justify-content-end mb-3">
                        <TextLabel
                          style={{ marginRight: 10, color: "#0ddb89" }}
                        >
                          Account Setting
                        </TextLabel>
                        <FiChevronRight color="#0ddb89" />
                      </Section>
                    </Col>
                    <Col>
                      <TextLabel className="mb-3">Biodata</TextLabel>
                      <Label className="mb-2">Username</Label>
                      <Input
                        className="mb-3"
                        type="text"
                        placeholder="Mike Kowalski"
                      />
                      <Label className="mb-2">City</Label>
                      <Input className="mb-3" type="text" placeholder="Medan" />
                      <Label className="mb-2">Address</Label>
                      <Input
                        className="mb-3"
                        type="text"
                        placeholder="Medan, Indonesia"
                      />
                      <Label className="mb-2">Post Code</Label>
                      <Input
                        className="mb-3"
                        type="number"
                        placeholder="55555"
                      />
                      <Section className="d-flex justify-content-end">
                        <GeneralButton isPrimary value="save" />
                      </Section>
                    </Col>
                  </Row>
                </form>
              </Card>
            </RightBox>
          </div>
        </Heading>
      </Parent>
    );
  }
}
