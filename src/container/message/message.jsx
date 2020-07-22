import React, { Component } from "react";

import emoji from "react-easy-emoji";

class Message extends Component {
  render() {
    return (
      <div id={this.props.id} className={"message-div-" + this.props.id}>
        <div className="message"> {this.props.message}</div>
      </div>
    );
  }
}

export default Message;
