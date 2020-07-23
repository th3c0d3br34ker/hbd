import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className={" message-div message-div-" + this.props.id}
      >
        <div className="message"> {this.props.message}</div>
      </div>
    );
  }
}

export default Message;
