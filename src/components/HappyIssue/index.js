import React from "react";
import "./styles.scss";
import imgAround from "../../assets/images/news-img-01.png";
import img2 from "../../assets/images/news-img-03.png";
import img3 from "../../assets/images/news-img-04.png";
import img4 from "../../assets/images/news-img-05.png";
import icon1 from "../../assets/images/news-object-02.png";
import icon2 from "../../assets/images/news-object-03.png";
import icon3 from "../../assets/images/news-object-03_2.png";
import icon4 from "../../assets/images/news-object-04.png";
import icon5 from "../../assets/images/news-object-05.png";

function index() {
  return (
    <div className="container-happy">
      <img src={icon3} className="icon3" />
      <img src={icon1} className="icon1" />
      <div className="container-happy-header">
        <h2 className="container-happy-title">Happened’s issue</h2>
        <span className="container-happy-desc">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </span>
        <div className="product_btn ">SEE MORE</div>
      </div>

      <div className="content-happy">
        <div className="content-happy-list">
          <div className="content-happy-item">
            <div className="content-happy-text">whpn issue</div>
            <img src={imgAround} className="content-happy-img" />
          </div>

          <div className="content-happy-item1">
            <div className="content-happy-text1">b brand</div>
            <img src={img4} className="content-happy-img1" />
          </div>

          <div className="content-happy-item1">
            <div className="content-happy-text1">c brand</div>
            <img src={img2} className="content-happy-img1" />
          </div>

          <div className="content-happy-item1">
            <div className="content-happy-text1 text2">d brand</div>
            <img src={img3} className="content-happy-img1" />
          </div>

          <div className="content-happy-item1">
            <div className="content-happy-text1">e brand</div>
            <img src={img4} className="content-happy-img1" />
          </div>

          <img src={icon2} className="icon2" />
          <img src={icon4} className="icon4" />
          <img src={icon5} className="icon5" />
        </div>
      </div>
    </div>
  );
}

export default index;
