import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import img from "../../assets/img.jpg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Inter&apos;national Digital Conference For Designers
      </h1>
      <p>
        A conference is a gathering of many people who talk about a specific
        subject or topic. People meet to confer about a theme.
      </p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>600 people requested in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img
        src={img4}
        style={{
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  </div>
);

export default Header;
