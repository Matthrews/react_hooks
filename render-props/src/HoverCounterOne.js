import React, { Component } from "react";

export class HoverCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState(({ count: prevCount }) => {
      console.log("incrementCount", prevCount);
      return {
        count: prevCount + 1,
      };
    });
  };

  render() {
    return (
      <button onMouseOver={this.incrementCount}>
        Hovered {this.state.count} times
      </button>
    );
  }
}

export default HoverCounterOne;
