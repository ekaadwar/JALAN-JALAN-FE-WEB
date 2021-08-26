/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchProducts } from "../redux/actions/product";


import GeneralButton from "./GeneralButton";
import { LinkStyle } from "./GeneralStyles";
import {
  TextLabel,
  TextDetail,
  TextCity,
  CardCst,
} from "../components/GeneralStyled";

import garudaIndonesia from "../assets/img/airPlane/garudaIndonesia.png";

import { FaPlaneDeparture, FaHamburger, FaWifi } from "react-icons/fa";
import { RiSuitcase3Fill } from "react-icons/ri";


function CardAirLine(props) {
  return (
    <>
          <Link to={`/flightDetail/${props.id}`} style={LinkStyle} key={props.id}>
          <CardCst className="px-md-3 pt-3 my-3" style={{ color: "#979797" }}>
            <Row>
              <Col className="mb-3">
                <div class="d-flex align-items-center justify-content-center justify-content-md-start ">
                  <img
                    src={props.airlinePicture}
                    style={{ maxWidth: 80 }}
                    className="w-15"
                    alt="Pesawat"
                  />
                  <TextLabel>{props.airline}</TextLabel>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} lg={3} className="d-flex flex-column mb-3">
                <div className="align-self-center align-self-lg-start d-flex flex-row align-items-center justify-content-center">
                  <div>
                    <TextCity>
                     {props.codeBaseCountry}
                    </TextCity>
                    <TextDetail>{props.timeLeave}</TextDetail>
                  </div>
                  <FaPlaneDeparture className="mx-5" />
                  <div>
                    <TextCity>
                    {props.codeCountry}
                    </TextCity>
                    <TextDetail>{props.timeArrive}</TextDetail>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={3} className="d-flex flex-column mb-3">
                <div className="align-self-center ">
                  <TextCity>3 hour 11 minutes</TextCity>
                  <TextDetail>Transit {props.transit}</TextDetail>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={3} className="d-flex flex-column mb-3">
                <div className="align-self-center">
                  <RiSuitcase3Fill className="mx-2" />
                  <FaHamburger className="mx-2" />
                  <FaWifi className="mx-2" />
                </div>
              </Col>
              <Col xs={12} sm={12} lg={3} className="d-flex flex-column mb-3">
                <div className="align-self-center align-self-lg-end">
                  <GeneralButton isPrimary value="Select" />
                </div>
              </Col>
            </Row>
          </CardCst>
        </Link>
          
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CardAirLine);
