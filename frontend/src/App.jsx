/** @format */

import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import Navbar from './components/navbar/Navbar';
import LoginPopup from "./components/loginpopup/LoginPopup";
import Verify from "./pages/verify/Verify";
import MyOrders from "./pages/myorders/MyOrders";
import SearchResults from "./components/SearchResults";




const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/search" element={<SearchResults />} />
       
          
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
