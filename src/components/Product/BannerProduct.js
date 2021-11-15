import React from "react";
import "./styles.scss";
import imgBg from "../../assets/images/bes-bg.png";
import product1 from "../../assets/images/best-image-01.png";
import product2 from "../../assets/images/best-image-02.png";
import product3 from "../../assets/images/best-image-03.png";
import sst1 from "../../assets/images/producticon-01.png";
import sst2 from "../../assets/images/producticon-02.png";
import sst3 from "../../assets/images/producticon-03.png";
import goIcon from "../../assets/images/go-icon.png";
// import { Container } from "react-bootstrap";

function BannerProduct() {
  return (
    <div className="banner_product">
      <div className="wrapper-bg">
        <img src={imgBg} className="bg-img" />
        <div className="banner_product-text">
          <h1 className="banner_product-title">BEST PRODUCT</h1>
          <span className="banner_product-desc">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </span>
        </div>
        {/* <Container> */}
        <ul className="banner_product-list">
          <li className="banner_product-item">
            <img src={product1} className="banner_product-img" />
            <img src={sst1} className="banner_product-icon" />
            <div className="banner_product-detail">
              <span className="banner_product-desc">
                How to create mobile-optimized
              </span>
              <img src={goIcon} className="banner_product-text-img" />
            </div>
          </li>
          <li className="banner_product-item">
            <img src={product2} className="banner_product-img" />
            <img src={sst2} className="banner_product-icon" />
            <div className="banner_product-detail">
              <span className="banner_product-desc">
                How to create mobile-optimized
              </span>
              <img src={goIcon} className="banner_product-text-img" />
            </div>
          </li>
          <li className="banner_product-item">
            <img src={product3} className="banner_product-img" />
            <img src={sst3} className="banner_product-icon" />
            <div className="banner_product-detail">
              <span className="banner_product-desc">
                How to create mobile-optimized
              </span>
              <img src={goIcon} className="banner_product-text-img" />
            </div>
          </li>
        </ul>
        {/* </Container> */}
      </div>
    </div>
  );
}

export default BannerProduct;
