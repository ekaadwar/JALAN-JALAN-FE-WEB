/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { Row, Col, Container } from "react-bootstrap";

import { connect } from "react-redux";

import { FiChevronDown } from "react-icons/fi";

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
import { TopSectionStyles } from "../components/GeneralStyles";

import { BsArrowLeftRight, BsDot } from "react-icons/bs";

import { openNavbar } from "../redux/actions/auth";
import { searchProducts } from "../redux/actions/product";
import CardAirLine from "../components/CardAirLine";

function SearchResult(props) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filterAirline, setFilterAirline] = useState("");
  const [filterPrice1, setFilterPrice1] = useState(100000);
  const [filterPrice2, setFilterPrice2] = useState(1000000);
  const [filterDeparture1, setFilterDeparture1] = useState("");
  const [filterArrive1, setFilterArrive1] = useState("");
  const [filterTransit1, setFilterTransit] = useState("");
  const { REACT_APP_BACKEND_URL: URL } = process.env;

  useEffect(() => {
    props.openNavbar();
    props.searchProducts(
      search,
      page,
      filterAirline,
      filterPrice1,
      filterPrice2,
      filterDeparture1,
      filterArrive1,
      filterTransit1
    );
  }, []);

  return (
    <>
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
              {/* <CardAirList/> */}
              {props.product.search.map((data) => {
                if (
                  data.airline.picture !== null &&
                  !data.airline.picture.startsWith("http")
                ) {
                  data.airline.picture = `${URL}${data.airline.picture}`;
                }
                return (

                  <CardAirLine 
                  codeBaseCountry={data.destination.base_country_code}
                  timeLeave={data.time_leave}
                  codeCountry={data.destination.destination_country_code}
                  timeArrive={data.time_arrive}
                  airline={data.airline.name}
                  transit={data.transit}
                  airlinePicture={data.airline.picture}
                  id={data.id}
                  price={data.price}
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </SectionBody>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product,
});
const mapDispatchToProps = { openNavbar, searchProducts };
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
