// Code SimpleComponentHere Here
import React from "react";

export default class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: "happy"
    };
  }
  handleClick = e => {
    this.setState({ mood: this.state.mood === "happy" ? "sad" : "happy" });

    // switch (e.target.innerText) {
    //   case "happy":
    //     this.setState({ mood: "sad" });
    //     break;
    //   case "sad":
    //     this.setState({ mood: "happy" });
    //     break;
    //   default:
    //     break;
    // }
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
