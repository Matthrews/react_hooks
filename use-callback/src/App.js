import React, { useState, useCallback } from 'react'

import List from './List'

export default function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(1)

  // // 每次都会新建一个函数
  // const getItems = () => {
  //   return [number, number + 1, number + 2]
  // }

  // useCallback
  // 和useMemo类似
  // 但是useMemo返回函数值，而useCallback返回函数
  // 相同点：都解决了referential equality问题
  const getItems = useCallback((incrementor) => {
    return [number + incrementor, number + incrementor + 1, number + incrementor + 2]
  }, [number])

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  };

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  );
}
