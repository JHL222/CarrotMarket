// Detail.js
import React, { useState } from 'react';
import "./carrot/Sell.css";
import { Link, useLocation } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";

const Detail = ({ toggleLike }) => {
  const location = useLocation();
  const { id, title, price, description, like, image, contact } = location.state;

  const initialLike = like || false;

  const [isLike, setIsLike] = useState(initialLike);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleContactClick = () => {
    setIsPopupOpen(true); // Open popup when "Contact" is clicked
  };

  const handleLikeClick = () => {
    const newLike = !isLike;
    setIsLike(newLike);
    toggleLike(id, newLike); // Toggle like status and update it through the toggleLike function from App component
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
          <div className='heart' onClick={handleLikeClick}>
            {isLike ? <FcLike /> : <FiHeart />}
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
