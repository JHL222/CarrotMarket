import React, { useState } from 'react';
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";

const Detail = ({ toggleLike, onDelete }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, title, price, description, like, image, contact, password } = location.state;

  const initialLike = like || false;

  const [isLike, setIsLike] = useState(initialLike);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [passwordInput, setPasswordInput] = useState(""); // 사용자가 입력한 비밀번호 상태 추가

  const handleContactClick = () => {
    setIsPopupOpen(true);
  };

  const handleDeleteClick = () => {
    setIsPopup1Open(true);
  };

  const handleLikeClick = () => {
    const newLike = !isLike;
    setIsLike(newLike);
    toggleLike(id, newLike);
  };

  const handleDelete = () => {
    if(password === passwordInput){ // 실제 비밀번호와 사용자가 입력한 비밀번호를 비교
      onDelete(id);
      navigate("/");
    } else {
      alert('비밀번호가 다릅니다.');
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
          <div className="detaildelete" onClick={handleDeleteClick}>삭제</div> {/* Add delete button */}
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
            <button className='popupclose' onClick={() => setIsPopupOpen(false)}>닫기</button>
          </div>
        </div>
      )}
      {isPopup1Open && (
        <div className="popup1">
          {/* Popup content */}
          <div className="popup-content">
            <h3>비밀번호</h3>
            <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
          </div>
          <button className='popup1close' onClick={handleDelete}>확인</button>
        </div>
      )}
    </div>
  );
};

export default Detail;
