// App.js

import React, { useState } from "react";
import "./App.css";
import Carrot from "./components/Carrot";
import Sell from "./components/Sell";
import Detail from "./components/Detail";
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

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
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
          element={<Detail products={products} toggleLike={toggleLike} onDelete={deleteProduct} />}
        />
      </Routes>
    </div>
  );
}

