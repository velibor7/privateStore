import React from "react";
import Links from "./Links";
import Header from "./Header";

const MainNavigation = () => {
  return (
    <div>
      <Header>
        Shop
        <Links></Links>
        Cart
      </Header>
    </div>
  );
};

export default MainNavigation;
