import React, { useState } from "react";
import "./App.css";
import Carrot from "./Carrot";
import Sell from "./carrot/Sell";
import Detail from "./Detail";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const toggleLike = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, like: !product.like } : product
      )
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Carrot products={products} toggleLike={toggleLike} />}
        />
        <Route path="/Sell" element={<Sell addProduct={addProduct} />} />
        <Route path="/Detail" element={<Detail products={products} />} />
      </Routes>
    </div>
  );
}
