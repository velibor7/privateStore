import React from "react";

import Home from "./items/pages/Home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Home />
    </div>
  );
}

export default App;
