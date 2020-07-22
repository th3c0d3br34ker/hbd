import React from "react";
import "./App.css";
import Wishings from "./container/wishings/wishings.jsx";

function App() {
  return (
    <div id="wishings">
      <Wishings start={new Date().getTime()} />
    </div>
  );
}

export default App;
