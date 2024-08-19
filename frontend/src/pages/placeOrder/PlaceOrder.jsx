/** @format */

import React, { useContext, useEffect, useState } from "react";
import "./placeOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "./../../assets/frontend_assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import PlaceOrder from './PlaceOrder';
const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChanegeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  
  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
  
    let orderData = {
      userId: "your_user_id_here", // Make sure this is passed or extracted dynamically
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
  
    try {
      let response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });
  
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        console.log("Payment failed response:", response.data);
        alert("Failed to pay");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order.");
    }
  };
  const navigate=useNavigate()
  useEffect(()=>{
    if(!token){
      navigate("/cart")


    }else if(getTotalCartAmount()===0){
      navigate("/cart")
    }

  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChanegeHandler}
            value={data.firstName}
            type="text"
            placeholder="first name"
          />
          <input
            required
            name="lastName"
            onChange={onChanegeHandler}
            value={data.lastName}
            type="text"
            placeholder="last name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChanegeHandler}
          value={data.email}
          type="email"
          placeholder="email"
        />
        
        <input
          required
          name="street"
          onChange={onChanegeHandler}
          value={data.street}
          type="text"
          placeholder="street"
        />
       
        <div className="multi-fields">
          <input
            required
            name="city"
            onChange={onChanegeHandler}
            value={data.city}
            type="text"
            placeholder="city"
          />
          <input
            required
            name="state"
            onChange={onChanegeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            name="zipcode"
            onChange={onChanegeHandler}
            value={data.zipcode}
            type="text"
            placeholder="zip code"
          />
          <input
            required
            name="country"
            onChange={onChanegeHandler}
            value={data.country}
            type="text"
            placeholder="country"
          />
        </div>

        <input
          required
          name="phone"
          onChange={onChanegeHandler}
          value={data.phone}
          type="text"
          placeholder="phone number"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Deliver Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="submit">Proceed to pay</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
