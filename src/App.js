import "./App.css";
import Buy from "./carrot/Buy";
import Sell from "./carrot/Sell";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sell />}></Route>
        <Route path="/Sell" element={<Sell />}></Route>
      </Routes>
    </div>
  );
}
