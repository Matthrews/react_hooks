import React, { useEffect, useState, useRef } from 'react'

function App() {
  const [name, setName] = useState('')
  const nameRef = useRef('')

  // 1. persist values across verders without causing a rerender
  // 使用ref存储前一次的值

  useEffect(() => {
    nameRef.current = name;
  }, [name])

  return (
    <>
      <h1>使用ref存储前一次的值</h1>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My name is <b>{name}</b> and it used to be <b>{nameRef.current}</b></div>
    </>
  );
}

export default App;
