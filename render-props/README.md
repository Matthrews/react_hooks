## 组件奖逻辑复用

### Render Props

- The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
- A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
- 代码实例
  ```jsx
  <Counter>
    {(count, incrementCount) => (
      <ClickCounterOne count={count} incrementCount={incrementCount} />
    )}
  </Counter>
  // or this below
  <Counter render={(count, incrementCount) => (
    <ClickCounterOne count={count} incrementCount={incrementCount} />
  )}
  />
  ```
- 通过给组件传一个 funtion 的 prop 实现组件间代码共享

### HOC

- A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
- Concretely, a higher-order component is a function that takes a component and returns a new component.
- 代码实例
  ```jsx
  const EnhancedComponent = higherOrderComponent(WrappedComponent);
  ```
