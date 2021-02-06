import React, { useEffect, useState, useRef } from 'react'

function App() {
  const [name, setName] = useState('')
  const inputRef = useRef()

  // 1. access dom elements
  // 使用ref操作dom元素
  // 不建议在ref里面appendChild或者remove之类的
  // ref和state很类似
  // ref stores values and persists betwwen different renders
  // but it does not cause you to re-render like state does
  // 与state相比，ref变化不会触发组件re-render

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
