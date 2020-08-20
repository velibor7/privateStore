import React, { useState, useEffect } from "react";
import Item from "../components/Item";

import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);

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
    <ul className="home__items-list">
      {items.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
        ></Item>
      ))}
    </ul>
  );
};

export default Home;
