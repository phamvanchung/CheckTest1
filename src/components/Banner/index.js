import React from "react";
import "./styles.scss";
import banner from "../../assets/images/main-banner@3x.png";
import intro from "../../assets/images/introduction-bg.png";

function Banner() {
  return (
    <div className="content">
      <div className="main_banner">
        <img src={banner} className="main_banner-img" />
      </div>
      <div className="introduction">
        <img src={intro} className="introduction-img" />
        <div className="introduction-text">
          <h1 className="introduction-title">WHAT HAPPEND!</h1>
          <div className="introduction-desc">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first step
            to your brand is success. How to create mobile-optimized videos in
            minutes.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
