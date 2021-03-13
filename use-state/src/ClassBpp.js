import React from "react";

let renderedCounter = 1;
class ClassBpp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        count: 4,
        theme: "Blue",
      },
    };
  }

  decrementCount = () => {
    const {
      obj: { count, theme },
    } = this.state;
    this.setState({ obj: { count: count - 1, theme } });
  };

  incrementCount = () => {
    const {
      obj: { count, theme },
    } = this.state;
    this.setState({ obj: { count: count + 1, theme } });
  };

  render() {
    renderedCounter++;
    const {
      obj: { count, theme },
    } = this.state;
    return (
      <div className="class-version">
        <h2>Class组件实现</h2>
        <hr />
        <div className="content">
          <button onClick={this.decrementCount}>-</button>
          <span>{count} </span>
          <span> {theme}</span>
          <button onClick={this.incrementCount}>+</button>
        </div>
        <hr />
        <h2>Console输出</h2>
        <span>{`Rendered ${renderedCounter} times`}</span>
      </div>
    );
  }
}

export default ClassBpp;

// 推荐把对象拆成单个state便于管理
// const [count, setCount] = useState(4);
// const [theme, setTheme] = useState('Blue');
