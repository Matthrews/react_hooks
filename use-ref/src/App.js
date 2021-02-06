import React, { useEffect, useState, useRef } from 'react'

function App() {
  const [name, setName] = useState('')
  const [renderCount, setRenderCount] = useState(0)

  // Without a list of dependencies, this can lead to an infinite chain of updates. 
  // To fix this, pass [] as a second argument to the useEffect Hook
  // useEffect(() => {
  //   setRenderCount(prevRenderCount => prevRenderCount + 1)
  // })

  // 如此也是不行的，因为renderCount一直在变化
  // useEffect(() => {
  //   setRenderCount(prevRenderCount => prevRenderCount + 1)
  // }, [renderCount])  

  // 使用refs解决问题
  // ref和state很类似
  // ref存储render后的component属性
  // 与state相比，ref变化不会触发render


  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My name is {name}</div>
      <div>I rendered {renderCount} times</div>
    </>
  );
}

export default App;
