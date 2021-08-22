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
    <Navbar bg="white" expand="lg">
      <Container>
        <Link style={LinkStyle} to="/explore">
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
          <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Link style={LinkStyle} to="/explore" className="mr-0">
              <Nav.Link>Find Ticket</Nav.Link>
            </Link>

            <Link style={LinkStyle} to="/explore">
              <Nav.Link>My Booking</Nav.Link>
            </Link>
          </Nav>
          <Link to="/login">
            <GeneralButton isPrimary value="Sign Up" />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
