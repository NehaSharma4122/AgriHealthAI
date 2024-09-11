import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="front">
        <div className="content">
          <h1 className="head">Welcome to the Future of Agriculture!</h1>
          <p className="para">
            Discover the cutting-edge world of agriculture where technology
            meets sustainability. Our mission is to revolutionize crop and
            livestock disease diagnostics for a brighter tomorrow.
          </p>
        </div>
        <img src="./src/assets/main.png"></img>
      </div>
    </div>
  );
};

export default AboutUs;
