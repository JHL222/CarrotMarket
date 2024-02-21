// Carrot.js

import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";

const Carrot = ({ products, toggleLike }) => {
  const navigate = useNavigate();

  const movedetail = (id, title, price, description, like, image, contact, password) => {
    navigate('/detail', {
      state: {
        id,
        title,
        price,
        description,
        like,
        image,
        contact,
        password
      }
    });

  };

  // 나누는 함수
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const reversedProducts = [...products].reverse();
  const chunkedProducts = chunkArray(reversedProducts, 3);

  const LikeButton = ({ product }) => {
    const heartStyle = {
      marginLeft: "12px",
      marginBottom: "15px",
      width: "30px",
      height: "30px",
      cursor: "pointer",
    };

    const handleClick = () => {
      toggleLike(product.id, !product.like); // Toggle like status when LikeButton is clicked
    };

    return (
      <div style={{ textAlign: "center" }}>
        <div style={heartStyle} onClick={handleClick}>
          {product.like ? <FcLike /> : <FiHeart />}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="header">
        <span>뷰리마켓</span>
      </div>
      <div>
        <Link to="/Sell">
          <button style={buttonStyle}>+</button>
        </Link>

        <div style={{ textAlign: "center" }}>
          {chunkedProducts.map((row, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "center" }}>
              {row.map((product) => (
                <div
                  className="test"
                  key={product.id}
                  style={{ margin: "15px", width: "250px", backgroundColor: "#FFD0B6", borderRadius: "20px" }}
                >
                  <img
                    onClick={() => movedetail(product.id, product.name, product.price, product.description, product.like, product.image, product.contact, product.password)}
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "210px",
                      height: "210px",
                      objectFit: "cover",
                      marginTop: "15px",
                      borderRadius: "20px",
                      border: "2px solid black",
                    }}
                  />
                  <p style={{ marginLeft: "12px", textAlign: "left", fontSize: "15px" }}>{product.name}</p>
                  <b>
                    <p style={{ marginLeft: "12px", textAlign: "left", fontSize: "15px" }}>{product.price}</p>
                  </b>
                  <LikeButton product={product} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "50px",
  right: "26%",
  transform: "translateX(50%)",
  borderRadius: "50%",
  width: "75px",
  height: "75px",
  backgroundColor: "#FF6F0F",
  color: "white",
  fontSize: "50px",
  border: "none",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  transition: "transform 0.3s",
};

export default Carrot;
