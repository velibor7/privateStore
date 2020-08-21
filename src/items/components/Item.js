import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";

import { CartContext } from "../../shared/context/cart-context";

import "./Item.css";
import cartIcon from "../../shared/icons/cart.svg";

const Item = (props) => {
  return (
    <CartContext.Consumer>
      {(context) => (
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
                src={cartIcon}
                alt="Cart"
                className="item__cart-icon"
                onClick={context.addItemToCart.bind(this, {
                  title: props.title,
                  price: props.price,
                })}
              />
            </div>
          </Card>
        </li>
      )}
    </CartContext.Consumer>
  );
};

export default Item;
