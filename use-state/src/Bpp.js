import React, { useState } from "react";

let renderedCounter = 1;
function App() {
  // handle with object
  const [state, setState] = useState({ count: 4, theme: "Blue" });
  const { count, theme } = state;

  const decrementCount = () => {
    setState((prevState) => {
      // setState的时候不是merge，而是override就对象，return 新对象
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

  console.log(`Rendered ${renderedCounter} times`);
  return (
    <div className="hook-version">
      <button onClick={decrementCount}>-</button>
      <span>{count} </span>
      <span> {theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;

// 推荐把对象拆成单个state便于管理
// const [count, setCount] = useState(4);
// const [theme, setTheme] = useState('Blue');
