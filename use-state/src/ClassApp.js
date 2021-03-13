import React from "react";

let renderedCounter = 1;
class ClassApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 4, // useState(() => 4)
    };
  }

  /**
   * 应该是基于上一次的state而变化
   * 也就是function形式
   */
  decrementCount = () => {
    const { count: prevCount } = this.state;
    this.setState({ count: prevCount - 2 });
  };

  incrementCount = () => {
    const { count: prevCount } = this.state;
    this.setState({ count: prevCount + 2 });
  };

  render() {
    const { count } = this.state;
    renderedCounter++;

    return (
      <div className="class-version">
        <h2>Class组件实现</h2>
        <hr />
        <div className="content">
          <button onClick={this.decrementCount}>-</button>
          <span>{count}</span>
          <button onClick={this.incrementCount}>+</button>
        </div>
        <hr />
        <h2>Console输出</h2>
        <span>{`Rendered ${renderedCounter} times`}</span>
      </div>
    );
  }
}

export default ClassApp;
