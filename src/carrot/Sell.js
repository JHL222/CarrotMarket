import React, { useState } from "react";
import "./Sell.css";
import { Link } from "react-router-dom";

export default function Sell({ addProduct }) {
  const [id, setId] = useState(1); // 상품 ID 상태 추가
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    // 입력된 정보를 가공하여 상품 객체를 생성
    const newProduct = {
      id: id, 
      name: title,
      price: `${price}원`,
      description: description,
      image: imagePreview, // 미리보기 이미지 경로 사용
      like: false,
    };

    // 부모 컴포넌트로부터 전달받은 함수를 호출하여 상품 추가
    addProduct(newProduct);
    setId(id + 1);
  };

  return (
    <div>
      <div className="header">
        <span>내 물건 팔기</span>
        <Link to="/">
          <div className="close">X</div>
        </Link>
      </div>

      <div className="main">
        <div className="photo">
          <span>사진</span>
          <br />
          {/* 이미지 미리보기 */}
          {imagePreview && <img src={imagePreview} alt="Product Preview" className="preview-image" />}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="Title">
          <span>제목</span>
          <br />
          <input type="text" className="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="Price">
          <span>가격</span>
          <br />
          <input type="number" className="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="Describe">
          <span>상품 설명</span>
          <br />
          <textarea
            className="describe"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="200"
            required
          />
        </div>
      </div>
      <Link to="/"> 
        <div className="submit" onClick={handleSubmit}>작성완료</div>
      </Link>
    </div>
  );
}