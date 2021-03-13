import React, { Component } from "react";

export class ClickCounterOne extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

export default ClickCounterOne;
