import React, { useState } from 'react';
import "./carrot/Sell.css";
import { Link } from "react-router-dom";

const Carrot = () => {
  // 가상의 상품 데이터
  const [products, setProducts] = useState( [
    { id: 1, name: '당근', price: '1000원', image: './image/1.png',like:false },
    { id: 2, name: '고구마', price: '2000원', image: './image/1.png',like:false },
    { id: 3, name: '토마토', price: '1500원', image: './image/1.png',like:false },
    { id: 4, name: '오이', price: '1200원', image: './image/1.png',like:false },
    { id: 5, name: '상추', price: '800원', image: './image/1.png',like:false },
    { id: 6, name: '양파', price: '1600원', image: './image/1.png',like:false },
    { id: 7, name: '감자', price: '1300원', image: './image/1.png',like:false },
    { id: 8, name: '고구마', price: '1700원', image: './image/1.png',like:false },
    { id: 9, name: '호박', price: '1100원', image: './image/1.png',like:false },
    { id: 10, name: '당근', price: '1000원', image: './image/1.png',like:false },
    { id: 11, name: '파프리카', price: '2000원', image: './image/1.png',like:false },
    { id: 12, name: '토마토', price: '1500원', image: './image/1.png',like:false },
    { id: 13, name: '오이', price: '1200원', image: './image/1.png',like:false },
    { id: 14, name: '상추', price: '800원', image: './image/1.png',like:false },
    { id: 15, name: '양파', price: '1600원', image: './image/1.png',like:false },
    { id: 16, name: '감자', price: '1300원', image: './image/1.png',like:false },
    { id: 17, name: '고구마', price: '1700원', image: './image/1.png',like:false },
    { id: 18, name: '호박', price: '1100원', image: './image/1.png',like:false },
    // 다른 상품 데이터도 추가할 수 있습니다.
  ]);

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
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, like: !product.like } : product
      )
    );
  };

  // 상품의 좋아요 버튼 컴포넌트
  const LikeButton = ({ product }) => {
    const heartStyle = {
        marginLeft: '12px',
        marginBottom: '15px',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      
    };
  
    const handleClick = () => {
      toggleLike(product.id);
    };
  
    return (
      <div style={{ textAlign: 'center'}}>
        <div style={heartStyle} onClick={handleClick}>
          {product.like ? '❤️' : '🖤'}
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
        
      <div style={{ textAlign: 'center' }}>
        {chunkedProducts.map((row, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            {row.map(product => (
              <div key={product.id} style={{ margin: '15px', width: '250px',  backgroundColor: '#FFD0B6', borderRadius: '20px' }}>
                <img src={product.image} alt={product.name} style={{ width: '230px',height:'230px', objectFit: 'cover', marginTop: '15px', borderRadius: '20px' }} />
                <p style={{ marginLeft: '12px', textAlign: 'left', fontSize: '15px' }}>{product.name}</p>
                <b><p style={{ marginLeft: '12px', textAlign: 'left', fontSize: '15px' }}>{product.price}</p></b>
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
  position: 'fixed',
  bottom: '50px',
  right: '26%',
  transform: 'translateX(50%)',
  borderRadius: '50%',
  width: '75px',
  height: '75px',
  backgroundColor: '#FF6F0F',
  color: 'white',
  fontSize: '50px',
  border: 'none',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
};

export default Carrot;
