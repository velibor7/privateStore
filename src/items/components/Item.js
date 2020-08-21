import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";

import { CartContext } from "../../shared/context/cart-context";

import "./Item.css";
import cart from "../../shared/icons/cart.svg";

const Item = (props) => {
  //cart contexe
  const { cartItems, setCartItems, cartTotal, setCartTotal } = useContext(
    CartContext
  );

  const addToCartHandler = () => {
    console.log(props.id);
    // let itemFromCart = cartItems.find((item) => item.id === props.id);
    // console.log(itemFromCart);
    /*
    if (cartItems.includes()) {

      console.log("++++");
      // qty++;
    } else {
      let newItem = {
        id: props.id,
        title: props.title,
        img: props.img,
        price: props.price,
        qty: 1,
      };
    }
    // console.log(cartItems);
    setCartItems([...cartItems]);
    setCartTotal(cartTotal + props.price);
    */
  };

  return (
    <li className="item__li">
      <Card className="item__card">
        <h2>{props.title}</h2>
        <div className="item__bottom">
          <p className="item__price">${props.price}</p>
          <Link
            to="?catergory=skydiving"
            className={`item__category item__category-${props.category}`}
          >
            {props.category}
          </Link>
          <img
            src={cart}
            alt="Cart"
            className="item__cart-icon"
            onClick={addToCartHandler}
          />
        </div>
      </Card>
    </li>
  );
};

export default Item;
