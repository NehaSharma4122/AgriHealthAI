import React from "react";
import "./Technology.css";
const Technology = () => {
  return (
    <div className="technology">
      <div className="content">
        <h1>Farm Intelligence</h1>
        <h3>AI, ML & Analytics</h3>
        <p>
          Quantity, quality and availability of farm produce are important
          factors that drive major part of India's economy. It has a direct
          impact on livelihood of the farmers as well as operations of
          downstream food production companies.
          <br />
          Using Data Science, Agri Science and Machine Learning technologies, we
          have been working on Artificial Intelligence engine that can correlate
          many of parameters that affect agriculture and provide predictive
          analytics and early warning solutions for better production and
          prediction.
        </p>
      </div>
      <img src="./src/assets/tech.jpg"></img>
    </div>
  );
};

export default Technology;
