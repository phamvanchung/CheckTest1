import React from "react";
import "./styles.scss";
import { Container } from "react-bootstrap";
import iconN from "../../assets/images/snsicon-01.png";
import iconFb from "../../assets/images/snsicon-02.png";
import iconBlog from "../../assets/images/snsicon-03.png";

function Footer() {
  return (
    <Container>
      <div className="footer">
        <div className="footer_up">
          <div className="footer_up-left">
            <div className="footer_up-title">what happened</div>
            <div className="footer_up-desc">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </div>
            <div className="footer_up-desc">
              [공지] 29CM 강남 스토어 영업 종료
            </div>
            <div className="footer_up-desc">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </div>
            <div className="footer_up-desc">
              [공지] iOS 10 이하 버전 지원 중단 안내
            </div>
            <div className="footer_up-desc">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </div>
          </div>

          <ul className="footer_up-list">
            <li className="footer_up-item">
              <div className="footer_up-title">about us</div>
              <div className="footer_up-desc">회사 소개 </div>
              <div className="footer_up-desc">인재 채용</div>
              <div className="footer_up-desc"> 상시 할인 혜택</div>
            </li>

            <li className="footer_up-item">
              <div className="footer_up-title">my order</div>
              <div className="footer_up-desc">내 주문 </div>
              <div className="footer_up-desc">내 주문 주</div>
              <div className="footer_up-desc">
                문 배송 취소 / 교환 / 반품 내역 상
              </div>
              <div className="footer_up-desc">품 리뷰 내역 증</div>
              <div className="footer_up-desc">빙 서류 발급</div>
            </li>

            <li className="footer_up-item">
              <div className="footer_up-title">my account</div>
              <div className="footer_up-desc">회원 정보 수정</div>
              <div className="footer_up-desc"> 회원 등급 </div>
              <div className="footer_up-desc">마일리지 현황 </div>
              <div className="footer_up-desc">쿠폰</div>
            </li>

            <li className="footer_up-item">
              <div className="footer_up-title">help</div>
              <div className="footer_up-desc">1 : 1 상담 내역</div>
              <div className="footer_up-desc"> 상품 Q & A 내역 </div>
              <div className="footer_up-desc">마일리지 현황 </div>
              <div className="footer_up-desc">공지 사항 </div>
              <div className="footer_up-desc">자주하는 질문 </div>
              <div className="footer_up-desc">고객의 소리</div>
            </li>
          </ul>
        </div>

        <div className="footer_down">
          <div className="footer_down-left">
            © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
            사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
            이용약관 l 개인정보처리방침
          </div>
          <div className="footer_down-right">
            <img src={iconN} className="footer_down-right-icon" />
            <img src={iconFb} className="footer_down-right-icon" />
            <img src={iconBlog} className="footer_down-right-icon" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
