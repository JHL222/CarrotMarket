import React, { useState } from 'react';
import "./carrot/Sell.css";
import { Link, useLocation } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";

const Detail = ({ products }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const description = searchParams.get("description");
  const image = searchParams.get("image");
  const productId = parseInt(searchParams.get("id"));
  const contact = searchParams.get("contact");

  // Find the product object from products array based on productId
  const product = products.find(product => product.id === productId);
  const initialLike = product ? product.like : false;

  const [like, setLike] = useState(initialLike);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleContactClick = () => {
    setIsPopupOpen(true); // Open popup when "Contact" is clicked
  };

  const toggleLike = () => {
    setLike(!like);
    if (product) {
      product.like = !like;
    }
  };

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

        <div className='footer'>
          <div className='heart' onClick={toggleLike}>
            {like ? <FcLike /> : <FiHeart />}
          </div>

          <div className='pricetext'>
            {price}
          </div>

          <div>
            <div className="detailsubmit" onClick={handleContactClick}>연락하기</div>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup">
          {/* Popup content */}
          <div className="popup-content">
            <h3>연락처</h3>
            <p>{contact}</p>
            <button className='popupclose' onClick={() => setIsPopupOpen(false)}>닫기</button> {/* Close popup button */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
