import React, { useState } from "react";
import "./carrot/Sell.css";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";

const Carrot = ({ products, setProducts }) => {
  // 각 제품을 3개씩 나열하기 위해 배열을 3개씩 자르는 함수
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // 최신순으로 정렬 후 제품을 3개씩 나누어서 처리
  const reversedProducts = [...products].reverse();
  const chunkedProducts = chunkArray(reversedProducts, 3);

  // 좋아요 상태를 업데이트하기 위한 함수
  const toggleLike = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === productId ? { ...product, like: !product.like } : product))
    );
  };

  // 상품의 좋아요 버튼 컴포넌트
  const LikeButton = ({ product }) => {
    const heartStyle = {
      marginLeft: "12px",
      marginBottom: "15px",
      width: "30px",
      height: "30px",
      cursor: "pointer",
    };

    const handleClick = () => {
      toggleLike(product.id);
    };

    return (
      <div style={{ textAlign: "center" }}>
        <div style={heartStyle} onClick={handleClick}>
          {product.like ? <FcLike /> : <FiHeart />}
        </div>
      </div>
    );
  };
  // const handleDivClick = () => {
  //   // 페이지 이동을 원하는 경로로 수정해주세요
  //   // 예를 들어, "./detail"로 페이지 이동하고 싶다면 아래와 같이 작성합니다.
  //   window.location.href = "./Detail";
  // };
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
                  <Link to = '/Detail'>
                    <img
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
                  </Link>
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
