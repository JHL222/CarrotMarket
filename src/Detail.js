import React, { useState } from 'react';
import "./carrot/Sell.css";
import { Link, useLocation  } from "react-router-dom";

export default function Detail(product) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const description = searchParams.get("description");
  const image = searchParams.get("image");


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
            {image && <img src={image} alt="Product" />}
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
          
        </div>
      </div>
    </div>
  );
}
