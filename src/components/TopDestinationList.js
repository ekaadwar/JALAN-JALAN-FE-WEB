import React from "react";
import { Squire as Circle, TextLabel } from "./GeneralStyled";

import agra from "../assets/img/general/agra.png";
import bali from "../assets/img/general/bali.png";
import paris from "../assets/img/general/paris.png";
import sidney from "../assets/img/general/sidney.png";
import singapore from "../assets/img/general/singapore.png";

const destination = [
  {
    name: "paris",
    image: paris,
  },
  {
    name: "bali",
    image: bali,
  },
  {
    name: "singapore",
    image: singapore,
  },
  {
    name: "agra",
    image: agra,
  },
  {
    name: "sidney",
    image: sidney,
  },
];

export default function TopDestinationList() {
  return (
    <>
      <div className="d-flex justify-content-center">
        {destination.map((v) => {
          return (
            <div className="d-flex flex-column align-items-center mx-3">
              <Circle className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-3">
                <img src={v.image} alt={v.name} />
              </Circle>
              <TextLabel className="text-uppercase">{v.name}</TextLabel>
            </div>
          );
        })}
      </div>
    </>
  );
}
