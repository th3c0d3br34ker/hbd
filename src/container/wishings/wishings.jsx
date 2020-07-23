import React, { Component } from "react";

import Transition from "../../elements/Transition/transition.jsx";
import { Messages } from "../../messages.js";

class Wishings extends Component {
  render() {
    return (
      <div className="wishings-div">
        {Messages.map((message) => {
          return (
            <Transition
              key={message.id}
              id={message.id}
              start={message.start}
              message={message.message}
              delay={message.delay}
            />
          );
        })}
      </div>
    );
  }
}

export default Wishings;
