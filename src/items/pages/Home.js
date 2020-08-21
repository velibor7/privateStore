import React, { useState, useEffect, useContext } from "react";
import Item from "../components/Item";

import "./Home.css";
import { CartContext } from "../../shared/context/cart-context";

const Home = () => {
  const [items, setItems] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/items/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const resJson = await res.json();
        console.log(resJson.items);
        setItems(resJson.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div>{cartItems}</div>
      <ul className="home__items-list">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
          ></Item>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Home;
