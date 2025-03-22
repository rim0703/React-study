import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderNavi from "./components/HeaderNavi";
import MenuList from "./components/MenuList";
import MenuPage from "./components/MenuPage";
import Cart from "./components/Cart";

function App() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", []);
  }
  return (
    <Router>
      <div className="App">
        <HeaderNavi />
        <Routes>
          <Route path="/" element={<MenuList />} />
          <Route path="/:category/:id" element={<MenuPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
