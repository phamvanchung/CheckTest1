import React from "react";
import "./styles.scss";
import video from "../../assets/images/video.png";
import img1 from "../../assets/images/video-object-04.png";
import img2 from "../../assets/images/video-object-03.png";
import img3 from "../../assets/images/video-object-01.png";
import img4 from "../../assets/images/video-object-05.png";
import img5 from "../../assets/images/video-object-06.png";
import img6 from "../../assets/images/video-object-07.png";
import img7 from "../../assets/images/video-object-08.png";
import img8 from "../../assets/images/video-object-09.png";
import img9 from "../../assets/images/video-object-02.png";

function index() {
  return (
    <div className="container_video">
      <img src={img1} className="img1" />
      <img src={img4} className="img4" />
      <img src={img5} className="img5" />
      <img src={img6} className="img6" />
      <div className="container-video-header">
        <h2 className="container-video-title">what happened</h2>
        <span className="container-video-desc">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </span>
        <div className="product_btn ">SEE MORE</div>
      </div>

      <div className="content-video">
        <img src={video} className="content-video-img" />
        <img src={img2} className="img2" />
        <img src={img3} className="img3" />
        <img src={img7} className="img7" />
        <img src={img8} className="img8" />
        <img src={img9} className="img9" />
      </div>
    </div>
  );
}

export default index;
