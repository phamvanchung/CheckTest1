import React from "react";
import "./styles.scss";
import img1 from "../../assets/images/img.png";
import icon1 from "../../assets/images/object-01.png";
import icon2 from "../../assets/images/object-02.png";
import icon3 from "../../assets/images/object-03.png";
import icon4 from "../../assets/images/object-04.png";
import icon5 from "../../assets/images/object-05.png";
import icon6 from "../../assets/images/object-06.png";
import icon7 from "../../assets/images/object-07.png";

function BrandStory() {
  return (
    <div className="container_brand">
      <div className="brand_header">
        <h2 className="brand_title">Brand Story</h2>
        <div className="brand_desc">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </div>
      </div>
      <div className="brand_content">
        <img src={img1} className="product_content-img" />
        <div className="brand_content-table">
          <h5 className="brand_content-table-title">
            What Happened’s Brand story
          </h5>
          <div className="brand_content-table-wrap">
            <span className="brand_content-table-desc">
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </span>
          </div>
          <div className="product_btn ">SEE MORE</div>
        </div>
        <img src={icon1} className="icon-table" />
        <img src={icon6} className="icon-book-g" />
        <img src={icon7} className="icon-book" />
        <img src={icon2} className="icon-2" />
        <img src={icon3} className="icon-3" />
        <img src={icon4} className="icon-4" />
        <img src={icon5} className="icon-5" />
      </div>
    </div>
  );
}

export default BrandStory;
