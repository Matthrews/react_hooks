import React from "react";
import ClickCounterOne from "./ClickCounterOne";
import Counter from "./Counter";
import HoverCounterOne from "./HoverCounterOne";
import User from "./User";

function App() {
  return (
    <div className="App">
      {/* <ClickCounterOne /> */}
      {/* <HoverCounterOne /> */}
      {/* 组件间代码复用：组件使用prop属性控制什么应该被真正渲染【prop是一个逻辑函数】*/}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Frank" : "Guest")} /> */}

      <Counter>
        {(count, incrementCount) => (
          <ClickCounterOne count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounterOne count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
