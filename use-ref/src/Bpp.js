import React, { useEffect, useState, useRef } from 'react'

function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)  // { current: 1 }

  // 使用refs解决问题
  // ref和state很类似
  // ref stores a value in it and it persists betwwen different renders
  // but it does not cause you to re-render like state does
  // 与state相比，ref变化不会触发组件re-render

  useEffect(() => {
    console.log('useEffect', renderCount);
    renderCount.current = renderCount.current + 1
  })


  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </>
  );
}

export default App;
