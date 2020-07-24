import React from "react";
import "./App.css";
import Wishings from "./container/wishings/wishings.jsx";
import Footer from "./container/footer/footer.jsx";

function App() {
  return (
    <React.Fragment>
      <div id="wishings">
        <Wishings start={new Date().getTime()} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
