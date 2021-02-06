import React, { useReducer } from 'react'

const incrementAction = { type: 'INCREMENT' };
const decrementAction = { type: 'DECREMENT' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return { count: state.count }
  }
}

function App() {

  // 和useState类似，都会触发re-render
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const decrementCount = () => {
    dispatch(decrementAction)
  }

  const incrementCount = () => {
    dispatch(incrementAction)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
