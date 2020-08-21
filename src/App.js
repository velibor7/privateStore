import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./items/pages/Home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewItem from "./admin/pages/NewItem";
import Cart from "./items/pages/Cart";

import { CartContext } from "./shared/context/cart-context";

import "./App.css";
import GlobalState from "./shared/context/GlobalState";

function App() {
  return (
    <GlobalState>
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
    </GlobalState>
  );
}

export default App;
