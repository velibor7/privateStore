import React from "react";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";

import "./Item.css";

const Item = (props) => {
  return (
    <li className="item__li">
      <Card className="item__card">
        <h2>{props.title}</h2>
        <p className="i__price">${props.price}</p>
        <Link to="/cart">Add to cart</Link>
      </Card>
    </li>
  );
};

export default Item;
