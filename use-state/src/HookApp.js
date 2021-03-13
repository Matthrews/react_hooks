import React, { useState, useEffect } from "react";
// Rules of Hooks
// 1. Only Call Hooks at the Top Level
// Don’t call Hooks inside loops, conditions, or nested functions.
// 2. Only Call Hooks from React Functions
// Don’t call Hooks from regular JavaScript functions. Instead, you can:
// ✅ Call Hooks from React function components.
// ✅ Call Hooks from custom Hooks .

let renderedCounter = 1;
function HookApp() {
  // const [count, setCount] = useState(4);

  // useState里面的4相当于constructor  只运行一次
  // function version, runs once
  const [count, setCount] = useState(() => {
    console.log("initial state");
    return 4;
  });

  // const decrementCount = () => {
  //   console.log("decrementCount", count);
  //   setCount(count - 1); // setCount应该是基于上一次的count变化的
  //   setCount(count - 1);
  //   renderedCounter++;
  // };

  /**
   * 应该是基于上一次的state而变化
   * 也就是function形式
   */
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    renderedCounter++;
  }, [count]);

  // console.log(`Rendered ${renderedCounter} times`);
  return (
    <div className="hook-version">
      <h2>Hook函数实现</h2>
      <hr />
      <div className="content">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <hr />
      <h2>Console输出</h2>
      <span>{`Rendered ${renderedCounter} times`}</span>
    </div>
  );
}

export default HookApp;
