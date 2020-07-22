import React, { Component } from "react";

import TypingDots from "../TypingDots/typingdots.jsx";
import Message from "../../container/message/message.jsx";

class Transition extends Component {
  constructor(props) {
    super(props);
    this.state = { start: props.start, date: new Date().getTime() };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date().getTime(),
    });
  }

  render() {
    let show;
    if (this.state.date < this.state.start + 1500) {
      show = true;
    } else {
      show = false;
    }
    return (
      <div className="transition">
        {show ? (
          <TypingDots />
        ) : (
          <Message id={this.props.id} message={this.props.message} />
        )}
      </div>
    );
  }
}

export default Transition;

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// export default Clock;
