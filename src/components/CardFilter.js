import React from "react";

import { Row, Col } from "react-bootstrap";

import { transit, facilities, time, airlines } from "../components/SearchData";
import {
  SectionHori,
  TextLabel,
  TextCity,
  TextDetail,
  CardCst,
} from "../components/GeneralStyled";

import { FiChevronDown } from "react-icons/fi";

export default function CardFilter() {
  return (
    <>
      <Row className="my-3">
        <Col>
          <SectionHori>
            <TextCity>Filter</TextCity>
            <TextLabel style={{ color: "#0ddb89" }}>Reset</TextLabel>
          </SectionHori>
        </Col>
      </Row>
      <CardCst>
        <Row className="d-flex flex-column flex-sm-row flex-sm-column">
          <Col className="py-2 border-bottom">
            <SectionHori>
              <TextLabel>Transit</TextLabel>
              <FiChevronDown />
            </SectionHori>

            {transit.map((v) => (
              <SectionHori>
                <TextDetail>{v}</TextDetail>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
              </SectionHori>
            ))}
          </Col>
          <Col className="py-2 border-bottom">
            <SectionHori>
              <TextLabel>Facilities</TextLabel>
              <FiChevronDown />
            </SectionHori>

            {facilities.map((v) => (
              <SectionHori>
                <TextDetail>{v}</TextDetail>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
              </SectionHori>
            ))}
          </Col>
        </Row>
        <Row className="d-flex flex-column d-flex flex-column flex-sm-row flex-sm-column">
          <Col className="py-2 border-bottom">
            <SectionHori>
              <TextLabel>Departure Time</TextLabel>
              <FiChevronDown />
            </SectionHori>

            {time.map((v) => (
              <SectionHori>
                <TextDetail>{v}</TextDetail>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
              </SectionHori>
            ))}
          </Col>
          <Col className="py-2 border-bottom">
            <SectionHori>
              <TextLabel>Time Arrived</TextLabel>
              <FiChevronDown />
            </SectionHori>

            {time.map((v) => (
              <SectionHori>
                <TextDetail>{v}</TextDetail>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
              </SectionHori>
            ))}
          </Col>
        </Row>
        <Row className="d-flex flex-column flex-sm-row flex-sm-column">
          <Col className="py-2 border-bottom">
            <SectionHori>
              <TextLabel>Airlines</TextLabel>
              <FiChevronDown />
            </SectionHori>

            {airlines.map((v) => (
              <SectionHori>
                <TextDetail>{v}</TextDetail>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
              </SectionHori>
            ))}
          </Col>
          <Col className="py-2">
            <SectionHori>
              <TextLabel>Ticket Price</TextLabel>
              <FiChevronDown />
            </SectionHori>
          </Col>
        </Row>
        {/* <Row className="d-flex flex-column"></Row> */}
      </CardCst>
    </>
  );
}
