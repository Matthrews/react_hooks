import React, { useState } from "react";

let renderedCounter = 1;
function HookBpp() {
  // handle with object
  const [state, setState] = useState({ count: 4, theme: "Blue" });
  const { count, theme } = state;

  const decrementCount = () => {
    setState((prevState) => {
      // hook setState的时候不是merge，而是override旧对象，return 新对象
      // class component是merge
      // return { count: prevState.count - 1 }

      // correct way
      return { ...prevState, count: prevState.count - 1 };
    });
    renderedCounter++;
  };

  const incrementCount = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
    renderedCounter++;
  };

  // console.log(`Rendered ${renderedCounter} times`);
  return (
    <div className="hook-version">
      <h2>Hook函数实现</h2>
      <hr />
      <div className="content">
        <button onClick={decrementCount}>-</button>
        <span>{count} </span>
        <span> {theme}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <hr />
      <h2>Console输出</h2>
      <span>{`Rendered ${renderedCounter} times`}</span>
    </div>
  );
}

export default HookBpp;

// 推荐把对象拆成单个state便于管理
// const [count, setCount] = useState(4);
// const [theme, setTheme] = useState('Blue');
