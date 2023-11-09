import React from "react";
import {
  google,
  slack,
  atlassian,
  dropbox,
  shopify,
  logo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
} from "./imports.jsx";
import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img
        src={logo5}
        style={{
          width: "150px",
          height: "auto",
          filter: "brightness(0) invert(1)",
        }}
      />
    </div>
    <div>
      <img
        src={logo2}
        style={{
          width: "80px",
          height: "auto",
          filter: "brightness(0) invert(1)",
        }}
      />
    </div>
    <div>
      <img
        src={logo3}
        style={{
          width: "150px",
          height: "auto",
          filter: "brightness(0) invert(1)",
        }}
      />
    </div>
    <div>
      <img
        src={logo4}
        style={{
          width: "150px",
          height: "auto",
          filter: "brightness(0) invert(1)",
        }}
      />
    </div>
    <div>
      <img
        src={logo10}
        style={{
          width: "150px",
          height: "auto",
          filter: "brightness(0) invert(1)",
        }}
      />
    </div>
  </div>
);

export default Brand;
