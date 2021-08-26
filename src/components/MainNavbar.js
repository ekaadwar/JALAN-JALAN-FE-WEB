import React, { useState } from "react";
import styled from "styled-components";

import {
  Col,
  Modal,
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  TextCity,
  TextDetail,
  TextLabel,
  Section,
  SectionJustify,
} from "../components/GeneralStyled";
import { LinkStyle, NavHeader } from "../components/GeneralStyles";
import GeneralButton from "./GeneralButton";

import { connect } from "react-redux";
import { authLogOut } from "../redux/actions/auth";

import { FiMail } from "react-icons/fi";
import { BiCheckDouble } from "react-icons/bi";

import andrew from "../assets/img/users/andrew.png";
import bocil from "../assets/img/users/bocil.png";
import brando from "../assets/img/users/brando.png";
import gindo from "../assets/img/users/gindo.png";
import melissa from "../assets/img/users/melissa.png";

const chats = "../dummy/chatUsers";
console.log(chats);

const ChatWrapper = styled.div`
  padding: 20px;
  heght: 600px;
  backgound-color: green;
`;

const ImageWrapper = styled.div`
  width : 50;
  height : 50;
  border-radius : 10
  background-color : yellow
`;

function MainNavbar({ auth, authLogOut }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const senderList = [
    {
      picture: andrew,
      name: "Andrew",
      message: "Me: Bro!!!",
      time: "8:30",
      status: BiCheckDouble,
    },
    {
      picture: bocil,
      name: "Nathan",
      message: "Ok, bye",
      time: "Yesterday",
      status: "",
    },
    {
      picture: brando,
      name: "Brando",
      message: "Why did you do that?",
      time: "8:30",
      status: BiCheckDouble,
    },
    {
      picture: gindo,
      name: "Gindo",
      message: "Hello",
      time: "9:30",
      status: BiCheckDouble,
    },
    {
      picture: melissa,
      name: "Melissa",
      message: "Hi",
      time: "Yesterday",
      status: "",
    },
  ];

  console.log(senderList);

  return (
    <>
      <Navbar bg="white" expand="lg" className="position-fixed fixed-top">
        <Container>
          <Link style={LinkStyle} to="/">
            <Navbar.Brand style={NavHeader}>JalanJalan</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="d-lg-flex  flex-lg-row justify-content-lg-between pt-2 pt-lg-0 pl-5"
          >
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Where you want to go?"
                className="mr-2"
                aria-label="Search"
              />
              <Button className="d-none" variant="outline-success">
                Search
              </Button>
            </Form>
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link style={{ marginRigth: 50 }}>
                <Link style={LinkStyle} to="/searchResult">
                  Find Ticket
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={LinkStyle} to="/myBooking">
                  My Booking
                </Link>
              </Nav.Link>
            </Nav>
            <Section>
              {auth.token !== null ? (
                <>
                  <div
                    variant="primary"
                    onClick={handleShow}
                    style={{ cursor: "pointer", marginRight: 16 }}
                  >
                    <FiMail color="#999" size={24} />
                  </div>
                  <Button onClick={authLogOut}>LogOut</Button>
                </>
              ) : (
                <Link to="/login">
                  <GeneralButton isPrimary value="Sign Up" />
                </Link>
              )}
            </Section>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <ChatWrapper>
          <TextDetail style={{ color: "#0ddb89" }}>CHAT</TextDetail>
          <SectionJustify>
            <TextCity>Chat</TextCity>
            <TextLabel style={{ color: "#0ddb89", cursor: "pointer" }}>
              Filter
            </TextLabel>
          </SectionJustify>
          <Modal.Body className="show-grid">
            <Container>
              {senderList.map((v, idx) => {
                return (
                  <Row
                    className={
                      idx < senderList.length - 1
                        ? "border-bottom py-2 my-2"
                        : "py-2 my-2"
                    }
                  >
                    <Col xs={2}>
                      <ImageWrapper>
                        <img src={v.picture} alt={v.name} />
                      </ImageWrapper>
                    </Col>
                    <Col xs={8}>
                      <TextCity>{v.name}</TextCity>
                      <TextDetail style={{ color: "#979797" }}>
                        {v.message}
                      </TextDetail>
                    </Col>
                    <Col xs={2}>
                      <TextDetail style={{ color: "#979797" }}>8:30</TextDetail>
                      <BiCheckDouble color="#979797" />
                    </Col>
                  </Row>
                );
              })}
            </Container>
          </Modal.Body>
        </ChatWrapper>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  chats: state.auth,
});

const mapDispatchToProps = { authLogOut };

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
