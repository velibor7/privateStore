import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./items/pages/Home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewItem from "./admin/pages/NewItem";
import Cart from "./items/pages/Cart";

import { CartContext } from "./shared/context/cart-context";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart, cartTotal, setCartTotal }}>
      <Router>
        <MainNavigation className="app__main-navigation"></MainNavigation>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/new" exact>
            <NewItem></NewItem>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
