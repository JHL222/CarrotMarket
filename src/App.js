// App.js
import React, { useState } from "react";
import "./App.css";
import Carrot from "./Carrot";
import Sell from "./carrot/Sell";
import Detail from "./Detail";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const toggleLike = (productId, newLike) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, like: newLike } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Carrot products={products} toggleLike={toggleLike} />}
        />
        <Route path="/Sell" element={<Sell addProduct={addProduct} />} />
        <Route
          path="/Detail"
          element={<Detail products={products} toggleLike={toggleLike} />}
        />
      </Routes>
    </div>
  );
}
