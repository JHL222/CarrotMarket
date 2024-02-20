import React, { useState } from 'react';
import "./carrot/Sell.css";
import { Link, useLocation  } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";

export default function Detail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);


  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const description = searchParams.get("description");
  const image = searchParams.get("image");
  const like = searchParams.get("like") === "true";

  return (
    <div>
      <div className="header">
        <span>상세정보</span>
        <Link to="/">
          <div className="close">X</div>
        </Link>
      </div>
      <div className='detailmain'>
        <div className='detailphoto'>
            {image && <img className='detailphoto1' src={image} alt="Product" />}
        </div>

        <div className='detailtitle'>
          <p className='titletext'>
            {title}
          </p>
        </div>

        <div className='detaildescription'>
          <p className='descriptiontext'>
            {description}
          </p>
        </div>

        <div className='detailprice'>
          <div>
            {like ? <FcLike /> : <FiHeart />}
          </div>
          <div className='pricetext'>
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}
