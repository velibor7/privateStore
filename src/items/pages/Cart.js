import React, { useContext } from "react";

import { CartContext } from "../../shared/context/cart-context";

const Cart = () => {
  const cartItems = useContext(CartContext);

  console.log(cartItems);

  return <div>Cart</div>;
};

export default Cart;
