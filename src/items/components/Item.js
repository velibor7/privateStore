import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";

import "./Item.css";
import cart from "../../shared/icons/cart.svg";

const Item = (props) => {
  //cart context

  const addToCartHandler = (id) => {
    console.log(id);
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
            onClick={() => addToCartHandler(props.id)}
          />
        </div>
      </Card>
    </li>
  );
};

export default Item;
