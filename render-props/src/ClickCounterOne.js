import React, { Component } from "react";

export class ClickCounterOne extends Component {
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
      <button onClick={this.incrementCount}>
        Clicked {this.state.count} times
      </button>
    );
  }
}

export default ClickCounterOne;
