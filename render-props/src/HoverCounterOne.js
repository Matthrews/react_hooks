import React, { Component } from "react";

export class HoverCounterOne extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onMouseOver={incrementCount}>Hovered {count} times</button>;
  }
}

export default HoverCounterOne;
