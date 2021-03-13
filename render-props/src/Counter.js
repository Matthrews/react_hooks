import React, { Component } from "react";

export class Counter extends Component {
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
      <div>
        {/* takes state and method to render whatever you want*/}
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    );
  }
}

export default Counter;
