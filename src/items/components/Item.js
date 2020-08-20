import React from "react";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";

import "./Item.css";
import cart from "../../shared/icons/cart.svg";

const Item = (props) => {
  return (
    <li className="item__li">
      <Card className="item__card">
        <h2>{props.title}</h2>
        <div className="item__bottom">
          <p className="item__price">${props.price}</p>
          <Link to="?catergory=skydiving" className="item__category">
            Skydiving
          </Link>
          <Link to="/cart">
            <img src={cart} alt="Cart" className="item__cart-icon" />
          </Link>
        </div>
      </Card>
    </li>
  );
};

export default Item;
