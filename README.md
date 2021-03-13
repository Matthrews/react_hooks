---
name: 聊聊React Hooks
author: rfzhu
tag: 前端，状态管理，redux
---

### React Hooks

#### 什么是 React Hooks

- React16.8.0 加入，通过内置一些 Hook 让函数组件拥有自己的 state 和 life circle，同时可以在 Hook 中操作组件的函数。
- React Hooks 要解决的问题是状态共享，是继 Render Props 和 HOC 之后的第三种状态共享方案，不会产生 JSX 嵌套地狱问题。

#### 动机

- Class 组件间难以逻辑复用

  - 解决方案：Render Props, HOC
  - 问题：大项目面打开 React DevTools 就会发现*Wrapper Hell*
  - 终级解决：Hooks 可以让你在不改变组件间层次关系的情况下复用逻辑，而且也便于测试

- Class 组件的复杂到不可维护

  - 组件状态控制逻辑越来越复杂
  - 一个组件生命周期函数里充斥着各种不同逻辑
  - 解决：Hook 可以让你在把不同类型的代码逻辑分割到更小的函数单元里面

- Class 组件遇到的一些问题
  - 对于人来讲，你需要关注 this 指向问题，你需要理解 class，你需要在 Class 组件和 Function 组之间做选择
  - 对于机器来讲，Class 组件编译体积过大，热重载不稳定

#### 使用规则

- 只能在函数顶层调用。不应该被嵌套进条件或者循环语句中
- 只能在 Function 组件和自定义 Custom Hook 里面调用

#### Hooks API

##### Basic Hooks

- useState
- useEffect
- useContext

##### Additional Hooks

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

##### React-Redux Hooks

- useSelector
- useDispatch
- useReducer
- useStore
