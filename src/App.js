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

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Carrot products={products} setProducts={setProducts} />} />
      <Route path="/Sell" element={<Sell addProduct={addProduct} />} />
      <Route path="/Detail" element = {<Detail/>} />
      </Routes>
    </div>
  );
}