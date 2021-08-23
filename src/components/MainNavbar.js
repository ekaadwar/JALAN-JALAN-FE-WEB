import React from "react";
import { Nav, Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkStyle, NavHeader } from "../components/GeneralStyles";
import GeneralButton from "./GeneralButton";

// import styled from "styled-components";

// const NavWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   width: 100%;
//   height: 100%;

//   background-color: coral;
// `;

export default function MainNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="position-fixed fixed-top">
      <Container>
        <Link style={LinkStyle} to="/">
          <Navbar.Brand style={NavHeader}>JalanJalan</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="d-lg-flex  flex-lg-row justify-content-lg-between pt-2 pt-lg-0 pl-5">
          <Form className="d-flex">
            <FormControl type="search" placeholder="Where you want to go?" className="mr-2" aria-label="Search" />
            <Button className="d-none" variant="outline-success">
              Search
            </Button>
          </Form>
          <Nav className="my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link style={{ marginRigth: 50 }}>
              <Link style={LinkStyle} to="/searchResult">
                Find Ticket
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={LinkStyle} to="#">
                My Booking
              </Link>
            </Nav.Link>
          </Nav>
          <Link to="/login">
            <GeneralButton isPrimary value="Sign Up" />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
