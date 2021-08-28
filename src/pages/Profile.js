import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ProfileCard from "../components/ProfileCardBox";
import GeneralButton from "../components/GeneralButton";

import { getProfile } from "../redux/actions/profile";

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

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          id: 1,
          fullName: "Muhammad Rizky Ramadhan",
          image:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          city: "Purwokerto",
        },
      ],
      card: [
        {
          id: 1,
          id_user: 1,
          number: "2443 3445 2345 2311",
          name: "BCA",
          saldo: 300000,
        },
        {
          id: 2,
          id_user: 1,
          number: "1213 2333 2345 4576",
          name: "MANDIRI",
          saldo: 9000000,
        },
      ],
    };
  }

  componentDidMount() {
    const { token } = this.props.auth;
    console.log(token);
    this.props.getUserById(token);
  }

  render() {
    const { data } = this.props.user;
    // console.log(data);
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
                        placeholder={data.email}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});

const mapDispatchToProps = { getProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
