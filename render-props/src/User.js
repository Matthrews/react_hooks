import React, { Component } from "react";

export class User extends Component {
  render() {
    return <div>{this.props.name(true)}</div>;
  }
}

export default User;
