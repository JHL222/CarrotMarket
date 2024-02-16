import React from "react";
import "./Sell.css";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

export default function Sell() {
  return (
    <div>
      <div className="header">
        <span>내 물건 팔기</span>
        <Link to="/Buy">
          <div className="close">X</div>
        </Link>
      </div>

      <div className="main">
        <div className="photo">
          <span>사진</span>
          <br />
          <div className="photo1"></div>
          <div className="photo1"></div>
          <div className="photo1"></div>
          <div className="photo1"></div>
        </div>
        <div className="Title">
          <span>제목</span>
          <br />
          <input type="text" className="title" required />
        </div>
        <div className="Price">
          <span>가격</span>
          <br />
          <input type="number" className="price" required />
        </div>
        <div className="Describe">
          <span>상품 설명</span>
          <br />
          <textarea className="describe" maxlength="200" required />
        </div>
      </div>
      <div className="submit">작성완료</div>
    </div>
  );
}
