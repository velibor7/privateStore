import React from "react";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";

import "./Item.css";

const Item = (props) => {
  return (
    <Card>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      <Link>Add to cart</Link>
    </Card>
  );
};

export default Item;
