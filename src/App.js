import "./App.css";
import Sell from "./carrot/Sell";
import Carrot from "./Carrot";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Carrot />}></Route>
        <Route path="/Sell" element={<Sell />}></Route>
      </Routes>
    </div>
  );
}
