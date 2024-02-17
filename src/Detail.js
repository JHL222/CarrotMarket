import React from 'react'
import "./carrot/Sell.css";
import { Link } from "react-router-dom";

export default function Detail() {
  return (
    <div>
        <div className="header">
        <span>상세정보</span>
        <Link to="/">
          <div className="close">X</div>
        </Link>
      </div>
    </div>
  )
}
